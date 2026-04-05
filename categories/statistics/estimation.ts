import { TopicSection } from '../../src/data/types';

export const parameterEstimationSection: TopicSection = {
  id: "estimation",
  title: "Comprehensive Analytical Framework for Parameter Estimation and Generalization",
  description: "An exhaustive investigation into Maximum Likelihood Estimation (MLE), Maximum A Posteriori (MAP) estimation, and the Bias-Variance Tradeoff—the three pillars of machine learning model development.",
  formula: "P(\\theta|X) = \\frac{P(X|\\theta)P(\\theta)}{P(X)}",
  details: [
    "Frequentist vs. Bayesian Dichotomy in Parametric Inference",
    "Maximum Likelihood Estimation (MLE): Mechanics and I.I.D. Assumptions",
    "Log-Likelihood Transformation: Computational Stability and Underflow",
    "Mathematical Derivations: Bernoulli and Gaussian Parameters",
    "Fisher Information and Asymptotic Efficiency of MLE",
    "Maximum A Posteriori (MAP) Estimation: Mode of the Posterior",
    "Conjugate Priors: The Beta-Bernoulli Update Mechanism",
    "MAP-Regularization Duality: Bridge to Ridge and Lasso Regression",
    "Formal Bias-Variance Decomposition: Error Component Analysis",
    "Generalization Error: Irreducible Noise, Bias² and Variance Components"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Estimation Roadmap</div>
      <a href="#foundations">I. Frequentist vs. Bayesian Foundations</a>
      <a href="#mle">II. Maximum Likelihood Estimation (MLE)</a>
      <a href="#map">III. Maximum A Posteriori (MAP)</a>
      <a href="#bias-variance">IV. The Bias-Variance Tradeoff</a>
      <a href="#case-study">V. Case Study: Complexity Analysis</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="foundations" class="premium-h2">I. Theoretical Foundations of Parametric Inference</h2>
    <p>In the statistical paradigm, we model the world as a probabilistic system governed by unknown parameters $\theta$. The process of "learning" is constructing an estimator $\hat{\theta}$ from data that approximates the ground truth.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Approach</th><th>Philosophy</th><th>Objective</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Frequentist</strong></td><td>Parameters are <strong>fixed constants</strong>. Randomness is in the sampling.</td><td>Maximize Likelihood $P(D|\theta)$.</td></tr>
          <tr><td><strong>Bayesian</strong></td><td>Parameters are <strong>random variables</strong>. Randomness is in our knowledge.</td><td>Maximize Posterior $P(\theta|D)$.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="mle" class="premium-h2">II. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE seeks the parameters that assign the highest probability to the observed data. For computational stability, we almost always maximize the <strong>Log-Likelihood</strong>.</p>

    <div class="premium-math-block">
      \ell(\theta) = \sum_{i=1}^{n} \ln f(x_i; \theta)
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">⚡</div>
      <div class="premium-callout-body">
        <strong>The Log Transformation:</strong> Logs turn products (prone to underflow) into sums. Since $\ln$ is a monotonic function, the $\theta$ that maximizes the log-likelihood is the same as the one that maximizes the raw likelihood.
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Gaussian Parameter MLE</div>
      <p>For $n$ observations $x_i \sim N(\mu, \sigma^2)$, the MLE estimators are:</p>
      <ul style="margin-top:10px">
        <li><strong>Mean:</strong> $\hat{\mu}_{MLE} = \frac{1}{n} \sum x_i = \bar{x}$</li>
        <li><strong>Variance:</strong> $\hat{\sigma}^2_{MLE} = \frac{1}{n} \sum (x_i - \bar{x})^2$</li>
      </ul>
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>The Bias Pitfall:</strong> The MLE variance estimator is <strong>biased</strong> for small $n$ (it underestimates the true variance). We use <strong>Bessel's Correction</strong> ($n-1$) to create an unbiased estimator.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="map" class="premium-h2">III. Maximum A Posteriori (MAP) Estimation</h2>
    <p>MAP refines raw likelihood by incorporating <strong>Prior Knowledge</strong> $P(\theta)$. This acts as a regularizer, preventing the model from overreacting to noise in small datasets.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The MAP-Regularization Duality</div>
      <p style="margin:0">Mathematically, MAP estimation with a Gaussian prior on parameters is exactly equivalent to <strong>Ridge Regression (L2)</strong>.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \hat{\theta}_{MAP} = \arg\max_{\theta} P(X|\theta) P(\theta)
      </div>
    </div>

    <!-- SECTION 4 -->
    <h2 id="bias-variance" class="premium-h2">IV. The Bias-Variance Decomposition</h2>
    <p>The total error of any learner can be decomposed into three fundamental components. Understanding this tradeoff is the key to tuning model complexity.</p>

    <div class="premium-math-block">
      \text{Total Error} = \text{Bias}^2 + \text{Variance} + \text{Irreducible Noise}
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Component</th><th>Source</th><th>Effect</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Bias</strong></td><td>Simplifying assumptions.</td><td>Underfitting (High Bias).</td></tr>
          <tr><td><strong>Variance</strong></td><td>Sensitivity to training noise.</td><td>Overfitting (High Variance).</td></tr>
          <tr><td><strong>Noise</strong></td><td>Inherent randomness.</td><td>The absolute floor of error.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 5 -->
    <h2 id="case-study" class="premium-h2">V. Case Study: Dataset Complexity Analysis</h2>
    <div class="premium-case-study">
      <h4>The Generalization Gap</h4>
      <p>Consider a model predicting diabetes progression. As we add features, we observe the following metrics:</p>
      <div class="premium-table-wrap" style="margin-top:20px">
        <table class="premium-table">
          <thead>
            <tr><th>Features</th><th>Training MSE</th><th>Test MSE</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Baseline</td><td>5524</td><td>6352</td><td>Underfitting</td></tr>
            <tr><td>S4 Only</td><td>4278</td><td>5409</td><td>High Bias</td></tr>
            <tr style="background: color-mix(in srgb, var(--accent) 5%, transparent)"><td><strong>S5 & BMI</strong></td><td>3004</td><td>3453</td><td><strong>OPTIMAL</strong></td></tr>
            <tr><td>All Features</td><td>2640</td><td>3224</td><td>Overfitting</td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top:15px">While "All Features" minimizes training error, it increases the generalization gap. The "S5 & BMI" subset provides the most reliable balance between bias and variance.</p>
    </div>

    <div style="margin-top:80px; padding-top:20px; border-top: 1px solid var(--border); opacity: 0.6; font-size: 11px; font-family: var(--font-mono)">
      <strong>Primary References:</strong><br/>
      • MLE and MAP Theory: Stanford CS229 / CS109.<br/>
      • Bias-Variance Decomposition: Cornell CS4780 / MIT 15.097.<br/>
      • Regularization & Priors: CMU Statistical Machine Learning.
    </div>
  `
};
