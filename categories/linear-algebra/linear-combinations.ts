import { TopicSection } from '../../src/data/types';

export const linearCombinationsSection: TopicSection = {
  id: "linear-combinations",
  title: "Linear Combinations: The Mixing Board of ML",
  description: "A linear combination is the fundamental way we synthesize features. By scaling vectors and adding them together, we create new 'coordinates' that represent the predictions of our models.",
  formula: "\\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_n \\mathbf{v}_n",
  details: [
    "Feature Synthesis: Combining multiple inputs (Area, Bedrooms) into a single predictive score.",
    "Weighted Sums: The core calculation inside every neuron in a deep neural network.",
    "Span: All possible locations reachable by mixing a set of vectors."
  ],
  contentSections: [
    {
      heading: "Latency and Synthesis",
      paragraphs: [
        "In Machine Learning, a linear combination involves taking a set of vectors, scaling each one by a scalar coefficient, and adding the results together into a single weighted sum. Given a set of vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_n$, a linear combination is an expression of the form:  ",
        "$$\\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_n \\mathbf{v}_n$$",
        "Consider two vectors in $\\mathbb{R}^2$:  ",
        "$$\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}, \\mathbf{v}_2 = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$$",
        "A linear combination of these vectors is:  ",
        "$$\\mathbf{w} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\begin{pmatrix} c_1 + 3c_2 \\\\ 2c_1 + 4c_2 \\end{pmatrix}$$",
        "This simple operation is the building block of spans, bases, and the weights found in every modern neural network."
      ]
    },
    {
      heading: "Universal Properties and Case Study",
      paragraphs: [
        "To ensure our models behave predictably, linear combinations follow core mathematical properties that govern the principle of superposition:  ",
        "1. **Linearity**: Scalar multiplication distributes over addition: $a(\\mathbf{u} + \\mathbf{v}) = a\\mathbf{u} + a\\mathbf{v}$.  ",
        "2. **Commutative**: Order of addition does not matter: $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = c_2\\mathbf{v}_2 + c_1\\mathbf{v}_1$.  ",
        "3. **Associative**: Grouping does not matter: $(\\mathbf{v}_1 + \\mathbf{v}_2) + \\mathbf{v}_3 = \\mathbf{v}_1 + (\\mathbf{v}_2 + \\mathbf{v}_3)$.",
        "**Real-World Case: House Price Prediction**  ",
        "In Linear Regression, the predicted price is a linear combination of feature vectors weighted by learned scalars:  ",
        "$$\\text{Price} = w_1(\\text{Area}) + w_2(\\text{Bedrooms}) + w_3(\\text{Age})$$",
        "Whenever we build a regression model or training a neuron, we are effectively creating weighted sums of input features to find the optimal 'mix' that minimizes prediction error."
      ]
    },
    {
      heading: "Execution: Vector and Matrix Protocol",
      paragraphs: [
        "To manually form a linear combination using vectors, we multiply each vector by its scalar and add. Example: Given $\\mathbf{v}_1 = (1, 2)$ and $\\mathbf{v}_2 = (3, 4)$ with scalars $c_1 = 2$ and $c_2 = -1$:  ",
        "$$\\mathbf{w} = 2(1, 2) + (-1)(3, 4) = (2, 4) + (-3, -4) = (-1, 0)$$  ",
        "This protocol extends to matrices as well. If $A_1 = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $A_2 = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$ with scalars $c_1 = 3$ and $c_2 = -2$:  ",
        "$$3\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + (-2)\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix} + \\begin{pmatrix} -10 & -12 \\\\ -14 & -16 \\end{pmatrix} = \\begin{pmatrix} -7 & -6 \\\\ -5 & -4 \\end{pmatrix}$$"
      ],
      code: "import numpy as np\nv1 = np.array([1, 2])\nv2 = np.array([3, 4])\n# Vector synthesis\nw = 2 * v1 - 1 * v2\n\n# Matrix synthesis\nA1 = np.array([[1, 2], [3, 4]])\nA2 = np.array([[5, 6], [7, 8]])\nA_final = 3 * A1 - 2 * A2\n\nprint(f\"Vector w: {w}\")\nprint(f\"Matrix A_final:\\n{A_final}\")",
      output: "Vector w: [-1  0]\nMatrix A_final:\n[[-7 -6]\n [-5 -4]]"
    }
  ],
  tags: ["Weighted Sum", "Linear Regression", "Matrices", "Neural Activation", "Multicollinearity"],
  level: "Intermediate"
};
