import { TopicSection } from '../../src/data/types';

export const probabilityBasicsSection: TopicSection = {
  id: "probability-basics",
  title: "Probability Basics: Foundations",
  description: "Probability is the mathematical framework for quantifying uncertainty. In ML, every prediction is a probability—from the chance an image is a 'Cat' to the likelihood a user will click 'Buy'.",
  formula: "P(E) = \\frac{\\text{Successful Outcomes}}{\\text{Total Outcomes}}",
  details: [
    "Uncertainty Logic: Measuring how likely an event is to happen on a scale from 0 to 1.",
    "Sample Space (S): The set of all possible outcomes for any random experiment.",
    "Axioms: The rigid laws that ensure probabilities are consistent and mathematically sound."
  ],
  contentSections: [
    {
      heading: "Uncertainty and Sample Spaces",
      paragraphs: [
        "Probability is the branch of mathematics that deals with the chance of an event occurring. In Machine Learning, every prediction—from a 'Cat' label to a 'Click' forecast—lives in this framework.  ",
        "A **Random Experiment** is any process with an uncertain outcome (e.g., tossing a coin). The **Sample Space ($S$)** is the set of all possible results:  ",
        "- **Tossing 1 Coin**: $S = \\{H, T\\}$.  ",
        "- **Tossing 3 Coins**: Total outcomes $= 2^3 = 8$. $S = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}$.  ",
        "- **Rolling 2 Dice**: Total outcomes $= 6^2 = 36$.  ",
        "- **Roulette Wheel**: Total outcomes $= 38$ (numbers 1-36, 0, 00).",
        "**Types of Sample Spaces**:  ",
        "1. **Finite**: Outcomes can be counted (e.g., $\{H, T\}$).  ",
        "2. **Infinite**: Outcomes are countable but unending (e.g., $\{1, 2, 3, \\dots\}$).  ",
        "3. **Continuous**: Outcomes are uncountably many in an interval (e.g., $\{x \\in \\mathbb{R} : 0 \\leq x \\leq 1\}$)."
      ]
    },
    {
      heading: "Theoretical Probability: Solved Examples",
      paragraphs: [
        "The probability of an event $E$ is $P(E) = n(E) / n(S)$, assuming all outcomes are equally likely.  ",
        "**Ex 1: PIN Codes**. How many 4-digit PINs are possible if repetition is allowed? $n(S) = 10 \\times 10 \\times 10 \\times 10 = 10,000$.  ",
        "**Ex 2: PIN Codes (No Repetition)**. $n(S) = 10 \\times 9 \\times 8 \\times 7 = 5,040$.  ",
        "**Ex 3: Deck of Cards**. Probability of picking a card that is NOT a face card? Total 52, Face 12. $P = 40/52 = 10/13$.  ",
        "**Ex 4: Marbles in a Jar**. A jar contains 3 red and 2 blue marbles. Probability of picking red? $P = 3/5$.  ",
        "**Ex 5: Rolling 2 Dice**. Probability of the sum being exactly 7? Successful outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). $P = 6/36 = 1/6$."
      ],
      code: "import numpy as np\n# Logic for Ex 5: Sum of 7 with 2 dice\ndice1 = np.arange(1, 7)\ndice2 = np.arange(1, 7)\nsums = np.add.outer(dice1, dice2)\nsuccessful = np.sum(sums == 7)\ntotal = sums.size\n\nprint(f\"Sum of 7 Outcomes: {successful}\")\nprint(f\"Total Outcomes: {total}\")\nprint(f\"Probability: {successful/total:.4f}\")",
      output: "Sum of 7 Outcomes: 6\nTotal Outcomes: 36\nProbability: 0.1667"
    },
    {
      heading: "Practice Problems: Test Your Understanding",
      paragraphs: [
        "**Question 1.** A bag has 5 red, 3 blue, and 2 green balls. Probability of picking a red or blue ball?  ",
        "**Question 2.** Rolling two dice, what is the probability that the sum is exactly 10?  ",
        "**Question 3.** Tossing a coin 4 times, what is the probability of getting exactly 2 heads?  ",
        "**Question 4.** From a standard deck of cards, what is the probability of drawing a King or a Queen?  ",
        "**Question 5.** A spinner has numbers 1 to 8. What is the probability of the arrow landing on an even number?  ",
        "**Answers**: 1. 0.8 | 2. 1/12 | 3. 3/8 | 4. 2/13 | 5. 1/2"
      ]
    }
  ],
  tags: ["Sample Space", "Uncertainty", "Softmax", "Axioms", "Probability Distributions"],
  level: "Beginner"
};
