import { TopicSection } from '../../src/data/types';

export const measuresOfDistanceSection: TopicSection = {
  id: "measures-of-distance",
  title: "Distance Measures: Similarity Logic",
  description: "Distance is the primary way we determine similarity between data points. Whether it's finding users who like the same movies or identifying similar medical symptoms, distance metrics are the decision engine for all unsupervised models.",
  formula: "d(\\mathbf{u}, \\mathbf{v}) = \\| \\mathbf{u} - \\mathbf{v} \\|_p",
  details: [
    "Clustering Foundation: K-Means and KNN rely entirely on distance to group related points.",
    "Similarity Score: Calculating how well one vector aligns with another in high-dimensional space.",
    "Non-Negativity: Distance must always be ≥ 0 and symmetric between two points."
  ],
  contentSections: [
    {
      heading: "The Similarity Logic and Identity Axioms",
      paragraphs: [
        "In Machine Learning, a distance measure is a way to calculate how far apart two or more objects are. A smaller distance indicates higher similarity, while a larger distance indicates higher dissimilarity. A valid distance metric must follow these principles:  ",
        "1. **Identity**: $d(x, x) = 0$.  ",
        "2. **Positivity**: $d(x, y) > 0$ for $x \\neq y$.  ",
        "3. **Symmetry**: $d(x, y) = d(y, x)$.  ",
        "The choice of distance metric depends entirely on the nature of your data—whether it is numerical, categorical, or text-based."
      ]
    },
    {
      heading: "Standard Metrics: Euclidean, Manhattan, and Cosine",
      paragraphs: [
        "**Euclidean Distance**: The ordinary 'straight-line' distance between two points ($L_2$ norm).  ",
        "$$d(A,B) = \\sqrt{\\sum_{i=1}^n (a_i - b_i)^2}$$  ",
        "**Manhattan Distance**: The sum of absolute differences. In a 2D plane with $P(x_1, y_1)$ and $Q(x_2, y_2)$, the distance is $|x_1 - x_2| + |y_1 - y_2|$.  ",
        "**Cosine Similarity**: Measures the cosine of the angle between two vectors. It focuses on orientation rather than magnitude, essential for NLP:  ",
        "$$\\text{similarity} = \\cos(\\theta) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$$  ",
        "**Cosine Distance**: $1 - \\text{similarity}$."
      ]
    },
    {
      heading: "Specialized Metrics: Jaccard, Minkowski, and Hamming",
      paragraphs: [
        "**Jaccard Index**: A set-based metric that compares dissimilarity by looking at the ratio of unique to common elements:  ",
        "$$d(A,B) = 1 - \\frac{|A \\cap B|}{|A \\cup B|}$$  ",
        "**Minkowski Distance**: A generalized distance measure controlled by parameter $p$. When $p=1$, it becomes Manhattan; when $p=2$, it becomes Euclidean:  ",
        "$$d(x,y) = \\left( \\sum_{i=1}^n |x_i - y_i|^p \\right)^{\\frac{1}{p}}$$  ",
        "**Hamming Distance**: The number of positions where two strings (of equal length) differ. Example: the Hamming distance between 'karolin' and 'kathrin' is **3**. Used for error detection and DNA sequences."
      ],
      code: "import numpy as np\nfrom scipy.spatial.distance import euclidean, cityblock, cosine, jaccard, minkowski, hamming\n\na = np.array([1, 0, 1])\nb = np.array([0, 1, 1])\n\n# Advanced Metrics\nprint(f\"Jaccard Index: {jaccard(a, b):.4f}\")\nprint(f\"Minkowski (p=3): {minkowski(a, b, p=3):.4f}\")\n# Hamming of [1,0,1] vs [0,1,1] is 2/3 (percentage of diff)\nprint(f\"Hamming: {hamming(a, b) * len(a)}\")",
      output: "Jaccard Index: 0.6667\nMinkowski (p=3): 1.2599\nHamming: 2.0"
    }
  ],
  tags: ["L1 Distance", "L2 Distance", "Cosine Similarity", "Clustering", "Scaling"],
  level: "Intermediate"
};
