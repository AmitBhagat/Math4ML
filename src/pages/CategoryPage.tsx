import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { CategoryData } from "@/src/data/types";
import { getCategoryData } from "@/src/data/topics";

interface CategoryPageProps {
  category?: CategoryData;
  categoryId?: string;
}

export const CategoryPage = ({ category: initialCategory, categoryId }: CategoryPageProps) => {
  const [category, setCategory] = useState<CategoryData | null>(initialCategory ?? null);
  const [loading, setLoading] = useState<boolean>(!initialCategory);

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
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-48 bg-gray-200 rounded" />
          <div className="h-12 w-96 bg-gray-200 rounded" />
          <div className="h-6 w-2/3 bg-gray-100 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-100 rounded" />
                <div className="h-4 w-5/6 bg-gray-100 rounded" />
                <div className="flex gap-2 mt-4">
                  <div className="h-6 w-16 bg-gray-100 rounded" />
                  <div className="h-6 w-20 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">


      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
        <Link to="/" className="hover:text-gray-900 hover:underline transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">{category.title}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          {category.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Practice Problems Grid -> Renamed to Key Concepts */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Key Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {category.sections.map((section) => (
              <Link
              key={section.id}
              to={`/${category.id}/${section.id}`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all flex flex-col h-full group"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.tags?.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-gray-600 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
                {section.level && (
                  <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                    section.level === 'Beginner' ? 'bg-green-50 text-green-700' :
                    section.level === 'Intermediate' ? 'bg-orange-50 text-orange-700' :
                    'bg-red-50 text-red-700'
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
