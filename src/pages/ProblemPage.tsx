import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
// @ts-expect-error - Contribution types missing
import renderMathInElement from 'katex/dist/contrib/auto-render';
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { CategoryData, TopicSection, ContentBlock } from "@/src/data/types";
import { CodeSnippet } from "@/src/components/MathComponents";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { cleanMathContent } from '@/src/lib/mathUtils';
import { getCategoryTheme } from "@/src/lib/themeUtils";

// ── Custom Parser for Unified HTML ──
const ParsedContent = ({ html }: { html: string }) => {
  if (!html) return null;
  const segments = html.split(/(<python-code>[\s\S]*?<\/python-code>)/g);
  
  return (
    <>
      {segments.map((segment, idx) => {
        if (segment.startsWith('<python-code>')) {
          const code = segment
            .replace('<python-code>', '')
            .replace('</python-code>', '')
            .trim();
          
          return (
            <div key={idx}>
              <CodeSnippet code={code} />
            </div>
          );
        }
        
        return <HtmlWithMath key={idx} html={segment} />;
      })}
    </>
  );
};

const HtmlWithMath = ({ html, className }: { html: string; className?: string; key?: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    }
  }, [html]);

  return (
    <div 
      ref={containerRef} 
      className={className} 
      dangerouslySetInnerHTML={{ __html: html }} 
    />
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
    // Ensure we start at the top on every problem change
    window.scrollTo(0, 0);
    
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
    <div 
      className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12"
      style={{
        '--category-primary': getCategoryTheme(categoryId || '').primary,
        '--category-secondary': getCategoryTheme(categoryId || '').secondary,
      } as React.CSSProperties}
    >
        <div className="h-48 bg-bg-secondary rounded-2xl w-full" />
        <div className="h-8 bg-bg-secondary rounded w-2/3" />
        <div className="h-4 bg-bg-secondary rounded w-full" />
        <div className="h-4 bg-bg-secondary rounded w-5/6" />
      </div>
    );
  }

  if (!category || !problem) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-text-premium mb-4 font-headline">Problem not found</h1>
        <Link to="/" className="text-accent-premium hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div 
      className="w-full"
      style={{
        '--category-primary': getCategoryTheme(categoryId || '').primary,
        '--category-secondary': getCategoryTheme(categoryId || '').secondary,
      } as React.CSSProperties}
    >
      
      {/* ─── Hero Section ─── */}
      <div className="premium-hero">
        <div className="premium-hero-badge">
          📊 {category.title} / {problem.title}
        </div>
        <h1>{problem.title}</h1>
      </div>

      {/* ─── Content Area ─── */}
      <div className="content-area">
        {problem.html ? (
          <ParsedContent html={problem.html} />
        ) : (
          <div className="space-y-4 text-text-premium font-light leading-relaxed">
             {problem.details && problem.details.map((detail, idx) => (
               <div key={idx} className="flex gap-3 mb-4">
                 <span className="text-accent-premium mt-1.5 shrink-0">•</span>
                 <span>{detail}</span>
               </div>
             ))}
             {problem.formula && (
               <div className="premium-math-block">
                 <BlockMath math={cleanMathContent(problem.formula)} />
               </div>
             )}
          </div>
        )}
      </div>

      {/* ─── Navigation Footer ─── */}
      <nav className="mt-24 pt-10 border-t border-border-premium flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProblem ? (
            <Link 
              to={clusterId ? `/${clusterId}/${categoryId}/${prevProblem.id}` : `/${categoryId}/${prevProblem.id}`}
              className="flex flex-col gap-1.5 p-6 rounded-xl bg-bg-secondary border border-border-premium hover:border-accent-premium/40 hover:bg-bg-tertiary transition-all group w-full sm:w-auto sm:min-w-[280px] no-underline"
            >
              <span className="flex items-center gap-2 text-[10px] font-black text-muted-premium uppercase tracking-[0.2em] group-hover:text-accent-premium transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Section
              </span>
              <h3 className="font-headline font-black text-xl text-on-surface group-hover:text-accent-teal transition-colors">
                {prevProblem.title}
              </h3>
            </Link>
          ) : (
            <div className="hidden sm:block min-w-[280px]"></div>
          )}

          {nextProblem ? (
            <Link 
              to={clusterId ? `/${clusterId}/${categoryId}/${nextProblem.id}` : `/${categoryId}/${nextProblem.id}`}
              className="flex flex-col items-end gap-1.5 p-6 rounded-xl bg-bg-secondary border border-border-premium hover:border-accent-premium/40 hover:bg-bg-tertiary transition-all group w-full sm:w-auto sm:min-w-[280px] no-underline text-right"
            >
              <span className="flex items-center gap-2 text-[10px] font-black text-muted-premium uppercase tracking-[0.2em] group-hover:text-accent-premium transition-colors">
                Next Section <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <h3 className="font-headline font-black text-xl text-on-surface group-hover:text-accent-teal transition-colors">
                {nextProblem.title}
              </h3>
            </Link>
          ) : (
            <div className="hidden sm:block min-w-[280px]"></div>
          )}
      </nav>
    </div>
  );
};
