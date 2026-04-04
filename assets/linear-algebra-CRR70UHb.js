const e={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra serves as the core mathematical framework for representing and processing data in machine learning. It provides the essential language for handling high-dimensional feature spaces, optimizing algorithms, and performing complex data transformations.",keyConcepts:[{title:"Vectors",description:"Fundamental units for representing data points and features."},{title:"Matrices",description:"Structures for encoding linear operations and data collections."},{title:"Eigen-decomposition",description:"Internal structures of matrices that reveal data variance."},{title:"Matrix Factorization",description:"Advanced techniques like SVD for data compression and latent feature extraction."}],sections:[{id:"Vectors",title:"Vectors",description:"Vectors are the primary format for encoding information in modern AI. Whether representing image pixels, word embeddings, or physical measurements, vectors allow us to treat data as coordinates in a multi-dimensional space.",formula:"v = [x_1, x_2, \\dots, x_n]",details:["A vector is an ordered collection of numerical values, where each element corresponds to a specific characteristic or 'feature' of a data sample.","In geometric terms, a vector represents a point or a directed line segment within a feature space, enabling mathematical analysis of data relationships."],contentSections:[{heading:"Understanding Vectors as Data Points",paragraphs:["In the context of machine learning, vectors act as the bridge between raw data and mathematical models. They enable computers to interpret diverse information—from sensor readings to financial indicators—as purely numerical coordinates. A vector can be viewed as an arrow starting from the origin $(0,0,\\dots,0)$ and pointing to a specific location in space.","Each number within a vector is called a component. For instance, a simple two-dimensional vector representing a house might look like: $v = (x_1, x_2)$ where $x_1$ is the square footage and $x_2$ is the age of the property.","Example: If a house has $1500$ sq. ft. and is $10$ years old, its feature vector is $v = (1500, 10)$. As we add more features, such as the number of rooms or proximity to transit, the vector expands to higher dimensions: $v = (x_1, x_2, x_3, dots, x_n)$."],code:`import numpy as np
# Representing a data point (e.g., SqFt, Age, Rooms)
house_vector = np.array([1500, 10, 3])
print("Feature Vector:", house_vector)`,output:"Feature Vector: [1500   10    3]"},{heading:"Scalars, Vectors and Matrices",paragraphs:["- Scalars: Any single value from our dataset would represent a scalar like integers or floating-point numbers, employed in mathematical computation.","- Vectors: Vectors are one-dimensional number arrays that hold several values in a linear sequence.","- Matrices: Matrices are two-dimensional arrays of multiple vectors that are placed in rows and columns.","These mathematical structures play an essential role in machine learning models, facilitating effective calculations and data representation."],code:`import numpy as np
# Define a 3x3 matrix
mat = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Matrix:\\n", mat)`,output:`Matrix:
 [[1 2 3]
 [4 5 6]
 [7 8 9]]`},{heading:"Role of Vectors in the ML Pipeline",paragraphs:["Vectors are utilized at multiple stages of a machine learning workflow:","1. Feature Extraction: Raw inputs—like images (pixel intensities), audio (frequency spectra), or text (word counts)—are transformed into numerical vectors. This process is essential for model consumption.","2. Optimization: During training, models adjust internal parameters (weights) represented as vectors. Multiplications and additions on these vectors allow the model to 'learn' and improve its predictive performance.","3. Embeddings: In advanced tasks like natural language processing, vectors represent semantic meaning. Similar concepts are mapped to vectors that are geometrically close in space."]},{heading:"Classification of Vectors",paragraphs:["1. Dimensionality: A vector can be represented in any $n$-dimensional space. Row vectors $(x_1, dots, x_n)$ and column vectors (vertical arrays) are just different notations for the same data.","2. Special Vector Types:","- Zero Vector: A vector where all elements are null (e.g., $(0,0,0)$). It serves as the identity element in vector addition.","- Unit Vector: A vector with a magnitude (length) of $1$. These are primarily used to define directions in feature space: $\\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.","- Sparse vs. Dense: Sparse vectors contain mostly zeros (common in text-based 'Bag of Words' models to save memory), while dense vectors are mostly filled with non-zero values (like pixel data or word embeddings)."]},{heading:"Significance of Vectors in Modern AI",paragraphs:["1. Feature Geometry: Vectors allow us to compute distances (Euclidean, Manhattan, etc.) between data points to evaluate similarity. For example, in anomaly detection, a vector far from the cluster center indicates unusual patterns.","2. Semantic Mappings: In tasks like sentiment analysis, words are transformed into vectors (Word2Vec) so that 'Happy' and 'Joyful' occupy similar coordinates, allowing models to understand context without manual rules.","3. Geometric Projection: Techniques like Principal Component Analysis (PCA) use vector projection to reduce complex data into smaller, more manageable sub-spaces while preserving core information."]},{heading:"Operations & Visualizations",paragraphs:["Basic vector operations include addition, subtraction, and multiplication. The visualization below demonstrates how vector addition and scalar scaling look geometrically in a 2D plane."],code:`import matplotlib.pyplot as plt
import numpy as np

def plot_vectors(vectors, colors, labels, title):
    plt.figure(figsize=(8, 8))
    plt.axhline(0, color='black',linewidth=1)
    plt.axvline(0, color='black',linewidth=1)
    plt.grid(True, linestyle='--', alpha=0.6)
    
    for i in range(len(vectors)):
        plt.quiver(0, 0, vectors[i][0], vectors[i][1], color=colors[i], 
                   angles='xy', scale_units='xy', scale=1, label=labels[i])
    
    all_vals = np.array(vectors).flatten()
    limit = np.max(np.abs(all_vals)) + 1
    plt.xlim(-limit, limit)
    plt.ylim(-limit, limit)
    plt.legend()
    plt.title(title)
    plt.show()

# Vector Addition: a + b
a = np.array([2, 3])
b = np.array([1, -1])
add = a + b

# Scalar Multiplication: 2 * a
scaled = 2 * a

vectors = [a, b, add, scaled]
colors = ['blue', 'green', 'red', 'orange']
labels = ['a (2,3)', 'b (1,-1)', 'a+b (3,2)', '2*a (4,6)']

plot_vectors(vectors, colors, labels, "Vector Operations: Addition and Scaling")

print("Addition a+b:", add)
print("Subtraction a-b:", a - b)
print("Scalar Multiplication 2*a:", scaled)
print("Dot Product a.b:", np.dot(a, b))
print("Cross Product a x b (extended to 3D):", np.cross(np.append(a, 0), np.append(b, 0)))`,output:`Addition a+b: [3 2]
Subtraction a-b: [1 4]
Scalar Multiplication 2*a: [4 6]
Dot Product a.b: -1
Cross Product a x b (extended to 3D): [ 0  0 -5]`},{heading:"Algorithmic Implementations",paragraphs:["Vectors are the workhorses of several key algorithms:","- Linear Regression: Represents a linear relationship as $Y = Xw + b$, where $w$ is a vector of trainable weights and $X$ is the input vector.","- Support Vector Machines (SVM): Mathematically defines a boundary (hyperplane) that maximizes the margin between different classes in vector space.","- Deep Learning: Millions of parameters are stored in weight vectors and biases, which are iteratively adjusted using vector-based optimization (Gradient Descent).","- Clustering: K-means uses vectors to represent the centers of clusters, assigning data points based on the shortest vector distance."]}],tags:["Feature Space","Embeddings","Dimensionality","Optimization"],level:"Beginner"},{id:"LinearCombinations",title:"Linear Combinations",description:"A linear combination is the fundamental way we construct new vectors from existing ones by scaling each vector and summing them up. This 'weighted sum' logic is the basis of almost all predictive modeling.",formula:"w = \\alpha v_1 + \\beta v_2 + \\dots",details:["A linear combination represents a new data point as a weighted contribution from multiple sources.","Essential for understanding Linear Regression, Neural Networks, and dimensionality reduction techniques like PCA."],contentSections:[{heading:"What are Linear Combinations?",paragraphs:["A linear combination occurs when you take a set of vectors, multiply each by a specific scaling factor (scalar), and then add the results together. Geometrically, this means you are stretching or shrinking vectors and then placing them head-to-tail to reach a new point in space.","For example, if you have two base vectors $v_1$ and $v_2$, any vector $w = a v_1 + b v_2$ is a linear combination. This simple operation allows us to navigate entire spaces of data.","Why this matters in ML:","- Model Predictions: A regression model predicts a value by forming a linear combination of its input features and learned weights.","- Data Components: PCA finds the 'principal' directions of data as linear combinations of the original feature set.","- Transfer Learning: New models can be built as combinations of pre-trained feature extractors."]},{heading:"Formal Definition",paragraphs:["Given a collection of vectors $V = {v_1, v_2, \\dots, v_n}$ in a vector space, a linear combination is any vector $w$ that can be expressed as:","$$ w = c_1 v_1 + c_2 v_2 + \\dots + c_n v_n $$","wherein $c_i$ are scalars (weights). If we can reach a target vector $b$ using some combination of $v_i$, we say $b$ is in the 'span' of those vectors.","**Geometric Example:**","Imagine two vectors in a 2D plane: $\\mathbf{v}_1$ points right, and $\\mathbf{v}_2$ points up. By combining them ($w = 2\\mathbf{v}_1 + 3\\mathbf{v}_2$), you can reach the point $(2, 3)$. Every point in the plane can be reached by some combination of these two basis vectors."]},{heading:"Core Algebraic Properties",paragraphs:["1. Superposition: The scaling and addition of vectors are distributive. $a(u+v) = au + av$.","2. Rescaling: A linear combination of scaled vectors is itself a linear combination of the original vectors.","3. Homogeneity: If you scale the inputs, the output combination scales by the same factor."]},{heading:"Linear Combinations in Machine Learning",paragraphs:["In Linear Regression, the predicted price is a linear combination of features:","$$ \\text{Price} = w_1(\\text{Area}) + w_2(\\text{Bedrooms}) + w_3(\\text{Age}) $$","Here, Area, Bedrooms, and Age are vectors (features), and $w_1, w_2, w_3$ are scalars (model weights).","Whenever we build a regression model, we are creating weighted sums of input features. This is the foundation of Multiple Linear Regression, Neural Networks (weighted sums), and Feature engineering."]},{heading:"Methods: Vectors & Matrices",paragraphs:["To form a linear combination, we can use both vectors and matrices. The visualization below shows the span of two vectors $v_1=(1,1)$ and $v_2=(-1,1)$ by plotting several linear combinations with different weights."],code:`import matplotlib.pyplot as plt
import numpy as np

v1 = np.array([1, 1])
v2 = np.array([-1, 1])

plt.figure(figsize=(8, 8))
# Plot original vectors
plt.quiver(0, 0, v1[0], v1[1], color='blue', angles='xy', scale_units='xy', scale=1, label='v1 (1,1)')
plt.quiver(0, 0, v2[0], v2[1], color='green', angles='xy', scale_units='xy', scale=1, label='v2 (-1,1)')

# Generate some linear combinations
scalars = [(-1, 1), (2, 0), (0.5, 1.5), (-1, -1)]
colors = ['red', 'purple', 'orange', 'cyan']

for i, (c1, c2) in enumerate(scalars):
    w = c1 * v1 + c2 * v2
    plt.quiver(0, 0, w[0], w[1], color=colors[i], alpha=0.6, 
               angles='xy', scale_units='xy', scale=1, 
               label=f'{c1}*v1 + {c2}*v2')

plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.grid(True, alpha=0.3)
plt.xlim(-3, 3)
plt.ylim(-3, 3)
plt.legend()
plt.title("Visualizing Linear Combinations (Vector Span)")
plt.show()

# Matrix Example:
A1 = np.array([[1, 2], [3, 4]])
A2 = np.array([[5, 6], [7, 8]])
c1, c2 = 3, -2
Result = c1*A1 + c2*A2
print('Matrix Linear Combination Result:\\n', Result)`,output:`Matrix Linear Combination Result:
 [[-7 -6]
 [-5 -4]]`}],tags:["Span","Basis","Independence","Weighted Sum"],level:"Intermediate"},{id:"DotProduct",title:"Dot Product",description:"The dot product is a scalar value that measures the degree of alignment between two vectors. It is the engine behind similarity scores, gradient updates, and error measurements in ML.",formula:"A \\cdot B = \\|A\\| \\|B\\| \\cos(\\theta)",details:["A positive dot product means vectors point in generally the same direction ($< 90^circ$).","A zero dot product means vectors are perfectly perpendicular (Orthogonal).","A negative dot product means they point in opposite directions ($> 90^circ$)."],contentSections:[{heading:"Quantifying Vector Relationships",paragraphs:["In data science, we often need to know how similar two data points are. The dot product (or scalar product) provides a way to multiply two vectors to yield a single number. This number tells us about the angle between the vectors: the more they align, the higher the dot product.","Mathematically, the dot product of $A$ and $B$ is:","$$ \\mathbf{A} \\cdot \\mathbf{B} = \\sum_{i=1}^n A_i B_i = \\|A\\| \\|B\\| \\cos(\\theta) $$","This operation is essential for algorithms like **Cosine Similarity** (used in text search) and **Gradient Descent** (where we find the direction of steepest descent by taking the dot product of the gradient with our update step)."]},{heading:"Representations and Calculations",paragraphs:["**1. Unit Vector Representation:**","In the unit vector representation, $i, j,$ and $k$ are along the x, y, and z axes respectively. The scalar product is calculated as:","$$ \\overrightarrow{\\text{A}} \\cdot \\overrightarrow{\\text{B}} = A_x B_x + A_y B_y + A_z B_z $$","**2. Matrix Representation:**","It is useful to represent vectors as row or column matrices. If we treat vectors as column matrices of their components, then the scalar product is the matrix multiplication of the transpose of A and B:","$$ \\overrightarrow{\\rm A} \\cdot \\overrightarrow{\\rm B} = \\begin{bmatrix}A_x & A_y & A_z \\end{bmatrix} \\begin{bmatrix} B_x \\\\ B_y \\\\ B_z \\end{bmatrix} = A_x B_x + A_y B_y + A_z B_z $$"]},{heading:"Geometrical Interpretation",paragraphs:["The product of two nonzero vectors can be visualized as multiplying the magnitude of any one of the vectors by the magnitude of the projection of the other vector upon it.","- **Case 1:** When $0^\\circ < \\theta < 90^\\circ$, then the scalar product is positive.","- **Case 2:** When $90^\\circ < \\theta < 180^\\circ$, then the scalar product is negative.","- **Case 3:** When $\\theta = 90^\\circ$, then the scalar product is 0 (zero)."]},{heading:"Properties & Visualization",paragraphs:["Key properties include Commutativity ($A \\cdot B = B \\cdot A$), Distributivity ($A \\cdot (B+C) = A \\cdot B + A \\cdot C$), and Orthogonality ($A \\cdot B = 0$ if perpendicular).","The visualization below shows two vectors and the projection of one onto another."],code:`import matplotlib.pyplot as plt
import numpy as np

a = np.array([3, 2])
b = np.array([4, 0])

# Projection of a onto b: (a.b / |b|^2) * b
proj_a_b = (np.dot(a, b) / np.dot(b, b)) * b

plt.figure(figsize=(8, 5))
plt.quiver(0, 0, a[0], a[1], color='blue', angles='xy', scale_units='xy', scale=1, label='a (3,2)')
plt.quiver(0, 0, b[0], b[1], color='green', angles='xy', scale_units='xy', scale=1, label='b (4,0)')
plt.quiver(0, 0, proj_a_b[0], proj_a_b[1], color='red', angles='xy', scale_units='xy', scale=1, label='proj_a_b')

# Line connecting 'a' head to projection head
plt.plot([a[0], proj_a_b[0]], [a[1], proj_a_b[1]], 'k--', alpha=0.5)

plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.grid(True, alpha=0.3)
plt.xlim(-1, 5)
plt.ylim(-1, 4)
plt.legend()
plt.title("Vector Projection and Dot Product")
plt.show()

print("Dot Product a.b:", np.dot(a, b))
print("Magnitude |a|:", np.linalg.norm(a))
print("Magnitude |b|:", np.linalg.norm(b))
cos_theta = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print("cos(theta):", cos_theta)
print("Angle (degrees):", np.degrees(np.arccos(cos_theta)))`,output:`Dot Product a.b: 12
Magnitude |a|: 3.605551275463989
Magnitude |b|: 4.0
cos(theta): 0.8320502943378437
Angle (degrees): 33.69006752597978`},{heading:"Solved Problems",paragraphs:["**Problem 1:** Find scalar product of $A = 2\\mathbf{i} + 5\\mathbf{j} + 3\\mathbf{k}$ and $B = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}$. Result: $(2 \\times 3) + (5 \\times 1) + (3 \\times 2) = 17$.","**Problem 2:** Work done by Force $F = (7i + 5j + 2k)N$ on displacement $D = i + j + 3k$. Work = $F \\cdot D = (7 \\times 1) + (5 \\times 1) + (2 \\times 3) = 18 J$.","**Problem 3:** Find $m$ such that $A = 2i + 3j + k$ and $B = 3i + 2j + mk$ are perpendicular. $A \\cdot B = 0 \\implies 6 + 6 + m = 0 \\implies m = -12$.","**Problem 4:** Prove $U = 2i + 3j + k$ and $V = 4i - 2j - 2k$ are perpendicular. $U \\cdot V = 8 - 6 - 2 = 0$. Hence proved.","**Problem 5:** Prove $A = 4a_x - 2a_y - a_z$ and $B = a_x + 4a_y - a_z$ are perpendicular. $A \\cdot B = 4(1) + (-2)(4) + (-1)(-1) = 4 - 8 + 1 = -3 \\neq 0$. Not perpendicular."]}],tags:["Inner Product","Orthogonality","Cosine Similarity","Projection"],level:"Beginner"},{id:"Matrices",title:"Matrices and Matrix Operations",description:"Matrices are rectangular arrays of numbers that allow us to process entire datasets simultaneously. They are the primary structure for linear models and neural network layers.",formula:"C = A \\cdot B",details:["A matrix is a grid of values where rows usually represent samples and columns represent features.","The size of a matrix is denoted as $m 	imes n$ (Rows $	imes$ Columns).","Most machine learning operations, like feeding data through a model, are expressed as matrix-vector multiplications."],contentSections:[{heading:"What are Matrices in Data Science?",paragraphs:["A matrix is a two-dimensional arrangement of numbers. In a typical dataset, each row might represent a different observation (like a specific transaction or patient), while each column represents a different attribute (like price or age). This structure allows us to apply a single mathematical operation to thousands of data points at once, which is why GPUs (designed for matrix math) are so vital for AI.","In a matrix $A$, the element at the $i$-th row and $j$-th column is denoted as $A_{ij}$. If a matrix has the same number of rows and columns, it is called a **square matrix**.","Using libraries like NumPy, we can define and manipulate these structures with ease."],code:`import numpy as np
# A 2x3 matrix representing 2 samples with 3 features each
data_matrix = np.array([[1.2, 0.5, 3.1], [0.8, 1.1, 2.9]])
print("Dataset Matrix:\\n", data_matrix)
print("Shape (Samples, Features):", data_matrix.shape)`,output:`Dataset Matrix:
 [[1.2 0.5 3.1]
 [0.8 1.1 2.9]]
Shape (Samples, Features): (2, 3)`},{heading:"Matrix Arithmetic Operations",paragraphs:["1. **Matrix Addition:** combines two matrices of the same order by adding their corresponding elements. Addition is done using the `+` operator in Python. It is only possible when both matrices have the same number of rows and columns.","2. **Matrix Subtraction:** subtracts the corresponding elements of two matrices of the same order. Subtraction is done using the `-` operator in Python.","3. **Matrix Division:** divides the corresponding elements of two matrices of the same order. Division is done using the `/` operator for float division or `//` operator for integer division.","4. **Matrix Multiplication (Dot product):** multiplies rows of the first matrix with columns of the second matrix. It requires that the number of columns in the first matrix equals the number of rows in the second matrix. **Note: Matrices do not satisfy commutative property ($AB \\neq BA$).**","5. **Vector multiplication:** A vector is a one-dimensional array. To multiply a matrix by a vector, the number of columns in the matrix must equal the number of rows in the vector.","6. **Scalar Multiplication:** When we multiply a matrix with a scalar then it is multiplied with each and every element in the matrix. The order remains same."],code:`import matplotlib.pyplot as plt
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Multiplication C = A.dot(B)
C = A.dot(B)

fig, (ax1, ax2, ax3) = plt.subplots(1, 3, figsize=(15, 5))

for ax, mat, title in zip([ax1, ax2, ax3], [A, B, C], ['Matrix A', 'Matrix B', 'Result C = A.B']):
    im = ax.imshow(mat, cmap='YlGn')
    ax.set_title(title)
    for (j, i), val in np.ndenumerate(mat):
        ax.text(i, j, f'{val}', ha='center', va='center', color='black', fontsize=14)
    plt.colorbar(im, ax=ax)

plt.tight_layout()
plt.show()

print("Addition A+B:\\n", A + B)
print("Dot Product A.dot(B):\\n", C)
print("Scalar Mult A * 2:\\n", A * 2)`,output:`Addition A+B:
 [[ 6  8]
 [10 12]]
Dot Product A.dot(B):
 [[19 22]
 [43 50]]
Scalar Mult A * 2:
 [[2 4]
 [6 8]]`,visualizer:"matrix"}],tags:["Addition","Multiplication","Inverse","Transpose"],level:"Beginner"},{id:"LinearTransformation",title:"Linear Transformation",description:"A linear transformation is a rule that moves vectors from one space to another while preserving the 'grid lines' of the original space. It is the core operation of every layer in a neural network.",formula:"f(u+v) = f(u) + f(v)",details:["Linear maps preserve vector addition and scalar multiplication.","Any linear transformation from $n$-dimensions to $m$-dimensions can be represented by an $m 	imes n$ matrix.","Common examples include scaling, rotation, and data projection."],contentSections:[{heading:"Information Mapping",paragraphs:["In machine learning, we often need to project data into a new 'viewing' space. For example, projecting 3D data onto a 2D screen is a transformation. A map $T: V \rightarrow W$ is linear if it follows two rules:","1. Additivity: $T(u+v) = T(u) + T(v)$ (The transform of a sum is the sum of transforms).","2. Homogeneity: $T(cu) = cT(u)$ (Scaling the input scales the output by the same amount).","In the context of Neural Networks, a 'Linear layer' (or Dense layer) performs exactly this operation: $y = Wx + b$. Here, $W$ is the transformation matrix that maps the input features $x$ to a new hidden representation $y$."]},{heading:"Special Transformations & Properties",paragraphs:["A linear transformation $T: V \\rightarrow V$ from a vector space into itself is called a **Linear operator**.","- **Zero-Transformation:** For a transformation $T: V \\rightarrow W$ is called zero-transformation if: $T(v) = 0 \\, \\forall \\, v \\in V$","- **Identity-Transformation:** For a transformation $T: V \\rightarrow V$ is called identity-transformation if: $T(v) = v \\, \\forall \\, v \\in V$","**Properties of Linear Transformations:**","Let $T: V \\rightarrow W$ be the linear transformation where $u,v \\in V$. Then, the following properties are true:","- $T(0) = 0$","- $T(-v) = -T(v)$","- $T(u - v) = T(u) - T(v)$","- If $v = c_1v_1 + c_2v_2 + \\dots + c_nv_n$, then $T(v) = c_1T(v_1) + c_2T(v_2) + \\dots + c_nT(v_n)$."]},{heading:"Matrix Representation",paragraphs:["Let $T$ be a $m \\times n$ matrix, the transformation $T: \\mathbb{R}^n \\rightarrow \\mathbb{R}^m$ is linear transformation if: $T(v) = Av$.","**Zero and Identity Matrix operations:**","- A matrix $m \\times n$ matrix is a zero matrix, corresponding to zero transformation.","- A matrix $n \\times n$ matrix is Identity matrix $\\mathbb{I}_n$, corresponds to identity transformation.","$$ \\begin{bmatrix} a_{11}&  a_{12}&  \\dots & a_{1n} \\\\ a_{21}&  a_{22}&  \\dots & a_{2n} \\\\ \\vdots &  \\vdots &  \\ddots & \\vdots \\\\ a_{m1}&  a_{m2}&  \\dots &a_{mn} \\end{bmatrix} \\begin{bmatrix} v_1\\\\ v_2\\\\ \\vdots \\\\ v_n \\end{bmatrix} = \\begin{bmatrix} a_{11} v_1 + a_{12} v_2 + \\dots + a_{1n} v_n \\\\ \\vdots \\\\ \\vdots \\\\ a_{m1} v_1 + a_{m2} v_2 + \\dots + a_{mn} v_n \\\\ \\end{bmatrix} $$"]},{heading:"Kernel and Range Space",paragraphs:["Let $T: V \\rightarrow W$ is linear transformation then $\\forall v \\in V$ such that: $T \\cdot v = 0$ is the **kernel space** of $T$. It is also known as the **null space** of $T$. The dimensions of the kernel space are known as **nullity** or $null(T)$.","Let $T: V \\rightarrow W$ is linear transformation then $\\forall v \\in V$ such that: $T \\cdot v = v$ is the **range space** of $T$. The dimensions of the range space are known as **rank(T)**. The sum of rank and nullity is the dimension of the domain:","$$ null(T) + rank(T) = dim(V) = n $$"]},{heading:"Geometric Transformations (Rotation & Projection)",paragraphs:["**1. Rotation:** The linear transformation $T: \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ given by matrix $A = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$ rotates every vector anti-clockwise about the origin by angle $\\theta$.","**2. Projection:** A linear transformation $T: \\mathbb{R}^3 \\rightarrow \\mathbb{R}^3$ given by $T = \\begin{bmatrix} 1&0&0 \\\\ 0&1&0 \\\\ 0&0&0 \\end{bmatrix}$ projects a vector $(x,y,z)$ orthogonally to $(x,y,0)$."]},{heading:"Interactive Visualizer: Rotation Transformation",paragraphs:["The following visualization demonstrates applying a rotation transformation to a set of points (a square) and a basis vector."],code:`import matplotlib.pyplot as plt
import numpy as np

def rotate_points(points, theta_deg):
    theta = np.deg2rad(theta_deg)
    R = np.array([[np.cos(theta), -np.sin(theta)],
                  [np.sin(theta),  np.cos(theta)]])
    return points @ R.T

# Define a unit square
square = np.array([[0,0], [1,0], [1,1], [0,1], [0,0]])

# Rotate by 45 degrees
rotated_square = rotate_points(square, 45)

plt.figure(figsize=(8, 8))
plt.plot(square[:,0], square[:,1], 'b--', label='Original Square', alpha=0.5)
plt.plot(rotated_square[:,0], rotated_square[:,1], 'r-', label='Rotated (45 deg)')
plt.fill(rotated_square[:,0], rotated_square[:,1], 'red', alpha=0.1)

# Origin to [1,0] vector
v = np.array([[0,0], [1,0]])
rv = rotate_points(v, 45)
plt.quiver(0, 0, v[1,0], v[1,1], color='blue', angles='xy', scale_units='xy', scale=1, label='i_hat')
plt.quiver(0, 0, rv[1,0], rv[1,1], color='darkred', angles='xy', scale_units='xy', scale=1, label="T(i_hat)")

plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.grid(True, alpha=0.3)
plt.xlim(-1, 2)
plt.ylim(-1, 2)
plt.gca().set_aspect('equal')
plt.legend()
plt.title("Linear Transformation: Rotation Matrix")
plt.show()`,output:"Visualizing 45-degree rotation transformation."},{heading:"Advantages & Disadvantages",paragraphs:["**Advantages:**","- Simplicity: Easy-to-understand mathematical operation.","- Speed: Computationally efficient, suitable for large datasets.","- Interpretability: Transparent and easy to analyze.","**Disadvantages:**","- Limited expressiveness: Can only model linear relationships.","- Sensitivity to outliers: Can lead to poor model performance.","- Limited feature engineering: May not capture complex interactions."]}],tags:["Rotation","Scaling","PCA","Feature Scaling","Neural Networks"],level:"Intermediate"},{id:"LinearEquations",title:"Solving Systems of Linear Equations",description:"Solving systems of linear equations is the process of finding the values that satisfy multiple constraints simultaneously. This is the mathematical engine for weight optimization in linear regression.",formula:"A \\mathbf{x} = \\mathbf{b}",details:["In ML, $A$ represents the input data (features), $b$ is the target output, and $x$ is the set of model weights we need to find.","Overdetermined ($m > n$): More data points than features, solved using 'Least Squares'.","Underdetermined ($m < n$): More features than data points, leading to infinite solutions (requires regularization)."],contentSections:[{heading:"Satisfying Multiple Constraints",paragraphs:["At its heart, machine learning is often about solving $Ax = b$. We have a matrix of features ($A$) and a known result ($b$), and we want to find the relationship ($x$) between them. Depending on the size and shape of our data matrix, we encounter different scenarios:","1. Exact Solution: rare in real-world data; only happens if we have exactly as many independent equations as variables.","2. Least Squares: The most common scenario in ML. We have too much data for a perfect fit, so we find the $x$ that minimizes the total error (residuals).","3. Regularized Solution: When we have too many dimensions and not enough samples, we 'regularize' the system to pick the simplest possible solution (e.g., Lasso or Ridge)."]},{heading:"Generalized System: Ax = b",paragraphs:["A generalized system of linear equations is represented as: $A x = b$, where:","- $A$ is an $m \\times n$ matrix of coefficients.","- $x$ is an $n \\times 1$ vector of unknown variables.","- $b$ is an $m \\times 1$ dependent variable vector.","- $m$ represents the number of equations, and $n$ represents the number of variables."]},{heading:"Case 1: m = n (Square Systems)",paragraphs:["**1. Unique Solution:** If $|A| \\neq 0$ and $rank(A) = n$ (Full rank).","Example: $\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 10 \\end{bmatrix} \\implies (x_1, x_2) = (1, 2)$.","**2. Infinite Solutions:** If $rank(A) < n$ and the system is consistent (e.g., Row 2 is a multiple of Row 1).","Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$.","**3. No Solution:** If $rank(A) < rank(A|b)$ or the system is inconsistent.","Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 9 \\end{bmatrix}$ (Parallel lines)."],code:`import matplotlib.pyplot as plt
import numpy as np

# Visualize Case 1.3: No Solution (Parallel Lines)
x = np.linspace(0, 10, 100)
# Eq 1: x1 + 2x2 = 5 => x2 = (5 - x1)/2
y1 = (5 - x) / 2
# Eq 2: 2x1 + 4x2 = 9 => x2 = (9 - 2x1)/4
y2 = (9 - 2*x) / 4

plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='x1 + 2x2 = 5', color='blue')
plt.plot(x, y2, label='2x1 + 4x2 = 9', color='red', linestyle='--')
plt.title("System with No Solution (Parallel Lines)")
plt.xlabel("x1")
plt.ylabel("x2")
plt.grid(True, alpha=0.3)
plt.legend()
plt.show()

print("Determinant of A:", np.linalg.det([[1, 2], [2, 4]]))`,output:"Determinant of A: 0.0"},{heading:"Case 2: m > n (Overdetermined Systems)",paragraphs:["In this scenario, you have more constraints (equations) than variables to solve for, typically represented as a tall, skinny matrix $A$.",'Since a perfect solution $Ax = b$ rarely exists in these cases, we shift our goal from finding an "exact" solution to finding the "best possible" one.']},{heading:"The Optimization Perspective",paragraphs:["When we can't hit the target exactly, we try to get as close as possible. The difference between the actual observed values $b$ and our prediction $Ax$ is the residual vector (or error):","$$ e = Ax - b $$","To ensure we don't have positive and negative errors canceling each other out, and to penalize larger outliers more heavily, we minimize the Sum of Squared Errors (SSE). Mathematically, this is the squared Euclidean norm:","$$ f(x) = \\|Ax - b\\|^2 = (Ax - b)^T (Ax - b) $$"]},{heading:"Deriving the Normal Equations",paragraphs:["To find the minimum, we take the derivative with respect to $x$ and set it to zero. Expanding the function gives:","$$ f(x) = x^T A^T Ax - 2x^T A^T b + b^T b $$","Differentiating with respect to $x$:","$$ \\frac{\\partial f}{\\partial x} = 2A^T Ax - 2A^T b = 0 $$","This leads us to the Normal Equations:","$$ A^T Ax = A^T b $$"]},{heading:"The Geometric Intuition",paragraphs:["There is a beautiful geometric interpretation here. The vector $Ax$ must lie within the Column Space of $A$ (the span of its columns). If $b$ is not in that space, the closest point to $b$ in that subspace is its orthogonal projection.","The least squares solution $x = (A^T A)^{-1} A^{T}b$ effectively projects $b$ onto the column space of $A$. The error vector $e$ is perpendicular (orthogonal) to the columns of $A$, which is why $A^T e = 0$."]},{heading:"Requirements for a Solution",paragraphs:["For the solution $x = (A^T A)^{-1} A^T b$ to be unique:","- The matrix $A$ must have linearly independent columns (it must be full column rank).","- If the columns are linearly dependent, $A^T A$ will be singular (non-invertible), and we would instead use the Moore-Penrose Pseudoinverse ($A^+$) to find one of the infinite possible solutions.","This approach is the mathematical engine behind Linear Regression, allowing us to fit a trend line through a cloud of data points where a single line cannot possibly pass through every individual point."]},{heading:"Case 3: m < n (Underdetermined Systems)",paragraphs:['In this case, the matrix $A$ is "fat and short." Since we have infinite choices for $x$, we need a criterion to pick the "best" one. Usually, we want the most efficient or "simplest" solution, which mathematically translates to the one with the minimum norm (the one closest to the origin).']},{heading:"The Optimization Perspective (Minimum Norm)",paragraphs:["We want to solve the following constrained optimization problem:","Minimize: $f(x) = \\frac{1}{2}\\|x\\|^2$ subject to $Ax = b$","By using a Lagrangian $\\mathcal{L}(x, \\lambda) = \\frac{1}{2}x^T x + \\lambda^T (Ax - b)$, and taking the partial derivatives:","$$ \\frac{\\partial \\mathcal{L}}{\\partial x} = x + A^T \\lambda = 0 \\implies x = -A^T \\lambda $$","$$ \\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = Ax - b = 0 \\implies Ax = b $$","Substituting the first into the second:","$$ A(-A^T \\lambda) = b \\implies -(AA^T) \\lambda = b \\implies \\lambda = -(AA^T)^{-1} b $$","Plugging $\\lambda$ back into the equation for $x$:","$$ x = A^T(AA^T)^{-1}b $$"]},{heading:"The Moore-Penrose Pseudoinverse ($A^+$)",paragraphs:['To avoid memorizing different formulas for "tall" vs "fat" matrices, we use the Pseudoinverse. It provides a unified way to solve $Ax = b$ regardless of the shape or rank of $A$.',"- **Case 1** (Square & Invertible): $A^+ = A^{-1}$","- **Case 2** (Overdetermined, Full Column Rank): $A^+ = (A^T A)^{-1} A^T$ (Left Inverse)","- **Case 3** (Underdetermined, Full Row Rank): $A^+ = A^T (A A^T)^{-1}$ (Right Inverse)"]},{heading:"Calculation via SVD",paragraphs:["The most robust way to find $A^+$ is through Singular Value Decomposition (SVD), which decomposes any matrix into $A = U\\Sigma V^T$.","The pseudoinverse is then:","$$ A^+ = V\\Sigma^+ U^T $$","Where $\\Sigma^+$ is formed by taking the reciprocal of every non-zero singular value on the diagonal of $\\Sigma$ and transposing it. This method is incredibly powerful because it works even when the matrix is rank-deficient (i.e., when $A^T A$ or $AA^T$ are not invertible)."]},{heading:"Rank Properties & Indepedence",paragraphs:["**- Row Rank vs Column Rank:** The row rank of a matrix is always equal to its column rank. Max rank is $min(m, n)$.","**- Full Row Rank:** All rows are linearly independent (rank = $m$). Indicates independent data samples.","**- Full Column Rank:** All columns are linearly independent (rank = $n$). Indicates independent features/attributes."],code:`import numpy as np

# Overdetermined Case (m > n)
A = np.array([[1, 0], [2, 0], [3, 1]])
b = np.array([1, -0.5, 5])

# Least Squares: (A^T A)^-1 A^T b
x = np.linalg.inv(A.T @ A) @ A.T @ b
print("Least Squares Solution:", x)

# Verification
print("Ax:", A @ x)
print("Target b:", b)`,output:`Least Squares Solution: [0. 5.]
Ax: [0. 0. 5.]
Target b: [1. -0.5  5.]`}],tags:["Ax=b","Least Squares","Optimization","Gaussian Elimination","Rank"],level:"Intermediate"},{id:"EigenValues",title:"Eigenvalues and Eigenvectors",description:"Eigen-decomposition reveals the 'dna' of a square matrix by identifying directions that only get scaled, not rotated, during a transformation. This is the foundation of PCA.",formula:"A mathbf{v} = lambda mathbf{v}",details:["Eigenvalues ($lambda$) represent the 'stretch' factor of the transformation.","Eigenvectors ($v$) are the stable directions that don't change orientation.","Crucial for identifying the directions of maximum variance in a dataset."],contentSections:[{heading:"The Internal Geometry of Matrices",paragraphs:["When we apply a matrix transformation to a space, most vectors get knocked off their original path. However, certain special vectors—Eigenvectors—remain on their original line, only changing in length. The factor by which they grow or shrink is the Eigenvalue.","Why is this useful? In data science, the eigenvectors pointing in the directions of the most 'stretch' correspond to the features with the most information. By keeping only these directions (PCA), we can compress data without losing its essential characteristics."]},{heading:"The Characteristic Equation",paragraphs:["The eigenvector equation is $Av = \\lambda v$. To solve for $\\lambda$, we rewrite it as:","$$ (A - \\lambda I) v = 0 $$","This product is zero for a non-zero vector $v$ only if the matrix $(A - \\lambda I)$ squishes space into a lower dimension, implying its determinant is zero:","$$ \\det(A - \\lambda I) = 0 $$","**Step-by-Step Procedure:**","1. Find eigenvalues $\\lambda$ by solving $\\det|A - \\lambda I| = 0$.","2. For each $\\lambda_i$, find the associated eigenvector $X$ using $(A - \\lambda_i I)X = 0$."]},{heading:"Solved Example (2x2 Matrix)",paragraphs:["Find eigenvalues and eigenvectors for $A = \\begin{bmatrix} 1 & 2 \\\\ 5 & 4 \\end{bmatrix}$.","1. $\\det \\begin{bmatrix} 1-\\lambda & 2 \\\\ 5 & 4-\\lambda \\end{bmatrix} = \\lambda^2 - 5\\lambda - 6 = 0$. Solutions: $\\lambda_1 = 6, \\lambda_2 = -1$.","2. For $\\lambda = 6$: $\\begin{bmatrix} -5 & 2 \\\\ 5 & -2 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} = 0 \\implies 5a = 2b$. Vector: $\\begin{bmatrix} 2 \\\\ 5 \\end{bmatrix}$.","3. For $\\lambda = -1$: $\\begin{bmatrix} 2 & 2 \\\\ 5 & 5 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} = 0 \\implies a = -b$. Vector: $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$."]},{heading:"Eigenspace and Diagonalization",paragraphs:["**Eigenspace:** The set of all eigenvectors of a matrix. All vectors in the eigenspace are linearly independent.","**Diagonalization:** A square matrix $A$ can be written as $A = XDX^{-1}$ where $X$ is the matrix of eigenvectors and $D$ is the diagonal matrix of eigenvalues."]},{heading:"Interactive Visualizer: Eigen-Transformation",paragraphs:["The following visualization shows how a square matrix transforms a set of vectors. Notice that the **Eigenvector** only changes in length (scaled by $\\lambda$), while others change direction."],code:`import matplotlib.pyplot as plt
import numpy as np

# Matrix with eigenvalues 6 and -1
A = np.array([[1, 2], [5, 4]])
evals, evecs = np.linalg.eig(A)

# Define points of a circle to transform
t = np.linspace(0, 2*np.pi, 20)
x, y = np.cos(t), np.sin(t)
circle = np.vstack((x, y))
transformed = A @ circle

plt.figure(figsize=(10, 10))
# Plot original circle
plt.plot(circle[0,:], circle[1,:], 'b--', label='Original Space (Unit Circle)', alpha=0.3)
# Plot transformed ellipse
plt.plot(transformed[0,:], transformed[1,:], 'r-', label='Transformed Space')

# Plot Eigenvectors
colors = ['green', 'orange']
for i in range(2):
    v = evecs[:, i]
    lam = evals[i]
    # Original eigenvector
    plt.quiver(0, 0, v[0], v[1], color=colors[i], angles='xy', scale_units='xy', scale=1, 
               label=f'Eigenvector {i+1} (Î»={lam:.1f})')
    # Transformed eigenvector
    tv = A @ v
    plt.quiver(0, 0, tv[0], tv[1], color=colors[i], angles='xy', scale_units='xy', scale=1, alpha=0.5)

plt.axhline(0, color='black', linewidth=1)
plt.axvline(0, color='black', linewidth=1)
plt.grid(True, alpha=0.3)
plt.xlim(-8, 8)
plt.ylim(-8, 8)
plt.gca().set_aspect('equal')
plt.legend()
plt.title("Visualizing Eigenvalue Transformation")
plt.show()

print("Eigenvalues:", evals)
print("Eigenvectors:\\n", evecs)`,output:"Visualizing how A transforms a unit circle and its eigenvectors."},{heading:"Real-world Applications",paragraphs:["- **Google PageRank:** The importance of a page is the eigenvector corresponding to $\\lambda=1$ of the link matrix.","- **PCA:** Reduces dimensionality by keeping eigenvectors with largest eigenvalues.","- **Computer Vision (Eigenfaces):** Used for face recognition.","- **LSA in NLP:** Finds semantic relationships Ð¼ÐµÐ¶Ð´Ñƒ words.","- **Control Systems:** Eigenvalues determine system stability."]}],tags:["Eigenvalue","Eigenvector","PCA","Diagonalization"],level:"Intermediate"},{id:"SVD",title:"Singular Value Decomposition (SVD)",description:"Singular Value Decomposition (SVD) is a technique that factorizes any matrix into three components, exposing its latent patterns. It is the powerhouse behind recommendation engines and image compression.",formula:"A = U Sigma V^T",details:["U: Captures relationships between rows (e.g., users).","$Sigma$: Represents the strength or importance of each latent feature.","$V^T$: Captures relationships between columns (e.g., items)."],contentSections:[{heading:"Unlocking Hidden Patterns",paragraphs:["SVD is like 'distilling' a matrix down to its most important ingredients. While Eigen-decomposition only works for square matrices, SVD works for matrices of any shape. It breaks a dataset into three parts:","1. User/Row Profiles ($U$): How each entry relates to hidden concepts.","2. Singular Values ($Sigma$): How much information each hidden concept carries.","3. Item/Column Profiles ($V^T$): How each feature relates back to those hidden concepts.","**Conceptual Example: News Articles**","Imagine a matrix where rows are articles and columns are words. SVD might find a 'latent concept' for 'Sports' that isn't explicitly labeled. The $U$ matrix would tell you which articles are about sports, $Sigma$ would tell you how prominent 'Sports' is as a theme in the whole library, and $V^T$ would tell you which words (like 'goal', 'score', 'team') participate in that theme."]},{heading:"Step-by-Step Calculation",paragraphs:["To perform Singular Value Decomposition (SVD) for the matrix $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$, let's break it down step by step.","Step 1: Compute $A A^T$","First, we need to calculate the matrix $A A^T$ (where $A^T$ is the transpose of matrix A):","$$A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$$","$$A^T = \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\\\ 2 & -2 \\end{bmatrix}$$","Now, compute $A A^T$:","$$A A^T = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix} \\cdot \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\\\ 2 & -2 \\end{bmatrix} = \\begin{bmatrix} 17 & 8 \\\\ 8 & 17 \\end{bmatrix}$$","Step 2: Find the Eigenvalues of $A A^T$","To find the eigenvalues of $A A^T$, we solve the characteristic equation:","$$\\det(A A^T - \\lambda I) = 0$$","$$\\det \\begin{bmatrix} 17 - \\lambda & 8 \\\\ 8 & 17 - \\lambda \\end{bmatrix} = 0$$","$$(\\lambda - 25)(\\lambda - 9) = 0$$","Thus, the eigenvalues are $\\lambda_1 = 25$ and $\\lambda_2 = 9$. These eigenvalues correspond to the singular values $\\sigma_1 = 5$ and $\\sigma_2 = 3$, since the singular values are the square roots of the eigenvalues.","Step 3: Find the Right Singular Vectors (Eigenvectors of $A^T A$)","Next, we find the eigenvectors of $A^T A$ for $\\lambda = 25$ and $\\lambda = 9$.","For $\\lambda = 25$: Solve $(A^T A - 25I) v = 0$:","$$A^T A - 25I = \\begin{bmatrix} -12 & 12 & 2 \\\\ 12 & -12 & -2 \\\\ 2 & -2 & -17 \\end{bmatrix}$$","Row-reduce this matrix to:","$$\\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$$","The eigenvector corresponding to $\\lambda = 25$ is:","$$v_1 = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} \\\\ 0 \\end{bmatrix}$$","For $\\lambda = 9$: Solve $(A^T A - 9I) v = 0$:","The eigenvector corresponding to $\\lambda = 9$ is:","$$v_2 = \\begin{bmatrix} \\frac{1}{\\sqrt{18}} \\\\ \\frac{-1}{\\sqrt{18}} \\\\ \\frac{4}{\\sqrt{18}} \\end{bmatrix}$$","For the third eigenvector $v_3$: Since $v_3$ must be perpendicular to $v_1$ and $v_2$, we solve the system $v_1^T v_3 = 0$ and $v_2^T v_3 = 0$, leading to:","$$v_3 = \\begin{bmatrix} \\frac{2}{3} \\\\ \\frac{-2}{3} \\\\ \\frac{-1}{3} \\end{bmatrix}$$","Step 4: Compute the Left Singular Vectors (Matrix U)","To compute the left singular vectors U, we use the formula $u_i = \\frac{1}{\\sigma_i} A v_i$. This results in:","$$U = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix}$$","Step 5: Final SVD Equation","Finally, the Singular Value Decomposition of matrix A is: $$A = U \\Sigma V^T$$","Where:","$$U = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix}$$","$$\\Sigma = \\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 3 & 0 \\end{bmatrix}$$","$$V = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} & 0 \\\\ \\frac{1}{\\sqrt{18}} & \\frac{-1}{\\sqrt{18}} & \\frac{4}{\\sqrt{18}} \\\\ \\frac{2}{3} & \\frac{-2}{3} & \\frac{1}{3} \\end{bmatrix}$$","Thus, the SVD of matrix A is:","$$A = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix} \\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 3 & 0 \\end{bmatrix} \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} & 0 \\\\ \\frac{1}{\\sqrt{18}} & \\frac{-1}{\\sqrt{18}} & \\frac{4}{\\sqrt{18}} \\\\ \\frac{2}{3} & \\frac{-2}{3} & \\frac{1}{3} \\end{bmatrix}$$","This is the Result SVD matrix of matrix A."]},{heading:"Applications of SVD",paragraphs:["1. Calculation of Pseudo-Inverse (Moore-Penrose Inverse)","- The pseudo-inverse is a generalization of the matrix inverse, applicable to non-invertible matrices like low-rank matrices. For an invertible matrix, it equals the inverse.","- Denoted as $M^+$, it is calculated using the SVD $M = U\\Sigma V^T$, where U and V are orthogonal matrices of left and right singular vectors, and $\\Sigma$ is a diagonal matrix of singular values.","- Pseudo-inverse formula: $M^+ = V\\Sigma^{-1}U^T$, where $\\Sigma^{-1}$ inverts non-zero singular values.","2. Solving a Set of Homogeneous Linear Equations","- For $M x = b$, if $b = 0$, use SVD to choose a column of V associated with a zero singular value.","- If $b \\neq 0$, solve by multiplying both sides by $M^+$: $x = M^+ b$.","3. Rank, Range, and Null Space","The rank, range, and null space of a matrix M can be derived from its SVD.","- Rank: The rank of matrix M is the number of non-zero singular values in $\\Sigma$.","- Range: The range of matrix M is the span of the left singular vectors in matrix U corresponding to the non-zero singular values.","- Null Space: The null space of matrix M is the span of the right singular vectors in matrix V corresponding to the zero singular values.","4. Curve Fitting Problem","Singular Value Decomposition can be used to minimize the least square error in the curve fitting problem. By approximating the solution using the pseudo-inverse, we can find the best-fit curve to a given set of data points.","5. Applications in Digital Signal Processing (DSP) and Image Processing","- Digital Signal Processing: SVD can be used to analyze signals and filter noise.","- Image Processing: SVD is used for image compression and denoising. It helps in reducing the dimensionality of image data by preserving the most significant singular values and discarding the rest."]},{heading:"Python Implementation",paragraphs:["In this code, we will try to calculate the Singular value decomposition using Numpy and Scipy. We will be calculating SVD, and also performing pseudo-inverse. In the end, we can apply SVD for compressing the image.","Analysis: The output consists of subplots showing the compressed image for different values of r (5, 10, 70, 100, 200), where r represents the number of singular values used in the approximation. As the value of r increases, the compressed image becomes closer to the original grayscale image of the cat, with smaller values of r leading to more blurred and blocky images, and larger values retaining more details."],code:`from skimage.color import rgb2gray
from skimage import data
import matplotlib.pyplot as plt
import numpy as np
from scipy.linalg import svd

# Basic SVD Calculation
X = np.array([[3, 3, 2], [2, 3, -2]])
print("Original Matrix X:")
print(X)

U, singular, V_transpose = svd(X)
print("\\nU matrix:", U)
print("Singular array:", singular)
print("V transpose:\\n", V_transpose)

# Pseudo-inverse calculation
singular_inv = 1.0 / singular
s_inv = np.zeros(X.shape)
s_inv[0][0] = singular_inv[0]
s_inv[1][1] = singular_inv[1]
M = np.dot(np.dot(V_transpose.T, s_inv.T), U.T)
print("\\nPseudo-inverse M+:", M)

# Image Compression Application
cat = data.chelsea()
gray_cat = rgb2gray(cat)
U, S, V_T = svd(gray_cat, full_matrices=False)
S = np.diag(S)

r_values = [5, 10, 70, 100, 200]
fig, axes = plt.subplots(2, 3, figsize=(15, 10))
axes = axes.flatten()

axes[0].imshow(gray_cat, cmap='gray')
axes[0].set_title("Original Image")
axes[0].axis('off')

for i, r in enumerate(r_values):
    cat_approx = U[:, :r] @ S[0:r, :r] @ V_T[:r, :]
    axes[i+1].imshow(cat_approx, cmap='gray')
    axes[i+1].set_title(f"Compressed (r={r})")
    axes[i+1].axis('off')

plt.tight_layout()
plt.show()`,output:`Original Matrix X:
[[ 3  3  2]
 [ 2  3 -2]]

U matrix: [[-0.7815437 -0.6238505]
 [-0.6238505  0.7815437]]
Singular array: [5.54801894 2.86696457]
V transpose:
 [[-0.64749817 -0.7599438  -0.05684667]
 [-0.10759258  0.16501062 -0.9804057 ]
 [-0.75443354  0.62869461  0.18860838]]

Pseudo-inverse M+: [[ 0.11462451  0.04347826]
 [ 0.07114625  0.13043478]
 [ 0.22134387 -0.26086957]]`}],tags:["Matrix Factorization","Dimensionality Reduction","SVD","Image Compression"],level:"Advanced"},{id:"VectorNorms",title:"Vector Norms",description:"A norm is a function that assigns a strictly positive 'length' or size to a vector. In machine learning, norms are used to penalize large weights (regularization) and calculate error distances.",formula:"\\| \\mathbf{x} \\|_p = (\\sum | x_i |^p)^{1/p}",details:["A vector norm satisfies three essential properties:","Non-negativity: $\\|\\mathbf{x}\\| > 0$ if $\\mathbf{x} \\neq 0$, and $\\|\\mathbf{x}\\|=0$ if and only if $\\mathbf{x} = 0$.","Scalar Multiplication: $\\|k\\mathbf{x}\\| = |k| \\cdot \\|\\mathbf{x}\\|$ for any scalar $k$.","Triangle Inequality: $\\|\\mathbf{x} + \\mathbf{y}\\| \\le \\|\\mathbf{x}\\| + \\|\\mathbf{y}\\|$. ","L-infinity (Max Norm): Measures the absolute value of the largest component."],contentSections:[{heading:"Defining a Valid Norm",paragraphs:["A mathematical function is only considered a valid 'norm' if it satisfies these three foundational properties:","- **Non-negativity**: $\\|\\mathbf{x}\\| > 0$ if $\\mathbf{x} \\neq 0$, and $\\|\\mathbf{x}\\|=0$ if and only if $\\mathbf{x} = 0$.","- **Scalar Multiplication**: $\\|k\\mathbf{x}\\| = |k| \\cdot \\|\\mathbf{x}\\|$ for any scalar $k$.","- **Triangle Inequality**: $\\|\\mathbf{x} + \\mathbf{y}\\| \\le \\|\\mathbf{x}\\| + \\|\\mathbf{y}\\|$. ","In machine learning, we use these norms to quantify error or to penalize model complexity (Regularization)."]},{heading:"Commonly Used Norms",paragraphs:["1. L1 Norm",'The L1 norm, also known as the Manhattan norm or Taxicab norm, is a way to measure the "length" or "magnitude" of a vector by summing the absolute values of its components.',"Mathematically, for a vector $x = [x_1, x_2, \\dots, x_n]$, the L1 norm $|x|_1$ is defined as: $$|x|_1 = |x_1| + |x_2| + |x_3| + ... + |x_n|$$","Example: If $x = [3, -4, 2]$, then the L1 norm is: $|x|_1 = |3| + |-4| + |2| = 3 + 4 + 2 = 9$","2. L2 Norm",'The L2 norm, also known as the Euclidean norm, is a measure of the "length" or "magnitude" of a vector, calculated as the square root of the sum of the squares of its components.',"For a vector $x = [x_1, x_2, \\dots, x_n]$, the L2 norm $|x|_2$ is defined as: $$| \\mathbf{x} |_2 = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$$","Example: If $x = [3, -4, 2]$, then the L2 norm is: $| \\mathbf{x} |_2 = \\sqrt{3^2 + (-4)^2 + 2^2} = \\sqrt{9 + 16 + 4} = \\sqrt{29} \\approx 5.39$","3. L\\infty norm","The L\\infty norm (Infinity norm or Max norm) measures the 'size' of a vector by taking the largest absolute value among its components. It focuses solely on the component with the maximum magnitude, making it sensitive to individual coordinate outliers.","For a vector $x = [x_1, x_2, \\dots, x_n]$, the L\\infty norm $|x|_\\infty$ is defined as: $$|x|_\\infty = \\max(|x_i|) \\text{ where } 1 \\le i \\le n$$","Example: If $x = [3, -4, 2]$, then the L\\infty norm is: $|x|_\\infty = \\max(|3|, |-4|, |2|) = 4$"]},{heading:"Solved Problems",paragraphs:["Question 1. Given the vector x = [4, -3, 7, 1], calculate the L1 norm (Manhattan norm) of the vector.","Question 2. Given the vector x = [1, -2, 2], calculate the L2 norm (Euclidean norm) of the vector.","Question 3. For the vector x = [7, -1, -4, 6], calculate the L-infinity norm (Max norm) of the vector.","Question 4. If the L2 norm (Euclidean norm) of a vector x = [x1, x2, x3] is 10, and the components of the vector are x1 = 6 and x2 = 8, find the value of x3.","Answers: 1. 15, 2. 3, 3. 7, 4. 0"],code:`import numpy as np

x1 = np.array([4, -3, 7, 1])
print('L1 norm:', np.linalg.norm(x1, 1))

x2 = np.array([1, -2, 2])
print('L2 norm:', np.linalg.norm(x2, 2))

x3 = np.array([7, -1, -4, 6])
print('L-infinity norm:', np.linalg.norm(x3, np.inf))`,output:`L1 norm: 15.0
L2 norm: 3.0
L-infinity norm: 7.0`}],tags:["L1","L2","Regularization","Lasso","Ridge","Sparsity"],level:"Intermediate"},{id:"DistanceMetrics",title:"Measures of Distance",description:"Distance metrics quantify how far apart two data points are in feature space. They are the analytical foundation for clustering, classification (KNN), and recommendation systems.",formula:"d(x,y) = \\sqrt{\\sum (x_i - y_i)^2}",details:["Euclidean Distance: Standard 'as-the-crow-flies' distance.","Manhattan Distance: 'Grid-based' distance, useful for high-dimensional data.","Cosine Distance: Measures the angle between vectors, ignoring their size/magnitude."],contentSections:[{heading:"Quantifying Relationships",paragraphs:["In many AI tasks, we need a mathematical way to say 'Example A is similar to Example B'. We do this by measuring the distance between their feature vectors. A small distance implies high similarity. Selecting the right metric is crucial because different datasets respond better to different types of geometry.","- **Clustering**: K-means uses Euclidean distance to group similar items together.","- **Classification**: K-Nearest Neighbors (KNN) identifies the label of a new point based on the labels of its closest neighbors in space.","- **Search Engines**: Use Cosine Similarity to find documents that 'point' in the same semantic direction as the user's query."]},{heading:"Types of Distance Measures",paragraphs:["1. Euclidean Distance","Euclidean distance is considered the traditional metric for problems with geometry. It can be simply explained as the ordinary distance between two points. It is one of the most used algorithms in the cluster analysis.","Formula: $$d(x,y) = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2}$$","- Best for: Continuous numerical data (when features are normalized).","- Example: Distance between two cities on a 2D map.","2. Manhattan Distance","Manhattan Distance determines the absolute difference among the pair of the coordinates. Suppose we have two points P and Q to determine the distance between these points we simply have to calculate the perpendicular distance of the points from X-Axis and Y-Axis. In a plane with P at coordinate ($x_1, y_1$) and Q at ($x_2, y_2$). Manhattan distance between P and Q is $|x_1 - x_2| + |y_1 - y_2|$","Formula: $$d(x,y) = \\sum_{i=1}^n |x_i - y_i|$$","- Best for: High-dimensional data or when diagonal movement has no meaning.","- Example: Distance between blocks in a city (taxicab geometry).","3. Jaccard Index","The Jaccard distance is set-based distance that compares dissimilarity by looking at the ratio of unique to common elements.","Formula: $$d(A,B) = 1 - \\frac{|A \\cap B|}{|A \\cup B|}$$","- Best for: Binary or categorical data, especially sets.","- Example: Comparing similarity of shopping carts or tag sets.","4. Minkowski distance","Minkowski distance is a generalized distance measure that includes both Euclidean and Manhattan distances as special cases, controlled by a parameter p.","Formula: $$d(x,y) = \\left( \\sum_{i=1}^n |x_i - y_i|^p \\right)^{\\frac{1}{p}}$$","- Best for: Flexible distance calculations where p is tuned.","- Example: For p=1, it becomes Manhattan; for p=2, it becomes Euclidean.","5. Cosine Similarity / Cosine Distance","Measures the cosine distance of the angle between two vectors, focusing on orientation rather than magnitude. Commonly converted to distance as $1 - \\text{similarity}$.","Formula(Similarity): $$\\text{Cosine}(x,y) = \\frac{x \\cdot y}{||x|| \\, ||y||}$$","Formula(Distance): $$d(x,y) = 1 - \\frac{x \\cdot y}{||x|| \\, ||y||}$$","- Best for: Text mining, NLP, recommendation systems.","- Example: Measuring similarity between two documents regardless of their length.","6. Hamming Distance","The number of positions where two strings (of equal length) differ. Commonly used for error detection and sequence comparison.","Formula: $$d(x,y) = \\sum_{i=1}^n [x_i \\neq y_i]$$","where $[x_i \\neq y_i] = 1$ if symbols differ, else 0.","- Best for: Binary strings, DNA sequences, error correction.","- Example: Hamming distance between â€œkarolinâ€ and â€œkathrinâ€ = 3."],code:`from scipy.spatial import distance
import numpy as np

a = [1, 2, 3]
b = [4, 5, 6]

print('Euclidean:', distance.euclidean(a, b))
print('Manhattan:', distance.cityblock(a, b))
print('Cosine Similarity:', 1 - distance.cosine(a, b))

# Hamming Distance
s1 = "karolin"
s2 = "kathrin"
hamming = sum(c1 != c2 for c1, c2 in zip(s1, s2))
print(f'Hamming Distance between "{s1}" and "{s2}":', hamming)`,output:`Euclidean: 5.196152422706632
Manhattan: 9
Cosine Similarity: 0.974631846649677
Hamming Distance between "karolin" and "kathrin": 3`}],tags:["Euclidean","Manhattan","Cosine Similarity","Jaccard"],level:"Intermediate"}]};export{e as LINEAR_ALGEBRA_DATA};
