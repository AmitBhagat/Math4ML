import os
import re

def bold_case_study_label(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Matches the Case Study span with the green color class
    old_tag = '<span class="text-green-premium">Case Study:</span>'
    new_tag = '<span class="text-green-premium font-bold">Case Study:</span>'
    
    new_content = content.replace(old_tag, new_tag)

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
                if bold_case_study_label(file_path):
                    print(f"Bolded labels in {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_updated = process_directory(dir_to_process)
    print(f"Total files updated: {total_updated}")
