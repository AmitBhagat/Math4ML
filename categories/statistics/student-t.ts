import { TopicSection } from '../../src/data/types';

export const studentsTDistributionSection: TopicSection = {
  id: "students-t-distribution",
  title: "Student's t-Distribution: Small Samples",
  description: "When the population variance is unknown and your sample size is small (n < 30), the Normal distribution isn't accurate enough. The Student's t-distribution fills this gap with 'fatter tails' to handle more uncertainty.",
  formula: "t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}",
  details: [
    "Degrees of Freedom (df): The key parameter (n-1) that describes the 'shape' of the t-distribution.",
    "Fatter Tails: This distribution accounts for higher uncertainty in small samples.",
    "Small-Sample Inference: Essential for hardware testing or clinical trials where data is expensive."
  ],
  contentSections: [
    {
      heading: "Student's t-Distribution and Confidence Intervals",
      paragraphs: [
        "The **Student's t-Distribution** is used for estimating population parameters when the sample size is small ($n < 30$) or the population standard deviation $\\sigma$ is unknown.  ",
        "**Properties**:  ",
        "- **Degrees of Freedom (df)**: $n - 1$.  ",
        "- **Shape**: Symmetric and bell-shaped, but with **fatter tails** than the normal distribution to account for greater uncertainty.  ",
        "**Confidence Interval (CI)** is a range of values likely to contain the population parameter:  ",
        "$$CI = \\bar{x} \\pm t^* \\left( \\frac{s}{\\sqrt{n}} \\right)$$  ",
        "Where $t^*$ is the critical value for a given confidence level and $df$."
      ]
    },
    {
      heading: "Worked Example: Testing Student Scores",
      paragraphs: [
        "**Problem**: A sample of 10 students has a mean score of $\\bar{x} = 85$ with a sample standard deviation $s = 5$. Find the **95% Confidence Interval** for the true population mean.  ",
        "**Step 1: Degrees of Freedom.** $df = 10 - 1 = 9$.  ",
        "**Step 2: Critical Value.** For 95% confidence and $df=9$, $t^* = 2.262$ (from t-table).  ",
        "**Step 3: Standard Error (SE).** $SE = s / \\sqrt{n} = 5 / \\sqrt{10} = 1.58$.  ",
        "**Step 4: Margin of Error (ME).** $ME = t^* \\times SE = 2.262 \\times 1.58 = 3.57$.  ",
        "**Step 5: Confidence Interval.** $CI = 85 \\pm 3.57 = [81.43, 88.57]$.  ",
        "**Interpretation**: We are 95% confident that the true population mean score is between 81.43 and 88.57."
      ],
      code: "import numpy as np\nfrom scipy import stats\n\n# Data from example\nn = 10\nx_bar = 85\ns = 5\nconfidence = 0.95\n\n# Calculation\ndf = n - 1\nt_star = stats.t.ppf((1 + confidence) / 2, df)\nse = s / np.sqrt(n)\nme = t_star * se\nci = (x_bar - me, x_bar + me)\n\nprint(f\"Critical t*: {t_star:.3f}\")\nprint(f\"Margin of Error: {me:.2f}\")\nprint(f\"95% CI: [{ci[0]:.2f}, {ci[1]:.2f}]\")",
      output: "Critical t*: 2.262\nMargin of Error: 3.58\n95% CI: [81.42, 88.58]"
    }
  ],
  tags: ["T-Test", "Small Sample", "Inference", "Hypothesis", "Fat Tails"],
  level: "Intermediate"
};
