import { Link } from "react-router-dom";
import { Layers, FunctionSquare, BarChart3, Dice5, ArrowRight } from "lucide-react";

const TOPICS = [
  {
    title: "Linear Algebra",
    description: "Vectors, matrices, eigenvalues, SVD — the foundation for ML algorithms",
    icon: Layers,
    link: "/linear-algebra",
    tags: ["Vectors", "Matrices", "Eigenvalues", "SVD", "Norms"]
  },
  {
    title: "Probability",
    description: "Sample spaces, Bayes' theorem, distributions — measuring uncertainty",
    icon: Dice5,
    link: "/probability",
    tags: ["Bayes", "Distributions", "Conditional", "Events"]
  },
  {
    title: "Statistics",
    description: "Descriptive & inferential stats, hypothesis testing, correlation",
    icon: BarChart3,
    link: "/statistics",
    tags: ["Hypothesis", "ANOVA", "Correlation", "Sampling"]
  },
  {
    title: "Calculus",
    description: "Derivatives, gradients, chain rule — optimizing ML models",
    icon: FunctionSquare,
    link: "/calculus",
    tags: ["Gradient Descent", "Chain Rule", "Jacobian", "AUC"]
  }
];

export const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Mathematics Visualizer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Master math concepts through interactive visualizations. See calculus, algebra, probability, and statistics come to life with step-by-step animations.
        </p>
        <Link 
          to="/linear-algebra" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
        >
          Start Learning 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Section */}
      <div id="categories">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse Topics</h2>
        <p className="text-gray-600 mb-8">Explore mathematics concepts organized by the GfG Data Science curriculum</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOPICS.map((topic) => (
            <Link 
              key={topic.title} 
              to={topic.link}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 border border-gray-100 rounded-lg flex items-center justify-center">
                    <topic.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{topic.title}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map(tag => (
                  <span key={tag} className="text-xs bg-slate-100 text-gray-600 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
