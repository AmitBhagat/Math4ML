import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
// @ts-expect-error - Contribution types missing
import renderMathInElement from 'katex/dist/contrib/auto-render';
import { ChevronRight, ArrowLeft } from "lucide-react";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { CategoryData, TopicSection, ContentBlock } from "@/src/data/types";
import { CodeSnippet } from "@/src/components/MathComponents";
import { TopicVisualizer } from "@/src/components/MathematicalVisualizations";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { cleanMathContent } from '@/src/lib/mathUtils';
import { getCategoryTheme } from "@/src/lib/themeUtils";
import { Hammer, Clock, Star } from "lucide-react";

import { InteractiveVisualizer } from "@/src/components/visualizers/core/InteractiveVisualizer";
import { VisualizerModal } from "@/src/components/visualizers/core/VisualizerModal";

// ── Custom Parser for Unified HTML ──
const ParsedContent = ({ html }: { html: string }) => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  if (!html) return null;
  // Match both <python-code> and <visualizer topic="..." />
  const segments = html.split(/(<python-code[\s\S]*?>[\s\S]*?<\/python-code>|<visualizer\s+topic="[^"]*"\s*\/>)/g);
  
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
          const match = segment.match(/topic="([^"]*)"/);
          const topic = match ? match[1] : '';

          return (
            <div key={idx} className="my-14 max-w-4xl">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTopic(topic)}
                className="w-full relative group overflow-hidden rounded-[28px] p-[1px] bg-gradient-to-br from-accent-premium/40 via-white/10 to-transparent transition-all duration-500 shadow-2xl hover:shadow-accent-premium/20"
              >
                <div className="relative bg-surface-container/80 backdrop-blur-xl rounded-[27px] px-8 py-10 flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-accent-premium/10 flex items-center justify-center group-hover:bg-accent-premium group-hover:text-white transition-all duration-500 shadow-inner">
                    <Hammer className="w-10 h-10" />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-text-premium mb-2">Interactive Laboratory: {topic}</h4>
                    <p className="text-sm text-muted-premium max-w-md mx-auto">
                      Step into the simulation to manipulate parameters and visualize the underlying geometry in real-time.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent-premium text-white text-[12px] font-black uppercase tracking-[0.2em] shadow-lg shadow-accent-premium/30 group-hover:scale-105 transition-transform">
                    Launch Experiment
                  </div>
                </div>
              </motion.button>
            </div>
          );
        }
        
        return <HtmlWithMath key={idx} html={segment} />;
      })}

      <VisualizerModal 
        isOpen={activeTopic !== null} 
        onClose={() => setActiveTopic(null)} 
        title={activeTopic || "Interactive Lab"}
      >
        {activeTopic && <InteractiveVisualizer topicId={activeTopic} />}
      </VisualizerModal>
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
      
      {/* ─── Minimal Header ─── */}
      {!problem.html?.trim().startsWith('<div class="premium-hero">') && (
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-on-surface">
            {problem.title}
          </h1>
        </div>
      )}

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

    </motion.div>
  );
};
