import os
import re

def unwrap_example_boxes(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to find start of the box
    # Matches <div class="example-box"> OR <div class="Case Study :...:-box">
    start_pattern = re.compile(r'<div class="(?:example|Case Study :\d+:)-box">', re.IGNORECASE)
    
    parts = []
    last_pos = 0
    
    matches = list(start_pattern.finditer(content))
    if not matches:
        return False
    
    for match in matches:
        # Add everything before the start tag
        parts.append(content[last_pos:match.start()])
        
        # Now find the matching </div>
        # We start searching from the end of the start tag
        search_pos = match.end()
        stack = 1
        
        # We look for <div (to increase stack) or </div> (to decrease stack)
        div_pattern = re.compile(r'<(/?div)[^>]*>', re.IGNORECASE)
        
        found_end = False
        while stack > 0:
            next_div = div_pattern.search(content, search_pos)
            if not next_div:
                # Malformed HTML, just skip and append the rest
                break
            
            if next_div.group(1).lower() == 'div':
                stack += 1
            else:
                stack -= 1
            
            if stack == 0:
                # Found the matching closing tag!
                # We skip the start tag (already skipped by moving parts)
                # We capture the content between start and end tags
                inner_content = content[match.end():next_div.start()]
                parts.append(inner_content)
                last_pos = next_div.end()
                found_end = True
                break
            else:
                search_pos = next_div.end()
                
        if not found_end:
            # If we didn't find the end, just append the start tag and content
            parts.append(match.group(0))
            last_pos = match.end()

    # Append any remaining content
    parts.append(content[last_pos:])
    
    new_content = "".join(parts)
    
    # Cleanup multiple newlines if needed
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
                if unwrap_example_boxes(file_path):
                    print(f"Unwrapped containers from {file_path}")
                    count += 1
    return count

if __name__ == "__main__":
    dir_to_process = r"c:\Users\abbha\Antigravity Projects\Math4ML\categories"
    total_unwrapped = process_directory(dir_to_process)
    print(f"Total files updated: {total_unwrapped}")
