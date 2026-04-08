import os
import re

categories_dir = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"

# Patterns to look for
# 1. For Case Study: (with or without span)
pattern1 = re.compile(r'For\s+(?:<span class="text-green-premium font-bold">)?Case Study:(?:</span>)?\s*,?', re.IGNORECASE)

# 2. Case Study: inside a paragraph but not as a header or starting word
pattern2 = re.compile(r'([^\.>])\s+Case Study:', re.IGNORECASE)

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replacement 1: "For Case Study:" -> "For example,"
    new_content = pattern1.sub('For example,', content)
    
    # Check if anything changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Walk through categories
fixed_files = []
for root, dirs, files in os.walk(categories_dir):
    for file in files:
        if file.endswith('.ts'):
            if fix_file(os.path.join(root, file)):
                fixed_files.append(file)

print(f"Fixed files: {fixed_files}")
