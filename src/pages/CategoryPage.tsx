import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Hammer, Clock, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { CategoryData } from "@/src/data/types";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { getCategoryTheme } from "@/src/lib/themeUtils";

interface CategoryPageProps {
  category?: CategoryData;
  categoryId?: string;
}

export const CategoryPage = ({ category: initialCategory, categoryId: propCategoryId }: CategoryPageProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const clusterId = params.clusterId;
  const categoryId = propCategoryId || params.categoryId;
  
  const [category, setCategory] = useState<CategoryData | null>(initialCategory ?? null);
  const [loading, setLoading] = useState<boolean>(!initialCategory);

  const cluster = CLUSTERS.find(c => c.id === clusterId) || 
                  CLUSTERS.find(c => c.categories.includes(categoryId || ''));

  useEffect(() => {
    if (initialCategory) return; // already provided
    if (!categoryId) return;
    let mounted = true;
    setLoading(true);
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
  }, [initialCategory, categoryId]);

  if (loading || !category) {
    if (!loading && !category) {
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
              This curriculum category is currently being synthesized for the <span className="text-accent-premium font-medium">Mathematics & ML</span> portal. 
              Advanced research and interactive modules are coming soon.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-premium text-[10px] font-black uppercase tracking-widest text-muted-premium">
                <Clock className="w-3 h-3" /> Synthesis in Progress
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-premium/5 border border-accent-premium/20 text-[10px] font-black uppercase tracking-widest text-accent-premium">
                <Star className="w-3 h-3" /> High Fidelity Content
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
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
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 lg:px-12 py-12 md:py-24">
        <div className="animate-pulse space-y-10">
          <div className="h-6 w-48 bg-surface-container rounded" />
          <div className="h-16 w-3/4 bg-surface-container rounded" />
          <div className="h-24 w-full bg-surface-container-low rounded" />
        </div>
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
      {/* ─── Breadcrumbs & Header ─── */}
      <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-premium mb-4">
          <Link to={`/${clusterId}`} className="hover:text-accent transition-colors">
            {cluster?.title}
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-on-surface">{category.title}</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface tracking-tight leading-tight">
          {category.title}
        </h1>
      </div>

      {/* ─── Story Intro ─── */}
      <div className="prose prose-zinc dark:prose-invert max-w-none mb-20">
        <p className="text-xl md:text-2xl text-muted-premium leading-relaxed font-medium">
          {category.description}
        </p>
        
        {category.introHtml && (
          <div 
            className="mt-12 pt-12 border-t border-black/5 dark:border-white/5" 
            dangerouslySetInnerHTML={{ __html: category.introHtml }} 
          />
        )}
      </div>

      {/* ─── Table of Contents (GFG Style) ─── */}
      <div className="mb-24">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-[12px] font-black text-on-surface uppercase tracking-[0.3em]">Module Curriculum</h2>
          <div className="h-px flex-grow bg-black/5 dark:bg-white/5"></div>
        </div>
        
        <div className="grid gap-3">
          {category.sections.map((section, idx) => {
            const sectionColor = section.color || 'var(--category-primary)';
            return (
              <Link
                key={section.id}
                to={cluster ? `/${cluster.id}/${category.id}/${section.id}` : `/${category.id}/${section.id}`}
                className="group flex items-center justify-between p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl hover:border-accent transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xl font-black italic text-muted-premium/20 group-hover:text-accent/30 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-on-surface group-hover:text-accent transition-colors">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-wrap gap-2">
                    {section.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-black/5 dark:bg-white/5 text-muted-premium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="size-5 text-muted-premium group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ─── Begin Logic ─── */}
      {category.sections[0] && (
        <div className="p-12 bg-accent rounded-[2.5rem] text-center text-white shadow-2xl shadow-accent/20">
          <h3 className="text-3xl font-headline font-black mb-6">Master this Domain</h3>
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
            Dive into the first core module and begin your journey through the technical foundations of {category.title}.
          </p>
          <Link
            to={cluster ? `/${cluster.id}/${category.id}/${category.sections[0].id}` : `/${category.id}/${category.sections[0].id}`}
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all group scale-100 hover:scale-105 active:scale-95"
          >
            Begin Journey
            <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
};
