import os
import re

def escape_backslashes_in_content(content):
    # Find all content: `...` blocks
    pattern = re.compile(r'(content:\s*`)(.*?)(`)', re.DOTALL)
    
    def replacer(match):
        prefix = match.group(1)
        inner = match.group(2)
        suffix = match.group(3)
        
        # Replace single \ with \\, but only if they are not already double \\
        # or followed by a backtick/dollar-sign that is part of a template literal sequence.
        # Actually, in LaTeX strings, almost all \ should be \\ in a TS template literal.
        
        # Simple approach: Escape all \ unless they are already \\
        # We use a negative lookbehind to avoid escaping already escaped ones
        # but in Python re, lookbehind must be fixed width.
        # So we'll do a simple string replace trick.
        
        # Step 1: Temporarily replace double backslashes with a placeholder
        placeholder = "___DOUBLE_SLASH_PLACEHOLDER___"
        processed = inner.replace("\\\\", placeholder)
        
        # Step 2: Replace remaining single backslashes with double ones
        processed = processed.replace("\\", "\\\\")
        
        # Step 3: Restore the originals
        processed = processed.replace(placeholder, "\\\\")
        
        return f"{prefix}{processed}{suffix}"

    return pattern.sub(replacer, content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".ts"):
                filepath = os.path.join(root, file)
                print(f"Processing: {filepath}")
                with open(filepath, 'r', encoding='utf-8') as f:
                    original = f.read()
                
                fixed = escape_backslashes_in_content(original)
                
                if fixed != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(fixed)
                    print(f"  Fixed backslashes in {file}")

if __name__ == "__main__":
    process_directory(r"c:\Users\abbha\Antigravity Projects\Math4ML\categories")
