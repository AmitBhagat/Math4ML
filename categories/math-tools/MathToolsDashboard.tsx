import React, { useState, useEffect } from "react";
import { VectorLab, TransformLab, MatrixCalcLab, NormsLab } from "./modules/BasicLA";
import { EigenLab, SystemsLab, BasisLab, SVDLab } from "./modules/AdvancedLA";
import { 
  RandomVariableLab, DistributionsLab, JointDistributionsLab, ConditionalProbLab, 
  IndependenceLab, ExpectationLab, VarianceLab, LLNLab, CLTLab, BayesLab 
} from "./modules/ProbabilityLab";
import { 
  MLELab, MAPLab, BiasVarianceLab, HypothesisTestingLab, 
  TTestLab, ChiSquareLab, ANOVALab, ABTestingLab, ConfidenceIntervalLab 
} from "./modules/StatisticsLab";
import { DerivativeLab, PartialDerivativeLab, GradientLab, ChainRuleLab, JacobianLab, HessianLab, TaylorLab, CriticalPointsLab, IntegralLab } from "./modules/CalculusLab";

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
    tabs: ["rv", "distributions", "joint", "conditional", "independence", "expectation", "variance", "lln", "clt", "bayes"] 
  },
  { 
    id: "calculus", 
    label: "Calculus", 
    icon: "∫",
    tabs: ["derivatives", "partial", "gradient", "chain", "jacobian", "hessian", "taylor", "critical", "integrals"] 
  },
  { 
    id: "statistics", 
    label: "Statistics", 
    icon: "θ",
    tabs: ["mle", "map", "biasvariance", "hyp", "t-test", "chi-square", "anova", "ab-test", "ci"] 
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
  { id: 'rv', label: "⚀ Random Variables" },
  { id: 'distributions', label: "∿ Distributions" },
  { id: 'joint', label: "⊞ Joint Distributions" },
  { id: 'conditional', label: "⩕ Conditional Prob" },
  { id: 'independence', label: "⩖ Independence" },
  { id: 'expectation', label: "⚖ Expectation" },
  { id: 'variance', label: "↔ Variance Lab" },
  { id: 'lln', label: "⚄ Large Numbers" },
  { id: 'clt', label: "∢ Central Limit" },
  { id: 'bayes', label: "≗ Bayes Theorem" },
  { id: 'derivatives', label: '∂ Derivatives' },
  { id: 'partial', label: '∂ Partial Derivatives' },
  { id: 'gradient', label: '∇ Gradient Fields' },
  { id: 'chain', label: '🔗 Chain Rule' },
  { id: 'jacobian', label: '⊗ Jacobian Matrix' },
  { id: 'hessian', label: '⊕ Hessian Matrix' },
  { id: 'taylor', label: '≋ Taylor Series' },
  { id: 'critical', label: '📍 Critical Points' },
  { id: 'integrals', label: '∫ Integral Calculus' },
  { id: 'mle', label: "⚚ Max Likelihood" },
  { id: 'map', label: "≗ MAP Estimation" },
  { id: 'biasvariance', label: "≋ Bias-Variance" },
  { id: 'hyp', label: "⚖ Hypothesis Test" },
  { id: 't-test', label: "∿ T-Distribution" },
  { id: 'chi-square', label: "χ² Chi-Square" },
  { id: 'anova', label: "⊞ ANOVA Lab" },
  { id: 'ab-test', label: "⇄ A/B Testing" },
  { id: 'ci', label: "↔ Confidence Intervals" }
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
        {activeTab === 'rv' && <RandomVariableLab />}
        {activeTab === 'distributions' && <DistributionsLab />}
        {activeTab === 'joint' && <JointDistributionsLab />}
        {activeTab === 'conditional' && <ConditionalProbLab />}
        {activeTab === 'independence' && <IndependenceLab />}
        {activeTab === 'expectation' && <ExpectationLab />}
        {activeTab === 'variance' && <VarianceLab />}
        {activeTab === 'lln' && <LLNLab />}
        {activeTab === 'clt' && <CLTLab />}
        {activeTab === 'bayes' && <BayesLab />}
        {activeTab === 'derivatives' && <DerivativeLab />}
        {activeTab === 'partial' && <PartialDerivativeLab />}
        {activeTab === 'gradient' && <GradientLab />}
        {activeTab === 'chain' && <ChainRuleLab />}
        {activeTab === 'jacobian' && <JacobianLab />}
        {activeTab === 'hessian' && <HessianLab />}
        {activeTab === 'taylor' && <TaylorLab />}
        {activeTab === 'critical' && <CriticalPointsLab />}
        {activeTab === 'integrals' && <IntegralLab />}
        {activeTab === 'mle' && <MLELab />}
        {activeTab === 'map' && <MAPLab />}
        {activeTab === 'biasvariance' && <BiasVarianceLab />}
        {activeTab === 'hyp' && <HypothesisTestingLab />}
        {activeTab === 't-test' && <TTestLab />}
        {activeTab === 'chi-square' && <ChiSquareLab />}
        {activeTab === 'anova' && <ANOVALab />}
        {activeTab === 'ab-test' && <ABTestingLab />}
        {activeTab === 'ci' && <ConfidenceIntervalLab />}
      </div>

    </div>
  );
};
