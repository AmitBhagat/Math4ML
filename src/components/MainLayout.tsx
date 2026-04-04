import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};
