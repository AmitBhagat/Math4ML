import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import React, { Suspense } from "react";
import LoadingSkeleton from "./components/LoadingSkeleton";

const HomePage = React.lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const AsyncCategoryPage = React.lazy(() => import("./pages/AsyncCategoryPage").then(m => ({ default: m.AsyncCategoryPage })));
const ProblemPage = React.lazy(() => import("./pages/ProblemPage").then(m => ({ default: m.ProblemPage })));

function CategoryRoute() {
  const { categoryId } = useParams();
  if (!categoryId) return null;
  return <AsyncCategoryPage categoryId={categoryId} />;
}
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<LoadingSkeleton /> }><HomePage /></Suspense>} />
          
          {/* Problem Pages (placed before the category route to avoid conflicts) */}
          <Route path="/:categoryId/:problemId" element={<Suspense fallback={<LoadingSkeleton /> }><ProblemPage /></Suspense>} />

          {/* Category Pages — data loaded dynamically via param */}
          <Route path="/:categoryId" element={<Suspense fallback={<LoadingSkeleton /> }><CategoryRoute /></Suspense>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
