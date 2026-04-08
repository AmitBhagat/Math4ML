import { CategoryData } from "../src/data/types";
import { featureScalingSection } from "./data-preprocessing/feature-scaling";
import { categoricalEncodingSection } from "./data-preprocessing/categorical-encoding";
import { missingDataSection } from "./data-preprocessing/missing-data";

export const DATA_PREPROCESSING_DATA: CategoryData = {
  id: "data-preprocessing",
  title: "Data Preprocessing",
  description: "Meticulous cleaning and transformation techniques (Scaling, Encoding, Imputation) required for high-quality model training.",
  keyConcepts: [
    { title: "Scaling", description: "Normalizing numerical feature ranges." },
    { title: "Encoding", description: "Translating words to mathematical vectors." },
    { title: "Imputation", description: "Handling missing data gaps." }
  ],
  sections: [
    featureScalingSection,
    categoricalEncodingSection,
    missingDataSection
  ]
};
