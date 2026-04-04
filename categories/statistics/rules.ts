import { TopicSection } from '../../src/data/types';

export const probabilityRulesSection: TopicSection = {
  id: "probability-rules",
  title: "Probability Rules: The Calculus of Risk",
  description: "Probability rules are the rigid laws that govern any system of chance. These are the fundamental principles—including addition, multiplication, and conditional rules—that allow us to predict the 'unpredictable'.",
  formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
  details: [
    "Addition Rule: Quantifying the probability of either event occurring.",
    "Multiplication Rule: Calculating the chance of sequential independent events.",
    "Conditional Mapping: How knowledge of one event updates the probability of another."
  ],
  contentSections: [
    {
      heading: "The Calculus of Risk: 4 Fundamental Rules",
      paragraphs: [
        "Probability rules are basic laws that help us calculate the chances of complex events. In Machine Learning, we use these to combine and update our confidence in model predictions:  ",
        "1. **Rule 1: Multiplication Rule** (Independent Events): $P(A \\cap B) = P(A) \\times P(B)$.  ",
        "2. **Rule 2: Complementary Rule**: $P(A') = 1 - P(A)$.  ",
        "3. **Rule 3: Addition Rule** (Not Mutually Exclusive): $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.  ",
        "4. **Rule 4: Conditional Probability Rule**: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$."
      ]
    },
    {
      heading: "Theoretical Probability: Solved Examples",
      paragraphs: [
        "**Ex 1: Multiplication (With Replacement)**. Draw 2 cards from a 52-card deck with replacement. Probability of Red then Black? $P = \\frac{26}{52} \\times \\frac{26}{52} = 1/4$.  ",
        "**Ex 2: Multiplication (Without Replacement)**. Draw 2 cards from a 52-card deck without replacement. Probability of Red then Black? $P = \\frac{26}{52} \\times \\frac{26}{51} = 13/51$.  ",
        "**Ex 3: Addition Rule**. If $P(A)=0.4, P(B)=0.5, P(A \\cap B)=0.2$, then $P(A \\cup B) = 0.4 + 0.5 - 0.2 = 0.7$.  ",
        "**Ex 4: Conditional Probability**. If $P(A \\cap B)=0.3$ and $P(B)=0.6$, then $P(A|B) = 0.3 / 0.6 = 0.5$."
      ],
      code: "import numpy as np\n# Logic for Ex 2: Multiplication without replacement\ntotal = 52\nred = 26\nblack = 26\n\nprob_red1 = red / total\nprob_black2 = black / (total - 1)\n\nprint(f\"Red then Black (No Replacement): {prob_red1 * prob_black2:.4f}\")\nprint(f\"Fraction result: 13/51 ≈ {13/51:.4f}\")",
      output: "Red then Black (No Replacement): 0.2549\nFraction result: 13/51 ≈ 0.2549"
    },
    {
      heading: "Practice Problems: Test Your Understanding",
      paragraphs: [
        "**Question 1.** Given $P(A)=0.6, P(B)=0.3$, and $P(A \\cap B)=0.2$, calculate $P(A \\cup B)$.  ",
        "**Question 2.** Rolling two dice, what is the probability that the sum is exactly 7 OR exactly 11?  ",
        "**Question 3.** A bag contains 4 red and 6 blue balls. If you draw two balls WITH replacement, what is the probability of both being red?  ",
        "**Question 4.** Given $P(A \\cap B)=0.15$ and $P(B)=0.5$, calculate $P(A|B)$.  ",
        "**Question 5.** Draw one card from a standard deck. What is the probability of drawing a King OR a Diamond? (Total Kings=4, Total Diamonds=13).  ",
        "**Answers**: 1. 0.7 | 2. 2/9 | 3. 0.16 | 4. 0.3 | 5. 16/52 = 4/13"
      ]
    }
  ],
  tags: ["Addition Rule", "Multiplication Rule", "Conditional Probability", "Complement"],
  level: "Beginner"
};
