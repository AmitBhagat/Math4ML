import os
import re

def final_fix_sections(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. First, fix the corrupted IDs we created in the previous run
    # Pattern: id="...Case Study :(\d+):..."
    # We replace it back to "example" or similar to keep it clean
    content = re.sub(r'id="([^"]*?)Case Study :\d+:([^"]*?)"', r'id="\1example\2"', content)
    # Also fix "Illustrated Example" -> "example" in IDs
    content = re.sub(r'id="([^"]*?)Illustrated Example([^"]*?)"', r'id="\1example\2"', content)

    # 2. Prerequisites -> Foundational Requirements
    # Only in tag content
    content = re.sub(r'(<(h[1-6])[^>]*>)\s*Prerequisites\s*(</\2>)', r'\1Foundational Requirements\3', content, flags=re.IGNORECASE)

    # 3. Core Theory: The "Why" -> Intuition & Motivation
    # Only in tag content
    content = re.sub(r'(<(h[1-6])[^>]*>)\s*Core Theory: (?:The )?["&quot;]Why["&quot;]\s*(</\2>)', r'\1Intuition & Motivation\3', content, flags=re.IGNORECASE)

    # 4. Mathematical Derivation -> Formal Definition
    # Only in tag content
    content = re.sub(r'(<(h[1-6])[^>]*>)\s*Mathematical Derivation\s*(</\2>)', r'\1Formal Definition\3', content, flags=re.IGNORECASE)

    # 5. Implementation
    # Pattern: <hX>...Implementation...</hX> -> <hX>Implementation</hX>
    # This covers "Python Implementation", "Implementation (Python/NumPy)", etc.
    content = re.sub(r'(<(h[1-6])[^>]*>)\s*(?:Python |NumPy |Jupyter )?Implementation(?:\s*\(.*?\))?(?:\s*[:\-]\s*.*?)?\s*(</\2>)', r'\1Implementation\3', content, flags=re.IGNORECASE)

    # 6. Case Study Sequential Renaming
    # This will find all Case Study / Example / Illustrated Example headers and re-number them cleanly.
    def example_renamer(content):
        # Match all H tags that might be examples or already Case Studies from last run
        h_pattern = re.compile(r'<(h[1-6])[^>]*>(?:\s*(?:Illustrated |Application |Real-World )?(?:Example|Case Study)(?:\s+:\d+:|\s+\d+)?(?:\s*:)?\s*)(.*?)</\1>', re.IGNORECASE)
        
        matches = list(h_pattern.finditer(content))
        if not matches:
            return content
        
        new_content = content
        offset = 0
        for i, match in enumerate(matches, 1):
            h_tag_full = match.group(0)
            tag_name = match.group(1)
            remaining_text = match.group(2).strip()
            
            # Construct the new inner HTML
            if remaining_text:
                new_inner = f'Case Study :{i}: {remaining_text}'
            else:
                new_inner = f'Case Study :{i}:'
                
            # Keep the opening tag (with attributes) and closing tag
            tag_start = h_tag_full[:h_tag_full.find('>')+1]
            tag_end = f'</{tag_name}>'
            
            new_h_tag_full = f'{tag_start}{new_inner}{tag_end}'
            
            start = match.start() + offset
            end = match.end() + offset
            new_content = new_content[:start] + new_h_tag_full + new_content[end:]
            offset += len(new_h_tag_full) - len(h_tag_full)
            
        return new_content

    content = example_renamer(content)

    # 7. Final cleanup for that one specific line in vectors
    redundant_line_pattern = re.compile(r'Prerequisites\s+Core Theory: The "Why"\s+Mathematical Derivation\s+Example 1: Data Representation\s+Example 2: Vector Navigation\s+Implementation \(Python/NumPy\)\s+Applications in ML', re.IGNORECASE)
    content = re.sub(redundant_line_pattern, '', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts'):
                file_path = os.path.join(root, file)
                final_fix_sections(file_path)
                print(f"Fixed {file_path}")

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    process_directory(dir_to_process)
