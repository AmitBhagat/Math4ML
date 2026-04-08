import os
import re

def add_case_study_spacing(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern matches H2 tags that contain "Case Study:"
    # This covers the span-wrapped version I just created
    pattern = re.compile(r'(<h2\s+id="[^"]*")([^>]*>.*?text-category-primary">Case Study:</span>)', re.IGNORECASE)
    
    # We add class="mb-8" to the H2 tag
    # If a class already exists, we should be careful, but these headers typically don't
    def replacer(match):
        h2_start = match.group(1)
        remaining = match.group(2)
        
        if 'class="' in h2_start:
            # Append mb-8 to existing class
            new_h2 = h2_start.replace('class="', 'class="mb-8 ') + remaining
        else:
            # Add new class attribute
            new_h2 = f'{h2_start} class="mb-8"{remaining}'
        return new_h2

    new_content = re.sub(pattern, replacer, content)

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
                if add_case_study_spacing(file_path):
                    print(f"Added spacing to Case Study in {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_updated = process_directory(dir_to_process)
    print(f"Total files updated: {total_updated}")
