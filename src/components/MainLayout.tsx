import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useRef } from "react";
import { cn } from "../lib/utils";
import { TechnicalSpine } from "./TechnicalSpine";
import { useParams } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const pathParts = location.pathname.split('/').filter(Boolean);
  const isClusterRoot = pathParts.length === 1;

  return (
    <div className="h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 overflow-hidden">

      {/* ─── Top Navigation Layer (Horizontal Mega-Menu) ─── */}
      <Navbar />

      {/* ─── Main View Layer ─── */}
      <div className="flex-1 flex flex-col min-w-0 relative h-full overflow-hidden">

        <main
          id="main-content"
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth no-transition"
        >
          <div
            className={cn(
              "mx-auto pb-32 px-4 md:px-10 lg:px-16 transition-all duration-500",
              isClusterRoot ? "max-w-[1800px] pt-8" : "max-w-6xl pt-12 md:pt-20 lg:pt-16",
              location.pathname === "/" && "pt-8"
            )}
          >
            <Outlet />
          </div>

        </main>
      </div>
    </div>
  );
};
