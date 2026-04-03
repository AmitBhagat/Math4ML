import fitz
import sys

def main():
    doc = fitz.open("Introduction.to.Linear.Algebra.for.Applied.Machine.Learning.with.Python.smaller.pdf")
    toc = doc.get_toc()
    
    with open("pdf_text.txt", "w", encoding="utf-8") as f:
        if toc:
            f.write("--- Table of Contents ---\n")
            for item in toc:
                f.write(f"{'  ' * (item[0] - 1)}- {item[1]} (Page {item[2]})\n")
        else:
            f.write("No metadata TOC found. Extracting first 15 pages text...\n")
            for i in range(min(15, doc.page_count)):
                f.write(f"--- Page {i+1} ---\n")
                f.write(doc[i].get_text() + "\n")

if __name__ == "__main__":
    main()
