import React from "react";
import { motion } from "motion/react";
import { VisualizerTheme } from "./visualizers/CanvasBase";

interface VisualizerProps {
  topicId: string;
  theme?: VisualizerTheme;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const GridBackground = () => (
  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse" x="-10" y="-10">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect x="-400" y="-400" width="800" height="800" fill="url(#grid)" />
    {/* Global X and Y Axes */}
    <line x1="-400" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="0" y1="-400" x2="0" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
);

const VectorsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* X and Y Axis */}
      <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.0)" strokeWidth="2" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="rgba(255,255,255,0.0)" strokeWidth="2" />
      
      {/* Animated Vector */}
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <line x1="0" y1="0" x2="60" y2="-80" stroke="#3399ff" strokeWidth="4" strokeLinecap="round" />
        <polygon points="60,-80 50,-70 55,-65" fill="#3399ff" transform="rotate(35 60 -80) scale(1.5)" />
      </motion.g>

      {/* Origin Dot representing zero vector */}
      <circle cx="0" cy="0" r="4" fill="#ffffff" />
    </svg>
  </div>
);

const VectorArithmeticVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* Vector A */}
      <motion.line x1="0" y1="0" x2="50" y2="-20" stroke="#3399ff" strokeWidth="4" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      {/* Vector B */}
      <motion.line x1="0" y1="0" x2="-20" y2="-60" stroke="#ff33cc" strokeWidth="4" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
      {/* Resultant A + B */}
      <motion.line x1="0" y1="0" x2="30" y2="-80" stroke="#33cc33" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
      
      {/* Parallelogram Guides */}
      <motion.line x1="50" y1="-20" x2="30" y2="-80" stroke="#ff33cc" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
      <motion.line x1="-20" y1="-60" x2="30" y2="-80" stroke="#3399ff" strokeWidth="2" strokeDasharray="2 2" opacity="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
    </svg>
  </div>
);

const MatricesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center text-gray-100 font-mono text-3xl">
    <GridBackground />
    <motion.div 
      className="flex gap-4 items-center z-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="text-6xl text-gray-100">[</div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center">
        <motion.div animate={{ color: ["#ffffff", "#3399ff", "#ffffff"] }} transition={{ duration: 2, repeat: Infinity }}>1</motion.div>
        <motion.div animate={{ color: ["#ffffff", "#ff33cc", "#ffffff"] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }}>2</motion.div>
        <motion.div animate={{ color: ["#ffffff", "#33cc33", "#ffffff"] }} transition={{ duration: 2, delay: 1.0, repeat: Infinity }}>3</motion.div>
        <motion.div animate={{ color: ["#ffffff", "#ff9933", "#ffffff"] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }}>4</motion.div>
      </div>
      <div className="text-6xl text-gray-100">]</div>
    </motion.div>
  </div>
);

const EigenvaluesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      
      {/* Eigenvector expanding and shrinking along its line */}
      <line x1="-100" y1="100" x2="100" y2="-100" stroke="#3399ff" strokeWidth="2" strokeDasharray="4" opacity="0.3" />
      
      <motion.g
        animate={{ scale: [1, 2, -1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="0" y1="0" x2="40" y2="-40" stroke="#3399ff" strokeWidth="5" strokeLinecap="round" />
        <circle cx="40" cy="-40" r="4" fill="#60a5fa" />
      </motion.g>

      {/* Non-eigenvector rotating */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <line x1="0" y1="0" x2="-30" y2="-60" stroke="#ff33cc" strokeWidth="4" strokeLinecap="round" />
        <circle cx="-30" cy="-60" r="4" fill="#f472b6" />
      </motion.g>
    </svg>
  </div>
);

const VectorNormsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 100 100" className="overflow-visible z-10">
      {/* Destination Point */}
      <circle cx="90" cy="10" r="4" fill="#ffffff" />
      <circle cx="10" cy="90" r="4" fill="#ffffff" />
      
      {/* L2 Norm (Euclidean) */}
      <motion.line 
        x1="10" y1="90" x2="90" y2="10" 
        stroke="#3399ff" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* L1 Norm (Manhattan) */}
      <motion.path 
        d="M 10 90 L 10 50 L 50 50 L 50 10 L 90 10" 
        fill="none" stroke="#ff33cc" strokeWidth="4" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </svg>
  </div>
);

const VectorSpacesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <motion.div 
      className="absolute bg-[#3399ff]/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 overflow-hidden"
      animate={{ 
        width: ["0%", "80%", "80%"], 
        height: ["0%", "80%", "80%"],
        rotateX: [60, 60, 60],
        rotateZ: [0, 45, 0]
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        transformPerspective: 800,
        transformStyle: "preserve-3d"
      }}
    >
      <div className="w-full h-full border border-[#3399ff]/50" />
      <div className="absolute w-full h-[2px] bg-blue-400 top-1/2 left-0 shadow-[0_0_10px_#60a5fa]"/>
      <div className="absolute w-[2px] h-full bg-pink-400 top-0 left-1/2 shadow-[0_0_10px_#f472b6]"/>
    </motion.div>
  </div>
);

const LinearMappingsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <motion.div 
      className="w-32 h-32 border-2 border-gray-700 relative z-10 grid grid-cols-4 grid-rows-4"
      animate={{ 
        skewX: [0, 30, -30, 0],
        scaleX: [1, 1.5, 0.8, 1],
        scaleY: [1, 0.8, 1.2, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {Array.from({length: 16}).map((_, i) => (
        <div key={i} className="border border-gray-700" />
      ))}
      {/* Transformation vector mapped onto grid */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-[#3399ff] rounded-full translate-x-1.5 -translate-y-1.5" />
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#ff33cc] rounded-full translate-x-1.5 translate-y-1.5" />
    </motion.div>
  </div>
);

const DeterminantsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <div className="relative z-10 border-l border-b border-gray-700 w-32 h-32 flex items-end">
      <motion.div 
        className="bg-purple-500/40 border-2 border-purple-400 flex justify-center items-center font-mono font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        animate={{ 
          width: ["1rem", "6rem", "8rem", "4rem", "1rem"],
          height: ["1rem", "4rem", "8rem", "5rem", "1rem"],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          animate={{ opacity: [0, 1, 1, 1, 0]}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >det(A)</motion.span>
      </motion.div>
    </div>
  </div>
);

const MatrixDecompositionsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono font-bold text-3xl">
    <GridBackground />
    <div className="relative w-32 h-32 flex z-10">
      <motion.div 
        className="absolute w-full h-full bg-[#3399ff]/20 border-2 border-[#3399ff] flex items-center justify-center"
        animate={{ opacity: [1, 0, 0, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >A</motion.div>
      
      <motion.div
        className="absolute top-0 left-0 border-l-[8rem] border-l-pink-500/40 border-t-[8rem] border-t-transparent flex items-end"
        style={{ transformOrigin: "bottom left" }}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: [0, 1, 1, 0], x: [0, -30, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="absolute -left-16 top-12 text-[#ff99cc]">L</span>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 border-r-[8rem] border-r-transparent border-t-[8rem] border-t-emerald-500/40"
        style={{ transformOrigin: "top right" }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], x: [0, 30, 30, 0], y: [0, -10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="absolute left-16 -top-24 text-emerald-300">U</span>
      </motion.div>
    </div>
  </div>
);

const SVDVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      
      {/* Circle morphing to Ellipse (SVD transform) */}
      <motion.ellipse
        cx="0" cy="0"
        fill="transparent"
        stroke="#cc33ff"
        strokeWidth="3"
        animate={{ 
          rx: [40, 80, 20, 40], 
          ry: [40, 30, 90, 40],
          rotate: [0, 45, -30, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Principal semi-axes scaling */}
      <motion.line 
        x1="0" y1="0" 
        stroke="#e699ff" strokeWidth="3"
        animate={{ 
          x2: [40, 56.56, 17.32, 40], 
          y2: [0, 56.56, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line 
        x1="0" y1="0" 
        stroke="#d966ff" strokeWidth="3"
        animate={{ 
          x2: [0, -21.21, 77.94, 0], 
          y2: [-40, 21.21, 45, -40]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const GradientsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* Contour lines */}
      <circle cx="0" cy="0" r="20" fill="none" stroke="#3399ff" strokeWidth="2" opacity="1" />
      <circle cx="0" cy="0" r="50" fill="none" stroke="#3399ff" strokeWidth="2" opacity="0.6" />
      <circle cx="0" cy="0" r="80" fill="none" stroke="#3399ff" strokeWidth="2" opacity="0.3" />

      {/* Gradient Descent arrows pointing to center */}
      <motion.g
        initial={{ x: 50, y: 50, opacity: 0 }}
        animate={{ x: 20, y: 20, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      >
        <line x1="0" y1="0" x2="-15" y2="-15" stroke="#ff33cc" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4" fill="#ff33cc" />
      </motion.g>

      <motion.g
        initial={{ x: -60, y: 20, opacity: 0 }}
        animate={{ x: -24, y: 8, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
      >
        <line x1="0" y1="0" x2="15" y2="-5" stroke="#33cc33" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="4" fill="#33cc33" />
      </motion.g>
    </svg>
  </div>
);

const DistributionsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      <line x1="10" y1="150" x2="190" y2="150" stroke="rgba(255,255,255,0.0)" strokeWidth="2" />
      
      <path 
        d="M 10 150 Q 50 150 80 100 T 100 30 T 120 100 T 190 150" 
        fill="rgba(51, 153, 255, 0.2)" 
        stroke="#3399ff" 
        strokeWidth="3" 
      />

      <motion.rect x="90" y="30" width="20" height="120" fill="#ff33cc" opacity="0.6" rx="2" 
        animate={{ height: [120, 100, 120], y: [30, 50, 30] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect x="65" y="80" width="20" height="70" fill="#cc33ff" opacity="0.6" rx="2" 
        animate={{ height: [70, 90, 70], y: [80, 60, 80] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect x="115" y="80" width="20" height="70" fill="#33cc33" opacity="0.6" rx="2" 
        animate={{ height: [70, 50, 70], y: [80, 100, 80] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const SetsFunctionsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center text-gray-100 font-mono text-xl">
    <GridBackground />
    <svg width="300" height="200" viewBox="0 0 300 200" className="overflow-visible z-10">
      {/* Set A */}
      <ellipse cx="70" cy="100" rx="50" ry="80" fill="rgba(51, 153, 255, 0.1)" stroke="#3399ff" strokeWidth="2" />
      <text x="70" y="40" textAnchor="middle" fill="#3399ff" fontWeight="bold">X</text>
      <circle cx="70" cy="80" r="4" fill="#3399ff" />
      <circle cx="70" cy="120" r="4" fill="#3399ff" />
      
      {/* Set B */}
      <ellipse cx="230" cy="100" rx="50" ry="80" fill="rgba(255, 51, 204, 0.1)" stroke="#ff33cc" strokeWidth="2" />
      <text x="230" y="40" textAnchor="middle" fill="#ff33cc" fontWeight="bold">Y</text>
      <circle cx="230" cy="80" r="4" fill="#ff33cc" />
      <circle cx="230" cy="120" r="4" fill="#ff33cc" />

      {/* Mapping Function */}
      <motion.path 
        d="M 80 80 Q 150 50 220 80" 
        fill="none" stroke="#33cc33" strokeWidth="3" strokeLinecap="round" strokeDasharray="5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path 
        d="M 80 120 Q 150 150 220 120" 
        fill="none" stroke="#33cc33" strokeWidth="3" strokeLinecap="round" strokeDasharray="5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      />
    </svg>
  </div>
);

const OrthogonalityVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      
      {/* Square indicator */}
      <polyline points="20,0 20,-20 0,-20" fill="rgba(51, 153, 255, 0.2)" stroke="#3399ff" strokeWidth="2" />
      
      <motion.g
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <line x1="0" y1="0" x2="80" y2="0" stroke="#3399ff" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="0" x2="0" y2="-80" stroke="#ff33cc" strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </svg>
  </div>
);

const LinearEquationsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      <line x1="0" y1="-100" x2="0" y2="100" stroke="rgba(255,255,255,0.0)" strokeWidth="2" strokeDasharray="4" />
      
      {/* Intersection Point */}
      <motion.circle cx="20" cy="-30" r="6" fill="#33cc33" 
        animate={{ scale: [1, 1.5, 1] }} 
        transition={{ duration: 2, repeat: Infinity }} 
      />
      
      {/* Line 1 */}
      <motion.line 
        x1="-80" y1="20" x2="100" y2="-70" 
        stroke="#3399ff" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      {/* Line 2 */}
      <motion.line 
        x1="-50" y1="-100" x2="80" y2="30" 
        stroke="#ff33cc" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </svg>
  </div>
);


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


const LinearCombinationsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* v1 */}
      <motion.line x1="0" y1="0" x2="60" y2="-20" stroke="#3399ff" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      {/* v2 */}
      <motion.line x1="0" y1="0" x2="20" y2="-70" stroke="#ff33cc" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
      {/* c1*v1 + c2*v2 */}
      <motion.line x1="0" y1="0" x2="80" y2="-90" stroke="#33cc33" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
      <text x="65" y="-15" fill="#3399ff" fontSize="10" fontFamily="monospace">v₁</text>
      <text x="25" y="-72" fill="#ff33cc" fontSize="10" fontFamily="monospace">v₂</text>
      <text x="82" y="-85" fill="#33cc33" fontSize="10" fontFamily="monospace">c₁v₁+c₂v₂</text>
    </svg>
  </div>
);

const DotProductVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* Vector a */}
      <motion.line x1="0" y1="0" x2="80" y2="-30" stroke="#3399ff" strokeWidth="3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      {/* Vector b */}
      <motion.line x1="0" y1="0" x2="90" y2="10" stroke="#ff33cc" strokeWidth="3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
      {/* Projection */}
      <motion.line x1="80" y1="-30" x2="78" y2="9" stroke="#ff9933" strokeWidth="1.5" strokeDasharray="3 3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
      {/* Projected segment */}
      <motion.line x1="0" y1="0" x2="78" y2="9" stroke="#33cc33" strokeWidth="3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} />
      {/* Angle arc */}
      <motion.path d="M 30 0 A 30 30 0 0 0 28 -10" fill="none" stroke="white" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} />
      <text x="35" y="-5" fill="white" fontSize="8" fontFamily="monospace">θ</text>
    </svg>
  </div>
);

const LinearTransformationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* Original square */}
      <motion.path d="M -30 -30 L 30 -30 L 30 30 L -30 30 Z" fill="none" stroke="#3399ff" strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0.5 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5 }} />
      {/* Transformed parallelogram */}
      <motion.path d="M -20 -50 L 50 -30 L 20 50 L -50 30 Z" fill="rgba(255,51,204,0.15)" stroke="#ff33cc" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }} />
      <text x="-60" y="60" fill="white" fontSize="9" fontFamily="monospace">T(x)=Ax</text>
    </svg>
  </div>
);

const GradientVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible z-10">
      {/* Contour lines (ellipses) */}
      <ellipse cx="0" cy="0" rx="80" ry="50" fill="none" stroke="rgba(51,153,255,0.2)" strokeWidth="1" />
      <ellipse cx="0" cy="0" rx="55" ry="35" fill="none" stroke="rgba(51,153,255,0.3)" strokeWidth="1" />
      <ellipse cx="0" cy="0" rx="30" ry="18" fill="none" stroke="rgba(51,153,255,0.5)" strokeWidth="1" />
      {/* Gradient arrow */}
      <motion.line x1="40" y1="-25" x2="15" y2="-10" stroke="#ff33cc" strokeWidth="3" markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
      <text x="42" y="-28" fill="#ff33cc" fontSize="9" fontFamily="monospace">∇f</text>
      <circle cx="0" cy="0" r="3" fill="#33cc33" />
    </svg>
  </div>
);

const GradientDescentVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      {/* Loss curve */}
      <path d="M 20 30 Q 60 180 100 100 Q 140 20 180 60" fill="none" stroke="#3399ff" strokeWidth="2.5" />
      {/* Descent steps */}
      <motion.circle cx="40" cy="75" r="4" fill="#ff33cc"
        animate={{ cx: [40, 70, 95, 100], cy: [75, 135, 105, 100] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }} />
      {/* Step arrows */}
      <motion.path d="M 40 75 L 70 135 L 95 105 L 100 100" fill="none" stroke="#ff9933" strokeWidth="1.5" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
      <text x="105" y="95" fill="#33cc33" fontSize="9" fontFamily="monospace">min</text>
    </svg>
  </div>
);

const ProbabilityRulesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      {/* Venn diagram */}
      <motion.circle cx="80" cy="100" r="45" fill="rgba(51,153,255,0.25)" stroke="#3399ff" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
      <motion.circle cx="120" cy="100" r="45" fill="rgba(255,51,204,0.25)" stroke="#ff33cc" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
      <text x="58" y="105" fill="white" fontSize="12" fontFamily="monospace">A</text>
      <text x="135" y="105" fill="white" fontSize="12" fontFamily="monospace">B</text>
      <text x="92" y="105" fill="#33cc33" fontSize="9" fontFamily="monospace">A∩B</text>
    </svg>
  </div>
);

const ConditionalProbabilityVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono text-xl font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 text-center bg-black/60 p-6 border border-gray-700 rounded-lg">
      <div className="text-[#3399ff] text-sm mb-2">P(A|B) =</div>
      <div className="border-b border-[#ff33cc] pb-2 mb-2 text-[#ff33cc]">P(A∩B)</div>
      <div className="text-[#ff9933]">P(B)</div>
    </div>
  </div>
);

const ConfidenceIntervalsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      {/* Bell curve */}
      <path d="M 20 150 Q 50 150 70 120 Q 90 60 100 40 Q 110 60 130 120 Q 150 150 180 150" fill="none" stroke="#3399ff" strokeWidth="2" />
      {/* CI bounds */}
      <motion.line x1="60" y1="30" x2="60" y2="160" stroke="#ff33cc" strokeWidth="2" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.line x1="140" y1="30" x2="140" y2="160" stroke="#ff33cc" strokeWidth="2" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
      {/* Shaded area */}
      <motion.rect x="60" y="40" width="80" height="115" fill="rgba(51,204,51,0.15)" rx="2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} />
      <text x="75" y="175" fill="#33cc33" fontSize="9" fontFamily="monospace">95% CI</text>
    </svg>
  </div>
);

const SkewnessKurtosisVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      {/* Normal */}
      <path d="M 20 160 Q 60 160 80 100 Q 100 40 100 40 Q 100 40 120 100 Q 140 160 180 160" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      {/* Right-skewed */}
      <motion.path d="M 20 160 Q 50 160 65 100 Q 80 40 85 40 Q 90 50 120 120 Q 160 160 190 155" fill="none" stroke="#ff33cc" strokeWidth="2.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
      <text x="140" y="140" fill="#ff33cc" fontSize="8" fontFamily="monospace">Right Skew</text>
    </svg>
  </div>
);

const StatisticalTestsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 grid grid-cols-2 gap-3 text-center text-sm">
      <div className="bg-black/50 border border-[#3399ff]/40 rounded p-3 text-[#3399ff]">T-test</div>
      <div className="bg-black/50 border border-[#ff33cc]/40 rounded p-3 text-[#ff33cc]">Z-test</div>
      <div className="bg-black/50 border border-[#33cc33]/40 rounded p-3 text-[#33cc33]">ANOVA</div>
      <div className="bg-black/50 border border-[#ff9933]/40 rounded p-3 text-[#ff9933]">χ² Test</div>
    </div>
  </div>
);

const SamplingTechniquesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <GridBackground />
    <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible z-10">
      {/* Population dots */}
      {[30,50,70,90,110,130,150,170].map((x, i) =>
        [40,70,100,130,160].map((y, j) => (
          <circle key={`${i}-${j}`} cx={x} cy={y} r="4"
            fill={((i+j) % 3 === 0) ? "#ff33cc" : "rgba(255,255,255,0.15)"}
            stroke={((i+j) % 3 === 0) ? "#ff33cc" : "none"} strokeWidth="1" />
        ))
      )}
      <text x="20" y="190" fill="#ff33cc" fontSize="9" fontFamily="monospace">● = Sampled</text>
    </svg>
  </div>
);

const NonParametricTestsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center font-mono font-bold bg-transparent text-gray-100">
    <GridBackground />
    <div className="z-10 flex flex-col gap-2 text-center text-sm">
      <div className="bg-black/50 border border-[#3399ff]/40 rounded px-4 py-2 text-[#3399ff]">Mann-Whitney U</div>
      <div className="bg-black/50 border border-[#ff33cc]/40 rounded px-4 py-2 text-[#ff33cc]">Kruskal-Wallis</div>
      <div className="bg-black/50 border border-[#33cc33]/40 rounded px-4 py-2 text-[#33cc33]">Wilcoxon</div>
    </div>
  </div>
);

import { 
  PremiumVectorsVisualizer, 
  PremiumMatrixVisualizer, 
  PremiumEigenVisualizer, 
  PremiumSVDVisualizer, 
  PremiumPCAVisualizer,
  PremiumDeterminantVisualizer,
  PremiumDotProductVisualizer,
  PremiumBasisVisualizer,
  PremiumNormsVisualizer,
  PremiumDistanceVisualizer,
  PremiumEquationsVisualizer,
  PremiumMatrixOpsVisualizer,
  PremiumOrthogonalityVisualizer,
  PremiumProjectionsVisualizer,
  PremiumRankVisualizer
} from "./visualizers/LinAlgVisualizers";

import {
  PremiumDifferentiationVisualizer,
  PremiumAreaUnderCurveVisualizer,
  PremiumGradientDescentVisualizer,
  PremiumPartialDerivativesVisualizer,
  PremiumGradientVisualizer,
  PremiumChainRuleVisualizer,
  PremiumJacobianHessianVisualizer
} from "./visualizers/CalculusVisualizers";

import {
  PremiumSampleSpaceVisualizer,
  PremiumBayesTheoremVisualizer,
  PremiumDistributionsVisualizer,
  PremiumConditionalVisualizer
} from "./visualizers/ProbabilityVisualizers";

export const TopicVisualizer = ({ topicId, params = {}, theme = 'light' }: VisualizerProps & { params?: any }) => {
  switch (topicId) {
    // Linear Algebra (High-Fidelity Canvas)
    case "Vectors": return <PremiumVectorsVisualizer {...params} mode="add" theme={theme} />;
    case "LinearCombinations": return <PremiumVectorsVisualizer {...params} mode="scalar" theme={theme} />;
    case "DotProduct": return <PremiumDotProductVisualizer {...params} theme={theme} />;
    case "Matrices": return <PremiumMatrixVisualizer {...params} theme={theme} />;
    case "LinearTransformation": return <PremiumMatrixVisualizer {...params} b={params.b ?? 0.5} c={params.c ?? -0.2} theme={theme} />;
    case "LinearEquations": return <PremiumEquationsVisualizer {...params} theme={theme} />; 
    case "Eigenvalues": 
    case "Eigenvectors": return <PremiumEigenVisualizer {...params} theme={theme} />;
    case "SVD": return <PremiumSVDVisualizer {...params} theme={theme} />;
    case "MatrixDecompositions": return <PremiumSVDVisualizer {...params} theme={theme} />;
    case "BasisChange": return <PremiumBasisVisualizer {...params} theme={theme} />;
    case "Determinants": return <PremiumDeterminantVisualizer {...params} theme={theme} />;
    case "PCA": return <PremiumPCAVisualizer {...params} theme={theme} />;
    case "VectorNorms": return <PremiumNormsVisualizer {...params} theme={theme} />;
    case "DistanceMetrics": return <PremiumDistanceVisualizer {...params} theme={theme} />;
    case "MatrixOperations": return <PremiumMatrixOpsVisualizer {...params} theme={theme} />;
    case "Orthogonality": return <PremiumOrthogonalityVisualizer {...params} theme={theme} />;
    case "Projections": return <PremiumProjectionsVisualizer {...params} theme={theme} />;
    case "Rank": return <PremiumRankVisualizer {...params} a={params.a ?? 1} b={params.b ?? 2} c={params.c ?? 0.5} d={params.d ?? 1} theme={theme} />;

    // Probability
    case "SampleSpace": return <PremiumSampleSpaceVisualizer {...params} theme={theme} />;
    case "ProbabilityRules": return <PremiumSampleSpaceVisualizer {...params} theme={theme} />; // Shared Venn logic
    case "ConditionalProbability": return <PremiumConditionalVisualizer {...params} theme={theme} />;
    case "BayesTheorem": return <PremiumBayesTheoremVisualizer {...params} theme={theme} />;
    case "Distributions": return <PremiumDistributionsVisualizer {...params} theme={theme} />;

    // Statistics
    case "DescriptiveStats": return <DescriptiveStatsVisual />;
    case "InferentialStats": return <InferentialStatsVisual />;
    case "ConfidenceIntervals": return <ConfidenceIntervalsVisual />;
    case "SkewnessKurtosis": return <SkewnessKurtosisVisual />;
    case "HypothesisTesting": return <HypothesisTestingVisual />;
    case "StatisticalTests": return <StatisticalTestsVisual />;
    case "Correlation": return <CorrelationVisual />;
    case "SamplingTechniques": return <SamplingTechniquesVisual />;
    case "NonParametricTests": return <NonParametricTestsVisual />;

    // Calculus
    case "Differentiation": return <PremiumDifferentiationVisualizer {...params} theme={theme} />;
    case "PartialDerivatives": return <PremiumPartialDerivativesVisualizer {...params} theme={theme} />;
    case "Gradient": return <PremiumGradientVisualizer {...params} theme={theme} />;
    case "GradientDescent": return <PremiumGradientDescentVisualizer {...params} theme={theme} />;
    case "ChainRule": return <PremiumChainRuleVisualizer {...params} theme={theme} />;
    case "JacobianHessian": return <PremiumJacobianHessianVisualizer {...params} theme={theme} />;
    case "AreaUnderCurve": return <PremiumAreaUnderCurveVisualizer {...params} theme={theme} />;

    default:
      return (
        <div className="relative w-full h-full bg-transparent border-l border-gray-700 flex items-center justify-center overflow-hidden">
          <GridBackground />
          <div className="z-10 text-center p-8">
            <div className="w-16 h-16 bg-[#3399ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#3399ff]/20">
              <div className="w-8 h-8 bg-[#3399ff] rounded-full animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">{topicId}</h3>
            <p className="text-gray-100 max-w-xs mx-auto">
              Abstract mathematical concept.
            </p>
          </div>
        </div>
      );
  }
};

