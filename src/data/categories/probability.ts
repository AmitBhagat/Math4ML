import { CategoryData } from '../types';

// =============================================================================
// PROBABILITY
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
      title: "Sample Space",
      description: "The sample space (S) is the set of all possible outcomes of a random experiment. It is the foundation for analyzing all probabilities.",
      formula: "P(A) = |A| / |S|",
      details: [
        "Finite: Sample space with countable outcomes (e.g., coin toss).",
        "Infinite: Sample space with uncountable outcomes (e.g., points on a line).",
        "Continuous: Outcomes represent values in a continuous range."
      ],
      contentSections: [
        {
          heading: "What is Sample Space?",
          paragraphs: [
            "In probability theory, a sample space is defined as the set of all possible outcomes or results of a random experiment. It is usually denoted by S.",
            "Example 1: Tossing a coin. S = {Heads, Tails} (n = 2).",
            "Example 2: Rolling a fair six-sided die. S = {1, 2, 3, 4, 5, 6} (n = 6).",
            "Example 3: Tossing two coins. S = {HH, HT, TH, TT} (n = 4)."
          ],
          code: "# Sample space n(S) calculation\ncoins = 2\nS_size = 2**coins\nprint(f'Sample space size for {coins} coins:', S_size)\n\ndie_faces = 6\nS_size_die = die_faces\nprint(f'Sample space size for 1 die:', S_size_die)",
          output: "Sample space size for 2 coins: 4\nSample space size for 1 die: 6"
        },
        {
          heading: "Discrete vs Continuous Sample Space",
          paragraphs: [
            "Discrete Sample Space: Contains a finite or countably infinite number of outcomes. Counting the number of car accidents in a day is discrete.",
            "Continuous Sample Space: Contains an uncountable infinite number of outcomes. The time it takes for a bulb to fuse is continuous (S = {t | t > 0})."
          ]
        }
      ],
      tags: ["Outcomes", "Experiment", "Discrete", "Continuous"],
      level: "Beginner"
    },
    {
      id: "TypesOfEvents",
      title: "Types of Events",
      description: "An event is a subset of the sample space. Understanding different event types is crucial for calculating complex probabilities.",
      formula: "E âŠ† S",
      details: [
        "Simple Event: Exactly one outcome.",
        "Compound Event: More than one outcome.",
        "Mutually Exclusive: Events that cannot happen together.",
        "Exhaustive: Events that together cover the whole sample space."
      ],
      contentSections: [
        {
          heading: "Defining Events",
          paragraphs: [
            "An event occurs if the outcome of the experiment is in that event's set.",
            "Simple Event: An event containing only a single outcome. Example: Rolling a 5 on a die (E = {5}).",
            "Compound Event: An event containing multiple outcomes. Example: Rolling an even number (E = {2, 4, 6})."
          ]
        },
        {
          heading: "Mutually Exclusive & Independent Events",
          paragraphs: [
            "Mutually Exclusive Events: Events A and B are mutually exclusive if they cannot occur at the same time (A âˆ© B = âˆ…). Example: Rolling a 2 and rolling a 5 in a single toss.",
            "Independent Events: Events A and B are independent if the occurrence of A does not change the probability of B occurring. P(A âˆ© B) = P(A) Ã— P(B).",
            "Dependent Events: The occurrence of one event depends on another. Example: Drawing cards without replacement."
          ],
          code: "P_A = 0.5\nP_B = 0.5\n# If independent:\nP_A_and_B = P_A * P_B\nprint('P(A AND B) for independent events:', P_A_and_B)",
          output: "P(A AND B) for independent events: 0.25"
        }
      ],
      tags: ["Events", "Simple", "Compound", "Independent", "Mutually Exclusive"],
      level: "Beginner"
    },
    {
      id: "ProbabilityRules",
      title: "Probability Rules",
      description: "Fundamental laws governing probability calculations. Essential for model evaluation and predictive analytics.",
      formula: "P(AâˆªB) = P(A) + P(B) - P(Aâˆ©B)",
      details: [
        "Addition Rule: Handles unions of events.",
        "Multiplication Rule: Handles intersections of events.",
        "Complement Rule: P(A') = 1 - P(A)."
      ],
      contentSections: [
        {
          heading: "The Addition Rule",
          paragraphs: [
            "For any two events A and B: P(A âˆª B) = P(A) + P(B) - P(A âˆ© B).",
            "If A and B are mutually exclusive: P(A âˆª B) = P(A) + P(B)."
          ],
          code: "# Addition Rule Example\nP_A = 0.3   # P(Event A)\nP_B = 0.4   # P(Event B)\nP_A_cap_B = 0.1 # P(A and B)\n\nP_A_cup_B = P_A + P_B - P_A_cap_B\nprint('P(A or B):', round(P_A_cup_B, 2))",
          output: "P(A or B): 0.6"
        },
        {
          heading: "The Multiplication Rule",
          paragraphs: [
            "The Multiplication Rule relates joint probability to conditional probability:",
            "P(A âˆ© B) = P(A) Ã— P(B | A).",
            "For independent events: P(A âˆ© B) = P(A) Ã— P(B)."
          ]
        },
        {
          heading: "The Complement Rule",
          paragraphs: [
            "The probability of an event NOT occurring is 1 minus the probability of it occurring: P(A') = 1 - P(A).",
            "This is often used to simplify calculations (e.g., 'at least one' events)."
          ]
        }
      ],
      tags: ["Addition", "Multiplication", "Complement", "Union", "Intersection"],
      level: "Beginner"
    },
    {
      id: "ConditionalProbability",
      title: "Conditional Probability",
      description: "Measure of the probability of an event occurring, given that another event has already occurred.",
      formula: "P(A|B) = P(Aâˆ©B) / P(B)",
      details: [
        "P(A|B) read as 'Probability of A given B'.",
        "It updates the sample space based on known information.",
        "If A and B are independent, P(A|B) = P(A)."
      ],
      contentSections: [
        {
          heading: "Calculating Conditional Probability",
          paragraphs: [
            "P(A|B) = P(A âˆ© B) / P(B), where P(B) > 0.",
            "Example: In a deck of cards, let A be 'drawing a King' and B be 'drawing a face card'. If a face card is already drawn, the probability it's a King is 4/12 = 1/3."
          ],
          code: "P_A_and_B = 0.1\nP_B = 0.4\n\nP_A_given_B = P_A_and_B / P_B\nprint('P(A|B):', P_A_given_B)",
          output: "P(A|B): 0.25"
        },
        {
          heading: "Properties of Conditional Probability",
          paragraphs: [
            "1. P(S|A) = 1 (where S is the sample space).",
            "2. P((A âˆª B)|X) = P(A|X) + P(B|X) - P((A âˆ© B)|X).",
            "3. Symmetry is NOT guaranteed: P(A|B) â‰  P(B|A) in general."
          ]
        }
      ],
      tags: ["Conditional", "Dependency", "Bayesian", "Prior"],
      level: "Intermediate"
    },
    {
      id: "BayesTheorem",
      title: "Bayes' Theorem",
      description: "Reverses conditional probability, allowing us to update prior beliefs with new evidence. Key to Bayesian inference and Naive Bayes classifiers.",
      formula: "P(A|B) = P(B|A) Â· P(A) / P(B)",
      details: [
        "P(A|B): Posterior â€” Belief after seeing data.",
        "P(B|A): Likelihood â€” Probability of data given belief.",
        "P(A): Prior â€” Initial belief.",
        "P(B): Evidence â€” Total probability of data."
      ],
      contentSections: [
        {
          heading: "Bayes' Theorem Formula",
          paragraphs: [
            "Bayes' Theorem provides a rigorous way to update probabilities as new evidence becomes available.",
            "For multiple hypotheses Hâ‚, Hâ‚‚, ...: P(Háµ¢|E) = [P(E|Háµ¢) Ã— P(Háµ¢)] / Î£[P(E|Hâ±¼) Ã— P(Hâ±¼)]."
          ],
          code: "# Bayes' Theorem Example: Medical Diagnosis\nP_D = 0.01  # Disease probability\nP_pos_given_D = 0.99  # True positive rate\nP_pos_given_notD = 0.05 # False positive rate\n\n# Total probability of positive test P(pos)\nP_notD = 1 - P_D\nP_pos = (P_pos_given_D * P_D) + (P_pos_given_notD * P_notD)\n\n# Posterior P(D|pos)\nP_D_given_pos = (P_pos_given_D * P_D) / P_pos\nprint('P(Disease|Positive Test):', round(P_D_given_pos, 4))",
          output: "P(Disease|Positive Test): 0.1664"
        }
      ],
      tags: ["Bayesian", "Prior", "Posterior", "Inference", "Naive Bayes"],
      level: "Advanced"
    },
    {
      id: "Distributions",
      title: "Probability Distributions",
      description: "Mathematical functions that provide the probabilities of occurrence of different possible outcomes in an experiment.",
      formula: "P(X = x) for Discrete, âˆ«f(x)dx for Continuous",
      details: [
        "Discrete: Bernoulli, Binomial, Poisson.",
        "Continuous: Normal (Gaussian), Uniform, Exponential."
      ],
      contentSections: [
        {
          heading: "Common Discrete Distributions",
          paragraphs: [
            "Bernoulli Distribution: Single trial with 2 outcomes (p and 1-p).",
            "Binomial Distribution: Count of successes in n Bernoulli trials.",
            "Poisson Distribution: Count of events over fixed time/space interval."
          ],
          code: "from scipy.stats import binom, poisson\n\n# Binomial P(X=3) for n=10, p=0.5\nprint('Binomial PMF:', round(binom.pmf(3, 10, 0.5), 4))\n\n# Poisson P(X=4) for lambda=3.2\nprint('Poisson PMF:', round(poisson.pmf(4, 3.2), 4))",
          output: "Binomial PMF: 0.1172\nPoisson PMF: 0.1781"
        },
        {
          heading: "Common Continuous Distributions",
          paragraphs: [
            "Normal (Gaussian) Distribution: Bell-shaped curve. Characterized by mean (Î¼) and variance (ÏƒÂ²). Foundation of the Central Limit Theorem.",
            "Exponential Distribution: Time between independent events (Poisson process)."
          ],
          code: "from scipy.stats import norm\nimport numpy as np\n\n# Normal distribution stats\nmu, sigma = 0, 1\nprint('P(X < 1.96):', round(norm.cdf(1.96, mu, sigma), 4))",
          output: "P(X < 1.96): 0.975"
        }
      ],
      tags: ["Normal", "Binomial", "Poisson", "Gaussian", "PMF", "PDF"],
      level: "Intermediate"
    }
  ]
};
