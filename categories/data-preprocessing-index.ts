import { CategoryData } from "../src/data/types";

export const DATA_PREPROCESSING_DATA: CategoryData = {
  id: "data-preprocessing",
  title: "Data Preprocessing",
  description: "Meticulous cleaning and transformation techniques (Scaling, Encoding, Imputation) required for high-quality model training.",
  keyConcepts: [
    { title: "Scaling", description: "Normalizing numerical feature ranges." },
    { title: "Cleaning", description: "Handling missing data and outliers." }
  ],
  sections: [
    {
      id: "scaling",
      title: "Feature Scaling",
      description: "Standardization vs. Normalization for gradient stability.",
      content: "",
      tags: ["StandardScaler", "MinMax", "Robust"],
      color: "#ff7b72"
    },
    {
      id: "imputation",
      title: "Imputation & Engineering",
      description: "Filling gaps and transforming categorical data into vectors.",
      content: "",
      tags: ["Missing Values", "One-Hot", "Quantiles"],
      color: "#ff7b72"
    }
  ]
};
