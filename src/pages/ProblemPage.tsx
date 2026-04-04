import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { CategoryData, ContentBlock } from "@/src/data/types";
import { CodeSnippet } from "@/src/components/MathComponents";
import MatrixVisualizer from "@/src/components/MatrixVisualizer";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { tableRowsToHtml } from '@/src/lib/tableUtils';

const RichText = ({ text }: { text: string }) => {
  const trimmed = text.trim();
  // If the paragraph is a raw HTML table (we store one in data files), render it as HTML
  if (trimmed.startsWith('<table')) {
    return <div className="my-8 overflow-x-auto rounded border-none bg-surface-container-low shadow-sm transition-colors" dangerouslySetInnerHTML={{ __html: text }} />;
  }

  if (!text.includes("$")) return <>{text}</>;
  // Regex to match both $$...$$ and $...$ delimiters
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return <BlockMath key={i} math={part.slice(2, -2).trim()} />;
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
    <div className="my-8 overflow-x-auto rounded border-none bg-surface-container-low shadow-sm transition-colors">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container/50 border-none">
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 font-black text-on-surface text-sm uppercase tracking-widest"><RichText text={h} /></th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5 dark:divide-white/5">
          {content.map((row, i) => (
            <tr key={i} className="hover:bg-surface-container/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-on-surface-variant text-sm whitespace-nowrap"><RichText text={cell} /></td>
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
        // Convert the collected markdown-style pipe rows into an HTML table string
        try {
          const html = tableRowsToHtml(currentTable);
          processedParagraphs.push(html);
        } catch (e) {
          // Fallback to the previous object shape if helper call fails for any reason
          processedParagraphs.push({ type: 'table', rows: currentTable });
        }
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
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both transition-colors">
      {showHeading && (
        <h3 className="text-xl font-headline font-black text-on-surface mb-4 flex items-center gap-4">
          <span className="w-1.5 h-8 bg-accent-teal rounded-full shadow-[0_0_15px_rgba(45,212,191,0.3)]"></span>
          {section.heading}
        </h3>
      )}
      {processedParagraphs.length > 0 && (
        <div className="space-y-4 text-on-surface-variant text-base leading-relaxed text-editorial-justify">
          {processedParagraphs.map((p, idx) => {
            if (typeof p !== 'string') {
              return <MarkdownTable key={idx} rows={p.rows} />;
            }

            // Detect numbered sub-headings like "1. Row and Column Vectors"
            // We only treat it as a heading if it's likely a title, not a simple step (i.e. if it doesn't end with a period)
            if (/^\d+\.\s/.test(p) && p.length < 80 && !p.endsWith(".")) {
              return <h4 key={idx} className="font-headline font-bold text-on-surface mt-10 mb-5 text-2xl border-b border-black/5 dark:border-white/5 pb-2">{p}</h4>;
            }

            // Detect formula-like short lines
            if (p.startsWith("v =") || p.startsWith("û =") || p.startsWith("Y =")) {
              return (
                <div key={idx} className="font-mono text-accent-teal bg-surface-container-low px-6 py-4 rounded text-lg inline-block my-4 transition-colors">
                  {p}
                </div>
              );
            }

            // Detect bullet-like entries or bold-prefix points (e.g. "**Google PageRank:**")
            const starMatch = p.match(/^[-]?\s?\*\*(.*?)\*\*(.*)/);
            const normalBulletMatch = p.match(/^([A-Z][a-zA-Z\s()]+[\:]?)(.*)/);
            
            if (starMatch) {
              const label = starMatch[1].trim().endsWith(':') ? starMatch[1].trim().slice(0, -1) : starMatch[1].trim();
              const content = starMatch[2].trim().startsWith(':') ? starMatch[2].trim().slice(1).trim() : starMatch[2].trim();
              
              return (
                <div key={idx} className="pl-6 py-3 relative group transition-colors">
                  <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-accent-purple group-hover:scale-125 transition-transform"></div>
                  <strong className="text-on-surface font-headline text-xl">
                    <RichText text={label} />:
                  </strong>
                  <span className="ml-2 text-on-surface-variant whitespace-pre-wrap"><RichText text={content} /></span>
                </div>
              );
            }

            if (normalBulletMatch) {
              const label = normalBulletMatch[1].trim().endsWith(':') ? normalBulletMatch[1].trim().slice(0, -1) : normalBulletMatch[1].trim();
              const content = normalBulletMatch[2].trim().startsWith(':') ? normalBulletMatch[2].trim().slice(1).trim() : normalBulletMatch[2].trim();

              return (
                <div key={idx} className="pl-6 py-3 relative group transition-colors">
                  <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-accent-teal group-hover:bg-accent-purple transition-colors"></div>
                  <strong className="text-on-surface font-headline font-bold text-lg">
                    <RichText text={label} />:
                  </strong>
                  <span className="ml-2 text-on-surface-variant whitespace-pre-wrap"><RichText text={content} /></span>
                </div>
              );
            }

            // Detect LaTeX math blocks
            if ((p.startsWith("$$") && p.endsWith("$$")) || (p.startsWith("det") && p.includes("\\lambda"))) {
              const math = p.startsWith("$$") ? p.slice(2, -2).trim() : p;
              return <BlockMath key={idx} math={math} />;
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
      {section.visualizer === "matrix" && (
        <div className="mt-4">
          <MatrixVisualizer />
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
  const { clusterId: paramClusterId, categoryId, problemId } = useParams<{ clusterId?: string; categoryId: string; problemId: string }>();
  const [category, setCategory] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const cluster = CLUSTERS.find(c => c.id === paramClusterId) || 
                  CLUSTERS.find(c => c.categories.includes(categoryId || ''));
  const clusterId = cluster?.id || paramClusterId;

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    if (!categoryId) {
      setCategory(null);
      setLoading(false);
      return;
    }
    getCategoryData(categoryId).then((data) => {
      if (!mounted) return;
      setCategory(data);
      setLoading(false);
    }).catch(() => {
      if (!mounted) return;
      setCategory(null);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [categoryId]);

  const currentIndex = category?.sections.findIndex((s) => s.id === problemId) ?? -1;
  const problem = currentIndex !== -1 ? category?.sections[currentIndex] : null;
  const prevProblem = currentIndex > 0 ? category?.sections[currentIndex - 1] : null;
  const nextProblem = currentIndex < (category?.sections.length ?? 0) - 1 ? category?.sections[currentIndex + 1] : null;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-48 bg-gray-200 rounded" />
          <div className="h-12 w-96 bg-gray-200 rounded" />
          <div className="h-6 w-2/3 bg-gray-100 rounded" />
          <div className="h-8 w-5/6 bg-gray-200 rounded mt-6" />
          <div className="h-4 w-full bg-gray-100 rounded" />
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">


      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-12">
        <Link to="/" className="hover:text-accent-teal transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 opacity-30" />
        {cluster && (
          <>
            <Link to={`/${cluster.id}`} className="hover:text-accent-teal transition-colors">{cluster.title}</Link>
            <ChevronRight className="w-3 h-3 opacity-30" />
          </>
        )}
        <Link to={clusterId ? `/${clusterId}/${categoryId}` : `/${categoryId}`} className="hover:text-accent-teal transition-colors">{category.title}</Link>
        <ChevronRight className="w-3 h-3 opacity-30" />
        <span className="text-on-surface">{problem.title}</span>
      </div>

      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-6 tracking-tighter leading-none">
          {problem.title}
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant mb-16 leading-relaxed font-light text-editorial-justify">
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
            <div className="mb-12 text-editorial-justify">
              <h2 className="text-xl font-headline font-black text-on-surface mb-4 border-b border-black/5 dark:border-white/5 pb-2">What is {problem.title}?</h2>
              <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
                {problem.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
              {problem.formula && (
                <BlockMath math={problem.formula} />
              )}
            </div>

            {/* Code Snippet */}
            {problem.code && (
              <div className="mb-12">
                <h2 className="text-xl font-headline font-black text-on-surface mb-4 border-b border-black/5 dark:border-white/5 pb-2">Code Example</h2>
                <div className="mt-4">
                  <CodeSnippet code={problem.code} />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Previous / Next Navigation Footer */}
      <div className="mt-32 pt-16 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
          {prevProblem ? (
            <Link 
              to={clusterId ? `/${clusterId}/${categoryId}/${prevProblem.id}` : `/${categoryId}/${prevProblem.id}`}
              className="flex flex-col gap-2 p-5 rounded bg-surface-container hover:bg-surface-container-high transition-all group w-full sm:w-auto sm:min-w-[200px]"
            >
              <span className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] group-hover:text-accent-teal transition-colors">
                <ArrowLeft className="w-3 h-3" /> Previous
              </span>
              <span className="text-lg font-headline font-black text-on-surface group-hover:translate-x-1 transition-transform">{prevProblem.title}</span>
            </Link>
          ) : (
            <div className="hidden sm:block w-full sm:w-auto sm:min-w-[200px]"></div>
          )}

          {nextProblem ? (
            <Link 
              to={clusterId ? `/${clusterId}/${categoryId}/${nextProblem.id}` : `/${categoryId}/${nextProblem.id}`}
              className="flex flex-col items-end gap-2 p-5 rounded bg-surface-container hover:bg-surface-container-high transition-all group w-full sm:w-auto sm:min-w-[200px]"
            >
              <span className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] group-hover:text-accent-teal transition-colors">
                Next <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-lg font-headline font-black text-on-surface group-hover:-translate-x-1 transition-transform text-right">{nextProblem.title}</span>
            </Link>
          ) : (
            <div className="hidden sm:block w-full sm:w-auto sm:min-w-[200px]"></div>
          )}
        </div>
      </div>
    </div>
  );
};
