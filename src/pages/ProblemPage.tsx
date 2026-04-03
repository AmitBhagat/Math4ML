import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, ContentBlock } from "@/src/data/topics";
import { CodeSnippet } from "@/src/components/MathComponents";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const RichText = ({ text }: { text: string }) => {
  if (!text.includes("$")) return <>{text}</>;
  // Regex to match both $$...$$ and $...$ delimiters
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return <div key={i} className="my-4 flex justify-center"><BlockMath math={part.slice(2, -2).trim()} /></div>;
        }
        if (part.startsWith("$") && part.endsWith("$")) {
          return <InlineMath key={i} math={part.slice(1, -1)} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

const MarkdownTable = ({ rows }: { rows: string[], key?: any }) => {
  const data = rows.filter(r => !r.includes("---|--")).map(r => 
    r.split('|').map(cell => cell.trim()).filter(cell => cell !== "")
  );

  if (data.length < 1) return null;

  const [headers, ...content] = data;

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 font-bold text-gray-900 text-sm"><RichText text={h} /></th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {content.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-gray-700 text-sm whitespace-nowrap"><RichText text={cell} /></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ContentSection = ({ section }: { section: ContentBlock; key?: number }) => {
  // Pre-process paragraphs to group consecutive table rows
  const processedParagraphs: (string | { type: 'table', rows: string[] })[] = [];
  let currentTable: string[] = [];

  section.paragraphs.forEach((p) => {
    if (p.includes('|') && (p.includes('---') || currentTable.length > 0)) {
      currentTable.push(p);
    } else {
      if (currentTable.length > 0) {
        processedParagraphs.push({ type: 'table', rows: currentTable });
        currentTable = [];
      }
      processedParagraphs.push(p);
    }
  });
  
  if (currentTable.length > 0) {
    // If heading also looks like a table header, prepend it
    if (section.heading?.includes('|')) {
      currentTable.unshift(section.heading);
    }
    processedParagraphs.push({ type: 'table', rows: currentTable });
  }

  const showHeading = section.heading && !section.heading.includes('|');

  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
      {showHeading && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
          {section.heading}
        </h3>
      )}
      {processedParagraphs.length > 0 && (
        <div className="space-y-4 text-gray-700 text-[17px] leading-relaxed">
          {processedParagraphs.map((p, idx) => {
            if (typeof p !== 'string') {
              return <MarkdownTable key={idx} rows={p.rows} />;
            }

            // Detect numbered sub-headings like "1. Row and Column Vectors"
            if (/^\d+\.\s/.test(p) && p.length < 80) {
              return <h4 key={idx} className="font-bold text-gray-900 mt-8 mb-4 text-xl">{p}</h4>;
            }

            // Detect formula-like short lines
            if (p.startsWith("v =") || p.startsWith("û =") || p.startsWith("Y =")) {
              return (
                <div key={idx} className="font-mono text-blue-700 bg-blue-50/50 px-5 py-3 rounded-xl text-lg border border-blue-100 inline-block my-2">
                  {p}
                </div>
              );
            }

            // Detect bullet-like entries or bold-prefix points (e.g. "**Google PageRank:**")
            const starMatch = p.match(/^[-]?\s?\*\*(.*?)\*\*(.*)/);
            const normalBulletMatch = p.match(/^([A-Z][a-zA-Z\s()]+):(.*)/);
            
            if (starMatch) {
              return (
                <div key={idx} className="pl-6 py-2 relative group">
                  <div className="absolute left-0 top-5 w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform"></div>
                  <strong className="text-gray-900 text-lg"><RichText text={starMatch[1]} />:</strong>
                  <span className="ml-2"><RichText text={starMatch[2]} /></span>
                </div>
              );
            }

            if (normalBulletMatch) {
              return (
                <div key={idx} className="pl-6 py-2 relative group">
                  <div className="absolute left-0 top-5 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-400 transition-colors"></div>
                  <strong className="text-gray-900"><RichText text={normalBulletMatch[1]} />:</strong>
                  <span className="ml-2"><RichText text={normalBulletMatch[2]} /></span>
                </div>
              );
            }

            // Detect LaTeX math blocks
            if ((p.startsWith("$$") && p.endsWith("$$")) || (p.startsWith("det") && p.includes("\\lambda"))) {
              const math = p.startsWith("$$") ? p.slice(2, -2).trim() : p;
              return <div key={idx} className="my-8 py-6 bg-gray-50/50 rounded-2xl border border-gray-100 flex justify-center overflow-x-auto"><BlockMath math={math} /></div>;
            }

            // Detect dashed points
            if (p.trim().startsWith("- ")) {
              return (
                <div key={idx} className="flex gap-3 pl-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span><RichText text={p.trim().slice(2)} /></span>
                </div>
              );
            }

            return <p key={idx} className="mb-2"><RichText text={p} /></p>;
          })}
        </div>
      )}
      {section.code && (
        <div className="mt-8">
          <CodeSnippet code={section.code} staticOutput={section.output} />
        </div>
      )}
    </div>
  );
};

export const ProblemPage = () => {
  const { categoryId, problemId } = useParams<{ categoryId: string; problemId: string }>();
  
  const category = categoryId ? CATEGORIES[categoryId] : null;
  const problem = category?.sections.find(s => s.id === problemId);

  if (!category || !problem) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Problem not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const hasRichContent = problem.contentSections && problem.contentSections.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">


      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
        <Link to="/" className="hover:text-gray-900 hover:underline transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={`/${categoryId}`} className="hover:text-gray-900 hover:underline transition-colors">{category.title}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{problem.title}</span>
      </div>

      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          {problem.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          {problem.description}
        </p>

        {/* Rich Content Sections (new GfG-style) */}
        {hasRichContent ? (
          <div className="mb-12">
            {problem.contentSections!.map((section, idx) => (
              <ContentSection key={idx} section={section} />
            ))}
          </div>
        ) : (
          /* Fallback: Legacy flat content for topics without contentSections */
          <>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">What is {problem.title}?</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {problem.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
              {problem.formula && (
                <div className="mt-6 text-blue-700 bg-blue-50/50 px-6 py-4 rounded-xl inline-block text-xl border border-blue-100 shadow-sm overflow-x-auto max-w-full">
                  <BlockMath math={problem.formula} />
                </div>
              )}
            </div>

            {/* Code Snippet */}
            {problem.code && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Code Example</h2>
                <div className="mt-4">
                  <CodeSnippet code={problem.code} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
