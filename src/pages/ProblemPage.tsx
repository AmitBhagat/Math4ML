import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
// @ts-expect-error - Contribution types missing
import renderMathInElement from 'katex/dist/contrib/auto-render';
import { ChevronRight, ArrowLeft } from "lucide-react";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { CategoryData, TopicSection, ContentBlock } from "@/src/data/types";
import { CodeSnippet } from "@/src/components/MathComponents";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { cleanMathContent } from '@/src/lib/mathUtils';
import { getCategoryTheme } from "@/src/lib/themeUtils";
import { Hammer, Clock, Star } from "lucide-react";
import { TopicVisualizer } from "@/src/components/MathematicalVisualizations";



// ── Custom Parser for Unified HTML ──
const ParsedContent = ({ html }: { html: string }) => {

  if (!html) return null;
  // Match <python-code> OR <visualizer>
  const segments = html.split(/(<python-code[\s\S]*?>[\s\S]*?<\/python-code>|<visualizer[\s\S]*?\/>)/g);
  
  return (
    <>
      {segments.map((segment, idx) => {
        if (segment.startsWith('<python-code')) {
          const match = segment.match(/<python-code([^>]*)>([\s\S]*?)<\/python-code>/);
          if (match) {
            const attrString = match[1];
            const code = match[2].trim();
            const staticOutputMatch = attrString.match(/static-output="([^"]*)"/);
            const staticOutput = staticOutputMatch ? staticOutputMatch[1].replace(/\\n/g, '\n') : undefined;
            const runnableMatch = attrString.match(/runnable="([^"]*)"/);
            const runnable = runnableMatch ? runnableMatch[1] === "true" : true;

            return <div key={idx}><CodeSnippet code={code} staticOutput={staticOutput} runnable={runnable} /></div>;
          }
        }

        if (segment.startsWith('<visualizer')) {
            const topicMatch = segment.match(/topic="([^"]*)"/);
            const topic = topicMatch ? topicMatch[1] : '';
            return <div key={idx} className="my-8"><TopicVisualizer topicId={topic} /></div>;
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
  const navigate = useNavigate();
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
      <div className="py-32 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="w-20 h-20 rounded-3xl bg-accent-premium/5 flex items-center justify-between p-5 mb-8 border border-accent-premium/10 shadow-premium-glow">
          <Hammer className="w-full h-full text-accent-premium animate-pulse" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-[0.25em] text-on-surface mb-6">
          Future Intelligence
        </h1>
        
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-muted-premium text-lg font-light leading-relaxed">
            This module is currently being synthesized for the <span className="text-accent-premium font-medium">Machine Learning</span> cluster. 
            Detailed derivations, interactive proofs, and neural architecture deep-dives are coming soon.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-premium text-[10px] font-black uppercase tracking-widest text-muted-premium">
              <Clock className="w-3 h-3" /> Synthesis in Progress
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-premium/5 border border-accent-premium/20 text-[10px] font-black uppercase tracking-widest text-accent-premium">
              <Star className="w-3 h-3" /> High Fidelity Content
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-bg-secondary border border-border-premium text-sm font-semibold text-text-premium hover:border-accent-premium/40 hover:bg-bg-tertiary transition-all active:scale-95 no-underline cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
              Back to Curriculum
            </button>
            <Link 
              to="/" 
              className="flex items-center justify-center px-8 py-3 rounded-xl bg-accent-premium text-white text-sm font-semibold hover:bg-accent-premium-light transition-all active:scale-95 no-underline"
            >
              Explore Math Modules
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
      style={{
        '--category-primary': getCategoryTheme(categoryId || '').primary,
        '--category-secondary': getCategoryTheme(categoryId || '').secondary,
      } as React.CSSProperties}
    >
      
      {/* ─── Breadcrumbs & Header ─── */}
      <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-premium mb-4">
          <Link to={`/${clusterId}`} className="hover:text-accent transition-colors">
            {cluster?.title}
          </Link>
          <ChevronRight className="size-3" />
          <Link to={`/${clusterId}/${categoryId}`} className="hover:text-accent transition-colors">
            {category?.title}
          </Link>
        </div>
        
        {!problem.html?.trim().startsWith('<div class="premium-hero">') && (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight leading-tight">
            {problem.title}
          </h1>
        )}
      </div>

      {/* ─── Main Content Area ─── */}
      <article className="prose prose-zinc dark:prose-invert max-w-none mb-24">
        <div className="content-area">
          {problem.html ? (
            <ParsedContent html={problem.html} />
          ) : (
            <div className="space-y-6 text-on-surface/80 font-normal leading-relaxed text-lg">
               {problem.details && problem.details.map((detail, idx) => (
                 <div key={idx} className="flex gap-4 mb-4">
                   <div className="size-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                   <span>{detail}</span>
                 </div>
               ))}
               {problem.formula && (
                 <div className="my-12 p-8 bg-black/5 dark:bg-white/5 rounded-2xl">
                   <BlockMath math={cleanMathContent(problem.formula)} />
                 </div>
               )}
            </div>
          )}
        </div>
      </article>

      {/* ─── GFG-Style Next/Prev Navigation ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 border-t border-black/5 dark:border-white/5">
        {prevProblem ? (
          <Link
            to={`/${clusterId}/${categoryId}/${prevProblem.id}`}
            className="group p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl hover:border-accent/40 transition-all text-left"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-premium mb-2 group-hover:text-accent transition-colors">
              Previous Topic
            </div>
            <div className="text-lg font-black text-on-surface">
              {prevProblem.title}
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProblem ? (
          <Link
            to={`/${clusterId}/${categoryId}/${nextProblem.id}`}
            className="group p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl hover:border-accent/40 transition-all text-right"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-premium mb-2 group-hover:text-accent transition-colors">
              Next Topic
            </div>
            <div className="text-lg font-black text-on-surface">
              {nextProblem.title}
            </div>
          </Link>
        ) : (
          <Link
            to={`/${clusterId}`}
            className="group p-6 bg-accent text-white rounded-2xl transition-all text-right shadow-xl shadow-accent/20"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">
              Finish Track
            </div>
            <div className="text-lg font-black">
              Return to {cluster?.title} Overview
            </div>
          </Link>
        )}
      </div>

    </motion.div>
  );
};
