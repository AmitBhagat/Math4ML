import { TopicSection } from '../../src/data/types';

export const vectorsSection: TopicSection = {
  id: "vectors",
  title: "Vectors: The Data DNA of Machine Learning",
  description: "A vector isn't just a mathematical convenience; it's how we compress the complexity of the real world—pixels, words, audio—into a format that a processor can reason with. It is the fundamental building block of every intelligent system.",
  formula: "\\mathbf{v} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{bmatrix}",
  details: [
    "Fundamental Units: Magnitude and direction represent both the 'strength' and 'meaning' of a feature.",
    "Geometric Mapping: Data points translated into coordinates in a high-dimensional feature space.",
    "Vectorization: The process of transforming qualitative attributes into quantitative signals."
  ],
  contentSections: [
    {
      heading: "The Latent Architecture of Data",
      paragraphs: [
        "In Machine Learning, a vector isn't just a list of numbers; it's a mathematical object with magnitude and direction that represents a data point efficiently. Every feature—be it a pixel's intensity or a word's semantic context—is mapped into this numerical form. For example, a simple vector representing a person's height (in cm) and weight (in kg) might look like this:  ",
        "$$\\mathbf{v} = (170, 65)$$  ",
        "In high-dimensional feature spaces, where $n$ is the number of attributes, the vector expands to encompass every available signal:  ",
        "$$\\mathbf{v} = (x_1, x_2, x_3, \\dots, x_n)$$  ",
        "Information is structured hierarchically: Scalars are single values (e.g., a learning rate); Vectors are one-dimensional arrays (representing a single sample); and Matrices are two-dimensional grids that consolidate multiple vectors into rows and columns, allowing for batch processing and hardware acceleration."
      ],
      code: "import numpy as np\n# Creating a feature vector [Height, Weight]\nvector = np.array([170, 65])\n# Creating a 3x3 matrix for multiple data points\nmatrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(\"Vector:\", vector)\nprint(\"Matrix:\\n\", matrix)",
      output: "Vector: [170  65]\nMatrix:\n [[1 2 3]\n [4 5 6]\n [7 8 9]]"
    },
    {
      heading: "Types and Importance of Vectors",
      paragraphs: [
        "Modern deep learning frameworks distinguish between row vectors $[x_1, x_2]$ and column vectors $[x_1, x_2]^T$, usually preferring the latter for standard transformations of the form $y = Wx + b$. Specialized vectors serve as the foundational constraints of our models:  ",
        "1. **Zero Vector**: A vector where every element is zero $\\mathbf{v} = (0, 0, 0)$, marking the origin of the feature space.  ",
        "2. **Unit Vector**: A vector with a magnitude of 1, used primarily to denote direction without scaling effects:  ",
        "$$\\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$$  ",
        "3. **Sparse vs. Dense**: Sparse vectors, dominated by zeros, represent large vocabularies in NLP, while Dense vectors pack every dimension with continuous numerical signals.",
        "Mathematically, vectors allow us to perform transformations like rotation and scaling, which Principal Component Analysis (PCA) uses to project high-dimensional noise into low-dimensional patterns."
      ],
      code: "import numpy as np\nv = np.array([3, 4])\nmagnitude = np.linalg.norm(v)\nunit_v = v / magnitude\nprint(\"Original Vector:\", v)\nprint(\"Magnitude:\", magnitude)\nprint(\"Unit Vector:\", unit_v)",
      output: "Original Vector: [3 4]\nMagnitude: 5.0\nUnit Vector: [0.6 0.8]"
    },
    {
      heading: "Applied Vector Arithmetic",
      paragraphs: [
        "Operations on vectors are the 'engines' that power learning algorithms. Addition and subtraction allow us to adjust weights or calculate the residue (error) between predictions and reality. Scalar multiplication scales vectors by a constant, crucial for learning rate adjustments:  ",
        "Example: If $a = (2, 3)$ and $b = (1, 4)$, then $a + b = (3, 7)$ and $a - b = (1, -1)$.  ",
        "For scalar multiplication with $k=3$ and $a=(1, 2, 3)$, the result is $(3, 6, 9)$.  ",
        "The **Dot Product** is the heartbeat of neural activation, calculating the similarity/alignment between a weight vector and an input. For $a = (1, 2, 3)$ and $b = (4, 5, 6)$, the calculation is:  ",
        "$$\\text{Dot Product} = (1 \\times 4) + (2 \\times 5) + (3 \\times 6) = 32$$  ",
        "The **Cross Product**, primarily used in 3D geometry and specialized physics-informed ML, calculates the vector perpendicular to a plane. For $c = (1, 2, 3)$ and $d = (4, 5, 6)$, the result is $(-3, 6, -3)$."
      ],
      code: "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# Vector Operations\nprint(\"Addition:\", a + b)\nprint(\"Dot Product:\", np.dot(a, b))\nprint(\"Cross Product:\", np.cross(a, b))",
      output: "Addition: [5 7 9]\nDot Product: 32\nCross Product: [-3  6 -3]"
    }
  ],
  tags: ["Embeddings", "Taxonomy", "Similarity", "Normalization", "NLP"],
  level: "Beginner"
};
