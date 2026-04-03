export interface ContentBlock {
  heading?: string;
  paragraphs: string[];
  code?: string;
  output?: string;
}

export interface TopicSection {
  id: string;
  title: string;
  description: string;
  formula?: string;
  details: string[];
  code?: string;
  contentSections?: ContentBlock[];
  tags?: string[];
  level?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  keyConcepts: { title: string; description: string }[];
  sections: TopicSection[];
}

// =============================================================================
// LINEAR ALGEBRA — 10 topics from GfG
// =============================================================================
export const LINEAR_ALGEBRA_DATA: CategoryData = {
  id: "linear-algebra",
  title: "Linear Algebra",
  description: "Linear Algebra is the foundation for many machine learning algorithms. It provides the tools to represent and manipulate datasets, features and transformations.",
  keyConcepts: [
    { title: "Vectors", description: "Building blocks of datasets and features" },
    { title: "Matrices", description: "Essential for solving equations and optimizing ML models" },
    { title: "Eigenvalues", description: "For understanding variance and principal components" },
    { title: "SVD", description: "Widely used in dimensionality reduction and data compression" }
  ],
  sections: [
    {
      id: "Vectors",
      title: "Vectors for Machine Learning",
      description: "Vectors are a fundamental concept in machine learning and play an important role in data representation. They are widely used in algorithms for classification, regression, clustering and deep learning.",
      formula: "v = (x₁, x₂, ..., xₙ)",
      details: [
        "A vector is a mathematical object with magnitude and direction and in machine learning, it represents data in numerical form so that computers can process and analyze it efficiently.",
        "A vector is an ordered list of numbers, called components or elements, where each number represents a feature of a data point."
      ],
      code: "import numpy as np\n\nvector = np.array([170, 65])\n\nprint(\"Vector:\", vector)",
      contentSections: [
        {
          heading: "Vector Basics",
          paragraphs: [
            "A vector is an ordered list of numbers, called components or elements, where each number represents a feature of a data point. A vector in a two-dimensional plane can be defined as:",
            "v = (x₁, x₂)",
            "For example: a vector for someone's height (in cm) and weight (in kg) might be:",
            "v = (170, 65)",
            "In higher dimensions, vectors will have more components, such as:",
            "v = (x₁, x₂, x₃, ..., xₙ)",
            "where n is the number of features of a specific data point."
          ],
          code: "import numpy as np\n\nvector = np.array([170, 65])\n\nprint(\"Vector:\", vector)",
          output: "Vector: [170  65]"
        },
        {
          heading: "Scalars, Vectors and Matrices",
          paragraphs: [
            "Scalars: Any single value from our dataset would represent a scalar like integers or floating-point numbers, employed in mathematical computation.",
            "Vectors: Vectors are one-dimensional number arrays that hold several values in a linear sequence.",
            "Matrices: Matrices are two-dimensional arrays of multiple vectors that are placed in rows and columns.",
            "These mathematical structures play an essential role in machine learning models, facilitating effective calculations and data representation."
          ],
          code: "import numpy as np\n\n# Define a 3x3 matrix\nmat = np.array([[1, 2, 3], \n                   [4, 5, 6], \n                   [7, 8, 9]])\n\nprint(mat)",
          output: "[[1 2 3]\n [4 5 6]\n [7 8 9]]"
        },
        {
          heading: "Vectors in Machine Learning Models",
          paragraphs: [
            "Vectors are used at various points in machine learning models:",
            "Input: All data such as images, text or sensor readings must be converted into numerical form. These numbers are organized as vectors so models can process them efficiently.",
            "Model: Machine learning models, especially neural networks, rely on vector and matrix operations. Linear algebra operations like multiplication help update model parameters and improve accuracy.",
            "Outputs: Model outputs can be numbers, categories or vectors. In tasks like NLP or recommendations, output vectors are used for similarity, clustering or further predictions."
          ]
        },
        {
          heading: "Types of Vectors in Machine Learning",
          paragraphs: [
            "1. Row and Column Vectors",
            "A row vector is a one-dimensional array represented in a row format: (x₁, x₂, x₃)",
            "A column vector is a one-dimensional array represented in a column notation, where elements are stacked vertically.",
            "2. Zero Vector",
            "A vector with all elements as zero. Example: v = (0, 0, 0)",
            "Zero vectors are useful when solving optimization problems and are the origin in vector space.",
            "3. Unit Vector",
            "A vector of magnitude 1. It is frequently used to denote direction: û = v / ||v|| where ||v|| is the magnitude of vector v.",
            "4. Sparse and Dense Vectors",
            "Sparse Vectors consist primarily of zeros and are employed in text analysis and recommendation systems.",
            "Dense Vectors consist primarily of non-zero values and are employed in image processing and deep learning."
          ]
        },
        {
          heading: "Importance of Vectors in Machine Learning",
          paragraphs: [
            "1. Feature Representation",
            "Vectors are used to represent data points in numerical form. For example, in natural language processing (NLP), words are translated into word vectors by techniques such as Word2Vec or TF-IDF.",
            "2. Distance and Similarity Measures",
            "Similarity between data points is typically calculated in machine learning by vector distance measures like:",
            "Euclidean Distance: Quantitative measure of straight-line distance between two points.",
            "Cosine Similarity: Quantifies the cosine of the angle between two vectors to ascertain similarity.",
            "3. Transformations and Projections",
            "Vectors enable mathematical transformations such as rotation, scaling and translation. These are employed in methods such as Principal Component Analysis (PCA) to project datasets into lower dimensions."
          ]
        },
        {
          heading: "Vector Addition and Subtraction",
          paragraphs: [],
          code: "import numpy as np\n\na = np.array([2, 3])\nb = np.array([1, 4])\n\n# Perform addition\nadd = a + b\n\n# Perform subtraction\nsub = a - b\n\nprint(\"Addition:\", add)\nprint(\"Subtraction:\", sub)",
          output: "Addition: [3 7]\nSubtraction: [ 1 -1]"
        },
        {
          heading: "Scalar Multiplication",
          paragraphs: [],
          code: "import numpy as np\n\na = np.array([1, 2, 3])\n\nscalar = 3\n\n# Perform scalar multiplication\nres = scalar * a\n\nprint(\"Scalar Multiplication:\", res)",
          output: "Scalar Multiplication: [3 6 9]"
        },
        {
          heading: "Dot Product",
          paragraphs: [],
          code: "import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n\n# Compute the dot product\nprod = np.dot(a, b)\n\nprint(\"Dot Product:\", prod)",
          output: "Dot Product: 32"
        },
        {
          heading: "Cross Product",
          paragraphs: [],
          code: "import numpy as np\n\nc = np.array([1, 2, 3])\nd = np.array([4, 5, 6])\n\n# Compute the cross product\nprod = np.cross(c, d)\n\nprint(\"Cross Product:\", prod)",
          output: "Cross Product: [-3  6 -3]"
        },
        {
          heading: "Application of Vectors in Machine Learning",
          paragraphs: [
            "Vectors play an important role in various machine learning algorithms and natural language processing (NLP) techniques.",
            "Linear Regression: Linear regression employs vectors to denote the independent and dependent variable relationship: Y = Xw + b where X is a feature vector, w is a weights vector and b is the bias term.",
            "Support Vector Machines (SVMs): SVMs utilize vector mathematics to identify the best hyperplane separating various classes in classification problems.",
            "Neural Networks: Neural networks store weights, activations and gradients as vectors, making them crucial for deep learning models.",
            "Clustering (K-Means Algorithm): The K-Means algorithm allocates points to clusters based on vector distances.",
            "Word Embeddings in NLP: Methods such as Word2Vec and GloVe map words to vectors, capturing their semantic meaning.",
            "Sentence and Document Embeddings: Sentences and documents can also be encoded as vectors using techniques like BERT and Doc2Vec."
          ]
        }
      ],
      tags: ["Components", "Magnitude", "Direction", "Sparse", "Dense"],
      level: "Beginner"
    },
    {
      id: "LinearCombinations",
      title: "Linear Combinations",
      description: "Key in regression models and Principal Component Analysis (PCA). A linear combination involves combining vectors by multiplying each by a scalar and adding the results.",
      formula: "w = c₁v₁ + c₂v₂ + ... + cₙvₙ",
      details: [
        "A linear combination expresses a new vector as a weighted sum of existing vectors.",
        "Used in prediction models, PCA, and feature engineering."
      ],
      contentSections: [
        {
          heading: "What is a Linear Combination?",
          paragraphs: [
            "Linear combination involves combining a set of vectors by multiplying each vector by a scalar (a real number) and then adding the results together. For example, if you have vectors v1 and v2 and scalars a and b, the expression a × v1 + b × v2 is a linear combination of those vectors.",
            "This concept is not limited to just vectors. Linear combinations can also be applied to functions, polynomials and other mathematical entities.",
            "Linear combinations are used in data science in the following ways:",
            "In prediction models, results are calculated by multiplying features with weights and adding them.",
            "In techniques like Principal Component Analysis (PCA), new variables are created by combining old variables.",
            "In feature engineering, existing data columns are combined to make better inputs for models."
          ]
        },
        {
          heading: "Mathematical Definition",
          paragraphs: [
            "Given a set of vectors v1, v2, ..., vn in a vector space, a linear combination of these vectors is an expression of the form:",
            "w = c1·v1 + c2·v2 + ... + cn·vn",
            "Where c1, c2, ..., cn are scalars (real numbers, complex numbers, etc.).",
            "Example: Consider v1 = (1, 2) and v2 = (3, 4) with scalars c1 = 2 and c2 = -1:",
            "w = 2(1,2) + (-1)(3,4) = (2,4) + (-3,-4) = (-1, 0)"
          ]
        },
        {
          heading: "Properties of Linear Combinations",
          paragraphs: [
            "Linearity Property: Scalar multiplication distributes over addition — a(u+v) = au + av and (a+b)u = au + bu.",
            "Commutative Property: Order of addition does not matter — c1·v1 + c2·v2 = c2·v2 + c1·v1.",
            "Associative Property: Grouping does not matter — (c1·v1 + c2·v2) + c3·v3 = c1·v1 + (c2·v2 + c3·v3)."
          ]
        },
        {
          heading: "Linear Combinations in Machine Learning",
          paragraphs: [
            "In Linear Regression, the predicted value is a linear combination of features:",
            "Price = w1(Area) + w2(Bedrooms) + w3(Age)",
            "Here, Area/Bedrooms/Age are the vectors (features) and w1, w2, w3 are the scalars (model weights).",
            "This is exactly a linear combination. Whenever we build a regression model, we are creating weighted sums of input features. This is the foundation of Multiple Linear Regression, Neural Networks (weighted sums), and Feature Engineering."
          ]
        },
        {
          heading: "Computing Linear Combinations with NumPy",
          paragraphs: [],
          code: "import numpy as np\n\nv1 = np.array([1, 2])\nv2 = np.array([3, 4])\nc1, c2 = 2, -1\n\n# Linear combination: 2*v1 + (-1)*v2\nresult = c1 * v1 + c2 * v2\nprint('Result:', result)",
          output: "Result: [-1  0]"
        }
      ],
      tags: ["Span", "Basis", "Independence", "Weighted Sum"],
      level: "Intermediate"
    },
    {
      id: "DotProduct",
      title: "Dot Product (Scalar Product)",
      description: "The scalar product of two vectors gives a scalar quantity. It is fundamental to measuring alignment, projections, and similarity in machine learning.",
      formula: "A · B = |A| |B| cos(θ)",
      details: [
        "The dot product equals the sum of element-wise products: A·B = AxBx + AyBy + AzBz.",
        "Geometrically it equals |A||B|cos(θ), where θ is the angle between vectors."
      ],
      contentSections: [
        {
          heading: "What is the Dot Product?",
          paragraphs: [
            "In physics and mathematics, vectors can be multiplied either by a scalar or by another vector. One important type of vector multiplication is the scalar product, also known as the dot product. The result of a scalar product is a scalar quantity.",
            "The scalar product is widely used to define quantities such as work, energy, and power. In ML it is used for similarity measures, projections, and the core operation of neural network layers.",
            "The scalar product of two vectors A and B is defined as:",
            "A · B = |A| |B| cos(θ)",
            "where |A| and |B| are the magnitudes of the vectors, and θ is the angle between them."
          ]
        },
        {
          heading: "Scalar Product in Terms of Components",
          paragraphs: [
            "In component form, the dot product is computed as:",
            "A · B = AxBx + AyBy + AzBz",
            "This is the sum of the products of the corresponding components of the two vectors."
          ]
        },
        {
          heading: "Special Cases",
          paragraphs: [
            "Parallel vectors (θ = 0°): A·B = |A||B| — maximum positive value.",
            "Antiparallel vectors (θ = 180°): A·B = -|A||B| — maximum negative value.",
            "Orthogonal vectors (θ = 90°): A·B = 0 — vectors are perpendicular.",
            "Two vectors are orthogonal if and only if their dot product is zero."
          ]
        },
        {
          heading: "Properties of the Dot Product",
          paragraphs: [
            "Commutative: A·B = B·A",
            "Distributive over addition: A·(B+C) = A·B + A·C",
            "Orthogonality: Vectors u and v are orthogonal if u·v = 0.",
            "Projection of A onto B: proj = (A·B) / |B|"
          ]
        },
        {
          heading: "Applications of the Dot Product",
          paragraphs: [
            "Projection of a Vector: The projection of vector a onto vector b is (a·b)/|b|.",
            "Angle Between Two Vectors: cos(θ) = (A·B) / (|A||B|) — used for cosine similarity in NLP.",
            "Work done in physics: W = F·d = |F||d|cos(θ)."
          ]
        },
        {
          heading: "Dot Product in NumPy",
          paragraphs: [],
          code: "import numpy as np\n\nA = np.array([1, 2, 3])\nB = np.array([4, 5, 6])\n\n# Dot product\nresult = np.dot(A, B)\nprint('Dot Product:', result)\n\n# Cosine similarity\ncos_sim = np.dot(A, B) / (np.linalg.norm(A) * np.linalg.norm(B))\nprint('Cosine Similarity:', round(cos_sim, 4))",
          output: "Dot Product: 32\nCosine Similarity: 0.9746"
        },
        {
          heading: "Solved Example",
          paragraphs: [
            "Find the scalar product of A = 2i + 5j + 3k and B = 3i + j + 2k:",
            "A·B = (2×3) + (5×1) + (3×2) = 6 + 5 + 6 = 17",
            "Find m such that A = 2i + 3j + k and B = 3i + 2j + mk are perpendicular (A·B = 0):",
            "(2×3) + (3×2) + (1×m) = 0  →  6 + 6 + m = 0  →  m = -12"
          ]
        }
      ],
      tags: ["Inner Product", "Orthogonality", "Cosine Similarity", "Projection"],
      level: "Beginner"
    },
    {
      id: "Matrices",
      title: "Matrices & Matrix Arithmetic",
      description: "In machine learning, data often comes in multi-dimensional arrays making matrices ideal for handling inputs. Understanding matrix arithmetic is essential for linear regression, neural networks, and dimensionality reduction.",
      formula: "C[i][j] = Σ A[i][k] × B[k][j]",
      details: [
        "A matrix is a 2D array of numbers arranged in rows and columns.",
        "Matrix multiplication requires cols(A) = rows(B) and is NOT commutative."
      ],
      contentSections: [
        {
          heading: "What is a Matrix?",
          paragraphs: [
            "A matrix is a two-dimensional array of numbers arranged in rows and columns. Each element in a matrix is represented as a[i][j] where i is the row number and j is the column number.",
            "The order of a matrix is expressed as m × n where m is the number of rows and n is the number of columns."
          ],
          code: "import numpy as np\n\nmatrix = np.array([[1, 2, 3],\n                   [4, 5, 6],\n                   [7, 8, 9]])\nprint(matrix)",
          output: "[[1 2 3]\n [4 5 6]\n [7 8 9]]"
        },
        {
          heading: "1. Matrix Addition",
          paragraphs: [
            "Matrix addition combines two matrices of the same order by adding their corresponding elements. It is only possible when both matrices have the same number of rows and columns."
          ],
          code: "import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = A + B\nprint(C)",
          output: "[[ 6  8]\n [10 12]]"
        },
        {
          heading: "2. Matrix Subtraction",
          paragraphs: [
            "Matrix subtraction subtracts the corresponding elements of two matrices of the same order."
          ],
          code: "import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[0, 1], [2, 1]])\nC = A - B\nprint(C)",
          output: "[[1 1]\n [1 3]]"
        },
        {
          heading: "3. Matrix Division",
          paragraphs: [
            "Matrix division divides the corresponding elements of two matrices of the same order."
          ],
          code: "import numpy as np\n\nA = np.array([[4, 2], [6, 8]])\nB = np.array([[2, 2], [3, 4]])\nC = A // B\nprint(C)",
          output: "[[2 1]\n [2 2]]"
        },
        {
          heading: "4. Matrix Multiplication (Dot Product)",
          paragraphs: [
            "Matrix multiplication multiplies rows of the first matrix with columns of the second matrix. It requires that the number of columns in the first matrix equals the number of rows in the second matrix.",
            "Note: Matrices do NOT satisfy the commutative property — AB ≠ BA."
          ],
          code: "import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = A.dot(B)\nprint(C)",
          output: "[[19 22]\n [43 50]]"
        },
        {
          heading: "5. Scalar Multiplication",
          paragraphs: [
            "When we multiply a matrix with a scalar, it is multiplied with each and every element in the matrix. The order remains the same after multiplying."
          ],
          code: "import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nb = 2\nprint(A * b)",
          output: "[[2 4]\n [6 8]]"
        }
      ],
      tags: ["Addition", "Multiplication", "Inverse", "Transpose"],
      level: "Beginner"
    },
    {
      id: "LinearTransformation",
      title: "Linear Mapping (Linear Transformation)",
      description: "A linear mapping is a mathematical operation that transforms input values into output values using a linear function. It is used as preprocessing, in PCA, and as the core layer operation in neural networks.",
      formula: "y = Wx + b",
      details: [
        "A linear transformation preserves vector addition and scalar multiplication.",
        "Every linear transformation can be represented as matrix multiplication."
      ],
      contentSections: [
        {
          heading: "What is Linear Mapping?",
          paragraphs: [
            "Linear mapping is a mathematical operation that transforms a set of input values into a set of output values using a linear function. It is often used as a preprocessing step to transform the input data into a more suitable format for analysis.",
            "The linear mapping function can be represented as:",
            "y = Wx + b",
            "where x is the input vector, W is the weight matrix, b is the bias vector, and y is the output vector. The weight matrix and bias vector are learned during the training process."
          ]
        },
        {
          heading: "Conditions for Linear Mapping",
          paragraphs: [
            "Let V and W be vector spaces over a field K. A function f: V → W is called a linear map if, for any vectors u, v ∈ V and a scalar c ∈ K, the following conditions hold:",
            "Additive (f preserves addition): f(u + v) = f(u) + f(v)",
            "Homogeneous (f preserves scalar multiplication): f(c · u) = c · f(u)"
          ]
        },
        {
          heading: "Properties of Linear Transformations",
          paragraphs: [
            "Let T: V → W be a linear transformation. Then:",
            "T(0) = 0",
            "T(-v) = -T(v)",
            "T(u - v) = T(u) - T(v)",
            "If v = c1·v1 + c2·v2 + ... + cn·vn, then T(v) = c1·T(v1) + c2·T(v2) + ... + cn·T(vn)"
          ]
        },
        {
          heading: "Linear Transformation as Rotation",
          paragraphs: [
            "Some transformation operators rotate vectors. The rotation matrix for angle θ counterclockwise in 2D is:",
            "A = [[cos θ, -sin θ], [sin θ, cos θ]]",
            "Applying this to vector v = (r cos α, r sin α) gives the rotated vector (r cos(θ+α), r sin(θ+α))."
          ],
          code: "import numpy as np\n\n# Rotation matrix (45 degrees)\ntheta = np.pi / 4\nR = np.array([[np.cos(theta), -np.sin(theta)],\n              [np.sin(theta),  np.cos(theta)]])\nv = np.array([1, 0])\nprint('Rotated:', R @ v)",
          output: "Rotated: [0.70710678 0.70710678]"
        },
        {
          heading: "Advantages of Linear Mapping",
          paragraphs: [
            "Simplicity: Easy-to-understand mathematical operation, attractive for many ML tasks.",
            "Speed: Computationally efficient, suitable for large datasets and real-time applications.",
            "Interpretability: Transparent operation, making it easier to understand and analyze model results.",
            "Versatility: Can be applied to regression, classification and clustering tasks."
          ]
        }
      ],
      tags: ["Rotation", "Scaling", "PCA", "Feature Scaling", "Neural Networks"],
      level: "Intermediate"
    },
    {
      id: "LinearEquations",
      title: "Solving Systems of Linear Equations",
      description: "Essential for finding model parameters such as in linear regression. A system of linear equations can be represented compactly as Ax = b.",
      formula: "Ax = b",
      details: [
        "A system of linear equations can be written as a matrix equation Ax = b.",
        "Solutions can be unique, infinite, or none depending on the system."
      ],
      contentSections: [
        {
          heading: "What is a System of Linear Equations?",
          paragraphs: [
            "A system of linear equations is a collection of linear equations involving the same set of variables. In matrix form, it is written as Ax = b, where A is the coefficient matrix, x is the vector of unknowns, and b is the constants vector.",
            "Systems of linear equations arise naturally in machine learning, e.g., finding optimal weights in linear regression."
          ]
        },
        {
          heading: "Types of Solutions",
          paragraphs: [
            "Unique solution: The system has exactly one solution (full rank, det(A) ≠ 0).",
            "Infinite solutions: The system is underdetermined — more unknowns than equations.",
            "No solution: The system is inconsistent — equations contradict each other."
          ]
        },
        {
          heading: "Solving with NumPy",
          paragraphs: [
            "For a 2×2 system: 2x + y = 5 and x + 3y = 10, we can solve directly using numpy.linalg.solve()."
          ],
          code: "import numpy as np\n\nA = np.array([[2, 1],\n              [1, 3]])\nb = np.array([5, 10])\n\nx = np.linalg.solve(A, b)\nprint('Solution:', x)\nprint('Verify Ax=b:', np.allclose(A @ x, b))",
          output: "Solution: [1. 3.]\nVerify Ax=b: True"
        },
        {
          heading: "Application: Linear Regression (Normal Equation)",
          paragraphs: [
            "In linear regression, the optimal weights w that minimize the mean squared error satisfy the normal equation:",
            "w = (AᵀA)⁻¹Aᵀb",
            "This is a direct closed-form solution to the system of linear equations defined by the training data."
          ],
          code: "import numpy as np\n\n# Features (with bias column)\nA = np.array([[1, 1], [1, 2], [1, 3]])\nb = np.array([2, 4, 5])\n\n# Normal equation\nw = np.linalg.inv(A.T @ A) @ A.T @ b\nprint('Weights:', w)",
          output: "Weights: [0.66666667 1.5       ]"
        }
      ],
      tags: ["Ax=b", "Gaussian Elimination", "Normal Equation", "Linear Regression"],
      level: "Beginner"
    },
    {
      id: "Eigenvalues",
      title: "Eigenvalues & Eigenvectors",
      description: "Eigenvectors define directions that remain unchanged under a linear transformation. They are fundamental to PCA, spectral clustering, and understanding matrix structure.",
      formula: "Av = λv",
      details: [
        "An eigenvector v of matrix A only scales (by eigenvalue λ) when A is applied.",
        "The characteristic equation det(A - λI) = 0 yields eigenvalues."
      ],
      contentSections: [
        {
          heading: "What are Eigenvalues and Eigenvectors?",
          paragraphs: [
            "An eigenvector of a square matrix A is a non-zero vector v such that multiplication by A only changes v's scale:",
            "Av = λv",
            "Here λ (lambda) is the corresponding eigenvalue — a scalar that represents the scaling factor.",
            "Eigenvalues and eigenvectors reveal the intrinsic properties of a matrix — the directions along which the transformation acts simply by stretching or compressing."
          ]
        },
        {
          heading: "Finding Eigenvalues",
          paragraphs: [
            "Eigenvalues are found by solving the characteristic equation:",
            "det(A - λI) = 0",
            "For a 2×2 matrix A = [[4,2],[1,3]]:",
            "det([[4-λ, 2],[1, 3-λ]]) = (4-λ)(3-λ) - 2 = λ² - 7λ + 10 = 0",
            "Solving: λ₁ = 5, λ₂ = 2"
          ]
        },
        {
          heading: "Computing with NumPy",
          paragraphs: [],
          code: "import numpy as np\n\nA = np.array([[4, 2],\n              [1, 3]])\n\neigenvalues, eigenvectors = np.linalg.eig(A)\nprint('Eigenvalues:', eigenvalues)\nprint('Eigenvectors:\\n', eigenvectors)",
          output: "Eigenvalues: [5. 2.]\nEigenvectors:\n [[ 0.89442719 -0.70710678]\n [ 0.4472136   0.70710678]]"
        },
        {
          heading: "Applications in Machine Learning",
          paragraphs: [
            "PCA (Principal Component Analysis): The eigenvectors of the covariance matrix are the principal components. Eigenvalues represent the variance captured along each component — larger eigenvalue means more information.",
            "Spectral Clustering: Uses eigenvectors of the graph Laplacian matrix to find clusters in data.",
            "PageRank: Google's original algorithm uses the principal eigenvector of the web link matrix.",
            "Eigendecomposition: A = QΛQ⁻¹ where Q contains eigenvectors columnwise and Λ is diagonal with eigenvalues."
          ]
        }
      ],
      tags: ["PCA", "Spectral Theorem", "Variance", "Covariance"],
      level: "Advanced"
    },
    {
      id: "SVD",
      title: "Singular Value Decomposition (SVD)",
      description: "SVD decomposes any matrix into three components. It is widely used in dimensionality reduction, data compression, noise reduction, and recommendation systems.",
      formula: "A = UΣVᵀ",
      details: [
        "SVD decomposes any m×n matrix A into U (orthogonal), Σ (diagonal of singular values), and Vᵀ (orthogonal).",
        "Truncated SVD keeps only top-k singular values for the best rank-k approximation."
      ],
      contentSections: [
        {
          heading: "What is Singular Value Decomposition?",
          paragraphs: [
            "SVD is a matrix factorization technique that decomposes any real m×n matrix A into three matrices:",
            "A = U Σ Vᵀ",
            "U is an m×m orthogonal matrix (left singular vectors).",
            "Σ is an m×n diagonal matrix containing the singular values (non-negative, in descending order).",
            "Vᵀ is an n×n orthogonal matrix (right singular vectors).",
            "Unlike eigendecomposition, SVD works for any matrix — not just square ones."
          ]
        },
        {
          heading: "Computing SVD with NumPy",
          paragraphs: [],
          code: "import numpy as np\n\nA = np.array([[1, 2],\n              [3, 4],\n              [5, 6]])\n\nU, S, VT = np.linalg.svd(A, full_matrices=False)\nprint('U shape:', U.shape)\nprint('Singular values:', S)\nprint('VT shape:', VT.shape)\n\n# Reconstruct A\nA_reconstructed = U @ np.diag(S) @ VT\nprint('Reconstructed:\\n', np.round(A_reconstructed, 2))",
          output: "U shape: (3, 2)\nSingular values: [9.52551809 0.51430058]\nVT shape: (2, 2)\nReconstructed:\n [[1. 2.]\n [3. 4.]\n [5. 6.]]"
        },
        {
          heading: "Applications of SVD",
          paragraphs: [
            "Dimensionality Reduction: Keeping only the top-k singular values gives the best rank-k approximation of the original matrix (Eckart-Young theorem). This is equivalent to PCA.",
            "Data Compression: Images can be compressed by storing only top-k singular vectors and values instead of the full pixel matrix.",
            "Noise Reduction: Small singular values often encode noise — discarding them denoises the data.",
            "Recommender Systems: Netflix, Spotify and similar systems use SVD-based collaborative filtering (matrix factorization).",
            "Latent Semantic Analysis (LSA): In NLP, SVD on the term-document matrix reveals latent topics."
          ]
        },
        {
          heading: "Truncated SVD for Compression",
          paragraphs: [],
          code: "import numpy as np\n\n# Create a rank-deficient matrix\nA = np.random.rand(10, 8)\nU, S, VT = np.linalg.svd(A, full_matrices=False)\n\n# Keep only top 3 singular values\nk = 3\nA_approx = U[:, :k] @ np.diag(S[:k]) @ VT[:k, :]\nprint('Original shape:', A.shape)\nprint('Approximation error:', np.linalg.norm(A - A_approx))",
          output: "Original shape: (10, 8)\nApproximation error: 1.234567 (varies)"
        }
      ],
      tags: ["PCA", "Low-Rank", "Compression", "Noise Reduction", "Recommender Systems"],
      level: "Advanced"
    },
    {
      id: "VectorNorms",
      title: "Vector Norms",
      description: "Norms measure the magnitude or length of a vector. They are fundamental to regularization techniques like Lasso (L1) and Ridge (L2) regression.",
      formula: "||v||ₚ = (Σ|vᵢ|ᵖ)^(1/p)",
      details: [
        "L1 Norm: sum of absolute values — used in Lasso regression to encourage sparsity.",
        "L2 Norm: square root of sum of squares — used in Ridge regression."
      ],
      contentSections: [
        {
          heading: "What is a Vector Norm?",
          paragraphs: [
            "A vector norm is a function that assigns a non-negative length or size to a vector. For a vector v = (v₁, v₂, ..., vₙ), the general p-norm is:",
            "||v||ₚ = (|v₁|ᵖ + |v₂|ᵖ + ... + |vₙ|ᵖ)^(1/p)",
            "Different values of p give different norms, each with its own properties and use cases in machine learning."
          ]
        },
        {
          heading: "L1 Norm (Manhattan Norm)",
          paragraphs: [
            "||v||₁ = |v₁| + |v₂| + ... + |vₙ| = Σ|vᵢ|",
            "Also called the Manhattan or taxicab norm — the sum of absolute values.",
            "Used in Lasso (L1) Regularization: adds ||w||₁ penalty to the loss function, which drives many weights exactly to zero, producing sparse models.",
            "Robust to outliers compared to L2."
          ]
        },
        {
          heading: "L2 Norm (Euclidean Norm)",
          paragraphs: [
            "||v||₂ = √(v₁² + v₂² + ... + vₙ²) = √(Σvᵢ²)",
            "The standard Euclidean distance from the origin. The most commonly used norm.",
            "Used in Ridge (L2) Regularization: adds ||w||₂² penalty, which shrinks all weights toward zero but rarely makes them exactly zero.",
            "Also used to normalize vectors: unit vector û = v / ||v||₂"
          ]
        },
        {
          heading: "L∞ Norm (Max Norm)",
          paragraphs: [
            "||v||∞ = max(|v₁|, |v₂|, ..., |vₙ|)",
            "Takes the largest absolute value component. Used in adversarial machine learning (L∞ attacks)."
          ]
        },
        {
          heading: "Computing Norms in NumPy",
          paragraphs: [],
          code: "import numpy as np\n\nv = np.array([3, -4])\n\nprint('L1 norm:', np.linalg.norm(v, ord=1))      # 7\nprint('L2 norm:', np.linalg.norm(v))              # 5\nprint('L-inf norm:', np.linalg.norm(v, ord=np.inf))  # 4\n\n# Unit vector (L2 normalized)\nunit_v = v / np.linalg.norm(v)\nprint('Unit vector:', unit_v)",
          output: "L1 norm: 7.0\nL2 norm: 5.0\nL-inf norm: 4.0\nUnit vector: [ 0.6 -0.8]"
        }
      ],
      tags: ["L1", "L2", "Regularization", "Lasso", "Ridge", "Sparsity"],
      level: "Intermediate"
    },
    {
      id: "DistanceMetrics",
      title: "Measures of Distance",
      description: "Distance metrics measure how similar or different two data points are. They are the backbone of clustering, classification, and information retrieval algorithms.",
      formula: "cos(θ) = A·B / (||A|| ||B||)",
      details: [
        "Euclidean: straight-line distance — used in K-Means, KNN.",
        "Cosine Similarity: measures angle — essential in NLP text similarity."
      ],
      contentSections: [
        {
          heading: "Why Distance Metrics Matter",
          paragraphs: [
            "Distance metrics quantify how similar or different two data points (vectors) are. The choice of distance metric determines how algorithms like K-Nearest Neighbors (KNN), K-Means clustering, and recommendation systems measure 'closeness'."
          ]
        },
        {
          heading: "Euclidean Distance",
          paragraphs: [
            "The straight-line distance between two points in Euclidean space:",
            "d(A, B) = √(Σ(Aᵢ - Bᵢ)²)",
            "Most natural measure of distance. Used in KNN, K-Means, SVM.",
            "Sensitive to scale — features with large ranges dominate. Always normalize features before using Euclidean distance."
          ],
          code: "import numpy as np\n\nA = np.array([1, 2, 3])\nB = np.array([4, 5, 6])\n\ndist = np.linalg.norm(A - B)\nprint('Euclidean Distance:', dist)",
          output: "Euclidean Distance: 5.196152422706632"
        },
        {
          heading: "Manhattan Distance",
          paragraphs: [
            "Also called the L1 distance or taxicab distance — the sum of absolute differences:",
            "d(A, B) = Σ|Aᵢ - Bᵢ|",
            "Less sensitive to outliers than Euclidean. Preferred when features represent counts or distances on a grid."
          ],
          code: "import numpy as np\n\nA = np.array([1, 2, 3])\nB = np.array([4, 5, 6])\n\nmanhattan = np.sum(np.abs(A - B))\nprint('Manhattan Distance:', manhattan)",
          output: "Manhattan Distance: 9"
        },
        {
          heading: "Cosine Similarity",
          paragraphs: [
            "Measures the cosine of the angle between two vectors — ignores magnitude, focuses on direction:",
            "cos(θ) = (A · B) / (||A|| × ||B||)",
            "Range: [-1, 1]. Value of 1 means identical direction, 0 means orthogonal, -1 means opposite.",
            "Widely used in NLP: two documents with the same words in different proportions still score high.",
            "Preferred over Euclidean for high-dimensional sparse data (text, recommendation systems)."
          ],
          code: "import numpy as np\n\nA = np.array([1, 2, 3])\nB = np.array([4, 5, 6])\n\ncos_sim = np.dot(A, B) / (np.linalg.norm(A) * np.linalg.norm(B))\nprint('Cosine Similarity:', round(cos_sim, 4))",
          output: "Cosine Similarity: 0.9746"
        },
        {
          heading: "Minkowski Distance",
          paragraphs: [
            "A generalization that unifies Euclidean (p=2) and Manhattan (p=1):",
            "d(A, B) = (Σ|Aᵢ - Bᵢ|ᵖ)^(1/p)",
            "When p → ∞, it approaches the Chebyshev (max) distance."
          ]
        }
      ],
      tags: ["Cosine Similarity", "Euclidean", "Manhattan", "KNN", "Minkowski"],
      level: "Intermediate"
    }
  ]
};

// =============================================================================
// PROBABILITY — 5 topics from GfG
// =============================================================================
export const PROBABILITY_DATA: CategoryData = {
  id: "probability",
  title: "Probability",
  description: "Probability helps measure uncertainty and analyze the likelihood of different outcomes. It forms the basis for predictions, classifications and model confidence.",
  keyConcepts: [
    { title: "Sample Space", description: "Foundation for analyzing outcomes" },
    { title: "Bayes' Theorem", description: "Updating predictions with new data" },
    { title: "Distributions", description: "Modeling uncertainty and hypothesis testing" },
    { title: "Conditional Prob.", description: "Used in classification and risk modeling" }
  ],
  sections: [
    {
      id: "SampleSpace",
      title: "Sample Space & Events",
      description: "The sample space is the set of all possible outcomes of a random experiment. It is the foundation for analyzing all probabilities.",
      formula: "P(A) = |A| / |S|",
      details: ["Sample Space (S): the set of all possible outcomes.", "An Event is any subset of S."],
      contentSections: [
        {
          heading: "What is Sample Space?",
          paragraphs: [
            "In probability theory, a sample space is defined as the set of all possible outcomes or results of a random experiment. It is usually denoted by S.",
            "For example, when we roll a fair six-sided die, the sample space is S = {1, 2, 3, 4, 5, 6}.",
            "When we toss a coin, the sample space is S = {Heads, Tails}.",
            "An event is any subset of the sample space. For rolling a die, 'rolling an even number' is the event E = {2, 4, 6}."
          ],
          code: "# Sample space for a die\nS = {1, 2, 3, 4, 5, 6}\nE = {2, 4, 6}  # Event: rolling even\n\nP_E = len(E) / len(S)\nprint('P(even):', P_E)",
          output: "P(even): 0.5"
        },
        {
          heading: "Types of Events",
          paragraphs: [
            "Simple Event: An event with only one outcome. Example: rolling a 4.",
            "Compound Event: An event with more than one outcome. Example: rolling an even number.",
            "Mutually Exclusive Events: Two events that cannot occur at the same time. Example: rolling a 2 and rolling a 5.",
            "Exhaustive Events: Events that cover all outcomes of the sample space."
          ]
        },
        {
          heading: "Random Variables",
          paragraphs: [
            "A random variable maps outcomes of a sample space to numerical values.",
            "Discrete Random Variable: takes countable values. Example: number of heads in 3 coin flips (X = 0, 1, 2, 3).",
            "Continuous Random Variable: takes any value in a range. Example: height, temperature, time."
          ]
        }
      ],
      tags: ["Outcomes", "Events", "Random Variable", "Experiment"],
      level: "Beginner"
    },
    {
      id: "ProbabilityRules",
      title: "Probability Rules",
      description: "The foundational laws governing probability calculations. Important for forecasting, evaluating events, and building probabilistic models.",
      formula: "P(A∪B) = P(A) + P(B) - P(A∩B)",
      details: ["Addition Rule, Multiplication Rule, and Complement Rule are the three core rules.", "For mutually exclusive events: P(A∪B) = P(A) + P(B)."],
      contentSections: [
        {
          heading: "The Three Core Probability Rules",
          paragraphs: [
            "Probability theory is built on a few fundamental rules that allow us to calculate the likelihood of complex events from simpler ones."
          ]
        },
        {
          heading: "1. Addition Rule (Union)",
          paragraphs: [
            "For any two events A and B:",
            "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
            "For mutually exclusive events (cannot occur together): P(A ∪ B) = P(A) + P(B).",
            "Example: P(drawing a King or a Heart) = P(King) + P(Heart) - P(King of Hearts) = 4/52 + 13/52 - 1/52 = 16/52"
          ],
          code: "P_A = 0.3   # P(King)\nP_B = 0.5   # P(Heart)\nP_A_and_B = 0.1  # P(King AND Heart)\n\nP_A_or_B = P_A + P_B - P_A_and_B\nprint('P(A or B):', P_A_or_B)",
          output: "P(A or B): 0.7"
        },
        {
          heading: "2. Multiplication Rule (Intersection)",
          paragraphs: [
            "For independent events A and B (knowledge of one doesn't affect the other):",
            "P(A ∩ B) = P(A) × P(B)",
            "For dependent events: P(A ∩ B) = P(A) × P(B|A)",
            "Example: Probability of rolling two 6s in a row: P = 1/6 × 1/6 = 1/36"
          ]
        },
        {
          heading: "3. Complement Rule",
          paragraphs: [
            "The complement of event A (written A') is everything in S that is NOT in A:",
            "P(A') = 1 - P(A)",
            "Example: If P(rain) = 0.3, then P(no rain) = 1 - 0.3 = 0.7"
          ]
        }
      ],
      tags: ["Addition", "Multiplication", "Complement", "Union", "Intersection"],
      level: "Beginner"
    },
    {
      id: "ConditionalProbability",
      title: "Conditional Probability",
      description: "The probability of an event given that another event has already occurred. Used in classification, recommender systems, and risk modeling.",
      formula: "P(A|B) = P(A∩B) / P(B)",
      details: ["P(A|B) is the probability of A given B has occurred.", "Independent events satisfy P(A|B) = P(A)."],
      contentSections: [
        {
          heading: "What is Conditional Probability?",
          paragraphs: [
            "Conditional probability is the probability of an event A occurring given that another event B has already occurred. It is written as P(A|B), read as 'probability of A given B'.",
            "P(A|B) = P(A ∩ B) / P(B), provided P(B) > 0.",
            "This formula updates our knowledge: once we know B happened, it changes the effective sample space for A."
          ]
        },
        {
          heading: "Independence vs Dependence",
          paragraphs: [
            "Two events A and B are independent if:",
            "P(A|B) = P(A)  —  knowing B occurred gives no information about A.",
            "P(A ∩ B) = P(A) × P(B)",
            "If this does not hold, A and B are dependent events."
          ]
        },
        {
          heading: "Example: Medical Diagnosis",
          paragraphs: [
            "A disease affects 1% of the population. A test is 95% accurate for diseased patients and 5% of healthy patients test positive (false positive). If someone tests positive, what is the probability they have the disease?"
          ],
          code: "P_positive_given_disease = 0.95\nP_disease = 0.01\nP_healthy = 1 - P_disease\nP_positive_given_healthy = 0.05\n\n# Total probability of positive test\nP_positive = (P_positive_given_disease * P_disease +\n              P_positive_given_healthy * P_healthy)\n\n# Conditional probability (Bayes)\nP_disease_given_positive = (P_positive_given_disease * P_disease) / P_positive\nprint('P(Disease|Positive Test):', round(P_disease_given_positive, 4))",
          output: "P(Disease|Positive Test): 0.1605"
        },
        {
          heading: "Applications in Machine Learning",
          paragraphs: [
            "Naive Bayes Classifier: uses conditional probabilities P(feature|class) to assign class labels.",
            "Spam Filtering: P(spam|word) computed from training data to classify emails.",
            "Recommendation Systems: P(user likes item B | liked item A) guides suggestions."
          ]
        }
      ],
      tags: ["Conditional", "Independence", "Classification", "Naive Bayes"],
      level: "Intermediate"
    },
    {
      id: "BayesTheorem",
      title: "Bayes' Theorem in Machine Learning",
      description: "Bayes' theorem is a way of finding a probability when we know certain other probabilities. It is key for updating predictions with new data.",
      formula: "P(A|B) = P(B|A) · P(A) / P(B)",
      details: ["Bayes reverses conditional probability — computes posterior from likelihood, prior, and evidence.", "Foundation of Naive Bayes, Bayesian inference, and spam filtering."],
      contentSections: [
        {
          heading: "What is Bayes' Theorem?",
          paragraphs: [
            "Bayes' Theorem provides a way to update probabilities when new evidence is available. It relates prior beliefs to updated (posterior) beliefs given observed data:",
            "P(A|B) = P(B|A) × P(A) / P(B)",
            "P(A) is the Prior — our initial belief about A before seeing data B.",
            "P(B|A) is the Likelihood — how probable is B assuming A is true.",
            "P(B) is the Evidence (marginal likelihood) — the total probability of observing B.",
            "P(A|B) is the Posterior — our updated belief about A after observing B."
          ]
        },
        {
          heading: "Naive Bayes Classifier",
          paragraphs: [
            "The Naive Bayes classifier applies Bayes' theorem to classify data. It assumes all features are conditionally independent given the class label (the 'naive' assumption).",
            "For text classification: P(spam|words) ∝ P(words|spam) × P(spam)",
            "Despite the naive assumption, it works surprisingly well for email spam, sentiment analysis, and document classification."
          ],
          code: "# Naive Bayes concept for spam detection\nP_word_given_spam = 0.8   # P('free'|spam)\nP_spam = 0.3              # Prior: 30% of emails are spam\nP_word = 0.5              # P('free') appears in 50% of emails\n\n# Update: P(spam|'free')\nP_spam_given_word = (P_word_given_spam * P_spam) / P_word\nprint('P(spam|word):', P_spam_given_word)",
          output: "P(spam|word): 0.48"
        },
        {
          heading: "Bayes' Theorem in Practice",
          paragraphs: [
            "Medical Diagnosis: P(disease|test_positive) = P(test_positive|disease) × P(disease) / P(test_positive)",
            "A/B Testing: Bayesian A/B tests update posterior probabilities as data comes in, allowing early stopping.",
            "Bayesian Neural Networks: Instead of single weight values, learn weight distributions for uncertainty quantification."
          ]
        }
      ],
      tags: ["Bayes", "Naive Bayes", "Prior", "Posterior", "Likelihood"],
      level: "Intermediate"
    },
    {
      id: "Distributions",
      title: "Probability Distributions",
      description: "Distributions describe how probabilities are spread over values of a random variable. They are the basis for modeling uncertainty and hypothesis testing.",
      formula: "f(x) = (1/√(2πσ²)) exp(-(x-μ)²/2σ²)",
      details: ["Discrete: Bernoulli, Binomial, Poisson.", "Continuous: Normal (Gaussian), Uniform, Exponential."],
      contentSections: [
        {
          heading: "What is a Probability Distribution?",
          paragraphs: [
            "A probability distribution is a function that describes all possible values a random variable can take and how likely each value is.",
            "Discrete distributions: apply to countable outcomes (coin flips, counts).",
            "Continuous distributions: apply to outcomes over a continuous range (height, price, temperature)."
          ]
        },
        {
          heading: "Discrete Distributions",
          paragraphs: [
            "Bernoulli Distribution: models a single trial with success probability p. P(X=1) = p, P(X=0) = 1-p. Used in binary classification baseline.",
            "Binomial Distribution: number of successes in n independent Bernoulli trials. P(X=k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ.",
            "Poisson Distribution: models rare events in a fixed interval. P(X=k) = λᵏe⁻λ / k!. Example: number of server requests per minute."
          ],
          code: "from scipy import stats\n\n# Binomial: P(X=3) for n=10, p=0.5\nbinom_p = stats.binom.pmf(3, n=10, p=0.5)\nprint('Binomial P(X=3):', round(binom_p, 4))\n\n# Poisson: P(X=2) for lambda=3\npoisson_p = stats.poisson.pmf(2, mu=3)\nprint('Poisson P(X=2):', round(poisson_p, 4))",
          output: "Binomial P(X=3): 0.1172\nPoisson P(X=2): 0.2240"
        },
        {
          heading: "Continuous Distributions",
          paragraphs: [
            "Normal (Gaussian) Distribution: the bell curve, parameterized by mean μ and standard deviation σ. Central to most ML models due to the Central Limit Theorem.",
            "Uniform Distribution: constant probability across an interval [a, b]. f(x) = 1/(b-a). Used for random initialization in neural networks.",
            "Exponential Distribution: models time between events. f(x) = λe⁻λˣ for x ≥ 0. Used in survival analysis and queuing theory."
          ],
          code: "import numpy as np\nfrom scipy import stats\n\n# Normal distribution statistics\nmean, std = 0, 1\nprint('P(X < 1.96):', round(stats.norm.cdf(1.96, mean, std), 4))\nprint('95% CI:', stats.norm.interval(0.95, mean, std))",
          output: "P(X < 1.96): 0.975\n95% CI: (-1.959963985, 1.959963985)"
        }
      ],
      tags: ["Normal", "Bernoulli", "Binomial", "Poisson", "Gaussian", "CLT"],
      level: "Beginner"
    }
  ]
};

// =============================================================================
// STATISTICS — 9 topics from GfG (including Non-Parametric Tests)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics",
  title: "Statistics",
  description: "Statistics helps analyze data, identify patterns and draw meaningful conclusions from datasets. It acts as the backbone for understanding data and building reliable models.",
  keyConcepts: [
    { title: "Descriptive", description: "Summarizes dataset characteristics" },
    { title: "Inferential", description: "Draws conclusions from samples" },
    { title: "Hypothesis Testing", description: "Validates claims with statistical significance" },
    { title: "Correlation", description: "Measures relationships between variables" }
  ],
  sections: [
    {
      id: "DescriptiveStats",
      title: "Descriptive Statistics",
      description: "Summarizes dataset characteristics (mean, median, variance), helping us understand and visualize data patterns without drawing inferences.",
      formula: "μ = Σx/N,  σ² = Σ(x-μ)²/N",
      details: ["Central tendency: Mean, Median, Mode.", "Dispersion: Variance, Standard Deviation, IQR."],
      contentSections: [
        {
          heading: "What is Descriptive Statistics?",
          paragraphs: [
            "Descriptive statistics summarize and describe the features of a dataset. Unlike inferential statistics, they do not make predictions — they help us understand the data we have.",
            "There are two main categories: measures of central tendency (where is the center?) and measures of dispersion (how spread out is the data?)."
          ]
        },
        {
          heading: "Measures of Central Tendency",
          paragraphs: [
            "Mean (Arithmetic Average): μ = Σxᵢ / N — the sum of all values divided by the count. Sensitive to outliers.",
            "Median: the middle value when data is sorted. Robust to outliers — preferred for skewed data.",
            "Mode: the most frequently occurring value. Useful for categorical data."
          ],
          code: "import numpy as np\nfrom scipy import stats\n\ndata = [14, 18, 11, 13, 6, 8, 2, 12, 15, 19]\nprint('Mean:', np.mean(data))\nprint('Median:', np.median(data))\nprint('Mode:', stats.mode(data).mode[0])",
          output: "Mean: 11.8\nMedian: 12.5\nMode: 2"
        },
        {
          heading: "Measures of Dispersion",
          paragraphs: [
            "Range: max - min. Simple but sensitive to outliers.",
            "Variance (σ²): average of squared deviations from the mean. σ² = Σ(xᵢ - μ)² / N",
            "Standard Deviation (σ): √variance. Expressed in the same units as data — the most common dispersion metric.",
            "IQR (Interquartile Range): Q3 - Q1. Range of the middle 50% of data. Robust to outliers.",
            "Coefficient of Variation: CV = σ/μ × 100%. Compares variability between datasets with different units or means."
          ],
          code: "import numpy as np\n\ndata = [14, 18, 11, 13, 6, 8, 2, 12, 15, 19]\nprint('Variance:', np.var(data))\nprint('Std Dev:', np.std(data))\nprint('IQR:', np.percentile(data, 75) - np.percentile(data, 25))",
          output: "Variance: 24.96\nStd Dev: 4.996\nIQR: 6.25"
        }
      ],
      tags: ["Mean", "Median", "Variance", "IQR", "Mode"],
      level: "Beginner"
    },
    {
      id: "InferentialStats",
      title: "Inferential Statistics",
      description: "Uses sample data to make inferences about a larger population. Essential for predictions, hypothesis testing, and building statistical models.",
      formula: "CI = x̄ ± Z(σ/√n)",
      details: ["Uses sample data to estimate population parameters.", "Central Limit Theorem: sample means approach normal distribution as n increases."],
      contentSections: [
        {
          heading: "What is Inferential Statistics?",
          paragraphs: [
            "Inferential statistics allows us to draw conclusions about a population based on a smaller sample. Since we usually cannot measure an entire population, we sample a subset and use probability theory to generalize our findings.",
            "Key distinction: a Parameter describes a population (e.g., population mean μ), while a Statistic describes a sample (e.g., sample mean x̄)."
          ]
        },
        {
          heading: "The Central Limit Theorem (CLT)",
          paragraphs: [
            "The CLT states that regardless of the shape of the original population distribution, the distribution of sample means approaches a normal distribution as the sample size n increases (typically n ≥ 30).",
            "This is why so many statistical tests assume normality — the CLT guarantees it for large enough samples.",
            "Standard Error (SE) = σ / √n — measures how much sample means vary around the true mean."
          ]
        },
        {
          heading: "Confidence Intervals from Samples",
          paragraphs: [
            "A confidence interval estimates a range within which the true population parameter likely falls."
          ],
          code: "import numpy as np\nfrom scipy import stats\n\nnp.random.seed(42)\nsample = np.random.normal(100, 15, 50)\n\nsample_mean = np.mean(sample)\nse = stats.sem(sample)\nci = stats.t.interval(0.95, df=len(sample)-1, loc=sample_mean, scale=se)\n\nprint(f'Sample Mean: {sample_mean:.2f}')\nprint(f'95% CI: ({ci[0]:.2f}, {ci[1]:.2f})')",
          output: "Sample Mean: 100.94\n95% CI: (96.73, 105.15)"
        }
      ],
      tags: ["Population", "Sample", "CLT", "Estimator", "Standard Error"],
      level: "Intermediate"
    },
    {
      id: "ConfidenceIntervals",
      title: "Confidence Intervals",
      description: "A range of values that likely contains the true population parameter. Used to measure accuracy of predictions and estimates.",
      formula: "CI = x̄ ± z*(σ/√n)",
      details: ["A 95% CI means 95% of such intervals from repeated experiments would contain the true parameter.", "Width depends on confidence level, sample std, and sample size n."],
      contentSections: [
        {
          heading: "What is a Confidence Interval?",
          paragraphs: [
            "A confidence interval (CI) is a range of values, derived from sample data, that is likely to contain the true population parameter with a specified probability (confidence level).",
            "A 95% CI means: if we repeated the sampling process 100 times, approximately 95 of those intervals would contain the true parameter.",
            "CI = x̄ ± z* × (σ/√n)  where z* is the critical value for the desired confidence level."
          ]
        },
        {
          heading: "Critical Values",
          paragraphs: [
            "90% CI: z* = 1.645",
            "95% CI: z* = 1.960",
            "99% CI: z* = 2.576",
            "For small samples (n < 30), use the t-distribution instead of z, with df = n - 1 degrees of freedom."
          ]
        },
        {
          heading: "Factors Affecting CI Width",
          paragraphs: [
            "Larger sample size n → narrower interval (more precise estimate).",
            "Higher confidence level (99% vs 95%) → wider interval.",
            "Larger standard deviation σ → wider interval (more uncertain data)."
          ],
          code: "import numpy as np\nfrom scipy import stats\n\ndata = np.random.normal(50, 10, 100)\n\n# 95% CI using t-distribution\nci = stats.t.interval(0.95, df=len(data)-1,\n                      loc=np.mean(data),\n                      scale=stats.sem(data))\nprint(f'Mean: {np.mean(data):.2f}')\nprint(f'95% CI: {ci}')",
          output: "Mean: 50.12\n95% CI: (48.15, 52.09)"
        },
        {
          heading: "Applications",
          paragraphs: [
            "A/B Testing: compare two variants with confidence intervals to determine if a difference is statistically meaningful.",
            "Clinical Trials: report drug effectiveness as an effect size with 95% CI.",
            "ML Model Evaluation: report accuracy ± margin of error for robust comparison."
          ]
        }
      ],
      tags: ["95% CI", "Margin of Error", "A/B Testing", "t-distribution"],
      level: "Intermediate"
    },
    {
      id: "SkewnessKurtosis",
      title: "Skewness & Kurtosis",
      description: "Measures the shape of a data distribution. Skewness captures asymmetry, kurtosis captures how heavy the tails are.",
      formula: "Skewness = E[(X-μ)³] / σ³",
      details: ["Positive skew: long right tail, mean > median.", "Kurtosis > 3 (leptokurtic): heavy tails, more extreme outliers."],
      contentSections: [
        {
          heading: "Skewness: Measuring Asymmetry",
          paragraphs: [
            "Skewness measures how asymmetric a distribution is around its mean.",
            "Zero skewness: symmetric distribution (like the normal distribution).",
            "Positive (Right) Skew: long tail on the right. Mean > Median > Mode. Example: income distributions.",
            "Negative (Left) Skew: long tail on the left. Mean < Median < Mode. Example: age at retirement.",
            "Formula: Skewness = E[(X-μ)³] / σ³"
          ],
          code: "from scipy import stats\nimport numpy as np\n\n# Right-skewed data (exponential)\ndata = np.random.exponential(2, 1000)\nprint('Skewness:', round(stats.skew(data), 4))",
          output: "Skewness: 1.9843"
        },
        {
          heading: "Kurtosis: Measuring Tail Heaviness",
          paragraphs: [
            "Kurtosis measures how heavy the tails of a distribution are relative to a normal distribution.",
            "Mesokurtic (kurtosis ≈ 3): normal distribution.",
            "Leptokurtic (kurtosis > 3): heavy tails — more outliers than normal. Common in financial returns.",
            "Platykurtic (kurtosis < 3): light tails — fewer outliers.",
            "SciPy uses excess kurtosis = kurtosis - 3, so normal distribution has excess kurtosis = 0."
          ],
          code: "from scipy import stats\nimport numpy as np\n\ndata = np.random.exponential(2, 1000)\nprint('Kurtosis (excess):', round(stats.kurtosis(data), 4))\n\n# Normal should be ~0\nnormal_data = np.random.normal(0, 1, 1000)\nprint('Normal kurtosis:', round(stats.kurtosis(normal_data), 4))",
          output: "Kurtosis (excess): 5.8124\nNormal kurtosis: 0.0231"
        },
        {
          heading: "Why It Matters for ML",
          paragraphs: [
            "Many ML models (linear regression) assume normally distributed residuals.",
            "Highly skewed or heavy-tailed data may violate these assumptions, degrading model performance.",
            "Common fix: apply log transformation, Box-Cox transformation, or use robust models."
          ]
        }
      ],
      tags: ["Asymmetry", "Tail Weight", "Outliers", "Box-Cox", "Normality"],
      level: "Intermediate"
    },
    {
      id: "HypothesisTesting",
      title: "Hypothesis Testing",
      description: "A formal framework for making inferences about a population based on sample data. Includes p-values, significance levels, and Type I/II errors.",
      formula: "p-value < α → reject H₀",
      details: ["H₀ (null hypothesis): no effect. H₁ (alternative): there is an effect.", "p-value ≤ α (usually 0.05): reject H₀."],
      contentSections: [
        {
          heading: "What is Hypothesis Testing?",
          paragraphs: [
            "Hypothesis testing is a systematic procedure to evaluate whether sample data provides enough evidence to reject a stated assumption about the population.",
            "Null Hypothesis (H₀): assumes no effect or no difference — the default assumption.",
            "Alternative Hypothesis (H₁): claims there is an effect or difference."
          ]
        },
        {
          heading: "The Steps of Hypothesis Testing",
          paragraphs: [
            "Step 1: State H₀ and H₁.",
            "Step 2: Choose significance level α (commonly 0.05).",
            "Step 3: Select the appropriate statistical test (t-test, z-test, chi-square, etc.).",
            "Step 4: Calculate the test statistic and p-value.",
            "Step 5: If p-value ≤ α, reject H₀. Otherwise, fail to reject H₀."
          ]
        },
        {
          heading: "Type I and Type II Errors",
          paragraphs: [
            "Type I Error (False Positive, α): rejecting a true H₀. This is the significance level itself.",
            "Type II Error (False Negative, β): failing to reject a false H₀.",
            "Power = 1 - β: the probability of correctly rejecting a false H₀.",
            "There is a tradeoff: lowering α reduces Type I error but increases Type II error."
          ]
        },
        {
          heading: "Example: Two-Sample t-test",
          paragraphs: [],
          code: "from scipy.stats import ttest_ind\nimport numpy as np\n\nnp.random.seed(42)\ngroup1 = np.random.normal(50, 10, 30)  # Control\ngroup2 = np.random.normal(55, 10, 30)  # Treatment\n\nstat, p = ttest_ind(group1, group2)\nprint(f't-statistic: {stat:.3f}')\nprint(f'p-value: {p:.4f}')\nprint('Reject H₀:', p < 0.05)",
          output: "t-statistic: -2.145\np-value: 0.0353\nReject H₀: True"
        }
      ],
      tags: ["p-value", "H₀", "Type I", "Type II", "Significance"],
      level: "Advanced"
    },
    {
      id: "StatisticalTests",
      title: "Statistical Tests",
      description: "T-test, Z-test, F-test, Chi-square, and ANOVA are the main workhorses of statistical analysis for data-driven decisions.",
      formula: "t = (x̄ - μ) / (s/√n)",
      details: ["Z-test: large samples with known variance.", "T-test: small samples or unknown variance. ANOVA: comparing 3+ groups."],
      contentSections: [
        {
          heading: "Z-test",
          paragraphs: [
            "Used when sample size n > 30 and population variance σ² is known.",
            "Z = (x̄ - μ₀) / (σ / √n)",
            "Example: test if a sample mean differs significantly from a known population mean."
          ]
        },
        {
          heading: "T-test",
          paragraphs: [
            "Used when sample size is small (n < 30) or population variance is unknown.",
            "One-Sample T-test: compare sample mean to a known value.",
            "Two-Sample (Independent) T-test: compare means of two independent groups.",
            "Paired T-test: compare means of the same group before and after a treatment.",
            "t = (x̄ - μ₀) / (s / √n)"
          ],
          code: "from scipy.stats import ttest_1samp\nimport numpy as np\n\n# Is the sample mean significantly different from 50?\ndata = np.random.normal(52, 5, 30)\nstat, p = ttest_1samp(data, 50)\nprint(f't-stat: {stat:.3f}, p-value: {p:.4f}')\nprint('Significant:', p < 0.05)",
          output: "t-stat: 2.341, p-value: 0.0263\nSignificant: True"
        },
        {
          heading: "ANOVA (Analysis of Variance)",
          paragraphs: [
            "Compares means across 3 or more groups simultaneously.",
            "H₀: all group means are equal. H₁: at least one group mean differs.",
            "F-statistic = Between-group variance / Within-group variance",
            "One-Way ANOVA: one factor. Two-way ANOVA: two factors with possible interaction."
          ],
          code: "from scipy.stats import f_oneway\nimport numpy as np\n\ng1 = np.random.normal(70, 10, 30)\ng2 = np.random.normal(75, 10, 30)\ng3 = np.random.normal(72, 10, 30)\n\nF, p = f_oneway(g1, g2, g3)\nprint(f'F-statistic: {F:.3f}')\nprint(f'p-value: {p:.4f}')",
          output: "F-statistic: 1.856\np-value: 0.1612"
        },
        {
          heading: "Chi-Square Test",
          paragraphs: [
            "Tests the association between categorical variables.",
            "χ² = Σ (O - E)² / E  where O = observed frequencies, E = expected frequencies.",
            "Used in feature selection for categorical features, A/B test analysis, and goodness-of-fit tests."
          ],
          code: "from scipy.stats import chi2_contingency\nimport numpy as np\n\n# Contingency table: rows = group, cols = outcome\ntable = np.array([[30, 20], [15, 35]])\nchi2, p, dof, expected = chi2_contingency(table)\nprint(f'Chi2: {chi2:.3f}, p-value: {p:.4f}, dof: {dof}')",
          output: "Chi2: 8.108, p-value: 0.0044, dof: 1"
        }
      ],
      tags: ["T-test", "Z-test", "ANOVA", "Chi-square", "F-test"],
      level: "Advanced"
    },
    {
      id: "Correlation",
      title: "Correlation Analysis",
      description: "Measures the strength and direction of relationships between variables. Foundation for feature selection and understanding data structure.",
      formula: "ρ = Cov(X,Y) / (σₓ σᵧ)",
      details: ["Pearson: linear correlation [-1, 1].", "Spearman: rank-based, handles non-linear monotonic relationships."],
      contentSections: [
        {
          heading: "Covariance vs Correlation",
          paragraphs: [
            "Covariance measures how two variables change together: Cov(X,Y) = Σ(Xᵢ - X̄)(Yᵢ - Ȳ) / n",
            "Positive covariance: both variables tend to increase together. Negative: one increases as the other decreases.",
            "Problem: covariance depends on the scale of the variables. Correlation normalizes it to [-1, 1]."
          ]
        },
        {
          heading: "Pearson Correlation Coefficient",
          paragraphs: [
            "ρ = Cov(X,Y) / (σₓ × σᵧ)",
            "Range: [-1, 1]. +1 = perfect positive linear, 0 = no linear correlation, -1 = perfect negative linear.",
            "Assumes both variables are normally distributed and the relationship is linear.",
            "Used extensively in feature selection: drop highly correlated features (multicollinearity)."
          ],
          code: "import numpy as np\nfrom scipy.stats import pearsonr\n\nx = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 5, 4, 5])\n\nr, p_val = pearsonr(x, y)\nprint(f'Pearson r: {r:.3f}')\nprint(f'p-value: {p_val:.4f}')",
          output: "Pearson r: 0.872\np-value: 0.0543"
        },
        {
          heading: "Spearman Correlation",
          paragraphs: [
            "Rank-based correlation — measures monotonic (not just linear) relationships.",
            "More robust to outliers and does not assume normality.",
            "Preferred when data is ordinal or when the relationship is monotonic but not linear."
          ],
          code: "from scipy.stats import spearmanr\nimport numpy as np\n\nx = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 5, 4, 5])\n\nr_s, p_s = spearmanr(x, y)\nprint(f'Spearman ρ: {r_s:.3f}')",
          output: "Spearman ρ: 0.900"
        }
      ],
      tags: ["Pearson", "Spearman", "Covariance", "Feature Selection"],
      level: "Beginner"
    },
    {
      id: "SamplingTechniques",
      title: "Sampling Techniques",
      description: "How we select representative subsets from a population. The choice of sampling technique directly affects the validity of statistical conclusions.",
      formula: "n = Z²σ² / E²",
      details: ["Simple Random: equal probability for all members.", "Stratified: ensures group representation. Cluster: economical for large populations."],
      contentSections: [
        {
          heading: "Why Sampling Matters",
          paragraphs: [
            "In practice, we rarely have access to entire populations. Sampling lets us study a manageable subset and draw conclusions about the whole.",
            "A good sample is representative — it mirrors the population characteristics accurately."
          ]
        },
        {
          heading: "Types of Sampling",
          paragraphs: [
            "Simple Random Sampling: every individual has an equal chance of selection. Basis for most statistical tests. Best for homogeneous populations.",
            "Stratified Sampling: divide population into strata (subgroups like age, gender) and sample from each stratum. Ensures all groups are represented.",
            "Cluster Sampling: divide into clusters (geographic areas, schools), randomly select entire clusters. Cost-effective for large, dispersed populations.",
            "Systematic Sampling: select every k-th element (e.g., every 10th customer). Simple but can introduce bias if the list has a repeating pattern."
          ],
          code: "import numpy as np\n\npopulation = np.arange(1, 1001)\n\n# Simple random sample of 50\nsample = np.random.choice(population, size=50, replace=False)\nprint('Sample mean:', np.mean(sample))\nprint('First 10:', sample[:10])",
          output: "Sample mean: 512.3\nFirst 10: [234  78 901 ...]"
        },
        {
          heading: "Determining Sample Size",
          paragraphs: [
            "To estimate a sample size that gives a margin of error E at confidence level Z with known σ:",
            "n = (Z × σ / E)²",
            "For 95% CI, Z = 1.96. For σ = 15 and E = 3: n = (1.96 × 15 / 3)² ≈ 97"
          ]
        }
      ],
      tags: ["Random", "Stratified", "Cluster", "Sample Size", "Systematic"],
      level: "Beginner"
    },
    {
      id: "NonParametricTests",
      title: "Non-Parametric Tests",
      description: "Statistical tests that make no assumptions about the underlying data distribution. Used when normality assumptions are violated.",
      formula: "U = n₁n₂ + n₁(n₁+1)/2 - R₁",
      details: ["No distributional assumptions required.", "Best for ordinal data, small samples, or heavily skewed distributions."],
      contentSections: [
        {
          heading: "When to Use Non-Parametric Tests",
          paragraphs: [
            "Parametric tests (t-test, ANOVA) assume normally distributed data and sometimes homogeneity of variance. When these assumptions are violated, non-parametric alternatives are more appropriate.",
            "Use non-parametric tests when: data is ordinal, sample sizes are very small (n < 10), or data is heavily skewed / has extreme outliers."
          ]
        },
        {
          heading: "Mann-Whitney U Test",
          paragraphs: [
            "Compares two independent groups without assuming normality. Non-parametric alternative to the independent samples t-test.",
            "Tests whether one group tends to have larger values than the other.",
            "U = n₁n₂ + n₁(n₁+1)/2 - R₁ where R₁ is the sum of ranks for group 1."
          ],
          code: "from scipy.stats import mannwhitneyu\nimport numpy as np\n\ng1 = [23, 41, 54, 66, 78]\ng2 = [34, 47, 56, 62, 71]\n\nU, p = mannwhitneyu(g1, g2, alternative='two-sided')\nprint(f'Mann-Whitney U={U}, p={p:.4f}')\nprint('Significant:', p < 0.05)",
          output: "Mann-Whitney U=9.0, p=0.5476\nSignificant: False"
        },
        {
          heading: "Kruskal-Wallis Test",
          paragraphs: [
            "Non-parametric alternative to one-way ANOVA. Compares 3 or more independent groups.",
            "Based on rank sums within each group — does not assume normality.",
            "H₀: all groups come from the same distribution."
          ],
          code: "from scipy.stats import kruskal\nimport numpy as np\n\ng1 = np.random.normal(5, 1, 20)\ng2 = np.random.normal(6, 1, 20)\ng3 = np.random.normal(5.5, 1, 20)\n\nH, p = kruskal(g1, g2, g3)\nprint(f'Kruskal-Wallis H={H:.3f}, p={p:.4f}')",
          output: "Kruskal-Wallis H=4.832, p=0.0892"
        },
        {
          heading: "Wilcoxon Signed-Rank Test",
          paragraphs: [
            "Non-parametric alternative to the paired t-test. Compares two related samples (before/after measurements).",
            "Works on the ranks of the differences between paired observations rather than the raw values."
          ]
        }
      ],
      tags: ["Mann-Whitney", "Kruskal-Wallis", "Wilcoxon", "Ordinal", "Non-normal"],
      level: "Advanced"
    }
  ]
};

// =============================================================================
// CALCULUS — 7 topics from GfG
// =============================================================================
export const CALCULUS_DATA: CategoryData = {
  id: "calculus",
  title: "Calculus",
  description: "Calculus helps optimize machine learning models by adjusting parameters to minimize prediction error. It enables gradient-based learning.",
  keyConcepts: [
    { title: "Derivatives", description: "Measuring changes in parameters" },
    { title: "Gradient Descent", description: "Core optimization algorithm for ML" },
    { title: "Chain Rule", description: "Powers backpropagation in neural networks" },
    { title: "Jacobian & Hessian", description: "Second-order optimization" }
  ],
  sections: [
    {
      id: "Differentiation",
      title: "Differentiation",
      description: "Differentiation computes the rate of change of a function with respect to its input. It is the mathematical foundation of all gradient-based ML optimization.",
      formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
      details: ["The derivative measures instantaneous rate of change — the slope of the tangent line.", "In ML, it tells how the loss changes when parameters are adjusted."],
      contentSections: [
        {
          heading: "What is Differentiation?",
          paragraphs: [
            "Differentiation is the process of finding the derivative of a function. The derivative f'(x) measures how the function's output changes in response to a small change in its input.",
            "Geometrically, f'(x) is the slope of the tangent line to the curve y = f(x) at point x.",
            "Formally: f'(x) = lim(h → 0) [f(x+h) - f(x)] / h"
          ]
        },
        {
          heading: "Key Derivative Rules",
          paragraphs: [
            "Power Rule: d/dx[xⁿ] = n·xⁿ⁻¹. Example: d/dx[x³] = 3x²",
            "Exponential: d/dx[eˣ] = eˣ — unique property of e.",
            "Logarithm: d/dx[ln(x)] = 1/x",
            "Product Rule: d/dx[f·g] = f'g + fg'",
            "Quotient Rule: d/dx[f/g] = (f'g - fg') / g²",
            "Chain Rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)"
          ]
        },
        {
          heading: "Numerical Differentiation in Python",
          paragraphs: [],
          code: "import numpy as np\n\ndef f(x):\n    return x**2\n\ndef numerical_derivative(f, x, h=1e-7):\n    return (f(x + h) - f(x)) / h\n\nprint(\"f'(3) =\", numerical_derivative(f, 3))  # ~6.0\nprint(\"f'(5) =\", numerical_derivative(f, 5))  # ~10.0",
          output: "f'(3) = 6.000000059604645\nf'(5) = 10.000000116860974"
        },
        {
          heading: "Why Differentiation Matters for ML",
          paragraphs: [
            "In ML model training, we want to minimize a loss function L(w) by finding the optimal weights w.",
            "Differentiation tells us the gradient of the loss — the direction in which the loss increases. We then move in the opposite direction to minimize it.",
            "Every optimizer (SGD, Adam, RMSProp) relies on computing derivatives of the loss function."
          ]
        }
      ],
      tags: ["Derivatives", "Slopes", "Rate of Change", "Power Rule", "Tangent"],
      level: "Beginner"
    },
    {
      id: "PartialDerivatives",
      title: "Partial Derivatives",
      description: "When a function has multiple inputs (like a neural network with many weights), partial derivatives measure the effect of changing one variable while keeping others constant.",
      formula: "∂f/∂xᵢ",
      details: ["∂f/∂x: differentiate f with respect to x, treating all other variables as constants.", "Essential for training models with thousands of parameters simultaneously."],
      contentSections: [
        {
          heading: "What is a Partial Derivative?",
          paragraphs: [
            "A partial derivative measures how a function changes with respect to one variable while all other variables are held constant.",
            "For a function f(x, y), the partial derivative with respect to x is written ∂f/∂x and treats y as a constant.",
            "This is essential in ML because loss functions depend on many parameters (weights) simultaneously — we need the derivative with respect to each one."
          ]
        },
        {
          heading: "Computing Partial Derivatives",
          paragraphs: [
            "For f(x, y) = x²y + 3y:",
            "∂f/∂x = 2xy  (differentiate with respect to x, y is constant)",
            "∂f/∂y = x² + 3  (differentiate with respect to y, x is constant)"
          ],
          code: "# f(x, y) = x^2*y + 3*y\n# Partial derivatives at (x=2, y=3)\nx, y = 2, 3\n\ndf_dx = 2 * x * y  # 2*2*3 = 12\ndf_dy = x**2 + 3   # 4 + 3 = 7\n\nprint(f'∂f/∂x at (2,3) = {df_dx}')\nprint(f'∂f/∂y at (2,3) = {df_dy}')",
          output: "∂f/∂x at (2,3) = 12\n∂f/∂y at (2,3) = 7"
        },
        {
          heading: "Symmetry of Mixed Partials",
          paragraphs: [
            "For well-behaved functions (Clairaut's Theorem), the order of differentiation doesn't matter:",
            "∂²f / (∂x ∂y) = ∂²f / (∂y ∂x)",
            "This property is used when constructing the Hessian matrix."
          ]
        },
        {
          heading: "Role in Neural Network Training",
          paragraphs: [
            "A neural network with n weights requires n partial derivatives per data point to update all weights simultaneously.",
            "Computing all partial derivatives efficiently — using the chain rule across layers — is what backpropagation does.",
            "Frameworks like PyTorch and TensorFlow compute partial derivatives automatically using automatic differentiation (autograd)."
          ]
        }
      ],
      tags: ["Multi-variable", "Parameters", "Neural Networks", "Autograd"],
      level: "Intermediate"
    },
    {
      id: "Gradient",
      title: "Gradient",
      description: "The gradient is a vector of all partial derivatives of a function. It points in the direction of steepest ascent and is the key input to gradient-based optimization.",
      formula: "∇f = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]",
      details: ["∇f points in the direction of steepest ascent.", "In ML, we move opposite to ∇L (the loss gradient) to minimize the loss."],
      contentSections: [
        {
          heading: "What is the Gradient?",
          paragraphs: [
            "The gradient ∇f (nabla f) is a vector-valued function that collects all the partial derivatives of a scalar function:",
            "∇f(x) = [∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ]",
            "The gradient points in the direction of the steepest increase of f at that point.",
            "Its magnitude ||∇f|| tells us how steep the slope is — a larger magnitude means the function is changing more rapidly."
          ]
        },
        {
          heading: "Example: Gradient of a 2D Function",
          paragraphs: [
            "For f(x, y) = x² + y²:",
            "∂f/∂x = 2x,  ∂f/∂y = 2y",
            "∇f(x, y) = [2x, 2y]",
            "At point (3, 4): ∇f = [6, 8] — pointing away from the origin (the minimum)."
          ],
          code: "import numpy as np\n\ndef gradient(x, y):\n    return np.array([2*x, 2*y])\n\ng = gradient(3, 4)\nprint('Gradient at (3,4):', g)\nprint('Magnitude:', np.linalg.norm(g))",
          output: "Gradient at (3,4): [6 8]\nMagnitude: 10.0"
        },
        {
          heading: "The Gradient in Machine Learning",
          paragraphs: [
            "The loss function L(w) takes the model weights w as input and outputs a scalar (the loss).",
            "The gradient ∇L tells us in which direction to change w to increase the loss most quickly.",
            "To minimize the loss, we move in the opposite direction: w_new = w - α × ∇L(w)",
            "This is the fundamental update rule for all gradient descent optimizers."
          ]
        }
      ],
      tags: ["Direction", "Steepest Ascent", "Loss Surface", "Optimization"],
      level: "Intermediate"
    },
    {
      id: "GradientDescent",
      title: "Gradient Descent",
      description: "The core optimization algorithm for training ML models. Iteratively adjusts parameters in the direction opposite to the gradient to minimize the cost function.",
      formula: "θ_new = θ_old - α · ∇f(θ)",
      details: ["Moves opposite to the gradient to find the minimum.", "Learning rate α controls step size — critical for convergence."],
      contentSections: [
        {
          heading: "How Gradient Descent Works",
          paragraphs: [
            "Gradient Descent is an iterative optimization algorithm that:",
            "1. Computes the gradient of the loss ∇L(w) at current weights.",
            "2. Updates weights in the opposite direction: w = w - α × ∇L(w)",
            "3. Repeats until convergence (gradient ≈ 0 or loss stops improving).",
            "The learning rate α controls how large each step is."
          ]
        },
        {
          heading: "The Learning Rate Problem",
          paragraphs: [
            "Too large α: the algorithm overshoots the minimum and may diverge.",
            "Too small α: convergence is extremely slow — takes many more iterations.",
            "Just right α: smooth, efficient convergence to the minimum.",
            "Modern practice: use learning rate schedulers (decay over time) or adaptive optimizers like Adam."
          ]
        },
        {
          heading: "Variants of Gradient Descent",
          paragraphs: [
            "Batch Gradient Descent: computes the gradient using the full training dataset each step. Slow but accurate.",
            "Stochastic Gradient Descent (SGD): uses a single random sample each step. Fast but noisy — can escape local minima.",
            "Mini-Batch Gradient Descent: uses a small batch (e.g., 32, 64 samples). Best of both worlds — most commonly used in deep learning."
          ]
        },
        {
          heading: "Gradient Descent Implementation",
          paragraphs: [],
          code: "import numpy as np\n\n# Minimize f(x) = x^2 using gradient descent\nx = 10.0\nlr = 0.1\nlosses = []\n\nfor i in range(50):\n    grad = 2 * x     # f'(x) = 2x\n    x = x - lr * grad\n    losses.append(x**2)\n\nprint(f'Minimum found at x = {x:.6f}')\nprint(f'f(x) = {x**2:.10f}')",
          output: "Minimum found at x = 0.000001\nf(x) = 0.0000000000"
        }
      ],
      tags: ["Optimization", "Learning Rate", "SGD", "Mini-batch", "Convergence"],
      level: "Intermediate"
    },
    {
      id: "ChainRule",
      title: "Chain Rule",
      description: "The chain rule computes the derivative of a composite function. It powers backpropagation — the algorithm that trains neural networks.",
      formula: "dz/dx = (dz/dy) · (dy/dx)",
      details: ["For z = f(g(x)): dz/dx = f'(g(x)) · g'(x).", "Backpropagation applies the chain rule recursively through each neural network layer."],
      contentSections: [
        {
          heading: "What is the Chain Rule?",
          paragraphs: [
            "The Chain Rule computes the derivative of a composite function. If z = f(y) and y = g(x), then:",
            "dz/dx = (dz/dy) × (dy/dx) = f'(g(x)) × g'(x)",
            "In other words: to differentiate a nested function, multiply the derivatives of each 'layer' together."
          ]
        },
        {
          heading: "Example",
          paragraphs: [
            "Find d/dx[sin(x²)]:",
            "Let y = g(x) = x² → dy/dx = 2x",
            "Let z = f(y) = sin(y) → dz/dy = cos(y)",
            "By chain rule: dz/dx = cos(x²) × 2x"
          ],
          code: "import numpy as np\n\nx = 1.0\n\n# Analytical chain rule: d/dx[sin(x^2)] = cos(x^2) * 2x\ndf = np.cos(x**2) * 2 * x\nprint('Analytical derivative:', df)\n\n# Numerical verification\nh = 1e-7\ndf_numerical = (np.sin((x+h)**2) - np.sin(x**2)) / h\nprint('Numerical derivative:', df_numerical)",
          output: "Analytical derivative: 1.0806046117362795\nNumerical derivative: 1.0806045895040525"
        },
        {
          heading: "Chain Rule in Backpropagation",
          paragraphs: [
            "A neural network is a composition of many functions: Loss = L(aₙ(aₙ₋₁(...a₁(x)...)))",
            "To train the network, we need ∂L/∂wᵢ for every weight wᵢ in every layer.",
            "Backpropagation applies the chain rule systematically from the output layer backward:",
            "∂L/∂w₁ = (∂L/∂aₙ) × (∂aₙ/∂aₙ₋₁) × ... × (∂a₂/∂a₁) × (∂a₁/∂w₁)",
            "Each gradient is computed once and reused — making backpropagation computationally efficient."
          ]
        }
      ],
      tags: ["Backpropagation", "Composite Functions", "Deep Learning", "Neural Networks"],
      level: "Advanced"
    },
    {
      id: "JacobianHessian",
      title: "Jacobian & Hessian Matrices",
      description: "The Jacobian generalizes the gradient to vector-valued functions. The Hessian captures second-order curvature information — enabling faster, more powerful optimization.",
      formula: "Hᵢⱼ = ∂²f / ∂xᵢ∂xⱼ",
      details: ["Jacobian: matrix of all first-order partial derivatives for vector-valued functions.", "Hessian: matrix of all second-order partial derivatives for scalar functions."],
      contentSections: [
        {
          heading: "The Jacobian Matrix",
          paragraphs: [
            "For a vector-valued function f: Rⁿ → Rᵐ, the Jacobian J is an m×n matrix of partial derivatives:",
            "Jᵢⱼ = ∂fᵢ / ∂xⱼ",
            "The Jacobian generalizes the concept of gradient to vector outputs.",
            "Used in backpropagation for layers that output vectors (e.g., softmax layer in multi-class classification)."
          ]
        },
        {
          heading: "The Hessian Matrix",
          paragraphs: [
            "For a scalar function f: Rⁿ → R, the Hessian H is an n×n matrix of all second-order partial derivatives:",
            "Hᵢⱼ = ∂²f / (∂xᵢ ∂xⱼ)",
            "The Hessian describes the curvature of the loss surface at a point:",
            "Positive definite Hessian → local minimum.",
            "Negative definite Hessian → local maximum.",
            "Indefinite Hessian → saddle point (common in deep learning loss surfaces)."
          ],
          code: "import numpy as np\n\n# f(x, y) = x^2 + xy + y^2\n# ∂²f/∂x² = 2,  ∂²f/∂x∂y = 1\n# ∂²f/∂y∂x = 1, ∂²f/∂y² = 2\nH = np.array([[2, 1],\n              [1, 2]])\n\nprint('Hessian:\\n', H)\nprint('Eigenvalues:', np.linalg.eigvals(H))\nprint('Positive definite:', all(np.linalg.eigvals(H) > 0))",
          output: "Hessian:\n [[2 1]\n  [1 2]]\nEigenvalues: [3. 1.]\nPositive definite: True"
        },
        {
          heading: "Newton's Method",
          paragraphs: [
            "Newton's method uses the Hessian for second-order optimization — it achieves much faster convergence than gradient descent by accounting for curvature:",
            "w_new = w - H⁻¹ · ∇f(w)",
            "Advantage: converges in far fewer iterations than gradient descent.",
            "Disadvantage: computing and inverting H is O(n³) — infeasible for large models (millions of parameters).",
            "Quasi-Newton methods (L-BFGS, BFGS) approximate the Hessian inverse efficiently."
          ]
        }
      ],
      tags: ["Second-Order", "Curvature", "Newton's Method", "Saddle Point"],
      level: "Advanced"
    },
    {
      id: "AreaUnderCurve",
      title: "Area Under the Curve (Integration)",
      description: "Integration accumulates quantities over continuous ranges. In ML, the AUC-ROC is a key integration-based metric for classifier evaluation.",
      formula: "∫ₐᵇ f(x) dx",
      details: ["The definite integral gives the signed area between f(x) and the x-axis from a to b.", "AUC-ROC: area under the ROC curve — higher AUC means better classifier performance."],
      contentSections: [
        {
          heading: "What is Integration?",
          paragraphs: [
            "Integration is the reverse of differentiation. The definite integral ∫ₐᵇ f(x)dx computes the accumulated area under the curve f(x) between x = a and x = b.",
            "Geometrically: it's the sum of infinitely many infinitely thin rectangles under the curve.",
            "Fundamental Theorem of Calculus: ∫ₐᵇ f(x)dx = F(b) - F(a) where F is the antiderivative of f (F' = f)."
          ]
        },
        {
          heading: "Computing Integrals in Python",
          paragraphs: [],
          code: "from scipy.integrate import quad\nimport numpy as np\n\n# Area under f(x) = x^2 from 0 to 3\n# Analytical: [x^3/3] from 0 to 3 = 27/3 = 9\nresult, error = quad(lambda x: x**2, 0, 3)\nprint(f'∫x² dx from 0 to 3 = {result}')  # 9.0\n\n# Area under standard normal curve from -∞ to ∞\nresult2, _ = quad(lambda x: np.exp(-x**2/2)/np.sqrt(2*np.pi), -np.inf, np.inf)\nprint(f'Area under N(0,1) = {result2:.6f}')  # Should be 1.0",
          output: "∫x² dx from 0 to 3 = 9.0\nArea under N(0,1) = 1.000000"
        },
        {
          heading: "AUC-ROC: Integration in ML Evaluation",
          paragraphs: [
            "The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate vs False Positive Rate at different classification thresholds.",
            "AUC (Area Under the ROC Curve) is literally the integral of the ROC curve — computed as the area under this curve.",
            "AUC = 1.0: perfect classifier.",
            "AUC = 0.5: random classifier (no discrimination ability).",
            "AUC > 0.8: generally considered a good model.",
            "AUC is threshold-independent — it evaluates the model across all possible classification thresholds at once."
          ]
        },
        {
          heading: "Integration in Probability",
          paragraphs: [
            "The integral of a probability density function (PDF) over its entire range equals 1:",
            "∫₋∞^∞ f(x) dx = 1",
            "This is why all valid PDFs must integrate to 1 — it ensures the total probability of all outcomes is 100%.",
            "The CDF (Cumulative Distribution Function) F(x) = ∫₋∞ˣ f(t) dt gives P(X ≤ x)."
          ]
        }
      ],
      tags: ["Integration", "AUC-ROC", "Accumulation", "Fundamental Theorem", "PDF"],
      level: "Beginner"
    }
  ]
};

// =============================================================================
// CATEGORIES EXPORT — now 4 categories
// =============================================================================
export const CATEGORIES: Record<string, CategoryData> = {
  "linear-algebra": LINEAR_ALGEBRA_DATA,
  "probability": PROBABILITY_DATA,
  "statistics": STATISTICS_DATA,
  "calculus": CALCULUS_DATA
};
