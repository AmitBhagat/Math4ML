import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import { cn } from "../lib/utils";
import { TechnicalSpine } from "./TechnicalSpine";
import { useParams } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 overflow-hidden">

      {/* ─── Top Navigation Layer (Horizontal Mega-Menu) ─── */}
      <Navbar />

      {/* ─── Technical Spine (Contextual Topic Rail) ─── */}
      <TechnicalSpine />

      {/* ─── Main View Layer ─── */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full overflow-hidden">

        <main
          id="main-content"
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-transition"
        >
          <div
            className={cn(
              "max-w-6xl mx-auto pb-32 px-4 md:px-10 lg:px-16",
              location.pathname === "/" ? "pt-8" : "pt-12 md:pt-20 lg:pt-16"
            )}
          >
            <Outlet />
          </div>

          <footer className="py-12 border-t border-border bg-bg-secondary/30 mt-auto">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
              <p className="text-sm text-muted-foreground font-light tracking-widest uppercase">
                Math4ML Curriculum © 2026 • Optimized for Deep Insight
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};
