import { useState, useEffect } from "react";
import { getCategoryData } from "@/src/data/topics";
import { CategoryData } from "@/src/data/types";
import { CategoryPage } from "./CategoryPage";

interface AsyncCategoryPageProps {
  categoryId: string;
}

export const AsyncCategoryPage = ({ categoryId }: AsyncCategoryPageProps) => {
  const [category, setCategory] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [categoryId]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-48 bg-surface-container rounded" />
          <div className="h-12 w-96 bg-surface-container rounded" />
          <div className="h-6 w-2/3 bg-surface-container-low rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface-container rounded-xl p-6 border border-border-premium space-y-3">
                <div className="h-5 w-3/4 bg-surface-container-high rounded" />
                <div className="h-4 w-full bg-surface-container-low rounded" />
                <div className="h-4 w-5/6 bg-surface-container-low rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <CategoryPage category={category ?? undefined} categoryId={categoryId} />;
};
