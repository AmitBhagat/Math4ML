import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Sidebar />
      <main className="pl-[280px]">
        <Outlet />
      </main>
    </div>
  );
};
