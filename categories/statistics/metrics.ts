import { TopicSection } from '../../src/data/types';

export const metricsSection: TopicSection = {
  id: "metrics",
  title: "Theoretical Foundations and Mathematical Frameworks for Evaluation Metrics",
  description: "A rigorous investigation into classification and regression evaluation, covering probabilistic underpinnings, formal derivations of L-norms, and information-theoretic divergence.",
  formula: "F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}",
  details: [
    "Taxonomy of Classification: Confusion Matrix Error Typology",
    "Accuracy Paradox in Imbalanced Topology",
    "Precision (Exactness) vs Recall (Completeness) Trade-offs",
    "F1-Score: Harmonic Mean Derivation and Justification",
    "ROC-AUC: Discriminative Power and Probabilistic Meaning",
    "Equivalence of AUC to Wilcoxon-Mann-Whitney U-Statistic",
    "Regression Metrics: MSE (Mean-Minimizer) vs MAE (Median-Minimizer)",
    "Information Theory: Shannon Entropy and KL Divergence",
    "Cross-Entropy: MLE Derivation and Logistic Loss",
    "Computational Dynamics: Gradient Behavior of Loss Functions"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Evaluation Roadmap</div>
      <a href="#taxonomy">I. Taxonomy of Classification Performance</a>
      <a href="#paradox">II. Accuracy and the Imbalance Paradox</a>
      <a href="#precision-recall">III. Precision and Recall Dynamics</a>
      <a href="#f1-score">IV. The F1-Score: Harmonic Justification</a>
      <a href="#roc-auc">V. Discriminative Power and ROC-AUC</a>
      <a href="#regression">VI. Regression Metrics: Statistical Properties</a>
      <a href="#info-theory">VII. Information Theory & Cross-Entropy</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="taxonomy" class="premium-h2">I. The Taxonomy of Classification Performance</h2>
    <p>Classification evaluation transcends simple binary comparisons. The nature of an error (False Positive vs. False Negative) often dictates the choice of metric. Every metric is built upon the foundational <strong>Confusion Matrix</strong>.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Actual \ Predicted</th><th>Predicted Positive</th><th>Predicted Negative</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Actual Positive</strong></td><td><strong class="text-accent-premium">TP</strong> (True Positive)</td><td><span class="text-red-500 opacity-60">FN</span> (False Negative)</td></tr>
          <tr><td><strong>Actual Negative</strong></td><td><span class="text-red-500 opacity-60">FP</span> (False Positive)</td><td><strong class="text-purple-premium">TN</strong> (True Negative)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📋</div>
      <div class="premium-callout-body">
        <strong>Error Typology:</strong> A <strong>Type I Error</strong> (False Positive) is a "False Alarm," while a <strong>Type II Error</strong> (False Negative) is a "Missed Target." In medical testing, a Type II error is often far more dangerous.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="paradox" class="premium-h2">II. Accuracy and the Imbalance Paradox</h2>
    <p>Accuracy is the most intuitive metric, but it is deeply flawed for datasets where one class represents the vast majority of samples.</p>

    <div class="premium-math-block">
      \text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>The Paradigm Shift:</strong> If 99% of your data is "Negative," a model that always predicts "Negative" has 99% accuracy but <strong>zero</strong> utility. This is why we pivot to Precision and Recall.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="precision-recall" class="premium-h2">III. Precision and Recall Dynamics</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Precision (Positive Predictive Value)</div>
      <p style="margin:0">Of all instances predicted as Positive, how many were correct?</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P = \frac{TP}{TP + FP}
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Recall (Sensitivity / True Positive Rate)</div>
      <p style="margin:0">Of all actual Positive instances, how many did the model find?</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        R = \frac{TP}{TP + FN}
      </div>
    </div>

    <!-- SECTION 4 -->
    <h2 id="f1-score" class="premium-h2">IV. The F1-Score: Harmonic Justification</h2>
    <p>The F1-score is the <strong>Harmonic Mean</strong> of Precision and Recall. It is used instead of the arithmetic mean because it heavily penalizes extreme values.</p>

    <div class="premium-math-block">
      F_1 = 2 \cdot \frac{P \cdot R}{P + R}
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">⚖️</div>
      <div class="premium-callout-body">
        <strong>Why Harmonic?</strong> If $P=1.0$ and $R=0.2$, the arithmetic mean is $0.6$ (misleadingly high), but the <strong>F1 is 0.33</strong> (correctly reflecting the failure in recall).
      </div>
    </div>

    <!-- SECTION 5 -->
    <h2 id="roc-auc" class="premium-h2">V. Discriminative Power and ROC-AUC</h2>
    <p>The <strong>ROC Curve</strong> plots TPR vs. FPR across all possible classification thresholds. The <strong>AUC-ROC</strong> represents the model's ability to rank positive instances higher than negative ones.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Probabilistic Interpretation of AUC</div>
      <p style="margin:0">The AUC is exactly equal to the probability $P(score(+) > score(-))$ — the chance a random positive sample is scored higher than a random negative sample.</p>
    </div>

    <!-- SECTION 6 -->
    <h2 id="regression" class="premium-h2">VI. Regression Metrics: Statistical Properties</h2>
    <p>In continuous prediction, different loss functions target different statistical moments of the distribution.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Metric</th><th>Loss function</th><th>Moments Targetted</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>MSE</strong> (L2)</td><td>$\frac{1}{n} \Sigma (y - \hat{y})^2$</td><td>Sensitivity to outliers; targets the <strong>Mean</strong>.</td></tr>
          <tr><td><strong>MAE</strong> (L1)</td><td>$\frac{1}{n} \Sigma |y - \hat{y}|$</td><td>Robust to outliers; targets the <strong>Median</strong>.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 7 -->
    <h2 id="info-theory" class="premium-h2">VII. Information Theory & Cross-Entropy</h2>
    <p>Logarithmic loss (Cross-Entropy) is the standard for training neural networks. It is derived from Maximum Likelihood Estimation.</p>

    <div class="premium-math-block">
      \mathcal{L} = -\frac{1}{n}\sum [y \ln \hat{p} + (1-y)\ln(1-\hat{p})]
    </div>

    <div style="margin-top:80px; padding-top:20px; border-top: 1px solid var(--border); opacity: 0.6; font-size: 11px; font-family: var(--font-mono)">
      <strong>Primary References:</strong><br/>
      • ROC-AUC and Wilcoxon Equivalence: PMC Statistical Analysis.<br/>
      • F1 Harmonic Proofs: Stanford CS229 / Google ML Crash Course.<br/>
      • Information Theory & Loss: MIT OpenCourseWare 18.065.
    </div>
  `
};
