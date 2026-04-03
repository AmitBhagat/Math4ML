import { HashRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AsyncCategoryPage } from "./pages/AsyncCategoryPage";
import { ProblemPage } from "./pages/ProblemPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
          {/* Category Pages — data loaded dynamically */}
          <Route path="/linear-algebra" element={<AsyncCategoryPage categoryId="linear-algebra" />} />
          <Route path="/calculus"       element={<AsyncCategoryPage categoryId="calculus" />} />
          <Route path="/probability"    element={<AsyncCategoryPage categoryId="probability" />} />
          <Route path="/statistics"     element={<AsyncCategoryPage categoryId="statistics" />} />
          
          {/* Problem Pages */}
          <Route path="/problems/:categoryId/:problemId" element={<ProblemPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
