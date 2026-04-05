import { TopicSection } from '../../src/data/types';

export const evaluationMetricsSection: TopicSection = {
  id: "evaluation-metrics",
  title: "Statistical Evaluation Metrics",
  description: "Exhaustive analysis of classification and regression metrics, detailing their probabilistic underpinnings, formal derivations, and practical applications within complex model topologies.",
  formula: "F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}",
  details: [
    "Confusion Matrix Taxonomy: Type I and Type II error typology",
    "Global Accuracy and the Imbalance Paradox in skewed datasets",
    "Precision (PPV) and Recall (Sensitivity): Threshold-driven trade-offs",
    "F1-Score: Harmonic mean justification and geometrical derivation",
    "ROC-AUC: Discriminative power and equivalence to Wilcoxon-Mann-Whitney",
    "Regression Metrics: L1 (MAE) vs. L2 (MSE) statistical properties",
    "Proofs: Why MSE minimizes to the Mean and MAE to the Median",
    "Information Theory: Shannon Entropy, KL Divergence, and Cross-Entropy",
    "Optimization Dynamics: Gradient behavior of common loss functions"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Table of Contents</div>
      <a href="#confusion">The Confusion Matrix and Error Typology</a>
      <a href="#accuracy">Global Accuracy and the Imbalance Paradox</a>
      <a href="#precision-recall">Precision, Recall, and Sensitivity</a>
      <a href="#f1">The F1-Score: Harmonic Mean Justification</a>
      <a href="#roc">Discriminative Power: ROC and AUC</a>
      <a href="#roc-prob" class="sub">↳ Probabilistic Interpretation of AUC</a>
      <a href="#roc-wmw" class="sub">↳ Equivalence to Wilcoxon-Mann-Whitney</a>
      <a href="#regression-metrics">Regression Metrics: MSE vs. MAE</a>
      <a href="#regression-proofs" class="sub">↳ Mathematical Proofs of Optima</a>
      <a href="#cross-entropy">Information Theory and Cross-Entropy</a>
      <a href="#gradients">Computational Implementation and Gradients</a>
      <a href="#synthesis">Integrated Performance Assessment</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="confusion" class="premium-h2">The Taxonomy of Classification Performance</h2>
    <p>The fundamental building block for classification evaluation is the <strong>confusion matrix</strong>, which disaggregates predictive outcomes against ground-truth observations into four distinct quadrants.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Actual \ Predicted</th><th>Predicted Positive</th><th>Predicted Negative</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Actual Positive</strong></td><td>True Positive (TP)</td><td>False Negative (FN) - <strong>Type II</strong></td></tr>
          <tr><td><strong>Actual Negative</strong></td><td>False Positive (FP) - <strong>Type I</strong></td><td>True Negative (TN)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="accuracy" class="premium-h2">Global Accuracy and the Imbalance Paradox</h2>
    <p>Accuracy is the ratio of correct predictions to total observations:</p>
    <div class="premium-math-block">
      \[ \text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN} \]
    </div>
    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body"><strong>Accuracy Paradox:</strong> In imbalanced datasets (e.g., 99% Negative), a naive model predicting 100% Negative achieves 99% accuracy while failing entirely to detect the minority class.</div>
    </div>

    <h2 id="precision-recall" class="premium-h2">Precision and Recall</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Precision (Exactness)</div>
      <p style="margin:0">"Of all instances predicted positive, how many were actually positive?" Optimized when FP is zero.</p>
      <div class="premium-math-block" style="background:transparent; border:none; padding:0; margin-top:10px;">\[ \text{Precision} = \frac{TP}{TP + FP} \]</div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Recall (Completeness)</div>
      <p style="margin:0">"Of all actual positive cases, how many did the model find?" Optimized when FN is zero.</p>
      <div class="premium-math-block" style="background:transparent; border:none; padding:0; margin-top:10px;">\[ \text{Recall} = \frac{TP}{TP + FN} \]</div>
    </div>

    <h2 id="f1" class="premium-h2">The F1-Score: Harmonic Justification</h2>
    <p>The F1-score balances Precision ($P$) and Recall ($R$) using their <strong>harmonic mean</strong>. Unlike the arithmetic mean, the harmonic mean punishes extreme values, ensuring a high score requires both high precision and high recall.</p>
    <div class="premium-math-block">
      \[ F_1 = \frac{2 \cdot P \cdot R}{P + R} = \frac{TP}{TP + \frac{1}{2}(FP + FN)} \]
    </div>

    <h2 id="roc" class="premium-h2">Discriminative Power: ROC and AUC</h2>
    <p>The ROC curve evaluates a model across <em>all possible</em> thresholds. The Area Under the Curve (AUC) represents the probability that a randomly chosen positive instance will be ranked higher than a randomly chosen negative instance.</p>
    <h3 id="roc-wmw" class="premium-h3">Equivalence to Wilcoxon-Mann-Whitney</h3>
    <p>The AUC is mathematically equivalent to the normalized U-statistic from the non-parametric Wilcoxon-Mann-Whitney test:</p>
    <div class="premium-math-block">
      \[ \text{AUC} = \frac{U}{n_+ \cdot n_-} \]
    </div>

    <h2 id="#regression-metrics" class="premium-h2">Regression Metrics: MSE vs. MAE</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Metric</th><th>Formula</th><th>Optimum Target</th><th>Outlier Sensitivity</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>MSE</strong></td><td>$\frac{1}{n}\sum(y_i - \hat{y}_i)^2$</td><td>Conditional <strong>Mean</strong></td><td>High (Squared Penalty)</td></tr>
          <tr><td><strong>MAE</strong></td><td>$\frac{1}{n}\sum|y_i - \hat{y}_i|$</td><td>Conditional <strong>Median</strong></td><td>Low (Linear Penalty)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="cross-entropy" class="premium-h2">Information Theory and Cross-Entropy</h2>
    <p>Cross-entropy measures the divergence between the true distribution $P$ and the model's predicted distribution $Q$. Minimizing cross-entropy is equivalent to maximizing the <strong>Log-Likelihood</strong> of the observations.</p>
    <div class="premium-math-block">
      \[ H(P, Q) = -\sum_{x \in \mathcal{X}} P(x) \log Q(x) = H(P) + D_{KL}(P \| Q) \]
    </div>

    <h2 id="synthesis" class="premium-h2">Integrated Performance Assessment</h2>
    <div class="premium-case-study">
      <h4>Metric Selection Strategy</h4>
      <ul>
        <li><strong>Medical Screening:</strong> Prioritize <strong>Recall</strong> (minimize False Negatives).</li>
        <li><strong>Fraud Detection:</strong> Prioritize <strong>Precision</strong> (minimize False Alarms).</li>
        <li><strong>Physics Modeling:</strong> Prioritize <strong>MSE</strong> (penalize large deviations).</li>
        <li><strong>General Ranking:</strong> Prioritize <strong>ROC-AUC</strong> (evaluate discriminative power).</li>
      </ul>
    </div>
  `,
};
