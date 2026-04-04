import { TopicSection } from '../../src/data/types';

export const probabilityEventsSection: TopicSection = {
  id: "probability-events",
  title: "Events: The Classification of Luck",
  description: "An event is a specific result or a collection of results from the sample space that we focus on. In ML, an 'Event' might be the model predicting 'Spam' or its failure to detect a fraud case.",
  formula: "E \\subseteq S",
  details: [
    "Event Definition: A subset of outcomes from the sample space (S).",
    "Intersection (A ∩ B): When two events must both occur.",
    "Union (A ∪ B): When at least one of two events occurs."
  ],
  contentSections: [
    {
      heading: "The Taxonomy of Chance: 9 Event Types",
      paragraphs: [
        "In simple terms, an event is a particular outcome or a collection of outcomes ($E \\subseteq S$). From an ML lead perspective, we categorize events to decide how we build and evaluate models:  ",
        "1. **Elementary Event**: An event with only one outcome (e.g., getting a 2 on a die).  ",
        "2. **Compound Event**: An event with more than one outcome (e.g., getting an even number $\{2,4,6\}$).  ",
        "3. **Certain/Sure Event**: An event that is guaranteed to occur (e.g., getting a number 1-6 on a die). $P(E) = 1$.  ",
        "4. **Impossible Event**: An event that can never occur (e.g., getting a 7 on a 6-sided die). $P(E) = 0$.  ",
        "5. **Mutually Exclusive**: Events that cannot occur simultaneously (e.g., a coin being both Heads and Tails). $A \\cap B = \\emptyset$.  ",
        "6. **Independent Events**: One outcome doesn't affect the other. $P(A \\cap B) = P(A)P(B)$.  ",
        "7. **Dependent Events**: One outcome affects the other (e.g., drawing cards without replacement).  ",
        "8. **Equally Likely**: Events with the same probability (e.g., getting a 3 or a 4 on a fair die).  ",
        "9. **Exhaustive Events**: Events whose union is the entire sample space. $A \\cup B = S$."
      ]
    },
    {
      heading: "Complementary Events and Solved Examples",
      paragraphs: [
        "The **Complementary Event** of $A$ (denoted $A'$) consists of all sample points NOT in $A$.  ",
        "$$P(A') = 1 - P(A)$$  ",
        "**Ex 1: Mutually Exclusive?** In rolling two dice, are 'Sum is 7' and 'Sum is 11' mutually exclusive? **Yes**, they cannot happen on the same roll.  ",
        "**Ex 2: Independent?** Is getting Heads on the first coin toss and Tails on the second independent? **Yes**.  ",
        "**Ex 3: Red King**. What is the probability of drawing a Red King from a standard deck? Total 52, Red 26, Kings 4 (2 are red). $P = 2/52 = 1/26$.  ",
        "**Ex 4: Not a 6**. Probability of NOT rolling a 6 on a fair die? $1 - P(6) = 1 - 1/6 = 5/6$."
      ],
      code: "import numpy as np\n# Logic for Ex 3: Red King\ntotal_cards = 52\nred_cards = 26\nkings = 4\nred_kings = 2 # King of Hearts and King of Diamonds\n\nprob_red_king = red_kings / total_cards\nprint(f\"Probability of Red King: {prob_red_king:.4f} (or 1/26)\")",
      output: "Probability of Red King: 0.0385 (or 1/26)"
    }
  ],
  tags: ["Event Types", "Independence", "Mutual Exclusion", "Set Theory"],
  level: "Beginner"
};
