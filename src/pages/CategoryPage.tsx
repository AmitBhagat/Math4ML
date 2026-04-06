import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, Hammer, Clock, Star, ArrowLeft } from "lucide-react";
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
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
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
      className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12"
      style={{
        '--category-primary': getCategoryTheme(categoryId || '').primary,
        '--category-secondary': getCategoryTheme(categoryId || '').secondary,
      } as React.CSSProperties}
    >


      {/* ─── Minimal Header ─── */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-on-surface">
          {category.title}
        </h1>
      </div>

      {/* Key Concepts Grid */}
      <div className="mb-24">
        <div className="flex items-center gap-6 mb-12 border-b border-black/5 dark:border-white/5 pb-6">
          <h2 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">Key Concepts Breakdown</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-accent-teal/30 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.sections.map((section) => (
              <Link
              key={section.id}
              to={cluster ? `/${cluster.id}/${category.id}/${section.id}` : `/${category.id}/${section.id}`}
              className="group bg-surface-container p-10 rounded border-none hover:bg-surface-container-high shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-headline font-black text-xl text-on-surface group-hover:text-accent-teal transition-colors">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {section.tags?.map((tag) => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-background/50 text-on-surface-variant px-3 py-1.5 rounded">
                    {tag}
                  </span>
                ))}
                {section.level && (
                  <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded ${
                    section.level === 'Beginner' ? 'bg-accent-teal/10 text-accent-teal' :
                    section.level === 'Intermediate' ? 'bg-accent-purple/10 text-accent-purple' :
                    'bg-rose-500/10 text-rose-500'
                  }`}>
                    {section.level}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
