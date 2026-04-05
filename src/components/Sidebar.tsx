import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CLUSTERS, CATEGORY_META, CategoryMeta } from "../data/topics";
import { getCategoryTheme } from "../lib/themeUtils";
import { ChevronRight, LayoutPanelLeft } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Sidebar = () => {
  const location = useLocation();
  const { clusterId: currentClusterId, categoryId: currentCategoryId } = useParams();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[var(--sidebar-w)] bg-bg-secondary border-r border-border-premium overflow-y-auto z-[100] hidden lg:block scroll-smooth">
      <div className="p-5 pb-6 mb-4 border-b border-border-premium">
        <Link to="/" className="group flex flex-col gap-0.5 no-underline">
          <span className="font-sans font-semibold text-lg text-accent-premium tracking-tight group-hover:text-accent-premium-light transition-colors">
            Math4ML
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-premium font-light group-hover:text-text-premium transition-colors">
            Mathematics for Machine Learning
          </span>
        </Link>
      </div>

      <nav className="px-4 pb-12">
        {CLUSTERS.map((cluster) => (
          <div key={cluster.id} className="mb-8">
            <Link 
              to={`/${cluster.id}`}
              className="px-3 text-[11px] font-black uppercase tracking-[0.2em] text-muted-premium/60 mb-4 flex items-center gap-2 hover:text-accent-premium transition-colors no-underline"
            >
              <LayoutPanelLeft className="w-3 h-3" />
              {cluster.title}
            </Link>
            
            <div className="space-y-1">
              {cluster.categories.map((catId) => {
                const category = CATEGORY_META.find((c) => c.id === catId);
                if (!category) return null;
                
                const theme = getCategoryTheme(catId);
                const isActive = currentCategoryId === catId;
                const isHovered = hoveredId === catId;
                
                const activeOrHover = isActive || isHovered;
                
                return (
                  <Link
                    key={catId}
                    to={`/${cluster.id}/${catId}`}
                    onMouseEnter={() => setHoveredId(catId)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 border border-transparent group no-underline",
                      isActive 
                        ? "font-medium" 
                        : "text-muted-premium hover:text-text-premium hover:border-border-premium"
                    )}
                    style={{ 
                      backgroundColor: activeOrHover ? `${theme.primary}15` : 'transparent',
                      color: activeOrHover ? theme.primary : undefined,
                      borderColor: activeOrHover ? `${theme.primary}30` : 'transparent'
                    }}
                  >
                    <span 
                      className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0 transition-all",
                        activeOrHover ? "scale-125 shadow-[0_0_8px_rgba(88,166,255,0.4)]" : "bg-muted-premium/30 group-hover:bg-muted-premium"
                      )} 
                      style={{ backgroundColor: activeOrHover ? theme.primary : undefined }}
                    />
                    {category.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};
