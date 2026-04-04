import { TopicSection } from '../../src/data/types';

export const jointMarginalConditionalSection: TopicSection = {
  id: "joint-marginal-conditional",
  title: "Joint, Marginal, & Conditional",
  description: "In multi-variable ML, we rarely look at one feature in isolation. We need to understand how variables interact (Joint), how one behaves on its own (Marginal), and how one changes given another (Conditional).",
  formula: "P(A \\cap B) = P(A|B)P(B)",
  details: [
    "Joint Probability: The likelihood of two events happening at the same time.",
    "Marginal Probability: The subset of a joint distribution focusing on an isolated variable.",
    "Conditional Probability: The probability of A given that B has already occurred."
  ],
  contentSections: [
    {
      heading: "Joint, Marginal, and Conditional Probabilities",
      paragraphs: [
        "In Machine Learning, we rarely look at features in isolation. We need to identify how variables interact:  ",
        "1. **Joint Probability**: The probability of two or more events occurring at the same time. Denoted as $P(A \\cap B)$.  ",
        "2. **Marginal Probability**: The probability of an event occurring, regardless of the outcomes of other variables. $P(A) = \\sum P(A \\cap B_i)$.  ",
        "3. **Conditional Probability**: The probability of an event occurring given that another event has already occurred. $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$."
      ]
    },
    {
      heading: "Case Study: The Frequency Table Logic",
      paragraphs: [
        "Consider a survey of 100 people regarding their gender and whether they like ice cream:  ",
        "| Gender | Like Ice Cream | Dislike Ice Cream | Total |",
        "| :--- | :--- | :--- | :--- |",
        "| Male | 40 | 10 | 50 |",
        "| Female | 30 | 20 | 50 |",
        "| **Total** | **70** | **30** | **100** |",
        "Using this table, we can derive the three core measures:  ",
        "- **Joint Probability** (Male and Like): $P(M \\cap L) = 40/100 = 0.4$.  ",
        "- **Marginal Probability** (Like): $P(L) = 70/100 = 0.7$.  ",
        "- **Conditional Probability** (Like given Female): $P(L|F) = 30/50 = 0.6$."
      ],
      code: "import numpy as np\n# Joint Frequency Matrix\n# Rows: Male (0), Female (1) | Cols: Like (0), Dislike (1)\ntable = np.array([[40, 10], [30, 20]])\ntotal = np.sum(table)\n\n# 1. Joint P(Male and Like)\njoint_m_l = table[0, 0] / total\n# 2. Marginal P(Like)\nmarginal_l = np.sum(table[:, 0]) / total\n# 3. Conditional P(Like | Female)\ncond_l_f = table[1, 0] / np.sum(table[1, :])\n\nprint(f\"Joint P(M and L): {joint_m_l}\")\nprint(f\"Marginal P(L): {marginal_l}\")\nprint(f\"Conditional P(L|F): {cond_l_f}\")",
      output: "Joint P(M and L): 0.4\nMarginal P(L): 0.7\nConditional P(L|F): 0.6"
    }
  ],
  tags: ["Joint Probability", "Marginalization", "Conditional Probability", "Sum Rule", "Bayesian Networks"],
  level: "Intermediate"
};
