import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { TutorialSidebar } from "./TutorialSidebar";
import { HorizontalSubNav } from "./HorizontalSubNav";
import { cn } from "../lib/utils";

export const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-zinc-950 text-on-surface font-sans selection:bg-accent/10 overflow-hidden">
      {/* ─── Global Top Navigation ─── */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden relative">
        {/* ─── Persistent Left Sidebar (Hidden on Home) ─── */}
        {!isHome && <TutorialSidebar />}

        {/* ─── Main Content Column ─── */}
        <div className={cn(
          "flex-1 min-w-0 flex flex-col h-full overflow-hidden",
          !isHome ? "lg:pl-[300px]" : ""
        )}>
          <main className="flex-1 overflow-y-auto scroll-smooth">
            {!isHome && <HorizontalSubNav />}
            <div className={cn(
              "mx-auto pb-32 transition-all duration-500",
              isHome 
                ? "max-w-none px-0 pt-0" 
                : "max-w-screen-xl px-6 pt-12 md:px-12 lg:px-16 md:pt-16"
            )}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
