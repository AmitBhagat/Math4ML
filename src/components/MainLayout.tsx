import { Outlet, useLocation, useParams } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "./Search";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showScrollTitle, setShowScrollTitle] = useState(false);
  const location = useLocation();
  const { problemId } = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  // Scroll listener for Topbar Title
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setShowScrollTitle(scrollContainerRef.current.scrollTop > 150);
      }
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedTitle = problemId?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="h-screen flex bg-transparent text-text-premium font-sans selection:bg-accent/20 overflow-hidden">
      
      {/* ─── Sidebar Layer (Universal Push) ─── */}
      <div 
        className={cn(
          "h-full transition-all duration-500 ease-in-out z-[100] shrink-0 overflow-hidden",
          isSidebarOpen ? "w-[var(--sidebar-w)] opacity-100" : "w-0 opacity-0 border-none"
        )}
      >
        <Sidebar 
          onClose={() => setIsSidebarOpen(false)} 
          className="w-[var(--sidebar-w)]"
        />
      </div>

      {/* ─── Main View Layer ─── */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full">
        
        {/* ─── Top Control Bar (Sticky Glass) ─── */}
        <header className="sticky top-0 z-[60] w-full bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center justify-between h-14 px-6 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-premium text-muted-premium hover:text-accent-premium hover:border-accent-premium/40 transition-all active:scale-95 group"
            >
              <Menu className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[12px] font-black uppercase tracking-widest hidden sm:block">Menu</span>
            </button>
            <div className="hidden sm:block">
              <Search />
            </div>
          </div>

          {/* Centered Scroll Title */}
          <div 
            className={cn(
              "absolute left-1/2 -translate-x-1/2 transition-all duration-500",
              showScrollTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            )}
          >
            <span className="text-[13px] font-black uppercase tracking-[0.25em] text-on-surface truncate max-w-[200px] sm:max-w-md">
              {formattedTitle}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </header>
        
        <main 
          id="main-content" 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-transition"
        >
          <div 
            className={cn(
              "max-w-[1400px] mx-auto pb-32 px-4 md:px-10 lg:px-12",
              location.pathname === "/" ? "pt-0" : "pt-4 md:pt-10 lg:pt-12"
            )}
          >
            <Outlet />
          </div>

          <footer className="py-12 border-t border-border-premium bg-bg-secondary/30 mt-auto">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
              <p className="text-sm text-muted-premium font-light tracking-widest uppercase">
                Math4ML Curriculum © 2026 • Optimized for Deep Insight
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
