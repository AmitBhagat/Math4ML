import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProblemPage } from "./pages/ProblemPage";
import { CATEGORIES } from "./data/topics";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* Category Pages */}
          <Route 
            path="/linear-algebra" 
            element={<CategoryPage category={CATEGORIES["linear-algebra"]} />} 
          />
          <Route 
            path="/calculus" 
            element={<CategoryPage category={CATEGORIES["calculus"]} />} 
          />
          <Route 
            path="/probability" 
            element={<CategoryPage category={CATEGORIES["probability"]} />} 
          />
          <Route 
            path="/statistics" 
            element={<CategoryPage category={CATEGORIES["statistics"]} />} 
          />
          
          {/* Problem Pages */}
          <Route 
            path="/problems/:categoryId/:problemId" 
            element={<ProblemPage />} 
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
