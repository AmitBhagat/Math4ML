import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-bg text-text-premium flex font-sans selection:bg-accent/20">
      {/* Sidebar - Fixed on desktop, Overlay on mobile */}
      <Sidebar />
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Mobile Drawer Sidebar */}
      <div className={cn(
        "fixed top-0 left-0 bottom-0 w-[var(--sidebar-w)] bg-bg-secondary z-[100] transform transition-transform duration-300 lg:hidden",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-[var(--sidebar-w)] min-w-0">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main id="main-content" className="flex-1 overflow-y-auto overflow-x-hidden relative no-transition">
          <div className="max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16 pb-32">
            <Outlet />
          </div>
        </main>

        <footer className="py-12 border-t border-border-premium bg-bg-secondary/30 mt-auto">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <p className="text-xs text-muted-premium font-light tracking-widest uppercase">
              Math4ML Curriculum © 2026 • Optimized for Deep Insight
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
