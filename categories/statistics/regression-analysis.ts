import { TopicSection } from '../../src/data/types';

export const regressionAnalysisSection: TopicSection = {
  id: "regression-analysis",
  title: "Theoretical Foundations and Computational Rigor in Regression Analysis",
  description: "An exhaustive exploration of predictive modeling, quantifying relationships via OLS derivations, Gauss-Markov optimality, variance decomposition, and diagnostic residual theory.",
  formula: "\\hat{\\beta} = (X^T X)^{-1} X^T Y",
  details: [
    "Probabilistic Specification of Linear Models",
    "Ordinary Least Squares (OLS): Scalar and Matrix Derivations",
    "Gauss-Markov Theorem: Estimator Optimality (BLUE)",
    "Classical Linear Regression Model (CLRM) Assumptions",
    "Analysis of Variance (ANOVA): SST, SSR, and SSE Decomposition",
    "Coefficient of Determination: R² and Adjusted R² Scalability",
    "Residual Analytics: Leverage, Influence, and Cook’s Distance",
    "Diagnostic Methodology: Q-Q Plots and Scale-Location Analysis",
    "Detection and Remediation of Multicollinearity and Heteroscedasticity",
    "Asymptotic Properties: Consistency and the Central Limit Theorem"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Regression Roadmap</div>
      <a href="#specification">I. Probabilistic Model Specification</a>
      <a href="#ols-derivation">II. Mathematical Derivation of OLS</a>
      <a href="#gauss-markov">III. Gauss-Markov & Blue Optimality</a>
      <a href="#anova">IV. Variance Decomposition (ANOVA)</a>
      <a href="#residuals">V. Analytical Theory of Residuals</a>
      <a href="#case-study">VI. Case Study: Matrix Mechanics</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="specification" class="premium-h2">I. The Probabilistic Specification</h2>
    <p>A linear regression model assumes that the relationship between predictors $X$ and response $Y$ can be approximated by a linear function of parameters, with stochastic uncertainty captured by an error term $\epsilon$.</p>

    <div class="premium-math-block">
      Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_k X_k + \epsilon
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Component</th><th>Notation</th><th>Role</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Dependent Variable</strong></td><td>$Y$</td><td>The quantitative response being predicted.</td></tr>
          <tr><td><strong>Coefficients</strong></td><td>$\beta_i$</td><td>The "weight" or effect of each feature on $Y$.</td></tr>
          <tr><td><strong>Error Term</strong></td><td>$\epsilon$</td><td>Unobserved noise ($E[\epsilon]=0$).</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 2 -->
    <h2 id="ols-derivation" class="premium-h2">II. Mathematical Derivation of OLS</h2>
    <p>Ordinary Least Squares seeks the parameters that minimize the <strong>Sum of Squared Errors (SSE)</strong>. There are two main ways to solve this system.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">The Normal Equation (Matrix Form)</div>
      <p style="margin:0">For multiple linear regression, the closed-form algebraic solution is defined as:</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        \hat{\beta} = (X^T X)^{-1} X^T Y
      </div>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">
        <strong>Geometric Intuition:</strong> The OLS solution corresponds to the <strong>Orthogonal Projection</strong> of the vector $Y$ onto the subspace spanned by the columns of $X$. The residuals are, by definition, perpendicular to the feature space.
      </div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="gauss-markov" class="premium-h2">III. The Gauss-Markov Theorem</h2>
    <p>Under a specific set of assumptions (the <strong>Classical Linear Regression Model</strong> or CLRM), OLS is proven to be the <strong>Best Linear Unbiased Estimator (BLUE)</strong>.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Assumption</th><th>Mathematical Requirement</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Exogeneity</strong></td><td>$E[\epsilon|X] = 0$ (No correlation between features and noise).</td></tr>
          <tr><td><strong>Homoscedasticity</strong></td><td>$\text{Var}(\epsilon|X) = \sigma^2$ (Constant variance of error).</td></tr>
          <tr><td><strong>No Multicollinearity</strong></td><td>$X$ has full column rank (Features are not redundant).</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 4 -->
    <h2 id="anova" class="premium-h2">IV. Decomposition of Variance: ANOVA</h2>
    <p>The total variation in our data ($SST$) can be split into the portion explained by our model ($SSR$) and the portion left in the noise ($SSE$).</p>

    <div class="premium-math-block">
      SST = SSR + SSE
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Coefficient of Determination ($R^2$)</div>
      <p style="margin:0">The percentage of total variance explained by the model features.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        R^2 = \frac{SSR}{SST} = 1 - \frac{SSE}{SST}
      </div>
    </div>

    <!-- SECTION 5 -->
    <h2 id="residuals" class="premium-h2">V. Analytical Theory of Residuals</h2>
    <p>Residuals are the empirical manifestations of error. Analyzing them allows us to detect leverage points and influential outliers.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Metric</th><th>Definition</th><th>Threshold</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Leverage</strong> ($h_{ii}$)</td><td>Outlier in the $X$-space.</td><td>$h_{ii} > \frac{3k}{n}$</td></tr>
          <tr><td><strong>Cook's Distance</strong></td><td>Influence on coefficients.</td><td>$D_i > \frac{4}{n}$</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SECTION 6 -->
    <h2 id="case-study" class="premium-h2">VI. Case Study: Matrix Mechanics</h2>
    <div class="premium-case-study">
      <h4>Solving a Minimal Fit</h4>
      <p>Consider three points: $(0,1), (1,0), (2,2)$. To find $\hat{y} = \beta_0 + \beta_1 x$:</p>
      <ol style="margin-top:10px">
        <li><strong>Design Matrix $X$:</strong> $[[1, 0], [1, 1], [1, 2]]$</li>
        <li><strong>Gram Matrix $(X^TX)$:</strong> $[[3, 3], [3, 5]]$</li>
        <li><strong>Moment Matrix $(X^TY)$:</strong> $[[3], [4]]$</li>
      </ol>
      <p style="margin-top:15px">Applying the Normal Equation yields the final regression line: <strong>$\hat{y} = 0.5 + 0.5x$</strong>.</p>
    </div>

    <div style="margin-top:80px; padding-top:20px; border-top: 1px solid var(--border); opacity: 0.6; font-size: 11px; font-family: var(--font-mono)">
      <strong>Primary References:</strong><br/>
      • OLS Matrix Derivations: Stanford CME250.<br/>
      • Gauss-Markov Proofs: Yale University Econometrics.<br/>
      • Residual Diagnostics: Duke University Applied Linear Models.
    </div>
  `
};
