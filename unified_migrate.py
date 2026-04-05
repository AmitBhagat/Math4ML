import os
import re

def escape_for_ts(text):
    # Already in template literals, but we need to ensure double backslashes for LaTeX
    # If the text already has double backslashes from a previous step, we leave them.
    # But often they are single.
    # The safest way is to ensure all \ are followed by another \ if they are for LaTeX.
    
    # Actually, if we are reading from the file, they are already represented as they are.
    return text

def convert_to_unified_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract the main TopicSection content
    # We'll look for content: `...` (intro)
    intro_match = re.search(r'content:\s*`([\s\S]*?)`\s*,', content)
    intro_html = intro_match.group(1) if intro_match else ""

    # 2. Extract contentSections
    sections_match = re.search(r'contentSections:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*}', content)
    if not sections_match:
        # Check if it ends at the end of object
        sections_match = re.search(r'contentSections:\s*\[([\s\S]*?)\]\s*,?\s*', content)

    unified_html = []
    if intro_html:
        unified_html.append(intro_html)

    if sections_match:
        sections_block = sections_match.group(1)
        # Find individual blocks { ... }
        # This is tricky with nested objects, but these are fairly flat.
        blocks = re.findall(r'\{\s*heading:([\s\S]*?)\}', sections_block)
        
        # A better way to find blocks:
        blocks = []
        depth = 0
        current_block = ""
        for char in sections_block:
            if char == '{':
                depth += 1
            if depth > 0:
                current_block += char
            if char == '}':
                depth -= 1
                if depth == 0:
                    blocks.append(current_block)
                    current_block = ""

        for block in blocks:
            heading_m = re.search(r'heading:\s*"(.*?)"', block)
            content_m = re.search(r'content:\s*`([\s\S]*?)`', block)
            code_m = re.search(r'code:\s*"(.*?)"', block)
            output_m = re.search(r'output:\s*"(.*?)"', block)
            
            if heading_m:
                unified_html.append(f'<h3 class="text-2xl font-headline font-bold text-on-surface mt-12 mb-6 border-b border-black/5 dark:border-white/5 pb-2">{heading_m.group(1)}</h3>')
            
            if content_m:
                unified_html.append(content_m.group(1))
            
            if code_m:
                code_text = code_m.group(1).replace('\\n', '\n').replace('\\"', '"')
                unified_html.append(f'<div class="my-6 rounded-xl overflow-hidden border border-black/5 dark:border-white/5 shadow-lg"><div class="bg-surface-container-high px-4 py-2 text-xs font-mono text-on-surface-variant border-b border-black/5 dark:border-white/5 flex justify-between items-center"><span>Python Execution</span><span class="text-accent-teal">● Live Code</span></div><pre class="p-6 bg-surface-container-low overflow-x-auto"><code class="language-python text-sm leading-relaxed">{code_text}</code></pre></div>')
            
            if output_m:
                out_text = output_m.group(1).replace('\\n', '\n').replace('\\"', '"')
                unified_html.append(f'<div class="mt-2 mb-8 rounded-xl overflow-hidden border border-black/5 dark:border-white/5"><div class="bg-surface-container-low px-4 py-2 text-xs font-mono text-on-surface-variant border-b border-black/5 dark:border-white/5">Output</div><pre class="p-4 bg-surface-container/30 overflow-x-auto"><code class="text-xs text-on-surface-variant font-mono">{out_text}</code></pre></div>')

    if unified_html:
        full_html = "\n".join(unified_html)
        # Escape backslashes for template literal (ensure all \ are \\)
        # Note: if they are already \\, we don't want to make them \\\\ unless needed.
        # But in a python string, we just want to write it out.
        
        new_field = f'html: `{full_html}`,'
        
        # Replace the old fields
        # Remove content: `...`
        if intro_match:
            content = content.replace(intro_match.group(0), "")
        
        # Replace contentSections: [...]
        if sections_match:
            content = content.replace(sections_match.group(0), new_field)
        else:
            # If no sections, just append before the end
            content = re.sub(r'(\s*\}\);|\s*};)', f'\n  {new_field}\n\\1', content)

        # Cleanup trailing commas and double spaces
        content = re.sub(r',\s*,', ',', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Migrated to Unified HTML: {filepath}")

def main():
    base_dir = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".ts"):
                migrate_file(os.path.join(root, file))

if __name__ == "__main__":
    # Test on one file first? No, let's go.
    # Actually, I'll redefine migrate_file to use convert_to_unified_html
    migrate_file = convert_to_unified_html
    main()
