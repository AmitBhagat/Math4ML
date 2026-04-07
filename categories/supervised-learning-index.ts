import { CategoryData } from "../src/data/types";

export const SUPERVISED_LEARNING_DATA: CategoryData = {
  id: "supervised-learning",
  title: "Supervised Learning",
  description: "Learning from labeled datasets to map inputs to discrete or continuous outputs. The foundation of predictive modeling.",
  keyConcepts: [
    { title: "Regression", description: "Predicting continuous values." },
    { title: "Classification", description: "Mapping inputs to discrete categories." }
  ],
  sections: [
    {
      id: "regression",
      title: "Regression Analysis",
      description: "Predicting continuous values using linear and non-linear relationships.",
      content: "",
      tags: ["Linear Regression", "MSE", "OLS"],
      color: "#58a6ff"
    },
    {
      id: "classification",
      title: "Classification",
      description: "Assigning discrete labels to input data based on learned features.",
      content: "",
      tags: ["Logistics", "Decision Trees", "SVM"],
      color: "#58a6ff"
    }
  ]
};
