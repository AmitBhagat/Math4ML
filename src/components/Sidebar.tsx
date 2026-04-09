import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CLUSTERS, CATEGORY_META, getCategoryData } from "../data/topics";
import { TopicSection } from "../data/types";
import { getCategoryTheme } from "../lib/themeUtils";
import { ChevronDown, ChevronRight, LayoutPanelLeft, Loader2, Menu, X, Clock } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../hooks/useTheme";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Sidebar = ({ onClose, className }: { onClose?: () => void; className?: string }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // Explicitly derive params from path since useParams can be unreliable in parent layouts
  const currentClusterId = pathParts.length >= 1 ? pathParts[0] : undefined;
  const currentCategoryId = pathParts.length >= 2 ? pathParts[1] : (pathParts.length === 1 ? pathParts[0] : undefined);
  const currentProblemId = pathParts.length >= 3 ? pathParts[2] : undefined;

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(currentCategoryId || null);
  const [sectionsMap, setSectionsMap] = useState<Record<string, TopicSection[]>>({});
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});

  // Sync expanded state with route
  useEffect(() => {
    if (currentCategoryId) {
      setExpandedId(currentCategoryId);
    }
  }, [currentCategoryId]);

  // Load sections when a category is expanded
  useEffect(() => {
    if (expandedId && !sectionsMap[expandedId] && !loadingMap[expandedId]) {
      setLoadingMap(prev => ({ ...prev, [expandedId]: true }));
      getCategoryData(expandedId).then(data => {
        setSectionsMap(prev => ({ 
          ...prev, 
          [expandedId]: data ? data.sections : [] 
        }));
        setLoadingMap(prev => ({ ...prev, [expandedId]: false }));
      }).catch(() => {
        setSectionsMap(prev => ({ ...prev, [expandedId]: [] }));
        setLoadingMap(prev => ({ ...prev, [expandedId]: false }));
      });
    }
  }, [expandedId, sectionsMap, loadingMap]);

  const toggleExpand = (e: React.MouseEvent, catId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedId(expandedId === catId ? null : catId);
  };

  const handleCategoryClick = (e: React.MouseEvent, catId: string) => {
    // If it's already active, we toggle expansion instead of just navigating
    if (currentCategoryId === catId) {
      e.preventDefault();
      setExpandedId(expandedId === catId ? null : catId);
    }
    // If not active, let the Link handle navigation (useEffect will handle expansion)
  };

  return (
    <aside className={cn(
      "h-full backdrop-blur-3xl overflow-y-auto z-[100] desktop-drawer scroll-smooth custom-scrollbar flex flex-col shrink-0 transition-colors duration-500",
      isDark ? "bg-slate-900/40 border-r border-white/5" : "bg-white/40 border-r border-black/5",
      className
    )}>
      <div className="p-8 pb-10 mb-4 flex items-center justify-between relative overflow-hidden">
        {/* Glossy sheen on sidebar header */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
        
        <Link to="/" className="group flex flex-col gap-1 no-underline">
          <span className="font-headline font-bold text-3xl text-accent-premium tracking-tight group-hover:scale-105 transition-transform">
            Math4ML
          </span>
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-premium opacity-50 group-hover:opacity-100 transition-opacity">
            Mathematics for Machine Learning
          </span>
        </Link>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 text-muted-premium hover:text-text-premium hover:bg-bg-tertiary rounded-lg transition-all active:scale-95 translate-x-2"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="px-4 pb-12">
        {CLUSTERS.map((cluster) => (
          <div key={cluster.id} className="mb-6">
            <Link 
              to={`/${cluster.id}`}
              className="px-3 text-[12px] font-black uppercase tracking-[0.25em] text-muted-premium/40 mb-4 flex items-center gap-2 hover:text-accent-premium transition-colors no-underline"
            >
              <LayoutPanelLeft className="w-3 h-3" />
              {cluster.title}
            </Link>
            
            <div className="space-y-0.5">
              {cluster.categories.map((catId) => {
                const category = CATEGORY_META.find((c) => c.id === catId);
                if (!category) return null;
                
                const theme = getCategoryTheme(catId);
                const isActive = currentCategoryId === catId;
                const isExpanded = expandedId === catId;
                const isHovered = hoveredId === catId;
                
                const activeOrHover = isActive || isHovered || isExpanded;
                const sections = sectionsMap[catId] || [];
                const isLoading = loadingMap[catId];
                
                return (
                  <div key={catId} className="flex flex-col">
                    <div className={cn(
                      "group flex items-center gap-1 px-1 rounded-lg transition-all duration-200",
                      isActive ? "bg-accent-premium/5" : "hover:bg-bg-tertiary"
                    )}>
                      <Link
                        to={`/${cluster.id}/${catId}`}
                        onClick={(e) => handleCategoryClick(e, catId)}
                        onMouseEnter={() => setHoveredId(catId)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={cn(
                          "flex-1 flex items-center gap-2.5 px-2 py-2 text-base transition-all no-underline min-w-0",
                          isActive ? "font-semibold" : "text-muted-premium hover:text-text-premium"
                        )}
                        style={{ 
                          color: activeOrHover ? theme.primary : undefined,
                        }}
                      >
                        <span 
                          className={cn(
                            "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 shadow-sm",
                            activeOrHover ? "scale-125 opacity-100" : "bg-muted-premium/30 opacity-40"
                          )} 
                          style={{ 
                            backgroundColor: activeOrHover ? theme.primary : undefined,
                            boxShadow: activeOrHover ? `0 0 10px ${theme.primary}80` : undefined
                          }}
                        />
                        <span className="truncate">{category.title}</span>
                      </Link>

                      <button 
                        onClick={(e) => toggleExpand(e, catId)}
                        className="p-1.5 mr-1 rounded-md hover:bg-black/10 dark:hover:bg-white/5 transition-colors shrink-0"
                        title={isExpanded ? "Collapse" : "Expand"}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                        )}
                      </button>
                    </div>

                    {/* Animated Dropdown Content */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isExpanded ? "max-h-[1000px] opacity-100 mt-1 mb-2" : "max-h-0 opacity-0"
                    )}>
                      <div className="pl-7 pr-2 flex flex-col gap-0.5 border-l border-border-premium ml-3.5 py-1">
                        {isLoading ? (
                          <div className="py-2 flex items-center gap-2 text-[12px] text-muted-premium italic">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            Loading curriculum...
                          </div>
                        ) : sections.length > 0 ? (
                          sections.map((section) => {
                            const isTopicActive = currentProblemId === section.id;
                            const sectionColor = section.color || theme.primary;
                            
                            return (
                              <Link
                                key={section.id}
                                to={`/${cluster.id}/${catId}/${section.id}`}
                                className={cn(
                                  "group/item py-1.5 px-3 rounded-md text-[15px] leading-tight transition-all no-underline flex items-center gap-2",
                                  isTopicActive 
                                    ? "bg-accent-premium/10 font-medium"
                                    : "text-muted-premium hover:text-text-premium hover:bg-bg-tertiary"
                                )}
                                style={{
                                  color: isTopicActive ? sectionColor : undefined,
                                  backgroundColor: isTopicActive ? `${sectionColor}15` : undefined
                                }}
                              >
                                <span 
                                  className={cn(
                                    "w-1 h-1 rounded-full shrink-0 transition-transform duration-300",
                                    isTopicActive ? "scale-125" : "opacity-40 group-hover/item:opacity-100"
                                  )}
                                  style={{ backgroundColor: sectionColor }}
                                />
                                <span className="truncate">{section.title}</span>
                              </Link>
                            );
                          })
                        ) : (
                          <div className="py-2 px-3 text-[13px] text-muted-premium/60 italic flex items-center gap-2">
                             <Clock className="w-3 h-3" />
                             Available Soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

    </aside>
  );
};
