import { CategoryData } from "../src/data/types";

export const REINFORCEMENT_LEARNING_DATA: CategoryData = {
  id: "reinforcement-learning",
  title: "Reinforcement Learning",
  description: "Training agents to make sequences of decisions by rewarding desired behaviors and punishing undesired ones.",
  keyConcepts: [
    { title: "Agent/Env", description: "The interface between learning mechanism and world." },
    { title: "Q-Learning", description: "Learning value-based policies for action mapping." }
  ],
  sections: [
    {
      id: "fundamentals",
      title: "RL Fundamentals",
      description: "Mathematical framework of Markov Decision Processes (MDPs).",
      content: "",
      tags: ["MDP", "Policies", "Rewards"],
      color: "#3fb950"
    },
    {
      id: "value-iteration",
      title: "Value-based Logic",
      description: "Introduction to Q-Learning and temporal difference learning.",
      content: "",
      tags: ["Q-Learning", "SARSA"],
      color: "#3fb950"
    }
  ]
};
