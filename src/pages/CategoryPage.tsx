import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { CategoryData } from "@/src/data/types";
import { getCategoryData, CLUSTERS } from "@/src/data/topics";
import { getCategoryTheme } from "@/src/lib/themeUtils";

interface CategoryPageProps {
  category?: CategoryData;
  categoryId?: string;
}

export const CategoryPage = ({ category: initialCategory, categoryId: propCategoryId }: CategoryPageProps) => {
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
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="animate-pulse space-y-10">
          <div className="h-6 w-48 bg-surface-container rounded" />
          <div className="h-16 w-3/4 bg-surface-container rounded" />
          <div className="h-24 w-full bg-surface-container-low rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface-container rounded p-8 space-y-6">
                <div className="h-6 w-3/4 bg-surface-container-high rounded" />
                <div className="h-4 w-full bg-surface-container-low rounded" />
                <div className="h-4 w-5/6 bg-surface-container-low rounded" />
                <div className="flex gap-4 mt-8">
                  <div className="h-8 w-20 bg-surface-container-low rounded" />
                  <div className="h-8 w-24 bg-surface-container-low rounded" />
                </div>
              </div>
            ))}
          </div>
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
        <span className="text-on-surface">{category.title}</span>
      </div>

      {/* Header */}
      <div 
        className="premium-hero"
        style={{
          '--category-primary': getCategoryTheme(categoryId || '').primary,
          '--category-secondary': getCategoryTheme(categoryId || '').secondary,
          padding: '40px'
        } as React.CSSProperties}
      >
        <h1 className="text-3xl md:text-5xl font-headline font-black text-on-surface tracking-tighter leading-none mb-0">
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
