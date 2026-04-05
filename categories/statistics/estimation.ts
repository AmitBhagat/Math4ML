import { TopicSection } from '../../src/data/types';

export const parameterEstimationSection: TopicSection = {
  id: "parameter-estimation",
  title: "MLE, MAP, & Bias-Variance",
  description: "A comprehensive investigation into Maximum Likelihood Estimation (MLE), Maximum A Posteriori (MAP) estimation, and the Bias-Variance Tradeoff—the three pillars of statistical learning and generalization.",
  formula: "L(\\theta) = \\prod_{i=1}^{n} f(x_i; \\theta)",
  details: [
    "Frequentist vs. Bayesian Paradigms in Parametric Inference",
    "Maximum Likelihood Estimation (MLE): Mechanics and I.I.D. Assumptions",
    "Log-Likelihood Transformations for Gaussian and Bernoulli models",
    "Maximum A Posteriori (MAP): Conjugate Priors and Beta-Bernoulli models",
    "Bayesian Regularization: Connecting MAP to Ridge (L2) and Lasso (L1)",
    "Formal Derivation of Bias-Variance Decomposition",
    "Complexity Tradeoff Curves: Underfitting vs. Overfitting dynamics",
    "Empirical Risk Minimization (ERM) and Learning Theory"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Table of Contents</div>
      <a href="#foundations">Theoretical Foundations of Parametric Inference</a>
      <a href="#mle">Maximum Likelihood Estimation (MLE)</a>
      <a href="#mle-gaussian" class="sub">↳ Gaussian & Bernoulli Derivations</a>
      <a href="#map">Maximum A Posteriori (MAP) Estimation</a>
      <a href="#map-regularization" class="sub">↳ MAP as Regularization (Ridge & Lasso)</a>
      <a href="#bv">The Bias-Variance Decomposition</a>
      <a href="#bv-derivation" class="sub">↳ Formal Mathematical Derivation</a>
      <a href="#complexity">The Complexity Tradeoff Curve</a>
      <a href="#casestudy">Case Study: Diabetes Dataset Analysis</a>
      <a href="#advanced">Advanced Insights: Information Geometry</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="foundations" class="premium-h2">Theoretical Foundations of Parametric Inference</h2>
    <p>In the classical statistical paradigm, the world is modeled as a probabilistic system governed by unknown but fixed parameters. We assume the existence of a true data-generating distribution $P(x, y; \theta^*)$, where $\theta^*$ represents the "ground truth" parameters we wish to recover. The process of learning, therefore, is the process of constructing an estimator $\hat{\theta}$ from a finite dataset $S = \{(x_i, y_i)\}_{i=1}^n$ that approximates $\theta^*$ with high precision and reliability.</p>
    <p>The construction of such an estimator requires an objective function that quantifies the "goodness" of any candidate parameter $\theta$. Depending on the philosophical stance adopted—Frequentist or Bayesian—this objective function takes different forms.</p>

    <h3 class="premium-h3">The Frequentist and Bayesian Dichotomy</h3>
    <p>The distinction between MLE and MAP is not merely a choice of algorithm but a fundamental divergence in how uncertainty and information are handled. In a Frequentist framework, the randomness resides in the data sampling process. In the Bayesian framework, the randomness resides in our knowledge of the parameter—we begin with a prior belief and use the data as evidence to update that belief into a posterior distribution.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Feature</th><th>Maximum Likelihood Estimation (MLE)</th><th>Maximum A Posteriori (MAP)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Philosophical Paradigm</strong></td><td>Frequentist: Parameters are fixed constants.</td><td>Bayesian: Parameters are random variables.</td></tr>
          <tr><td><strong>Objective Function</strong></td><td>Maximize the likelihood $P(D|\theta)$.</td><td>Maximize the posterior $P(\theta|D) \propto P(D|\theta)P(\theta)$.</td></tr>
          <tr><td><strong>Prior Knowledge</strong></td><td>Ignored; relies solely on empirical data.</td><td>Integrated via a prior distribution $P(\theta)$.</td></tr>
          <tr><td><strong>Regularization</strong></td><td>None; susceptible to overfitting in small samples.</td><td>Implicitly regularized by the prior.</td></tr>
          <tr><td><strong>Statistical Consistency</strong></td><td>Converges to the true $\theta^*$ as $n \to \infty$.</td><td>Converges to the MLE estimate as $n \to \infty$.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="mle" class="premium-h2">Maximum Likelihood Estimation: Theory and Mechanics</h2>
    <p>Maximum Likelihood Estimation (MLE) is predicated on the idea that the "most likely" parameters are those that assign the highest probability to the actual data observed. It is a purely data-driven approach that makes no assumptions about the likelihood of the parameters themselves before the data is seen.</p>

    <h3 class="premium-h3">The Likelihood Function and I.I.D. Assumptions</h3>
    <p>Consider a set of observations $X = \{x_1, x_2, \dots, x_n\}$. We assume these observations are independent and identically distributed (i.i.d.), meaning each $x_i$ is drawn from the same distribution $f(x; \theta)$ and the occurrence of one does not affect the others. The joint probability (the likelihood) of the entire dataset is the product of the individual probabilities:</p>

    <div class="premium-math-block">
      \[ L(\theta) = \prod_{i=1}^{n} f(x_i; \theta) \]
    </div>

    <p>The task of MLE is to find the $\hat{\theta}$ that maximizes this product:</p>
    <div class="premium-math-block">
      \[ \hat{\theta}_{MLE} = \arg\max_{\theta} L(\theta) \]
    </div>

    <h3 class="premium-h3">The Log-Likelihood Transformation</h3>
    <p>Maximizing a product of many small probabilities is computationally unstable due to numerical underflow. Because the natural logarithm is a strictly increasing function, the value of $\theta$ that maximizes $L(\theta)$ also maximizes $\ln L(\theta)$. This transforms the product into a sum, which is far more tractable for optimization:</p>

    <div class="premium-math-block">
      \[ \ell(\theta) = \ln L(\theta) = \sum_{i=1}^{n} \ln f(x_i; \theta) \]
    </div>

    <h3 id="mle-gaussian" class="premium-h3">Mathematical Derivations: Bernoulli and Gaussian</h3>
    <p>For a <strong>Bernoulli distribution</strong> (binary outcomes $x \in \{0, 1\}$), the MLE for the success probability $p$ is the observed sample mean:</p>
    <div class="premium-math-block">
      \[ \hat{p}_{MLE} = \frac{k}{n} \quad \text{(where } k \text{ is the number of successes)} \]
    </div>

    <p>For a <strong>Gaussian distribution</strong> $N(\mu, \sigma^2)$, optimizing the log-likelihood reveals:</p>
    <div class="premium-math-block">
        \[ \hat{\mu}_{MLE} = \frac{1}{n}\sum_{i=1}^n x_i \]
        \[ \hat{\sigma}^2_{MLE} = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2 \]
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">The MLE for variance is <strong>biased</strong> for small $n$; its expectation is $\frac{n-1}{n}\sigma^2$. The standard unbiased estimator uses $n-1$ in the denominator (Bessel's correction).</div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="map" class="premium-h2">Maximum A Posteriori Estimation: The Bayesian Extension</h2>
    <p>While MLE is powerful, it is prone to extreme sensitivity in small datasets. Maximum A Posteriori (MAP) estimation corrects this by treating the parameter as a random variable with an associated <strong>prior distribution</strong> $P(\theta)$.</p>

    <h3 class="premium-h3">The Mechanics of Bayes' Theorem</h3>
    <p>MAP estimation identifies the mode of the posterior distribution $P(\theta|X)$. Using Bayes' Theorem:</p>
    <div class="premium-math-block">
      \[ \hat{\theta}_{MAP} = \arg\max_{\theta}\; P(X|\theta) \cdot P(\theta) \]
    </div>

    <div class="premium-case-study">
      <h4>Numerical Example: The "Fair Coin" Prior</h4>
      <p>If we have a prior belief that a coin is fair (mode $= 0.5$) and observe 25 heads in 30 trials:</p>
      <div class="premium-math-block">
        \[ \hat{p}_{MAP} \approx 0.70 \quad \text{vs.} \quad \hat{p}_{MLE} \approx 0.83 \]
      </div>
      <p>The prior "pulls" the estimate toward our initial belief, acting as a buffer against noisy, extreme results in small samples.</p>
    </div>

    <h3 id="map-regularization" class="premium-h3">MAP as Regularization: Ridge and Lasso</h3>
    <p>One of the most profound links in machine learning is that between Bayesian priors and regularization penalties.</p>
    <div class="premium-callout info">
      <div class="premium-callout-icon">💡</div>
      <div class="premium-callout-body">
        Assuming a <strong>Gaussian prior</strong> on the weights of a linear model ($\beta \sim N(0, \tau^2 I)$) results in <strong>Ridge Regression (L2)</strong>. <br/>
        Assuming a <strong>Laplacian prior</strong> results in <strong>Lasso Regression (L1)</strong>, which promotes sparsity.
      </div>
    </div>

    <!-- SECTION 4 -->
    <h2 id="bv" class="premium-h2">The Bias-Variance Decomposition</h2>
    <p>The goal of learning is to achieve low error on unseen data. This generalization error can be decomposed into three fundamental, non-negative components.</p>

    <h3 id="bv-derivation" class="premium-h3">Formal Mathematical Derivation</h3>
    <p>The total Mean Squared Error (MSE) at a test point $x$ can be expanded into:</p>
    <div class="premium-math-block">
      \[ \underbrace{E[(y - \hat{f})^2]}_{\text{Total MSE}} = \underbrace{(E[\hat{f}] - f)^2}_{\text{Bias}^2} + \underbrace{\text{Var}(\hat{f})}_{\text{Variance}} + \underbrace{\sigma^2}_{\text{Irreducible Error}} \]
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Bias (Underfitting Error)</div>
      <p style="margin:0">Measures the error introduced by approximating a complex real-world relationship with a simpler model. High bias leads to <strong>underfitting</strong>.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Variance (Overfitting Error)</div>
      <p style="margin:0">Measures the model's sensitivity to specific fluctuations in the training set. High variance leads to <strong>overfitting</strong>.</p>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Irreducible Error</div>
      <p style="margin:0">The statistical "floor" of the error caused by noise inherent in the data-generating process itself.</p>
    </div>

    <!-- SECTION 5 -->
    <h2 id="complexity" class="premium-h2">The Complexity Tradeoff Curve</h2>
    <p>As model complexity increases (e.g., higher degree polynomials), bias typically decreases while variance increases. The optimal model sits at the "elbow" of the U-shaped test error curve.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Model Complexity</th><th>Bias Trend</th><th>Variance Trend</th><th>Training Error</th><th>Test Error</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Low (Linear)</strong></td><td>High (Underfit)</td><td>Low</td><td>High</td><td>High</td></tr>
          <tr><td><strong>Optimal</strong></td><td>Moderate</td><td>Moderate</td><td>Moderate</td><td><strong>Minimum</strong></td></tr>
          <tr><td><strong>High (Poly-25)</strong></td><td>Low</td><td>High (Overfit)</td><td>Extremely Low</td><td>Extremely High</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 6 -->
    <h2 id="casestudy" class="premium-h2">Case Study: Diabetes Dataset Analysis</h2>
    <p>In standard datasets like the Diabetes study (442 patients, 10 variables), we observe that while adding more features always reduces training MSE (reducing bias), the test MSE eventually begins to rise as the model begins to fit the noise (increasing variance).</p>

    <h2 id="advanced" class="premium-h2">Advanced Insights: Information Geometry</h2>
    <p>Beyond simple error decomposition, modern research investigates the deeper geometric properties of these estimators. One such insight is the <strong>Fisher Information</strong> $I(\theta)$, which defines the curvature of the log-likelihood and establishes the theoretical lower bound for the variance of an unbiased estimator (Cramér–Rao Lower Bound).</p>
  `,
};
