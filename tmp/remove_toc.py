import os
import re

def remove_toc_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to match <div class="toc"> ... </div>
    # It accounts for potential indentation and multiple lines
    # We use re.DOTALL to match across newlines
    pattern = re.compile(r'\n?\s*<div class="toc">.*?</div>\n?', re.DOTALL)
    
    new_content = re.sub(pattern, '\n\n', content)
    
    # Clean up multiple newlines if they occur
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
                if remove_toc_from_file(file_path):
                    print(f"Removed TOC from {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_removed = process_directory(dir_to_process)
    print(f"Total files updated: {total_removed}")
