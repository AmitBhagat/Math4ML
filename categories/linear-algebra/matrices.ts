import { TopicSection } from '../../src/data/types';

export const matricesSection: TopicSection = {
  id: "matrices",
  title: "Matrices: The Architecture of Data",
  description: "A matrix is a two-dimensional grid of numbers that allows us to process multi-dimensional data simultaneously. In ML, every layer of a neural network is defined by a matrix that transforms raw inputs into semantically meaningful outputs.",
  formula: "\\mathbf{A} = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}_{m \\times n}",
  details: [
    "Batch Processing: Matrices enable models to 'learn' from thousands of samples at once.",
    "Order ($m \\times n$): The shape of the matrix, which dictates its algebraic compatibility.",
    "Indexing (a[i][j]): Accessing data where 'i' is the sample (row) and 'j' is the feature (column)."
  ],
  contentSections: [
    {
      heading: "Matrix Anatomy and the Filter Analogy",
      paragraphs: [
        "In Machine Learning, a matrix is a two-dimensional array of numbers arranged in rows and columns. It is the ideal structure for representing large batches of metadata. Each element in a matrix is represented as $a_{ij}$ where $i$ is the row number and $j$ is the column number. The order of a matrix is expressed as $m \\times n$, where $m$ is the number of rows and $n$ is the columns.  ",
        "$$\\mathbf{A} = \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix}$$",
        "Think of a matrix like a photo filter. You pass a raw signal through it, and it comes out transformed—stretched, rotated, or squashed. In a neural network, the weight matrix ($W$) is exactly that filter. Training a model is the process of constantly tweaking these weight matrices until the outputs match our labels."
      ],
      code: "import numpy as np\n# Defining a 3x3 matrix in NumPy\nmatrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(\"Matrix Structure (3x3):\\n\", matrix)",
      output: "Matrix Structure (3x3):\n [[1 2 3]\n [4 5 6]\n [7 8 9]]"
    },
    {
      heading: "Matrix Arithmetic: Step-by-Step Execution",
      paragraphs: [
        "Matrix arithmetic provides the heartbeat of every linear layer. To perform these operations, we apply mathematical rules element-wise or through row-column interactions:  ",
        "1. **Matrix Addition/Subtraction**: For $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and $B = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix}$:  ",
        "   $A + B = \\begin{bmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{bmatrix} = \\begin{bmatrix} 6 & 8 \\\\ 10 & 12 \\end{bmatrix}$  ",
        "   $A - B = \\begin{bmatrix} 1-5 & 2-6 \\\\ 3-7 & 4-8 \\end{bmatrix} = \\begin{bmatrix} -4 & -4 \\\\ -4 & -4 \\end{bmatrix}$  ",
        "2. **Matrix Division (Element-wise)**: Given $A = \\begin{pmatrix} 4 & 2 \\\\ 6 & 8 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $A // B = \\begin{pmatrix} 2 & 1 \\\\ 2 & 2 \\end{pmatrix}$.  ",
        "3. **Matrix Multiplication (Dot Product)**: Multiplies rows of the first by columns of the second. For $A = [1, 2; 3, 4]$ and $B = [5, 6; 7, 8]$:  ",
        "   $C_{00} = 1(5) + 2(7) = 19; \\quad C_{01} = 1(6) + 2(8) = 22$  ",
        "   $C_{10} = 3(5) + 4(7) = 43; \\quad C_{11} = 3(6) + 4(8) = 50$  ",
        "**Note: $AB \\neq BA$**. Matrix multiplication is not commutative."
      ],
      code: "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n# Addition and Dot Product\nprint(\"Addition:\\n\", A + B)\nprint(\"Dot Product:\\n\", A.dot(B))",
      output: "Addition:\n [[ 6  8]\n [10 12]]\nDot Product:\n [[19 22]\n [43 50]]"
    },
    {
      heading: "Vector and Scalar Operations",
      paragraphs: [
        "Scaling and mapping are the final components of the matrix engine:  ",
        "1. **Vector Multiplication**: To multiply matrix $A$ by vector $V$, the columns of $A$ must equal the rows of $V$. If $A = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}$ and $V = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$, the result is $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$.  ",
        "2. **Scalar Multiplication**: Scalar $b=2$ multiplied by matrix $A = [1, 2; 3, 4]$ yields $[2, 4; 6, 8]$, preserving the matrix order.  ",
        "These operations power forward propagation in neural networks and dimensionality reduction methods like PCA, allowing us to handle multi-dimensional data with extreme efficiency."
      ],
      code: "import numpy as np\nA = np.array([[1, 2], [1, 1]])\nV = np.array([[1], [1]])\n# Scalar and Vector Map\nprint(\"Scalar Update (x2):\\n\", A * 2)\nprint(\"Vector Projection (y=Ax):\\n\", A.dot(V))",
      output: "Scalar Update (x2):\n [[2 4]\n [2 2]]\nVector Projection (y=Ax):\n [[3]\n [2]]"
    }
  ],
  tags: ["Multiplication", "Dot Product", "Identity", "Batch Processing"],
  level: "Intermediate"
};
