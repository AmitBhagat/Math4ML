import os
import re

def fix_and_remove_toc(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Case 1: The broken state (links followed by closing div)
    # This matches lines starting with optional whitespace, then <a href=, 
    # and continues until a </div> that is NOT followed by another <a> or whitespace+<a>
    # But it's easier to just match from the first <a> that looks like a TOC link
    # to the </div> that closes the TOC.
    
    # Let's look for the pattern of multiple <a href="#..."> lines followed by a </div>
    broken_pattern = re.compile(r'(?:\n\s*<a href="#[^"]+">[^<]+</a>)+\n\s*</div>\n?', re.MULTILINE)
    
    # Case 2: The original full TOC (if any are left or for future runs)
    full_pattern = re.compile(r'\n?\s*<div class="toc">.*?<div class="toc-title">Table of Contents</div>.*?</div>\n?', re.DOTALL)
    # Wait, the full_pattern above still has the nested div issue.
    # Improved full candidate: match <div class="toc"> then any number of non-div things, 
    # then the title div, then any number of links, then the final div.
    
    # Actually, let's just be very specific about the TOC structure:
    # <div class="toc">
    #   <div class="toc-title">Table of Contents</div>
    #   (<a ...>...</a>)*
    # </div>
    
    better_full_pattern = re.compile(r'\n?\s*<div class="toc">\s*<div class="toc-title">Table of Contents</div>(?:\s*<a href="#[^"]+">[^<]+</a>)*\s*</div>\n?', re.DOTALL)

    new_content = re.sub(broken_pattern, '\n\n', content)
    new_content = re.sub(better_full_pattern, '\n\n', new_content)
    
    # Clean up whitespace
    new_content = re.sub(r'\n{3,}', '\n\n', new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def process_directory(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts'):
                file_path = os.path.join(root, file)
                if fix_and_remove_toc(file_path):
                    print(f"Fixed and Removed TOC from {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_removed = process_directory(dir_to_process)
    print(f"Total files updated: {total_removed}")
