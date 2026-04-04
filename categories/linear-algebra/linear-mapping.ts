import { TopicSection } from '../../src/data/types';

export const linearMappingSection: TopicSection = {
  id: "linear-mapping",
  title: "Linear Mapping: Projecting Reality",
  description: "A linear map (or transformation) is a mathematical rule for moving vectors from one space to another. It's the alchemy that turns raw pixels into semantic labels.",
  formula: "T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v}) \\text{ and } T(c\\mathbf{u}) = cT(\\mathbf{u})",
  details: [
    "Preprocessing Engine: Transforming input data into formats suitable for training.",
    "Geometric Operation: Applying rotation, scaling, or projection to feature sets.",
    "Mapping Spaces (V → W): Transferring information from one dimension to another."
  ],
  contentSections: [
    {
      heading: "The Mathematical Core and Essential Mappings",
      paragraphs: [
        "In simple terms, a linear mapping transforms input values into output values using a linear function $y = \mathbf{W}\mathbf{x} + \mathbf{b}$. To be formally linear, a function $f: V \to W$ must fulfill two conditions:  ",
        "1. **Additive Property**: $f(u + v) = f(u) + f(v)$  ",
        "2. **Homogeneity Property**: $f(c \cdot u) = c \cdot f(u)$  ",
        "Linear transformations also include two universal cases from a vector space into itself (linear operators):  ",
        "- **Zero-Transformation**: $T(v) = 0$ for all $v \in V$.  ",
        "- **Identity-Transformation**: $T(v) = v$ for all $v \in V$.  ",
        "Every linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ can be represented as a matrix multiplication $T(v) = \mathbf{A} \mathbf{v}$."
      ]
    },
    {
      heading: "Universal Properties and Rank-Nullity",
      paragraphs: [
        "Linear transformations carry guaranteed algebraic properties that preserve the internal structure of the space:  ",
        "- $T(0) = 0$  ",
        "- $T(-v) = -T(v)$  ",
        "- $T(u - v) = T(u) - T(v)$  ",
        "Inside every transformation are two critical spaces: the **Kernel (Null Space)**, which contains all vectors $v$ such that $T(v) = 0$; and the **Range Space**, which contains all possible outputs. The size of these spaces is governed by the **Rank-Nullity Theorem**:  ",
        "$$\text{null}(T) + \text{rank}(T) = \text{dim}(V) = n$$",
        "This theorem provides the balance for how information is lost or preserved when shifting between dimensions."
      ]
    },
    {
      heading: "Execution: Verification and Geometric Operators",
      paragraphs: [
        "Consider a linear transformation from $\mathbb{R}^2 \to \mathbb{R}^3$ defined as:  ",
        "$$L\begin{pmatrix} v_1 \\\\ v_2 \end{pmatrix} = \begin{pmatrix} v_2 \\\\ v_1 - v_2 \\\\ v_1 + v_2 \end{pmatrix}$$  ",
        "**Verification Step 1: Homogeneity.**  ",
        "$L(c \vec{v}) = \begin{bmatrix} c v_2 \\\\ c v_1 - c v_2 \\\\ c v_1 + c v_2 \end{bmatrix} = c \begin{bmatrix} v_2 \\\\ v_1 - v_2 \\\\ v_1 + v_2 \end{bmatrix} = c L(\vec{v})$  ",
        "**Verification Step 2: Additivity.**  ",
        "$L(\vec{v} + \vec{w}) = \begin{bmatrix} (v_2 + w_2) \\\\ (v_1 + w_1) - (v_2 + w_2) \\\\ (v_1 + w_1) + (v_2 + w_2) \end{bmatrix} = L(\vec{v}) + L(\vec{w})$  ",
        "Specialized operators like **Rotation** (by angle $\\theta$) and **Projection** (onto a plane) use specific matrices:  ",
        "$$\\text{Rotation Matrix } A = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}; \\quad \\text{Projection Matrix } T = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$$"
      ],
      code: "import numpy as np\n# Define the linear transformation R2 to R3\ndef L(v):\n    v1, v2 = v\n    return np.array([v2, v1 - v2, v1 + v2])\n\nu = np.array([3, 1])\n# Result of mapping\ny = L(u)\nprint(f\"Resulting Mapping: {y}\")\n\n# Verification check: Is L(4*u) == 4*L(u)?\nprint(f\"Is L(4*u) == 4*L(u)? {np.allclose(L(4*u), 4*L(u))}\")",
      output: "Resulting Mapping: [1 2 4]\nIs L(4*u) == 4*L(u)? True"
    }
  ],
  tags: ["Projector", "Kernel", "Null Space", "Rank-Nullity", "Rotation"],
  level: "Intermediate"
};
