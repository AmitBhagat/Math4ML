import { CategoryData } from "../src/data/types";

export const UNSUPERVISED_LEARNING_DATA: CategoryData = {
  id: "unsupervised-learning",
  title: "Unsupervised Learning",
  description: "Extracting patterns and structures from unlabeled data. Essential for discovery and dimensionality reduction.",
  keyConcepts: [
    { title: "Clustering", description: "Grouping similar data points." },
    { title: "D-Reduction", description: "Reducing features while preserving variance." }
  ],
  sections: [
    {
      id: "clustering",
      title: "Clustering Algorithms",
      description: "Grouping data points based on proximity or density in feature space.",
      content: "",
      tags: ["K-Means", "DBSCAN", "Hierarchical"],
      color: "#bc8cff"
    },
    {
      id: "dimensionality-reduction",
      title: "Dimensionality Reduction",
      description: "Condensing high-dimensional data into lower-dimensional representations.",
      content: "",
      tags: ["PCA", "t-SNE", "UMAP"],
      color: "#bc8cff"
    }
  ]
};
