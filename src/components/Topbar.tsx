import { Link, useParams, useLocation } from "react-router-dom";
import { ChevronRight, Home, Menu } from "lucide-react";
import { CLUSTERS, CATEGORY_META } from "../data/topics";
import { ThemeToggle } from "./ThemeToggle";

export const Topbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  const { clusterId, categoryId, problemId } = useParams();
  const location = useLocation();

  const cluster = CLUSTERS.find(c => c.id === clusterId);
  const category = CATEGORY_META.find(c => c.id === categoryId);

  return (
    <header 
      className="sticky top-0 z-[50] w-full bg-bg-secondary/80 backdrop-blur-md border-b border-border-premium flex items-center justify-between h-14 px-6 md:px-12"
    >
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-muted-premium hover:text-text-premium transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap no-scrollbar py-2">
          <Link to="/" className="text-accent-premium hover:text-accent-premium-light transition-colors p-1 rounded-md hover:bg-accent-premium/5">
            <Home className="w-3.5 h-3.5" />
          </Link>
          
          <ChevronRight className="w-3 h-3 text-muted-premium/40 shrink-0" />
          
          {cluster && (
            <>
              <Link to={`/${cluster.id}`} className="text-[11px] font-black uppercase tracking-widest text-accent-premium/80 hover:text-accent-premium">
                {cluster.title}
              </Link>
              <ChevronRight className="w-3 h-3 text-muted-premium/40 shrink-0" />
            </>
          )}

          {category && (
            <Link 
              to={cluster ? `/${cluster.id}/${category.id}` : `/${category.id}`} 
              className="text-[11px] font-black uppercase tracking-widest text-accent-premium/80 hover:text-accent-premium"
            >
              {category.title}
            </Link>
          )}

          {problemId && (
            <>
              <ChevronRight className="w-3 h-3 text-muted-premium/40 shrink-0" />
              <span className="text-[11px] font-black uppercase tracking-widest text-muted-premium/60 truncate max-w-[240px]">
                {problemId.replace(/-/g, ' ')}
              </span>
            </>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
};
