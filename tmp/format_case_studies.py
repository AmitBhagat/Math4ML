import os
import re

def format_case_study_headers(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Matches Case Study followed by space, colon, number, colon, and optional space
    # Existing format: Case Study :1: Data Representation
    # Target: <span class="text-category-primary">Case Study:</span> Data Representation
    
    # We use a pattern that finds the Case Study label plus the numbering
    pattern = re.compile(r'Case Study\s*:\d+:\s*', re.IGNORECASE)
    
    # Replacement string
    replacement = '<span class="text-category-primary">Case Study:</span> '
    
    new_content = re.sub(pattern, replacement, content)

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
                if format_case_study_headers(file_path):
                    print(f"Formatted headers in {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_updated = process_directory(dir_to_process)
    print(f"Total files updated: {total_updated}")
