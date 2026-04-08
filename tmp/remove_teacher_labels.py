import os
import re

def remove_teacher_labels(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern matches <strong>Teacher's Intuition:</strong> or <strong>Teacher's Hint:</strong>
    # plus any following whitespace
    pattern = re.compile(r'<strong>Teacher\'s (?:Intuition|Hint):</strong>\s*', re.IGNORECASE)
    
    new_content = re.sub(pattern, '', content)

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
                if remove_teacher_labels(file_path):
                    print(f"Removed labels in {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_updated = process_directory(dir_to_process)
    print(f"Total files updated: {total_updated}")
