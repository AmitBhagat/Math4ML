import os
import re

def rename_sections_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Prerequisites -> Foundational Requirements
    content = re.sub(r'<(h[1-6])[^>]*>Prerequisites</\1>', r'<\1 id="prerequisites">Foundational Requirements</\1>', content, flags=re.IGNORECASE)
    content = content.replace('>Prerequisites<', '>Foundational Requirements<')

    # 2. Core Theory: The "Why" -> Intuition & Motivation
    content = content.replace('Core Theory: The "Why"', 'Intuition & Motivation')
    content = content.replace('Core Theory: The &quot;Why&quot;', 'Intuition & Motivation')

    # 3. Mathematical Derivation -> Formal Definition
    content = content.replace('Mathematical Derivation', 'Formal Definition')

    # 4. Implementation
    # Handle variations like "Implementation (Python/NumPy)", "Python Implementation", "NumPy Implementation"
    # But ONLY within tags to avoid breaking code comments if possible, 
    # though usually headers are distinct.
    content = re.sub(r'<(h[1-6])[^>]*>.*Implementation.*</\1>', lambda m: re.sub(r'Implementation.*(?=</)', 'Implementation', m.group(0)), content, flags=re.IGNORECASE)
    # Special case for the specific string mentioned
    content = content.replace('Implementation (Python/NumPy)', 'Implementation')

    # 5. Case Study numbering
    # We want to replace "Example X: Name" or "Illustrated Example: Name" with "Case Study :X: Name"
    # We'll search for all headers that contain "Example" and re-number them per file.
    
    def example_renamer(content):
        # Find all H tags that contain "Example"
        # Pattern: <hX ...> ... Example ... </hX>
        h_pattern = re.compile(r'<(h[1-6])[^>]*>([\s\S]*?Example[\s\S]*?)</\1>', re.IGNORECASE)
        
        matches = list(h_pattern.finditer(content))
        if not matches:
            return content
        
        new_content = content
        offset = 0
        for i, match in enumerate(matches, 1):
            tag = match.group(1)
            inner_html = match.group(2)
            
            # Remove "Illustrated ", "Application ", etc and the word "Example" + optional number/colon
            # Pattern: (Illustrated |Application )?Example( \d+)?(:)?
            cleaned_inner = re.sub(r'(?:Illustrated |Application |Real-World )?Example(?:\s+\d+)?(?:\s*:)?', f'Case Study :{i}:', inner_html, flags=re.IGNORECASE)
            
            replacement = f'<{tag}{match.group(0)[len(tag)+1:match.start(2)-match.start(0)-1]}>{cleaned_inner}</{tag}>'
            # (Keeping other attributes of the tag)
            
            # Wait, the replacement logic above is complex. Let's simplify.
            full_match = match.group(0)
            tag_start = full_match[:full_match.find('>')+1]
            tag_end = f'</{tag}>'
            
            new_full_match = f'{tag_start}{cleaned_inner}{tag_end}'
            
            start = match.start() + offset
            end = match.end() + offset
            new_content = new_content[:start] + new_full_match + new_content[end:]
            offset += len(new_full_match) - len(full_match)
            
        return new_content

    content = example_renamer(content)

    # 6. Global cleanup for the specific redundant string in vectors.ts
    redundant_line_pattern = re.compile(r'Prerequisites\s+Core Theory: The "Why"\s+Mathematical Derivation\s+Example 1: Data Representation\s+Example 2: Vector Navigation\s+Implementation \(Python/NumPy\)\s+Applications in ML', re.IGNORECASE)
    content = re.sub(redundant_line_pattern, '', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts'):
                file_path = os.path.join(root, file)
                rename_sections_in_file(file_path)
                print(f"Processed {file_path}")

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    process_directory(dir_to_process)
