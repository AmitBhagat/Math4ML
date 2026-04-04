import { CategoryData } from '../types';

// =============================================================================
// STATISTICS & PROBABILITY (Merged for Data Science Curriculum)
// =============================================================================
export const STATISTICS_DATA: CategoryData = {
  id: "statistics-probability",
  title: "Statistics & Probability",
  description: "The mathematical science of assessing uncertainty and drawing meaningful inferences from data distributions. It acts as the definitive backbone for predictive modeling and rigorous hypothesis validation.",
  keyConcepts: [
    { title: "Sample Spaces", description: "The set of all possible outcomes of an experiment." },
    { title: "Probability Rules", description: "Addition, Multiplication, and Complement rules." },
    { title: "Conditional Probability", description: "Shrinking the sample space based on prior knowledge." },
    { title: "Bayes Theorem", description: "Updating beliefs ($P(A|B)$) based on new evidence." },
    { title: "Discrete Distributions", description: "Bernoulli, Binomial, and Poisson variations." },
    { title: "Continuous Distributions", description: "Normal, Uniform, and Exponential models." }
  ],
  sections: [
    {
      id: "SampleSpaces",
      title: "Sample Spaces",
      description: "In Probability Theory, the sample space is the set of all possible outcomes of a random experiment.",
      formula: "S = \\{O_1, O_2, \\dots, O_n\\}",
      details: [
        "Experiment: Any process that gives a result.",
        "Outcome: A single possible result.",
        "Event: A subset of the sample space."
      ],
      contentSections: [
        {
          heading: "Finding Sample Space",
          paragraphs: [
            "To find the sample space in probability, follow these fundamental steps:",
            "1. Identify all possible outcomes of the experiment.",
            "2. List outcomes in a set, ensuring each one is unique.",
            "Combining sample spaces when multiple events occur helps in calculating complex probabilities across multidimensional manifolds."
          ]
        },
        {
          heading: "Types of Sample Spaces",
          paragraphs: [
            `**Finite:** The number of outcomes is countable and limited.
Example: Rolling a die. $S = \\{1, 2, 3, 4, 5, 6\\}$.`,
            `**Infinite:** The outcomes go on forever.
Example: Number of coin tosses until the first head. $S = \\{1, 2, 3, 4, \\dots\\}$.`,
            `**Continuous:** The outcomes can take any real value within a range.
Example: A number between 0 and 1. $S = \\{x \\in \\mathbb{R} \\mid 0 \\le x \\le 1\\}$.`
          ]
        }
      ],
      tags: ["Probability", "Outcome", "Die", "Coin"],
      level: "Beginner"
    },
    {
      id: "ProbabilityRules",
      title: "Probability Rules",
      description: "Fundamental laws for combining probabilities.",
      formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
      details: ["Addition Rule: A or B.", "Multiplication Rule: A and B.", "Complement Rule: Not A."],
      contentSections: [
        {
          heading: "Core Probability Rules",
          paragraphs: [
            `**Addition Rule:** Deals with the probability of the union of two events ($A \\cup B$).
**Formula:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
**Note:** We subtract the intersection to avoid double-counting the overlap.`,
            `**Multiplication Rule:** Applies to the intersection of two events ($A \\cap B$).
**For Independent Events:** $P(A \\cap B) = P(A) \\times P(B)$.
**Example:** Rolling an even number AND a number less than 4.`,
            `**Complement Rule:** The probability of an event NOT occurring.
**Formula:** $P(A') = 1 - P(A)$.
**Example:** Not drawing a heart from a deck. $1 - 13/52 = 3/4$.`
          ]
        },
        {
          heading: "Solved Questions",
          paragraphs: [
            `**Q1 (Two coins):** What is the probability of exactly one head?
**Solution:** $1/2$.
**Logic:** $1 - P(HH) - P(TT) = 1 - 1/4 - 1/4 = 1/2$.`,
            `**Q2 (No replacement):** 5 red, 3 blue balls. Probability of 1 red then 1 blue?
**Solution:** $15/56$.
**Logic:** $P(\\text{red}) \\times P(\\text{blue after red}) = 5/8 \\times 3/7 = 15/56$.`,
            `**Q3 (Die):** Probability of a number divisible by 2 OR 3?
**Solution:** $5/6$.
**Logic:** $P(/2) + P(/3) - P(/6) = 1/2 + 1/3 - 1/6 = 5/6$.`,
            `**Q4 (Two dice):** Probability of a sum > 9?
**Solution:** $1/6$.
**Logic:** Positive outcomes are (4,6), (5,5), (5,6), (6,4), (6,5), (6,6). Total = $6/36 = 1/6$.`
          ]
        }
      ],
      tags: ["Addition", "Multiplication", "Complement"],
      level: "Beginner"
    },
    {
      id: "ConditionalProbability",
      title: "Conditional Probability",
      description: "Focus on outcomes given prior knowledge.",
      formula: "P(A \\mid B) = P(A \\cap B) / P(B)",
      details: ["Shrinks the sample space.", "Fundamental to Naive Bayes.", "Non-commutative."],
      contentSections: [
        {
          heading: "Logic of Conditional Probability",
          paragraphs: [
            "Conditional probability $P(A \\mid B)$ is the likelihood of A given B has happened.",
            "**The Trick:** You are shrinking the sample space to only the world where B is true. The denominator becomes $P(B)$ instead of the full $S$."
          ]
        },
        {
          heading: "Comparison Table",
          paragraphs: [
            `**Conditional Probability:** $P(A \\mid B)$ - Probability of A given B.
**Joint Probability:** $P(A \\cap B)$ - Probability of A and B both.
**Marginal Probability:** $P(A)$ - Probability of A alone.`
          ]
        },
        {
          heading: "Solved Examples",
          paragraphs: [
            `**Example (Rain/Umbrella):** Rain ($R$) = 30%, Umbrella ($U$) = 50%. $P(U|R)$ = 80%. What is $P(R|U)$?
**Logic:** $P(R \\cap U) = P(R) \\times P(U|R) = 0.3 \\times 0.8 = 0.24$.
**Result:** $P(R|U) = 0.24 / 0.50 = 0.48$ (48%).`
          ]
        }
      ],
      tags: ["Conditional", "Dependency"],
      level: "Intermediate"
    },
    {
      id: "BayesTheorem",
      title: "Bayes Theorem",
      description: "Updating beliefs based on evidence.",
      formula: "P(A \\mid B) = [P(B \\mid A) P(A)] / P(B)",
      details: ["Prior (Hunch) + Likelihood (Data) = Posterior (Truth).", "Acts as a normalization system."],
      contentSections: [
        {
          heading: "The Bayesian Filter",
          paragraphs: [
            `**Prior:** Initial belief before evidence ($P(A)$).
**Likelihood:** Probability of seeing evidence assuming hypothesis is true ($P(B|A)$).
**Posterior:** Updated belief after evidence ($P(A|B)$).
**Evidence:** The total probability of the observation ($P(B)$).`
          ]
        },
        {
          heading: "Naive Bayes in ML",
          paragraphs: [
            "Naive Bayes assumes every feature is independent. Even though words in a sentence aren't independent, the 'Naive' assumption works surprisingly well for Spam Filters.",
            "**Bayesian Optimization:** Often used for hyperparameter tuning in deep learning."
          ]
        }
      ],
      tags: ["Bayes", "Posterior", "Prior", "Optimization"],
      level: "Advanced"
    },
    {
      id: "ProbabilityDistributions",
      title: "Probability Distributions",
      description: "The taxonomy of data spreads.",
      formula: "F_X(x) = P(X \\le x)",
      details: ["PMF for Discrete.", "PDF for Continuous.", "CDF for Accumulation."],
      contentSections: [
        {
          heading: "The DNA (PMF, PDF, CDF)",
          paragraphs: [
            `**PMF:** Probability of exactly $x$ (Discrete). $P(X=x)$.
**PDF:** Probability over a range (Continuous). The area under the curve.
**CDF:** Cumulative probability up to $x$. $F_X(x) = \\int_{-\\infty}^x f(t)dt$.`
          ]
        },
        {
          heading: "The Distribution Taxonomy",
          paragraphs: [
            `**Bernoulli:** Single trial (Success/Failure).
**Binomial:** $k$ successes in $n$ trials.
**Poisson:** Frequency of events over time.
**Normal:** The symmetric Bell Curve.
**Log-Normal:** Multiplicative growth (Stock prices).
**Uniform:** Equal probability for all outcomes.`
          ]
        }
      ],
      tags: ["Normal", "Poisson", "Binomial", "Log-Normal"],
      level: "Intermediate"
    }
  ]
};
