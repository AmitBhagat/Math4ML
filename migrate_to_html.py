import os
import re

def markdown_to_html(paragraphs):
    if not paragraphs:
        return ""
    
    html_output = []
    in_list = None # 'ul', 'ol', or None
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
                
                # Simple table parser for the Math4ML style
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

        # Table detection
        if '|' in p and ('---' in p or in_table):
            close_list()
            in_table = True
            table_rows.append(p)
            continue
        else:
            close_table()

        # Bullet list detection
        bullet_match = re.match(r'^[-*]\s+(.*)', p)
        if bullet_match:
            if in_list != 'ul':
                close_list()
                html_output.append('<ul class="list-disc pl-6 space-y-2">')
                in_list = 'ul'
            content = bullet_match.group(1)
            # Handle bold-prefix points: "**Label:** Content"
            bold_prefix = re.match(r'^\*\*(.*?)\*\*[:]?\s*(.*)', content)
            if bold_prefix:
                html_output.append(f'<li><b>{bold_prefix.group(1)}:</b> {bold_prefix.group(2)}</li>')
            else:
                html_output.append(f'<li>{content}</li>')
            continue

        # Numbered list detection
        ol_match = re.match(r'^\d+\.\s+(.*)', p)
        if ol_match:
            if in_list != 'ol':
                close_list()
                html_output.append('<ol class="list-decimal pl-6 space-y-2">')
                in_list = 'ol'
            html_output.append(f'<li>{ol_match.group(1)}</li>')
            continue
        
        # Heading detection (simulated from current ProblemPage logic)
        if re.match(r'^\d+\.\s', p) and len(p) < 80 and not p.endswith('.'):
            close_list()
            html_output.append(f'<h4 class="font-headline font-bold text-on-surface mt-10 mb-5 text-2xl border-b border-black/5 dark:border-white/5 pb-2">{p}</h4>')
            continue

        # Formula detection
        if p.startswith("v =") or p.startswith("û =") or p.startswith("Y ="):
            close_list()
            html_output.append(f'<div class="font-mono text-accent-teal bg-surface-container-low px-6 py-4 rounded text-lg inline-block my-4 transition-colors">{p}</div>')
            continue

        # Regular paragraph
        close_list()
        # Convert **bold** to <b> inside paragraphs
        p = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', p)
        html_output.append(f'<p>{p}</p>')

    close_list()
    close_table()
    
    return "\n".join(html_output)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Handle contentSections
    def repl_section(match):
        block_content = match.group(0)
        # Extract paragraphs array
        p_match = re.search(r'paragraphs:\s*\[(.*?)\n\s*\]', block_content, re.DOTALL)
        if not p_match:
            # Try without trailing newline
            p_match = re.search(r'paragraphs:\s*\[(.*?)\]', block_content, re.DOTALL)
            
        if p_match:
            p_str = p_match.group(1)
            str_matches = []
            # Robust string matching for TypeScript files
            for m in re.finditer(r'["\']((?:[^"\\]|\\.)*?)["\']\s*(?:,|(?=\]))', p_str, re.DOTALL):
                str_val = m.group(1).replace('\\"', '"').replace("\\'", "'")
                str_matches.append(str_val)
            
            if str_matches:
                html = markdown_to_html(str_matches)
                # Replace the whole paragraphs: [...] block with content: `...`
                new_block = block_content.replace(p_match.group(0), f'content: `{html}`')
                return new_block
        return block_content

    # Match blocks that have paragraphs
    pattern = re.compile(r'\{\s*(?:heading:[^,]*?,\s*)?paragraphs:.*?\}', re.DOTALL)
    new_content = pattern.sub(repl_section, content)

    # 2. Handle TopicSection.details -> content
    details_pattern = re.compile(r'details:\s*\[(.*?)\n\s*\]', re.DOTALL)
    details_match = details_pattern.search(new_content)
    if not details_match:
        details_match = re.search(r'details:\s*\[(.*?)\]', new_content, re.DOTALL)

    if details_match:
        d_str = details_match.group(1)
        details = []
        for m in re.finditer(r'["\']((?:[^"\\]|\\.)*?)["\']\s*(?:,|(?=\]))', d_str, re.DOTALL):
            details.append(m.group(1).replace('\\"', '"').replace("\\'", "'"))
        
        if details:
            html = markdown_to_html([f"- {d}" for d in details])
            # Replace details with content, keeping details commented out just in case
            new_val = f'details: [],\n  content: `{html}`'
            new_content = new_content.replace(details_match.group(0), new_val)

    # Cleanup potential duplicate content fields from previous failed run
    new_content = re.sub(r'content: `<ul.*?</ul>`[\s\n]*// details: details: \[.*?\]\s*,[\s\n]*content: `<ul.*?</ul>`', 
                         lambda m: m.group(0).split(',')[0], new_content, flags=re.DOTALL)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Migrated: {filepath}")

def main():
    base_dir = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".ts") and "index" not in file:
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
