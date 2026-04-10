import React, { useState, useEffect } from "react";
import { VectorLab, TransformLab, MatrixCalcLab, NormsLab } from "./modules/BasicLA";
import { EigenLab, SystemsLab, BasisLab, SVDLab } from "./modules/AdvancedLA";
import { BayesGrid, GaltonBoard, ExpectationBeam, MarbleJar, EntropyLab, MLELab, KLDivLab, CovarianceLab } from "./modules/ProbabilityLab";
import { BackpropLab, AUCIntegralLab, ParameterSensitivity, StochasticOptimizer, JacobianLab, CurvatureLab, TaylorLab } from "./modules/CalculusLab";

interface DashboardProps {
  initialTab?: string;
}

const CATEGORIES = [
  { 
    id: "la", 
    label: "Linear Algebra", 
    icon: "Λ",
    tabs: ["vectors", "norms", "transform", "matcalc", "eigen", "systems", "basis", "svd"] 
  },
  { 
    id: "probability", 
    label: "Probability", 
    icon: "⚄",
    tabs: ["bayes", "galton", "mle", "kldiv", "entropy", "covariance", "expectation", "sampling"] 
  },
  { 
    id: "calculus", 
    label: "Calculus", 
    icon: "∫",
    tabs: ["backprop", "jacobian", "sensitivity", "curvature", "auc", "stochastic", "taylor"] 
  }
];

const ALL_TABS = [
  { id: 'vectors', label: '→ Vectors' },
  { id: 'norms', label: '∦ Vector Norms' },
  { id: 'transform', label: '⊞ Linear Transforms' },
  { id: 'matcalc', label: '× Matrix Arithmetic' },
  { id: 'eigen', label: 'λ Eigenvalues' },
  { id: 'systems', label: '∥ System of Equations' },
  { id: 'basis', label: '⊡ Basis & Span' },
  { id: 'svd', label: '◌ Matrix SVD' },
  { id: 'bayes', label: "≗ Bayes' Theorem" },
  { id: 'galton', label: '∢ Central Limit' },
  { id: 'expectation', label: '⚖ Expected Values' },
  { id: 'sampling', label: '⚄ Sampling' },
  { id: 'entropy', label: '⋈ Entropy Lab' },
  { id: 'mle', label: '⚚ Maximum Likelihood' },
  { id: 'kldiv', label: '⩕ KL-Divergence' },
  { id: 'covariance', label: '⊞ Covariance Matrix' },
  { id: 'backprop', label: '▽ Backpropagation' },
  { id: 'auc', label: '∫ Model AUC' },
  { id: 'sensitivity', label: '∂ Weight Sensitivity' },
  { id: 'stochastic', label: '⦿ Stochastic Gradient' },
  { id: 'jacobian', label: '⊗ Jacobian Fields' },
  { id: 'curvature', label: '⊕ Hessian Curvature' },
  { id: 'taylor', label: '≋ Taylor Series' }
];

export const MathToolsDashboard: React.FC<DashboardProps> = ({ initialTab = 'vectors' }) => {
  const [activeTab, setActiveTab] = useState(initialTab.toLowerCase());
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const cat = CATEGORIES.find(c => c.tabs.includes(activeTab));
    if (cat) {
      setActiveCategory(cat.id);
    } else {
      // Fallback: Default to first category if tab is unknown
      setActiveCategory(CATEGORIES[0].id);
    }
  }, [activeTab]);

  const DashboardHeader = () => (
    <header className="lab-header-modern">
      <div className="header-left">
        <div className="logo-mark">{CATEGORIES.find(c => c.id === activeCategory)?.icon || "Λ"}</div>
        <div className="header-text">
          <h1>{CATEGORIES.find(c => c.id === activeCategory)?.label || "Mathematical Laboratory"}</h1>
          <p>Precision analytical tools for modern machine learning intuition</p>
        </div>
      </div>
      <div className="category-chips">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            className={`cat-chip ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setActiveTab(cat.tabs[0]);
            }}
          >
            <span className="cat-icon">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </header>
  );

  const ToolNav = () => {
    const category = CATEGORIES.find(c => c.id === activeCategory);
    if (!category) return null;

    const filteredTabs = ALL_TABS.filter(t => category.tabs.includes(t.id));
    
    // Only show sub-nav if there's more than one tool in the category
    if (filteredTabs.length <= 1) return <div className="nav-spacer" />;

    return (
      <nav className="tool-nav-modular">
        {filteredTabs.map(t => (
          <button 
            key={t.id}
            className={`tool-tab ${activeTab === t.id ? 'active' : ''}`} 
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    );
  };

  return (
    <div className="math-lab-dashboard modern-layout">
      <DashboardHeader />
      <ToolNav />
      
      <div className="tab-content-area">
        {activeTab === 'vectors' && <VectorLab />}
        {activeTab === 'norms' && <NormsLab />}
        {activeTab === 'transform' && <TransformLab />}
        {activeTab === 'matcalc' && <MatrixCalcLab />}
        {activeTab === 'eigen' && <EigenLab />}
        {activeTab === 'systems' && <SystemsLab />}
        {activeTab === 'basis' && <BasisLab />}
        {activeTab === 'svd' && <SVDLab />}
        {activeTab === 'bayes' && <BayesGrid />}
        {activeTab === 'galton' && <GaltonBoard />}
        {activeTab === 'expectation' && <ExpectationBeam />}
        {activeTab === 'sampling' && <MarbleJar />}
        {activeTab === 'entropy' && <EntropyLab />}
        {activeTab === 'mle' && <MLELab />}
        {activeTab === 'kldiv' && <KLDivLab />}
        {activeTab === 'covariance' && <CovarianceLab />}
        {activeTab === 'backprop' && <BackpropLab />}
        {activeTab === 'auc' && <AUCIntegralLab />}
        {activeTab === 'sensitivity' && <ParameterSensitivity />}
        {activeTab === 'stochastic' && <StochasticOptimizer />}
        {activeTab === 'jacobian' && <JacobianLab />}
        {activeTab === 'curvature' && <CurvatureLab />}
        {activeTab === 'taylor' && <TaylorLab />}
      </div>

    </div>
  );
};
