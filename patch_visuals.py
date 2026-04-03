import re

filepath = r"c:\Users\abbha\Antigravity Projects\Math4ML\src\components\MathematicalVisualizations.tsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Prepare new components
new_components = """
const DistanceMetricsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-3xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible z-10">
      <circle cx="20" cy="80" r="4" fill="#3399ff" />
      <circle cx="80" cy="20" r="4" fill="#ff33cc" />
      {/* Manhattan */}
      <motion.path d="M 20 80 L 80 80 L 80 20" fill="none" stroke="#33cc33" strokeDasharray="4 4" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
      {/* Euclidean */}
      <motion.line x1="20" y1="80" x2="80" y2="20" stroke="#3399ff" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
    </svg>
  </div>
);

const DifferentiationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-2xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible z-10">
      <path d="M 10 90 Q 50 10 90 90" fill="none" stroke="#3399ff" strokeWidth="3" />
      <motion.line x1="20" y1="90" x2="80" y2="10" stroke="#ff33cc" strokeWidth="2"
        animate={{ y1:[90, 70, 90], y2:[10, -10, 10], x1:[20, 30, 20], x2:[80, 90, 80] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
  </div>
);

const PartialDerivativesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-3xl font-bold bg-transparent text-[#ff9933]">
    <GridBackground />
    <div className="z-10">∂f / ∂x<sub>i</sub></div>
  </div>
);

const ChainRuleVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 border border-gray-700 p-4 rounded-lg bg-black/50 text-[#33cc33]">
      f'(g(x)) · g'(x)
    </div>
  </div>
);

const JacobianHessianVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-3xl font-bold bg-transparent text-[#33cc33]">
    <GridBackground />
    <div className="z-10 bg-black/60 p-6 rounded text-center border-l-4 border-l-[#33cc33]">
      J <br/> <br/> ∇²f
    </div>
  </div>
);

const AreaUnderCurveVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible z-10">
      <path d="M 10 90 Q 50 10 90 90 L 90 100 L 10 100 Z" fill="rgba(255, 51, 204, 0.4)" stroke="none" />
      <path d="M 10 90 Q 50 10 90 90" fill="none" stroke="#ff33cc" strokeWidth="3" />
      <motion.rect x="10" y="50" width="80" height="50" fill="transparent" stroke="#3399ff" strokeDasharray="3 3"
        animate={{ width: [0, 80, 0] }} transition={{ duration: 4, repeat: Infinity }} />
    </svg>
  </div>
);

const SampleSpaceVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 border border-[#3399ff] p-8 rounded-lg relative bg-black/40">
       <span className="absolute top-2 left-2 text-[#3399ff] text-sm">S</span>
       <div className="w-16 h-16 rounded-full border-2 border-[#ff33cc] bg-[rgba(255,51,204,0.2)] flex items-center justify-center text-[#ff33cc]">A</div>
    </div>
  </div>
);

const BayesTheoremVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-[#3399ff]">
    <GridBackground />
    <div className="z-10 text-center bg-black/60 p-4 border border-gray-700 rounded-lg">
      <div className="border-b border-[#3399ff] py-1 mb-1">P(B|A) P(A)</div>
      <div>P(B)</div>
    </div>
  </div>
);

const DescriptiveStatsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-2xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 flex gap-4 text-[#ff9933]">
       <span>μ</span> <span>σ²</span>
    </div>
  </div>
);

const InferentialStatsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-[#33cc33]">
    <GridBackground />
    <div className="z-10 text-center bg-black/60 shadow p-6 rounded">
      x̄ ± Z(σ/√n)
    </div>
  </div>
);

const HypothesisTestingVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-2xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10">p <span className="text-[#ff33cc]">&lt;</span> α</div>
  </div>
);

const CorrelationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible z-10">
       <circle cx="20" cy="80" r="3" fill="#3399ff" />
       <circle cx="40" cy="50" r="3" fill="#3399ff" />
       <circle cx="60" cy="40" r="3" fill="#3399ff" />
       <circle cx="80" cy="20" r="3" fill="#3399ff" />
       <motion.line x1="10" y1="90" x2="90" y2="10" stroke="#ff33cc" strokeWidth="2" strokeDasharray="5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  </div>
);
"""

# Insert right before export const TopicVisualizer
content = content.replace("export const TopicVisualizer", new_components + "\nexport const TopicVisualizer")

# Generate switch statement cases
cases = """
    case "DistanceMetrics": return <DistanceMetricsVisual />;
    case "Differentiation": return <DifferentiationVisual />;
    case "PartialDerivatives": return <PartialDerivativesVisual />;
    case "ChainRule": return <ChainRuleVisual />;
    case "JacobianHessian": return <JacobianHessianVisual />;
    case "AreaUnderCurve": return <AreaUnderCurveVisual />;
    case "SampleSpace": return <SampleSpaceVisual />;
    case "BayesTheorem": return <BayesTheoremVisual />;
    case "DescriptiveStats": return <DescriptiveStatsVisual />;
    case "InferentialStats": return <InferentialStatsVisual />;
    case "HypothesisTesting": return <HypothesisTestingVisual />;
    case "Correlation": return <CorrelationVisual />;
"""

# Insert into the switch block
content = content.replace('default:', cases.strip() + '\n    default:')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Patch applied.")
