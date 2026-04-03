import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { TopicPage } from "./pages/TopicPage";

const LINEAR_ALGEBRA_SECTIONS = [
  {
    id: "Vectors",
    title: "Vectors",
    description: "The fundamental building blocks of linear algebra.",
    formula: "v = [v₁, v₂, ..., vₙ]",
    details: [
      "A vector is an ordered list of numbers. In machine learning, vectors often represent features of a single data point.",
      "Geometrically, a vector can be thought of as a point in space or an arrow starting from the origin.",
    ],
    code: "import numpy as np\n\nv = np.array([1, 2, 3])\nprint(f'Vector: {v}')",
  },
  {
    id: "Matrices",
    title: "Matrices",
    description: "Rectangular arrays of numbers representing linear transformations.",
    formula: "A = [aᵢⱼ]",
    details: [
      "Matrices are used to represent datasets where each row is an observation and each column is a feature.",
      "They also represent linear maps between vector spaces.",
    ],
    code: "A = np.array([[1, 2], [3, 4]])\nprint(f'Matrix A:\\n{A}')",
  },
  {
    id: "Eigenvalues",
    title: "Eigenvalues & Eigenvectors",
    description: "Characteristic values that define the scaling of a transformation.",
    formula: "Av = λv",
    details: [
      "Eigenvectors are vectors that only change by a scalar factor (the eigenvalue) when a linear transformation is applied.",
      "This concept is crucial for understanding stability and dimensionality reduction.",
    ],
    code: "eigenvalues, eigenvectors = np.linalg.eig(A)\nprint(f'Eigenvalues: {eigenvalues}')",
  },
];

const CALCULUS_SECTIONS = [
  {
    id: "Gradients",
    title: "Gradients",
    description: "The multi-variable generalization of the derivative.",
    formula: "∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]",
    details: [
      "The gradient points in the direction of steepest ascent. In ML, we move in the opposite direction (Gradient Descent) to minimize loss functions.",
    ],
    code: "def gradient_descent(x, lr=0.01):\n    return x - lr * compute_gradient(x)",
  },
];

const PROBABILITY_SECTIONS = [
  {
    id: "Distributions",
    title: "Probability Distributions",
    description: "Mathematical functions that describe the likelihood of different outcomes.",
    formula: "P(X = x)",
    details: [
      "Common distributions include Gaussian (Normal), Bernoulli, and Poisson. They model the noise and uncertainty in data.",
    ],
  },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/linear-algebra" replace />} />
          <Route 
            path="/linear-algebra" 
            element={<TopicPage topicTitle="Linear Algebra" sections={LINEAR_ALGEBRA_SECTIONS} />} 
          />
          <Route 
            path="/calculus" 
            element={<TopicPage topicTitle="Calculus" sections={CALCULUS_SECTIONS} />} 
          />
          <Route 
            path="/probability" 
            element={<TopicPage topicTitle="Probability & Stats" sections={PROBABILITY_SECTIONS} />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
