import os
import re

def markdown_to_html(paragraphs):
    if not paragraphs:
        return ""
    
    html_output = []
    in_list = None 
    in_table = False
    table_rows = []

    def close_list():
        nonlocal in_list
        if in_list:
            html_output.append(f"</{in_list}>")
            in_list = None

    def close_table():
        nonlocal in_table, table_rows
        if in_table:
            if table_rows:
                html_output.append('<div class="my-8 overflow-x-auto rounded border-none bg-surface-container-low shadow-sm transition-colors">')
                html_output.append('<table class="w-full text-left border-collapse">')
                
                headers = []
                content_rows = []
                for i, row in enumerate(table_rows):
                    cells = [c.strip() for c in row.split('|') if c.strip()]
                    if i == 0:
                        headers = cells
                    elif '---' in row:
                        continue
                    else:
                        content_rows.append(cells)
                
                if headers:
                    html_output.append('<thead><tr class="bg-surface-container/50 border-none">')
                    for h in headers:
                        html_output.append(f'<th class="px-6 py-4 font-black text-on-surface text-sm uppercase tracking-widest">{h}</th>')
                    html_output.append('</tr></thead>')
                
                html_output.append('<tbody class="divide-y divide-black/5 dark:divide-white/5">')
                for row in content_rows:
                    html_output.append('<tr class="hover:bg-surface-container/30 transition-colors">')
                    for cell in row:
                        html_output.append(f'<td class="px-6 py-4 text-on-surface-variant text-sm whitespace-nowrap">{cell}</td>')
                    html_output.append('</tr>')
                html_output.append('</tbody></table></div>')
            table_rows = []
            in_table = False

    for p in paragraphs:
        p = p.strip()
        if not p:
            continue

        if '|' in p and ('---' in p or in_table):
            close_list()
            in_table = True
            table_rows.append(p)
            continue
        else:
            close_table()

        bullet_match = re.match(r'^[-*]\s+(.*)', p)
        if bullet_match:
            if in_list != 'ul':
                close_list()
                html_output.append('<ul class="list-disc pl-6 space-y-2">')
                in_list = 'ul'
            content = bullet_match.group(1)
            bold_prefix = re.match(r'^\*\*(.*?)\*\*[:]?\s*(.*)', content)
            if bold_prefix:
                html_output.append(f'<li><b>{bold_prefix.group(1)}:</b> {bold_prefix.group(2)}</li>')
            else:
                html_output.append(f'<li>{content}</li>')
            continue

        ol_match = re.match(r'^\d+\.\s+(.*)', p)
        if ol_match:
            if in_list != 'ol':
                close_list()
                html_output.append('<ol class="list-decimal pl-6 space-y-2">')
                in_list = 'ol'
            html_output.append(f'<li>{ol_match.group(1)}</li>')
            continue
        
        if re.match(r'^\d+\.\s', p) and len(p) < 80 and not p.endswith('.'):
            close_list()
            html_output.append(f'<h4 class="font-headline font-bold text-on-surface mt-10 mb-5 text-2xl border-b border-black/5 dark:border-white/5 pb-2">{p}</h4>')
            continue

        if p.startswith("v =") or p.startswith("û =") or p.startswith("Y ="):
            close_list()
            html_output.append(f'<div class="font-mono text-accent-teal bg-surface-container-low px-6 py-4 rounded text-lg inline-block my-4 transition-colors">{p}</div>')
            continue

        close_list()
        p = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', p)
        html_output.append(f'<p>{p}</p>')

    close_list()
    close_table()
    
    return "\n".join(html_output)

def extract_strings_from_array(array_str):
    # Use re to find all strings inside [ ]
    results = []
    # This handles both "..." and '...' including escapes
    for m in re.finditer(r'["\']((?:[^"\\]|\\.)*?)["\']', array_str, re.DOTALL):
        results.append(m.group(1).replace('\\"', '"').replace("\\'", "'"))
    return results

def process_file(filepath):
    print(f"Checking: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step A: Clean up any broken 'content: `...`` injection, including duplicates
    # This is a bit brute force but should work.
    # Pattern 1: Multi-line content field that might be mangled
    content = re.sub(r'content: `<ul.*?</ul>`\s*,?', '', content, flags=re.DOTALL)
    # Pattern 2: the broken details field
    content = re.sub(r'// details: details: \[.*?\]\s*,?', '', content, flags=re.DOTALL)
    content = re.sub(r'details: \[\],', '', content)
    
    # Step B: Identify each paragraphs or details field and replace
    new_content = ""
    last_idx = 0
    
    pattern = re.compile(r'(paragraphs|details):\s*\[', re.DOTALL)
    for match in pattern.finditer(content):
        # Add the text before this match to new_content
        new_content += content[last_idx:match.start()]
        
        # Extract the array properly
        array_text, end_idx = None, -1
        depth = 0
        in_arr = False
        for i in range(match.end() - 1, len(content)):
            if content[i] == '[':
                depth += 1
                in_arr = True
            elif content[i] == ']':
                depth -= 1
                if depth == 0 and in_arr:
                    array_text = content[match.start():i+1]
                    end_idx = i + 1
                    break
        
        if array_text:
            strings = extract_strings_from_array(array_text)
            if "details" in match.group(1):
                # details array elements usually don't have bullets in original data, add them for conversion
                strings = [f"- {s}" for s in strings]
            
            html = markdown_to_html(strings)
            # Replace the array with the new HTML content field
            field_name = "content"
            if "details" in match.group(1):
                new_content += f"details: [],\n  {field_name}: `{html}`"
            else:
                new_content += f'{field_name}: `{html}`'
            last_idx = end_idx
        else:
            # Fallback if array extraction failed
            new_content += match.group(0)
            last_idx = match.end()

    new_content += content[last_idx:]

    # Final cleanup of double content: `...`
    # (Happens if we had content already and we added another)
    new_content = re.sub(r'content: `<ul.*?</ul>`[\s\n,]*content:', 'content:', new_content, flags=re.DOTALL)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Repaired & Migrated: {filepath}")

def main():
    # Only target files known to be affected or target all .ts in categories
    base_dir = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    files_to_fix = [
        "linear-algebra/linear-equations.ts",
        "linear-algebra/linear-combinations.ts",
        "linear-algebra/eigen.ts",
        "linear-algebra/svd.ts",
        "linear-algebra/norms.ts",
        "linear-algebra/measures-of-distance.ts",
        "linear-algebra/matrices.ts",
        "statistics/student-t.ts",
        "statistics/sampling.ts",
        "statistics/rules.ts",
        "statistics/joint-marginal-conditional.ts",
        "statistics/events.ts",
        "statistics/distributions.ts",
        "statistics/bayes.ts",
        "calculus.ts"
    ]
    for rel_path in files_to_fix:
        process_file(os.path.join(base_dir, rel_path))

if __name__ == "__main__":
    main()
