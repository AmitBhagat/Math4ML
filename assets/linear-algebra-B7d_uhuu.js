const e={id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the foundation for many machine learning algorithms. It provides the tools to represent and manipulate datasets, features and transformations.",keyConcepts:[{title:"Vectors",description:"Building blocks of datasets and features"},{title:"Matrices",description:"Essential for solving equations and optimizing ML models"},{title:"Eigenvalues",description:"For understanding variance and principal components"},{title:"SVD",description:"Widely used in dimensionality reduction and data compression"}],sections:[{id:"Vectors",title:"Vectors for Machine Learning",description:"Vectors are a fundamental concept in machine learning and play an important role in data representation. They are widely used in algorithms for classification, regression, clustering and deep learning.",formula:"v = (x_1, x_2, \\dots, x_n)",details:["A vector is a mathematical object with magnitude and direction and in machine learning, it represents data in numerical form so that computers can process and analyze it efficiently.","A vector is an ordered list of numbers, called components or elements, where each number represents a feature of a data point."],contentSections:[{heading:"What are Vectors?",paragraphs:["Vectors are a fundamental concept in machine learning and play an important role in data representation. They are widely used in algorithms for classification, regression, clustering and deep learning. A vector is a mathematical object with magnitude and direction and in machine learning, it represents data in numerical form so that computers can process and analyze it efficiently.","A vector is an ordered list of numbers, called components or elements, where each number represents a feature of a data point. A vector in a two-dimensional plane can be defined as: $v = (x_1, x_2)$","For example: a vector for someone's height (in cm) and weight (in kg) might be: $v = (170, 65)$. In higher dimensions, vectors will have more components, such as: $v = (x_1, x_2, x_3, \\dots, x_n)$ where $n$ is the number of features of a specific data point."],code:`import numpy as np
vector = np.array([170, 65])
print("Vector:", vector)`,output:"Vector: [170 65]"},{heading:"Scalars, Vectors and Matrices",paragraphs:["- Scalars: Any single value from our dataset would represent a scalar like integers or floating-point numbers, employed in mathematical computation.","- Vectors: Vectors are one-dimensional number arrays that hold several values in a linear sequence.","- Matrices: Matrices are two-dimensional arrays of multiple vectors that are placed in rows and columns.","These mathematical structures play an essential role in machine learning models, facilitating effective calculations and data representation."],code:`import numpy as np
# Define a 3x3 matrix
mat = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Matrix:\\n", mat)`,output:`Matrix:
 [[1 2 3]
 [4 5 6]
 [7 8 9]]`},{heading:"Vectors in Machine Learning Models",paragraphs:["Vectors are used at various points in machine learning models:","1. Input: All data such as images, text or sensor readings must be converted into numerical form. These numbers are organized as vectors so models can process them efficiently.","2. Model: Machine learning models, especially neural networks, rely on vector and matrix operations. Linear algebra operations like multiplication help update model parameters and improve accuracy.","3. Outputs: Model outputs can be numbers, categories or vectors. In tasks like NLP or recommendations, output vectors are used for similarity, clustering or further predictions."]},{heading:"Types of Vectors",paragraphs:["1. Row and Column Vectors:","- A row vector is a one-dimensional array represented in a row format: $(x_1, x_2, x_3)$","- A column vector is a one-dimensional array represented in a column notation:","$$ \\begin{bmatrix}x_1 \\\\x_2 \\\\x_3 \\\\\\vdots \\\\x_n\\end{bmatrix} $$","2. Zero Vector: A vector with all elements as zero. Example: $v = (0, 0, 0)$. Zero vectors are useful when solving optimization problems and are the origin in vector space.","3. Unit Vector: A vector of magnitude 1. It is frequently used to denote direction: $\\mathbf{u} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$ where $\\|\\mathbf{v}\\|$ is the magnitude of vector $v$.","4. Sparse and Dense Vectors:","- Sparse Vectors consist primarily of zeros and are employed in text analysis and recommendation systems.","- Dense Vectors consist primarily of non-zero values and are employed in image processing and deep learning."]},{heading:"Importance of Vectors in Machine Learning",paragraphs:["1. Feature Representation: Vectors are used to represent data points in numerical form. For example, in natural language processing (NLP), words are translated into word vectors by techniques such as Word2Vec or TF-IDF.","2. Distance and Similarity Measures: Similarity between data points is typically calculated in machine learning by vector distance measures like Euclidean Distance (Quantitative measure of straight-line distance between two points) and Cosine Similarity (Quantifies the cosine of the angle between two vectors to ascertain similarity).","3. Transformations and Projections: Vectors enable mathematical transformations such as rotation, scaling and translation. These are employed in methods such as Principal Component Analysis (PCA) to project datasets into lower dimensions."]},{heading:"Operations & Visualizations",paragraphs:["Basic vector operations include addition, subtraction, and multiplication. The visualization below demonstrates how vector addition and scalar scaling look geometrically in a 2D plane."],code:`import matplotlib.pyplot as plt
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
Cross Product a x b (extended to 3D): [ 0  0 -5]`},{heading:"Applications in ML Algorithms",paragraphs:["Vectors play an important role in various machine learning algorithms and natural language processing (NLP) techniques:","- Linear Regression: Employs vectors to denote the independent and dependent variable relationship: $Y = Xw + b$ where $X$ is a feature vector, $w$ is a weights vector and $b$ is the bias term.","- Support Vector Machines (SVMs): SVMs utilize vector mathematics to identify the best hyperplane separating various classes in classification problems.","- Neural Networks: store weights, activations and gradients as vectors, making them crucial for deep learning models.","- Clustering (K-Means Algorithm): allocates points to clusters based on vector distances.","- Word Embeddings in NLP: Methods such as Word2Vec and GloVe map words to vectors, capturing their semantic meaning.","- Sentence and Document Embeddings: Sentences and documents can also be encoded as vectors using techniques like BERT and Doc2Vec."]}],tags:["Components","Magnitude","Direction","Sparse","Dense"],level:"Beginner"},{id:"LinearCombinations",title:"Linear Combinations",description:"Linear combination involves combining a set of vectors by multiplying each vector by a scalar (a real number) and then adding the results together.",formula:"w = c_1v_1 + c_2v_2 + \\dots + c_nv_n",details:["A linear combination expresses a new vector as a weighted sum of existing vectors.","Key in regression models, Principal Component Analysis (PCA), and feature engineering."],contentSections:[{heading:"What is a Linear Combination?",paragraphs:["Linear combination involves combining a set of vectors by multiplying each vector by a scalar (a real number) and then adding the results together. For example, if you have vectors $v_1$ and $v_2$ and scalars $a$ and $b$, the expression $a \\times v_1 + b \\times v_2$ is a linear combination of those vectors.","This concept is not limited to just vectors. Linear combinations can also be applied to functions, polynomials and other mathematical entities.","Linear combinations are used in data science and data analysis in the following ways:","- In prediction models, results are calculated by multiplying features with weights and adding them.","- In techniques like Principal Component Analysis (PCA), new variables are created by combining old variables.","- In feature engineering, existing data columns are combined to make better inputs for models."]},{heading:"Mathematical Definition",paragraphs:["Given a set of vectors $v_1, v_2, \\dots, v_n$ in a vector space, a linear combination of these vectors is an expression of the form:","$$ w = c_1 v_1 + c_2 v_2 + \\dots + c_n v_n $$","Where $c_1, c_2, \\dots, c_n$ are scalars (real numbers, complex numbers, etc.).","**Example in $\\mathbb{R}^2$:**","Consider two vectors:","$$ \\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} $$","A linear combination of $v_1$ and $v_2$ would be:","$$ \\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 = c_1 \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + c_2 \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} c_1 + 3c_2 \\\\ 2c_1 + 4c_2 \\end{bmatrix} $$"]},{heading:"Properties of Linear Combinations",paragraphs:["1. Linearity Property: Scalar multiplication distributes over addition: $a(u+v) = au + av$ and $(a+b)u = au + bu$. This ensures scaling and addition behave consistently.","2. Commutative Property: Order of addition does not matter: $v_1 + v_2 = v_2 + v_1$. In linear combinations: $c_1v_1 + c_2v_2 = c_2v_2 + c_1v_1$.","3. Associative Property: Grouping does not matter: $(v_1 + v_2) + v_3 = v_1 + (v_2 + v_3)$. In linear combinations: $(c_1v_1 + c_2v_2) + c_3v_3 = c_1v_1 + (c_2v_2 + c_3v_3)$."]},{heading:"Linear Combinations in Machine Learning",paragraphs:["In Linear Regression, the predicted price is a linear combination of features:","$$ \\text{Price} = w_1(\\text{Area}) + w_2(\\text{Bedrooms}) + w_3(\\text{Age}) $$","Here, Area, Bedrooms, and Age are vectors (features), and $w_1, w_2, w_3$ are scalars (model weights).","Whenever we build a regression model, we are creating weighted sums of input features. This is the foundation of Multiple Linear Regression, Neural Networks (weighted sums), and Feature engineering."]},{heading:"Methods: Vectors & Matrices",paragraphs:["To form a linear combination, we can use both vectors and matrices. The visualization below shows the span of two vectors $v_1=(1,1)$ and $v_2=(-1,1)$ by plotting several linear combinations with different weights."],code:`import matplotlib.pyplot as plt
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
 [-5 -4]]`}],tags:["Span","Basis","Independence","Weighted Sum"],level:"Intermediate"},{id:"DotProduct",title:"Dot Product (Scalar Product)",description:"In physics and mathematics, the scalar product (dot product) of two vectors gives a scalar quantity. It is fundamental to measuring alignment, work, projections, and similarity in machine learning.",formula:"A \\cdot B = |A| |B| \\cos(\\theta)",details:["The dot product results in a scalar quantity.","In unit vector form: $A \\cdot B = A_x B_x + A_y B_y + A_z B_z$.","Geometrically, it represents the product of the magnitude of one vector and the component of the other along its direction."],contentSections:[{heading:"Introduction to Scalar Product",paragraphs:["In physics and mathematics, vectors can be multiplied either by a scalar or by another vector. One important type of vector multiplication is the scalar product, also known as the dot product. The result of a scalar product is a scalar quantity.","The scalar product is widely used in physics to define quantities such as work, energy, and power. For example, the work done by a force is defined as the scalar product of the force vector and the displacement vector.","The scalar product of two vectors $A$ and $B$ is defined as:","$$ \\boxed{\\overrightarrow{\\text{A}} \\cdot \\overrightarrow{\\text{B}} = |\\overrightarrow{\\text{A}}| \\,| \\overrightarrow{\\text{B}} | \\cos\\theta} $$","where $|\\mathbf{A}|$ and $|\\mathbf{B}|$ are the magnitudes of the vectors, and $\\theta$ is the angle between them. Since the product is represented by a dot (Â·), it is called the dot product."]},{heading:"Representations and Calculations",paragraphs:["**1. Unit Vector Representation:**","In the unit vector representation, $i, j,$ and $k$ are along the x, y, and z axes respectively. The scalar product is calculated as:","$$ \\overrightarrow{\\text{A}} \\cdot \\overrightarrow{\\text{B}} = A_x B_x + A_y B_y + A_z B_z $$","**2. Matrix Representation:**","It is useful to represent vectors as row or column matrices. If we treat vectors as column matrices of their components, then the scalar product is the matrix multiplication of the transpose of A and B:","$$ \\overrightarrow{\\rm A} \\cdot \\overrightarrow{\\rm B} = \\begin{bmatrix}A_x & A_y & A_z \\end{bmatrix} \\begin{bmatrix} B_x \\\\ B_y \\\\ B_z \\end{bmatrix} = A_x B_x + A_y B_y + A_z B_z $$"]},{heading:"Geometrical Interpretation",paragraphs:["The product of two nonzero vectors can be visualized as multiplying the magnitude of any one of the vectors by the magnitude of the projection of the other vector upon it.","- **Case 1:** When $0^\\circ < \\theta < 90^\\circ$, then the scalar product is positive.","- **Case 2:** When $90^\\circ < \\theta < 180^\\circ$, then the scalar product is negative.","- **Case 3:** When $\\theta = 90^\\circ$, then the scalar product is 0 (zero)."]},{heading:"Properties & Visualization",paragraphs:["Key properties include Commutativity ($A \\cdot B = B \\cdot A$), Distributivity ($A \\cdot (B+C) = A \\cdot B + A \\cdot C$), and Orthogonality ($A \\cdot B = 0$ if perpendicular).","The visualization below shows two vectors and the projection of one onto another."],code:`import matplotlib.pyplot as plt
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
Angle (degrees): 33.69006752597978`},{heading:"Solved Problems",paragraphs:["**Problem 1:** Find scalar product of $A = 2i + 5j + 3k$ and $B = 3i + j + 2k$. Result: $(2 \\times 3) + (5 \\times 1) + (3 \\times 2) = 17$.","**Problem 2:** Work done by Force $F = (7i + 5j + 2k)N$ on displacement $D = i + j + 3k$. Work = $F \\cdot D = (7 \\times 1) + (5 \\times 1) + (2 \\times 3) = 18 J$.","**Problem 3:** Find $m$ such that $A = 2i + 3j + k$ and $B = 3i + 2j + mk$ are perpendicular. $A \\cdot B = 0 \\implies 6 + 6 + m = 0 \\implies m = -12$.","**Problem 4:** Prove $U = 2i + 3j + k$ and $V = 4i - 2j - 2k$ are perpendicular. $U \\cdot V = 8 - 6 - 2 = 0$. Hence proved.","**Problem 5:** Prove $A = 4a_x - 2a_y - a_z$ and $B = a_x + 4a_y - a_z$ are perpendicular. $A \\cdot B = 4(1) + (-2)(4) + (-1)(-1) = 4 - 8 + 1 = -3 \\neq 0$. Not perpendicular."]}],tags:["Inner Product","Orthogonality","Cosine Similarity","Projection"],level:"Beginner"},{id:"Matrices",title:"Matrices & Matrix Arithmetic",description:"In machine learning data often comes in multi-dimensional arrays making matrices an ideal way to handle such inputs. Mastery of matrix arithmetic is essential for linear regression, neural networks, and dimensionality reduction.",formula:"$$ C_{ij} = \\sum_{k} A_{ik} B_{kj} $$",details:["A matrix is a two-dimensional array of numbers arranged in rows and columns: element $a[i][j]$.","The order of a matrix is expressed as $m \\times n$ where $m$ is number of rows and $n$ is number of columns.","Understanding matrix arithmetic is essential because many ML algorithms rely heavily on matrix operations."],contentSections:[{heading:"What is a Matrix?",paragraphs:["In machine learning data often comes in multi-dimensional arrays making matrices an ideal way to handle such inputs. Understanding matrix arithmetic is essential because many machine learning algorithms including linear regression, neural networks and dimensionality reduction techniques, rely heavily on matrix operations.","A matrix is a two-dimensional array of numbers arranged in rows and columns. Each element in a matrix is represented as $a[i][j]$ where: $i$ is row number and $j$ is column number. The order of a matrix is expressed as $m \\times n$ where $m$ is number of rows and $n$ is number of columns.","In Python the NumPy library is commonly used to work with matrices. Matrices can be created using the `numpy.array()` function."],code:`import numpy as np
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Matrix:\\n", matrix)
print("Order:", matrix.shape)`,output:`Matrix:
 [[1 2 3]
 [4 5 6]
 [7 8 9]]
Order: (3, 3)`},{heading:"Matrix Arithmetic Operations",paragraphs:["1. **Matrix Addition:** combines two matrices of the same order by adding their corresponding elements. Addition is done using the `+` operator in Python. It is only possible when both matrices have the same number of rows and columns.","2. **Matrix Subtraction:** subtracts the corresponding elements of two matrices of the same order. Subtraction is done using the `-` operator in Python.","3. **Matrix Division:** divides the corresponding elements of two matrices of the same order. Division is done using the `/` operator for float division or `//` operator for integer division.","4. **Matrix Multiplication (Dot product):** multiplies rows of the first matrix with columns of the second matrix. It requires that the number of columns in the first matrix equals the number of rows in the second matrix. **Note: Matrices do not satisfy commutative property ($AB \\neq BA$).**","5. **Vector multiplication:** A vector is a one-dimensional array. To multiply a matrix by a vector, the number of columns in the matrix must equal the number of rows in the vector.","6. **Scalar Multiplication:** When we multiply a matrix with a scalar then it is multiplied with each and every element in the matrix. The order remains same."],code:`import matplotlib.pyplot as plt
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
 [6 8]]`}],tags:["Addition","Multiplication","Inverse","Transpose"],level:"Beginner"},{id:"LinearTransformation",title:"Linear Mapping (Linear Transformation)",description:"Linear mapping is a mathematical operation that transforms input values into output values using a linear function. It is used for preprocessing, in PCA, and as the core operation in neural networks.",formula:"y = Wx + b",details:["A linear transformation preserves vector addition: $f(u+v) = f(u)+f(v)$.","It preserves homogeneity (scalar multiplication): $f(cu) = cf(u)$.","Every linear transformation can be represented as matrix multiplication $T(v) = Av$."],contentSections:[{heading:"What is Linear Mapping?",paragraphs:["Linear mapping is a mathematical operation that transforms a set of input values into a set of output values using a linear function. It is often used as a preprocessing step to transform the input data into a more suitable format for analysis. It can also be used as a model in itself, such as in linear regression or linear classifiers.","The linear mapping function can be represented as follows:","$$ y = Wx + b $$","where $x$ is the input vector, $W$ is the weight matrix, $b$ is the bias vector and $y$ is the output vector. The weight matrix and bias vector are learned during the training process.","Let $V$ and $W$ be vector spaces over a field $K$. A function $f: V \\rightarrow W$ is called a linear map if, for any vectors $u, v \\in V$ and a scalar $c \\in K$, the following conditions hold:","- If the transformation is additive in nature: $f(u + v) = f(u) + f(v)$","- If transformation is homogeneity: $f(c \\cdot u) = c \\cdot f(u)$"]},{heading:"Special Transformations & Properties",paragraphs:["A linear transformation $T: V \\rightarrow V$ from a vector space into itself is called a **Linear operator**.","- **Zero-Transformation:** For a transformation $T: V \\rightarrow W$ is called zero-transformation if: $T(v) = 0 \\, \\forall \\, v \\in V$","- **Identity-Transformation:** For a transformation $T: V \\rightarrow V$ is called identity-transformation if: $T(v) = v \\, \\forall \\, v \\in V$","**Properties of Linear Transformations:**","Let $T: V \\rightarrow W$ be the linear transformation where $u,v \\in V$. Then, the following properties are true:","- $T(0) = 0$","- $T(-v) = -T(v)$","- $T(u - v) = T(u) - T(v)$","- If $v = c_1v_1 + c_2v_2 + \\dots + c_nv_n$, then $T(v) = c_1T(v_1) + c_2T(v_2) + \\dots + c_nT(v_n)$."]},{heading:"Matrix Representation",paragraphs:["Let $T$ be a $m \\times n$ matrix, the transformation $T: \\mathbb{R}^n \\rightarrow \\mathbb{R}^m$ is linear transformation if: $T(v) = Av$.","**Zero and Identity Matrix operations:**","- A matrix $m \\times n$ matrix is a zero matrix, corresponding to zero transformation.","- A matrix $n \\times n$ matrix is Identity matrix $\\mathbb{I}_n$, corresponds to identity transformation.","$$ \\begin{bmatrix} a_{11}&  a_{12}&  \\dots & a_{1n} \\\\ a_{21}&  a_{22}&  \\dots & a_{2n} \\\\ \\vdots &  \\vdots &  \\ddots & \\vdots \\\\ a_{m1}&  a_{m2}&  \\dots &a_{mn} \\end{bmatrix} \\begin{bmatrix} v_1\\\\ v_2\\\\ \\vdots \\\\ v_n \\end{bmatrix} = \\begin{bmatrix} a_{11} v_1 + a_{12} v_2 + \\dots + a_{1n} v_n \\\\ \\vdots \\\\ \\vdots \\\\ a_{m1} v_1 + a_{m2} v_2 + \\dots + a_{mn} v_n \\\\ \\end{bmatrix} $$"]},{heading:"Kernel and Range Space",paragraphs:["Let $T: V \\rightarrow W$ is linear transformation then $\\forall v \\in V$ such that: $T \\cdot v = 0$ is the **kernel space** of $T$. It is also known as the **null space** of $T$. The dimensions of the kernel space are known as **nullity** or $null(T)$.","Let $T: V \\rightarrow W$ is linear transformation then $\\forall v \\in V$ such that: $T \\cdot v = v$ is the **range space** of $T$. The dimensions of the range space are known as **rank(T)**. The sum of rank and nullity is the dimension of the domain:","$$ null(T) + rank(T) = dim(V) = n $$"]},{heading:"Geometric Transformations (Rotation & Projection)",paragraphs:["**1. Rotation:** The linear transformation $T: \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2$ given by matrix $A = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$ rotates every vector anti-clockwise about the origin by angle $\\theta$.","**2. Projection:** A linear transformation $T: \\mathbb{R}^3 \\rightarrow \\mathbb{R}^3$ given by $T = \\begin{bmatrix} 1&0&0 \\\\ 0&1&0 \\\\ 0&0&0 \\end{bmatrix}$ projects a vector $(x,y,z)$ orthogonally to $(x,y,0)$."]},{heading:"Interactive Visualizer: Rotation Transformation",paragraphs:["The following visualization demonstrates applying a rotation transformation to a set of points (a square) and a basis vector."],code:`import matplotlib.pyplot as plt
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
plt.show()`,output:"Visualizing 45-degree rotation transformation."},{heading:"Advantages & Disadvantages",paragraphs:["**Advantages:**","- Simplicity: Easy-to-understand mathematical operation.","- Speed: Computationally efficient, suitable for large datasets.","- Interpretability: Transparent and easy to analyze.","**Disadvantages:**","- Limited expressiveness: Can only model linear relationships.","- Sensitivity to outliers: Can lead to poor model performance.","- Limited feature engineering: May not capture complex interactions."]}],tags:["Rotation","Scaling","PCA","Feature Scaling","Neural Networks"],level:"Intermediate"},{id:"LinearEquations",title:"Solving Linear Equations",description:"Linear Algebra is important in Data Science as it helps represent and process data efficiently, especially for high-dimensional datasets. Solving $Ax = b$ systems is fundamental for optimization, predictions, and identifying relationships.",formula:"$$ A \\mathbf{x} = \\mathbf{b} $$",details:["Detects linear relationships using **null space and nullity**.","Case 1 ($m=n$): Unique, Infinite, or No Solution based on rank and determinant.","Case 2 ($m>n$): Overdetermined systems solved via the **Optimization Perspective (Least Squares)**.","Case 3 ($m<n$): Underdetermined systems with infinite solutions; we select one via pseudoinverse."],contentSections:[{heading:"Linear Relationships in Data Science",paragraphs:["Linear Algebra is important in Data Science as it helps represent and process data efficiently, especially for high-dimensional datasets. It also helps in understanding relationships between variables. This is useful for:","- Efficient Data Representation: Organizes data in matrix form.","- Find Relationships: Identifies important variables and patterns.","- Supports ML Algorithms: Forms the basis of many machine learning methods.","Linear relationships among attributes are identified using the concepts of null space and nullity. These help determine whether variables are linearly dependent and whether some attributes can be expressed as combinations of others."]},{heading:"Generalized System: Ax = b",paragraphs:["A generalized system of linear equations is represented as: $A x = b$, where:","- $A$ is an $m \\times n$ matrix of coefficients.","- $x$ is an $n \\times 1$ vector of unknown variables.","- $b$ is an $m \\times 1$ dependent variable vector.","- $m$ represents the number of equations, and $n$ represents the number of variables."]},{heading:"Case 1: m = n (Square Systems)",paragraphs:["**1. Unique Solution:** If $|A| \\neq 0$ and $rank(A) = n$ (Full rank).","Example: $\\begin{bmatrix} 1 & 3 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 10 \\end{bmatrix} \\implies (x_1, x_2) = (1, 2)$.","**2. Infinite Solutions:** If $rank(A) < n$ and the system is consistent (e.g., Row 2 is a multiple of Row 1).","Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 10 \\end{bmatrix}$.","**3. No Solution:** If $rank(A) < rank(A|b)$ or the system is inconsistent.","Example: $\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 9 \\end{bmatrix}$ (Parallel lines)."],code:`import matplotlib.pyplot as plt
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

print("Determinant of A:", np.linalg.det([[1, 2], [2, 4]]))`,output:"Determinant of A: 0.0"},{heading:"Case 2: m > n (Overdetermined Systems)",paragraphs:["In this case the number of variables or attributes is less than the number of equations. Usually, not all equations can be satisfied. We use the **Optimization Perspective (Least Squares)** to minimize the error $e = Ax - b$.","We minimize the sum of squared errors: $f(x) = \\min [(Ax - b)^T(Ax - b)]$.","Differentiating and setting to zero gives the solution: $$ x = (A^T A)^{-1} A^T b $$","This solution ensures the errors are collectively minimized even if not all equations are satisfies exactly. This requires that $(A^T A)^{-1}$ exists (linearly independent columns)."]},{heading:"Case 3: m < n (Underdetermined Systems)",paragraphs:["More attributes or variables than equations leads to infinite solutions. We can choose the specific solution that minimizes the norm of $x$ ($min [\\frac{1}{2}x^T x]$ subject to $Ax = b$).","Using Lagrangian multipliers, we obtain: $$ x = A^T(A A^T)^{-1} b $$","Requires $(A A^T)^{-1}$ to exist (linearly independent rows).","**Generalization:** The concept used to generalize solutions for all cases is the **Moore-Penrose Pseudoinverse ($A^+$)**. Singular Value Decomposition (SVD) is used to calculate it."]},{heading:"Rank Properties & Indepedence",paragraphs:["**- Row Rank vs Column Rank:** The row rank of a matrix is always equal to its column rank. Max rank is $min(m, n)$.","**- Full Row Rank:** All rows are linearly independent (rank = $m$). Indicates independent data samples.","**- Full Column Rank:** All columns are linearly independent (rank = $n$). Indicates independent features/attributes."],code:`import numpy as np

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
Target b: [1. -0.5  5.]`}],tags:["Ax=b","Least Squares","Optimization","Gaussian Elimination","Rank"],level:"Intermediate"},{id:"EigenValues",title:"Eigenvalues & Eigenvectors",description:"Fundamental concepts in linear algebra used for matrix diagonalization, stability analysis, and PCA. They provide deep insights into how matrices transform space.",formula:"$$ A \\mathbf{v} = \\lambda \\mathbf{v} $$",details:["Eigenvalues (Î») are scalars that stretch/compress eigenvectors.","Eigenvectors ($v$) are non-zero vectors whose direction remains unchanged under transformation.","Calculation: Solve $\\det(A - \\lambda I) = 0$ for $\\lambda$, then $(A - \\lambda I)v = 0$ for $v$."],contentSections:[{heading:"Introduction",paragraphs:["Eigenvalues and eigenvectors are fundamental concepts in linear algebra, used in various applications such as matrix diagonalization, stability analysis, and data analysis (e.g., Principal Component Analysis). They are associated with a square matrix and provide insights into its properties.","**Eigenvalues:** are unique scalar values linked to a matrix or linear transformation. They indicate how much an eigenvector gets stretched or compressed during the transformation. The eigenvector's direction remains unchanged unless the eigenvalue is negative, in which case the direction is simply reversed.","**Eigenvectors:** are non-zero vectors that, when multiplied by a matrix, only stretch or shrink without changing direction. The eigenvalue must be found first before the eigenvector. For any square matrix A of order $n \\times n$, the eigenvector is a column matrix of size $n \\times 1$. This is known as the **right eigenvector**.","Alternatively, the **left eigenvector** can be found using the equation $vA = \\lambda v$, where $v$ is a row matrix of size $1 \\times n$."]},{heading:"The Characteristic Equation",paragraphs:["The eigenvector equation is $Av = \\lambda v$. To solve for $\\lambda$, we rewrite it as:","$$ (A - \\lambda I) v = 0 $$","This product is zero for a non-zero vector $v$ only if the matrix $(A - \\lambda I)$ squishes space into a lower dimension, implying its determinant is zero:","$$ \\det(A - \\lambda I) = 0 $$","**Step-by-Step Procedure:**","1. Find eigenvalues $\\lambda$ by solving $\\det|A - \\lambda I| = 0$.","2. For each $\\lambda_i$, find the associated eigenvector $X$ using $(A - \\lambda_i I)X = 0$."]},{heading:"Solved Example (2x2 Matrix)",paragraphs:["Find eigenvalues and eigenvectors for $A = \\begin{bmatrix} 1 & 2 \\\\ 5 & 4 \\end{bmatrix}$.","1. $\\det \\begin{bmatrix} 1-\\lambda & 2 \\\\ 5 & 4-\\lambda \\end{bmatrix} = \\lambda^2 - 5\\lambda - 6 = 0$. Solutions: $\\lambda_1 = 6, \\lambda_2 = -1$.","2. For $\\lambda = 6$: $\\begin{bmatrix} -5 & 2 \\\\ 5 & -2 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} = 0 \\implies 5a = 2b$. Vector: $\\begin{bmatrix} 2 \\\\ 5 \\end{bmatrix}$.","3. For $\\lambda = -1$: $\\begin{bmatrix} 2 & 2 \\\\ 5 & 5 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\end{bmatrix} = 0 \\implies a = -b$. Vector: $\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$."]},{heading:"Eigenspace and Diagonalization",paragraphs:["**Eigenspace:** The set of all eigenvectors of a matrix. All vectors in the eigenspace are linearly independent.","**Diagonalization:** A square matrix $A$ can be written as $A = XDX^{-1}$ where $X$ is the matrix of eigenvectors and $D$ is the diagonal matrix of eigenvalues."]},{heading:"Interactive Visualizer: Eigen-Transformation",paragraphs:["The following visualization shows how a square matrix transforms a set of vectors. Notice that the **Eigenvector** only changes in length (scaled by $\\lambda$), while others change direction."],code:`import matplotlib.pyplot as plt
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
print("Eigenvectors:\\n", evecs)`,output:"Visualizing how A transforms a unit circle and its eigenvectors."},{heading:"Real-world Applications",paragraphs:["- **Google PageRank:** The importance of a page is the eigenvector corresponding to $\\lambda=1$ of the link matrix.","- **PCA:** Reduces dimensionality by keeping eigenvectors with largest eigenvalues.","- **Computer Vision (Eigenfaces):** Used for face recognition.","- **LSA in NLP:** Finds semantic relationships Ð¼ÐµÐ¶Ð´Ñƒ words.","- **Control Systems:** Eigenvalues determine system stability."]}],tags:["Eigenvalue","Eigenvector","PCA","Diagonalization"],level:"Intermediate"},{id:"SVD",title:"Singular Value Decomposition (SVD)",description:"Singular Value Decomposition (SVD) is a factorization method in linear algebra that decomposes a matrix into three other matrices, providing a way to represent data in terms of its singular values.",formula:"A = U \\Sigma V^T",details:["U: This part tells you about the people (like their general preferences).","$\\Sigma$: This part shows how important each factor is (how much each rating matters).","$V^T$: This part tells you about the products (how similar they are to each other)"],contentSections:[{heading:"What is SVD?",paragraphs:["Singular Value Decomposition (SVD) is a factorization method in linear algebra that decomposes a matrix into three other matrices, providing a way to represent data in terms of its singular values. SVD helps you split that table into three parts:","- U: This part tells you about the people (like their general preferences).","- $\\Sigma$: This part shows how important each factor is (how much each rating matters).","- $V^T$: This part tells you about the products (how similar they are to each other)","Let's understand this with the help of an example: Suppose you have a small table of people's ratings for two movies:",`<table class="w-full text-left border-collapse bg-white">
  <thead>
    <tr class="bg-gray-50 border-b">
      <th class="px-6 py-3 font-bold text-sm text-gray-900">Name</th>
      <th class="px-6 py-3 font-bold text-sm text-gray-900">Movie 1 Rating</th>
      <th class="px-6 py-3 font-bold text-sm text-gray-900">Movie 2 Rating</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-100">
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-3 text-sm text-gray-700">Amit</td>
      <td class="px-6 py-3 text-sm text-gray-700">5</td>
      <td class="px-6 py-3 text-sm text-gray-700">3</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-3 text-sm text-gray-700">Sanket</td>
      <td class="px-6 py-3 text-sm text-gray-700">4</td>
      <td class="px-6 py-3 text-sm text-gray-700">2</td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="px-6 py-3 text-sm text-gray-700">Harsh</td>
      <td class="px-6 py-3 text-sm text-gray-700">2</td>
      <td class="px-6 py-3 text-sm text-gray-700">5</td>
    </tr>
  </tbody>
</table>`,"- SVD breaks this table into three smaller parts: one that shows people's preferences, one that shows the importance of each movie, and one that shows how similar the movies are to each other","- Mathematically, the SVD of a matrix A (of size $m \\times n$) is represented as: $$A = U \\Sigma V^T$$","Here:","- U: An $m \\times m$ orthogonal matrix whose columns are the left singular vectors of A.","- $\\Sigma$: A diagonal $m \\times n$ matrix containing the singular values of A in descending order.","- $V^T$: The transpose of an $n \\times n$ orthogonal matrix, where the columns are the right singular vectors of A."]},{heading:"Step-by-Step Calculation",paragraphs:["To perform Singular Value Decomposition (SVD) for the matrix $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$, let's break it down step by step.","Step 1: Compute $A A^T$","First, we need to calculate the matrix $A A^T$ (where $A^T$ is the transpose of matrix A):","$$A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$$","$$A^T = \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\\\ 2 & -2 \\end{bmatrix}$$","Now, compute $A A^T$:","$$A A^T = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix} \\cdot \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\\\ 2 & -2 \\end{bmatrix} = \\begin{bmatrix} 17 & 8 \\\\ 8 & 17 \\end{bmatrix}$$","Step 2: Find the Eigenvalues of $A A^T$","To find the eigenvalues of $A A^T$, we solve the characteristic equation:","$$\\det(A A^T - \\lambda I) = 0$$","$$\\det \\begin{bmatrix} 17 - \\lambda & 8 \\\\ 8 & 17 - \\lambda \\end{bmatrix} = 0$$","$$(\\lambda - 25)(\\lambda - 9) = 0$$","Thus, the eigenvalues are $\\lambda_1 = 25$ and $\\lambda_2 = 9$. These eigenvalues correspond to the singular values $\\sigma_1 = 5$ and $\\sigma_2 = 3$, since the singular values are the square roots of the eigenvalues.","Step 3: Find the Right Singular Vectors (Eigenvectors of $A^T A$)","Next, we find the eigenvectors of $A^T A$ for $\\lambda = 25$ and $\\lambda = 9$.","For $\\lambda = 25$: Solve $(A^T A - 25I) v = 0$:","$$A^T A - 25I = \\begin{bmatrix} -12 & 12 & 2 \\\\ 12 & -12 & -2 \\\\ 2 & -2 & -17 \\end{bmatrix}$$","Row-reduce this matrix to:","$$\\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{bmatrix}$$","The eigenvector corresponding to $\\lambda = 25$ is:","$$v_1 = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} \\\\ 0 \\end{bmatrix}$$","For $\\lambda = 9$: Solve $(A^T A - 9I) v = 0$:","The eigenvector corresponding to $\\lambda = 9$ is:","$$v_2 = \\begin{bmatrix} \\frac{1}{\\sqrt{18}} \\\\ \\frac{-1}{\\sqrt{18}} \\\\ \\frac{4}{\\sqrt{18}} \\end{bmatrix}$$","For the third eigenvector $v_3$: Since $v_3$ must be perpendicular to $v_1$ and $v_2$, we solve the system $v_1^T v_3 = 0$ and $v_2^T v_3 = 0$, leading to:","$$v_3 = \\begin{bmatrix} \\frac{2}{3} \\\\ \\frac{-2}{3} \\\\ \\frac{-1}{3} \\end{bmatrix}$$","Step 4: Compute the Left Singular Vectors (Matrix U)","To compute the left singular vectors U, we use the formula $u_i = \\frac{1}{\\sigma_i} A v_i$. This results in:","$$U = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix}$$","Step 5: Final SVD Equation","Finally, the Singular Value Decomposition of matrix A is: $$A = U \\Sigma V^T$$","Where:","$$U = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix}$$","$$\\Sigma = \\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 3 & 0 \\end{bmatrix}$$","$$V = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} & 0 \\\\ \\frac{1}{\\sqrt{18}} & \\frac{-1}{\\sqrt{18}} & \\frac{4}{\\sqrt{18}} \\\\ \\frac{2}{3} & \\frac{-2}{3} & \\frac{1}{3} \\end{bmatrix}$$","Thus, the SVD of matrix A is:","$$A = \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} & \\frac{-1}{\\sqrt{2}} \\end{bmatrix} \\begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 3 & 0 \\end{bmatrix} \\begin{bmatrix} \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{2}} & 0 \\\\ \\frac{1}{\\sqrt{18}} & \\frac{-1}{\\sqrt{18}} & \\frac{4}{\\sqrt{18}} \\\\ \\frac{2}{3} & \\frac{-2}{3} & \\frac{1}{3} \\end{bmatrix}$$","This is the Result SVD matrix of matrix A."]},{heading:"Applications of SVD",paragraphs:["1. Calculation of Pseudo-Inverse (Moore-Penrose Inverse)","- The pseudo-inverse is a generalization of the matrix inverse, applicable to non-invertible matrices like low-rank matrices. For an invertible matrix, it equals the inverse.","- Denoted as $M^+$, it is calculated using the SVD $M = U\\Sigma V^T$, where U and V are orthogonal matrices of left and right singular vectors, and $\\Sigma$ is a diagonal matrix of singular values.","- Pseudo-inverse formula: $M^+ = V\\Sigma^{-1}U^T$, where $\\Sigma^{-1}$ inverts non-zero singular values.","2. Solving a Set of Homogeneous Linear Equations","- For $M x = b$, if $b = 0$, use SVD to choose a column of V associated with a zero singular value.","- If $b \\neq 0$, solve by multiplying both sides by $M^+$: $x = M^+ b$.","3. Rank, Range, and Null Space","The rank, range, and null space of a matrix M can be derived from its SVD.","- Rank: The rank of matrix M is the number of non-zero singular values in $\\Sigma$.","- Range: The range of matrix M is the span of the left singular vectors in matrix U corresponding to the non-zero singular values.","- Null Space: The null space of matrix M is the span of the right singular vectors in matrix V corresponding to the zero singular values.","4. Curve Fitting Problem","Singular Value Decomposition can be used to minimize the least square error in the curve fitting problem. By approximating the solution using the pseudo-inverse, we can find the best-fit curve to a given set of data points.","5. Applications in Digital Signal Processing (DSP) and Image Processing","- Digital Signal Processing: SVD can be used to analyze signals and filter noise.","- Image Processing: SVD is used for image compression and denoising. It helps in reducing the dimensionality of image data by preserving the most significant singular values and discarding the rest."]},{heading:"Python Implementation",paragraphs:["In this code, we will try to calculate the Singular value decomposition using Numpy and Scipy. We will be calculating SVD, and also performing pseudo-inverse. In the end, we can apply SVD for compressing the image.","Analysis: The output consists of subplots showing the compressed image for different values of r (5, 10, 70, 100, 200), where r represents the number of singular values used in the approximation. As the value of r increases, the compressed image becomes closer to the original grayscale image of the cat, with smaller values of r leading to more blurred and blocky images, and larger values retaining more details."],code:`from skimage.color import rgb2gray
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
 [ 0.22134387 -0.26086957]]`}],tags:["Matrix Factorization","Dimensionality Reduction","SVD","Image Compression"],level:"Advanced"},{id:"VectorNorms",title:"Vector Norms",description:"A vector norm, sometimes represented with a double bar as âˆ¥xâˆ¥, is a function that assigns a non-negative length or size to a vector x in n-dimensional space. Norms are essential in mathematics and machine learning for measuring vector magnitudes and calculating distances.",formula:"| \\mathbf{x} |_p = \\left( \\sum_{i=1}^{n} | x_i |^p \\right)^{\\frac{1}{p}}",details:["A vector norm satisfies three properties:","- Non-negativity: âˆ£xâˆ£ > 0 if x â‰  0, and âˆ£xâˆ£=0 if and only if x = 0.","- Scalar Multiplication: âˆ£kxâˆ£ = âˆ£kâˆ£ â‹… âˆ£xâˆ£ for any scalar k.","- Triangle Inequality: âˆ£x + yâˆ£ â‰¤ âˆ£xâˆ£ + âˆ£yâˆ£."],contentSections:[{heading:"What is a Vector Norm?",paragraphs:["A vector norm, sometimes represented with a double bar as âˆ¥xâˆ¥, is a function that assigns a non-negative length or size to a vector x in n-dimensional space. Norms are essential in mathematics and machine learning for measuring vector magnitudes and calculating distances.","A vector norm satisfies three properties:","1. Non-negativity: âˆ£xâˆ£ > 0 if x â‰  0, and âˆ£xâˆ£=0 if and only if x = 0.","2. Scalar Multiplication: âˆ£kxâˆ£ = âˆ£kâˆ£ â‹… âˆ£xâˆ£ for any scalar k.","3. Triangle Inequality: âˆ£x + yâˆ£ â‰¤ âˆ£xâˆ£ + âˆ£yâˆ£.","The vector norm $|x|_p$, also known as the p-norm, for $p = 1, 2,\\dots$ is defined as: $$| \\mathbf{x} |_p = \\left( \\sum_{i=1}^{n} | x_i |^p \\right)^{\\frac{1}{p}}$$","This general formula encompasses several specific norms that are commonly used:"]},{heading:"Commonly Used Norms",paragraphs:["1. L1 Norm",'The L1 norm, also known as the Manhattan norm or Taxicab norm, is a way to measure the "length" or "magnitude" of a vector by summing the absolute values of its components.',"Mathematically, for a vector $x = [x_1, x_2, \\dots, x_n]$, the L1 norm $|x|_1$ is defined as: $$|x|_1 = |x_1| + |x_2| + |x_3| + ... + |x_n|$$","Example: If $x = [3, -4, 2]$, then the L1 norm is: $|x|_1 = |3| + |-4| + |2| = 3 + 4 + 2 = 9$","2. L2 Norm",'The L2 norm, also known as the Euclidean norm, is a measure of the "length" or "magnitude" of a vector, calculated as the square root of the sum of the squares of its components.',"For a vector $x = [x_1, x_2, \\dots, x_n]$, the L2 norm $|x|_2$ is defined as: $$| \\mathbf{x} |_2 = \\sqrt{x_1^2 + x_2^2 + \\dots + x_n^2}$$","Example: If $x = [3, -4, 2]$, then the L2 norm is: $| \\mathbf{x} |_2 = \\sqrt{3^2 + (-4)^2 + 2^2} = \\sqrt{9 + 16 + 4} = \\sqrt{29} \\approx 5.39$","3. Lâˆž norm",'The Lâˆž norm, also known as the Infinity norm or Max norm, measures the "size" of a vector by taking the largest absolute value among its components. Unlike the L1 and L2 norms, which consider the combined contribution of all components, the Lâˆž norm focuses solely on the component with the maximum magnitude.',"For a vector $x = [x_1, x_2, \\dots, x_n]$, the Lâˆž norm $|x|_\\infty$ is defined as: $$|x|_\\infty = \\max|x_i| \\text{ where } 1 \\le i \\le n$$","Example: If $x = [3, -4, 2]$, then the Lâˆž norm is: $|x|_\\infty = \\max(|3|, |-4|, |2|) = 4$"]},{heading:"Solved Problems",paragraphs:["Question 1. Given the vector x = [4, -3, 7, 1], calculate the L1 norm (Manhattan norm) of the vector.","Question 2. Given the vector x = [1, -2, 2], calculate the L2 norm (Euclidean norm) of the vector.","Question 3. For the vector x = [7, âˆ’1, âˆ’4, 6], calculate the Lâˆž norm (Infinity norm) of the vector.","Question 4. If the L2 norm (Euclidean norm) of a vector x = [x1, x2, x3] is 10, and the components of the vector are x1 = 6 and x2 = 8, find the value of x3.","Answers: 1. 15, 2. 3, 3. 7, 4. 0"],code:`import numpy as np

x1 = np.array([4, -3, 7, 1])
print('L1 norm of [4, -3, 7, 1]:', np.linalg.norm(x1, 1))

x2 = np.array([1, -2, 2])
print('L2 norm of [1, -2, 2]:', np.linalg.norm(x2, 2))

x3 = np.array([7, -1, -4, 6])
print('L-inf norm of [7, -1, -4, 6]:', np.linalg.norm(x3, np.inf))`,output:`L1 norm of [4, -3, 7, 1]: 15.0
L2 norm of [1, -2, 2]: 3.0
L-inf norm of [7, -1, -4, 6]: 7.0`}],tags:["L1","L2","Regularization","Lasso","Ridge","Sparsity"],level:"Intermediate"},{id:"DistanceMetrics",title:"Measures of Distance",description:"Measures of distance are mathematical functions used to quantify how similar or dissimilar two objects are based on their features. Smaller distance = higher similarity, larger distance = higher dissimilarity.",formula:"d(x,y) = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2}",details:["Important for clustering algorithms (e.g., K-means, hierarchical clustering).","Choice of distance is context-dependent (numerical, categorical or text data).","Used to quantify similarity/dissimilarity between objects."],contentSections:[{heading:"Why Measures of Distance Matter",paragraphs:["Measures of distance are mathematical functions used to quantify how similar or dissimilar two objects are based on their features. These measures are critical for clustering, classification and information retrieval because they help determine relationships among data points. The choice of distance depends on the nature of the data and the application domain.","- Used to quantify similarity/dissimilarity between objects.","- Smaller distance = higher similarity, larger distance = higher dissimilarity.","- Important for clustering algorithms (e.g., K-means, hierarchical clustering).","- Choice of distance is context-dependent (numerical, categorical or text data)."]},{heading:"Types of Distance Measures",paragraphs:["1. Euclidean Distance","Euclidean distance is considered the traditional metric for problems with geometry. It can be simply explained as the ordinary distance between two points. It is one of the most used algorithms in the cluster analysis.","Formula: $$d(x,y) = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2}$$","- Best for: Continuous numerical data (when features are normalized).","- Example: Distance between two cities on a 2D map.","2. Manhattan Distance","Manhattan Distance determines the absolute difference among the pair of the coordinates. Suppose we have two points P and Q to determine the distance between these points we simply have to calculate the perpendicular distance of the points from X-Axis and Y-Axis. In a plane with P at coordinate (x1, y1) and Q at (x2, y2). Manhattan distance between P and Q = |x1 â€“ x2| + |y1 â€“ y2|","Formula: $$d(x,y) = \\sum_{i=1}^n |x_i - y_i|$$","- Best for: High-dimensional data or when diagonal movement has no meaning.","- Example: Distance between blocks in a city (taxicab geometry).","3. Jaccard Index","The Jaccard distance is set-based distance that compares dissimilarity by looking at the ratio of unique to common elements.","Formula: $$d(A,B) = 1 - \\frac{|A \\cap B|}{|A \\cup B|}$$","- Best for: Binary or categorical data, especially sets.","- Example: Comparing similarity of shopping carts or tag sets.","4. Minkowski distance","Minkowski distance is a generalized distance measure that includes both Euclidean and Manhattan distances as special cases, controlled by a parameter p.","Formula: $$d(x,y) = \\left( \\sum_{i=1}^n |x_i - y_i|^p \\right)^{\\frac{1}{p}}$$","- Best for: Flexible distance calculations where p is tuned.","- Example: For p=1, it becomes Manhattan; for p=2, it becomes Euclidean.","5. Cosine Similarity / Cosine Distance","Measures the cosine distance of the angle between two vectors, focusing on orientation rather than magnitude. Commonly converted to distance as 1âˆ’similarity.","Formula(Similarity): $$\\text{Cosine}(x,y) = \\frac{x \\cdot y}{||x|| \\, ||y||}$$","Formula(Distance): $$d(x,y) = 1 - \\frac{x \\cdot y}{||x|| \\, ||y||}$$","- Best for: Text mining, NLP, recommendation systems.","- Example: Measuring similarity between two documents regardless of their length.","6. Hamming Distance","The number of positions where two strings (of equal length) differ. Commonly used for error detection and sequence comparison.","Formula: $$d(x,y) = \\sum_{i=1}^n [x_i \\neq y_i]$$","where $[x_i \\neq y_i] = 1$ if symbols differ, else 0.","- Best for: Binary strings, DNA sequences, error correction.","- Example: Hamming distance between â€œkarolinâ€ and â€œkathrinâ€ = 3."],code:`from scipy.spatial import distance
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
