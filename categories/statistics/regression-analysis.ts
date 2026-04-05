import { TopicSection } from '../../src/data/types';

export const regressionAnalysisSection: TopicSection = {
  id: "regression-analysis",
  title: "Regression Analysis Theory",
  description: "An exhaustive mathematical treatment of Ordinary Least Squares (OLS), the Gauss-Markov theorem, variance decomposition (ANOVA), and residual diagnostics for predictive modeling.",
  formula: "\\hat{\\beta} = (X^T X)^{-1} X^T Y",
  details: [
    "Probabilistic Specification of Linear Models and Stochastic Errors",
    "MATHEMATICAL DERIVATION: OLS via Calculus and Matrix Algebra",
    "The Gauss-Markov Theorem: Why OLS is the BLUE Estimator",
    "Decomposition of Variance: SST, SSR, and SSE Identity",
    "The ANOVA Framework and Model Utility F-Tests",
    "R² and Adjusted R-squared: Mechanics and Complexity Penalties",
    "Analytical Theory of Residuals: Leverage, Influence, and Hat Matrices",
    "Diagnostic Visual Analytics: Q-Q Plots and Heteroscedasticity Funnels",
    "Structural Violations: Multicollinearity (VIF) and Endogeneity Bias"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Table of Contents</div>
      <a href="#prob-spec">The Probabilistic Specification of the Linear Model</a>
      <a href="#ols">Mathematical Derivation of Ordinary Least Squares</a>
      <a href="#ols-matrix" class="sub">↳ Matrix Derivation (Multiple Regression)</a>
      <a href="#gauss-markov">The Gauss-Markov Theorem and BLUE Optimality</a>
      <a href="#anova">Decomposition of Variance (ANOVA Framework)</a>
      <a href="#rsq">R² and Adjusted R-squared</a>
      <a href="#residuals">Analytical Theory of Residuals</a>
      <a href="#diagnostics">Model Diagnostics and Assumption Testing</a>
      <a href="#violations">Violations of Assumptions and Remedial Strategies</a>
      <a href="#cases">Practical Computational Case Studies</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="prob-spec" class="premium-h2">The Probabilistic Specification of the Linear Model</h2>
    <p>At its core, a linear regression model assumes that the relationship between a set of independent variables $X$ and a dependent variable $Y$ can be approximated by a linear function of the parameters. This specification is a <strong>probabilistic model</strong> that accounts for stochastic uncertainty through an error term $\epsilon$.</p>

    <div class="premium-math-block">
      \[ Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \cdots + \beta_k X_k + \epsilon \]
    </div>

    <p>The inclusion of $\epsilon$ acknowledges that no linear combination of predictors can perfectly capture the complexity of real-world phenomena. For a single observation $i$, the model is written as $y_i = x_i^T \beta + \epsilon_i$, where $x_i$ is a vector of features and $\beta$ is the vector of unknown population parameters.</p>

    <!-- SECTION 2 -->
    <h2 id="ols" class="premium-h2">Mathematical Derivation of Ordinary Least Squares (OLS)</h2>
    <p>The OLS estimator is derived by minimizing the <strong>Sum of Squared Residuals (SSR)</strong>. Squaring residuals ensures positive and negative deviations do not cancel and penalizes larger errors more heavily.</p>

    <h3 id="ols-matrix" class="premium-h3">Matrix Derivation for Multiple Linear Regression</h3>
    <p>Let $Y$ be an $n \times 1$ vector of observations and $X$ be an $n \times k$ design matrix. The error sum of squares in quadratic form is:</p>
    <div class="premium-math-block">
      \[ S(\beta) = (Y - X\beta)^T(Y - X\beta) = Y^TY - 2\beta^T X^T Y + \beta^T X^T X \beta \]
    </div>

    <p>Taking the gradient with respect to $\beta$ and setting to zero yields the <strong>Normal Equations</strong>:</p>
    <div class="premium-math-block">
      \[ X^T X \hat{\beta} = X^T Y \implies \hat{\beta} = (X^T X)^{-1} X^T Y \]
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">📐</div>
      <div class="premium-callout-body">The solution found is a <strong>global minimum</strong> because the Hessian matrix $2X^TX$ is positive definite, provided $X$ is of full rank.</div>
    </div>

    <!-- SECTION 3 -->
    <h2 id="gauss-markov" class="premium-h2">The Gauss-Markov Theorem and BLUE Optimality</h2>
    <p>The Gauss-Markov theorem states that under specific conditions, the OLS estimator is the <strong>Best Linear Unbiased Estimator (BLUE)</strong>. This means OLS has the minimum variance among all linear unbiased estimators.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Assumptions for BLUE</div>
      <ul>
        <li><strong>Exogeneity:</strong> $E[\epsilon | X] = 0$. Errors are uncorrelated with predictors.</li>
        <li><strong>Homoscedasticity:</strong> $\text{Var}(\epsilon | X) = \sigma^2 I$. Constant error variance.</li>
        <li><strong>No Autocorrelation:</strong> $\text{Cov}(\epsilon_i, \epsilon_j) = 0$ for $i \neq j$.</li>
        <li><strong>No Perfect Multicollinearity:</strong> Predictors must not be perfect linear combinations of each other.</li>
      </ul>
    </div>

    <!-- SECTION 4 -->
    <h2 id="anova" class="premium-h2">Decomposition of Variance (ANOVA Framework)</h2>
    <p>Total variation in $Y$ is partitioned into explained and unexplained components. This is the foundation for model utility testing.</p>

    <div class="premium-math-block">
      \[ \underbrace{\sum(y_i - \bar{y})^2}_{\text{SST}} = \underbrace{\sum(\hat{y}_i - \bar{y})^2}_{\text{SSR}} + \underbrace{\sum(y_i - \hat{y}_i)^2}_{\text{SSE}} \]
    </div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Source</th><th>SS</th><th>df</th><th>Mean Square (MS)</th></tr>
        </thead>
        <tbody>
          <tr><td>Regression</td><td>SSR</td><td>$k$</td><td>$MSR = SSR/k$</td></tr>
          <tr><td>Error</td><td>SSE</td><td>$n-k-1$</td><td>$MSE = SSE/(n-k-1)$</td></tr>
          <tr><td>Total</td><td>SST</td><td>$n-1$</td><td></td></tr>
        </tbody>
      </table>
    </div>

    <p>The <strong>F-statistic</strong> ($F = MSR/MSE$) tests the null hypothesis that all slope coefficients are simultaneously zero.</p>

    <!-- SECTION 5 -->
    <h2 id="rsq" class="premium-h2">R² and Adjusted R-squared</h2>
    <p>$R^2$ measures the proportion of variance explained by the model.</p>
    <div class="premium-math-block">
      \[ R^2 = \frac{SSR}{SST} = 1 - \frac{SSE}{SST} \]
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">Adding <em>any</em> predictor always increases $R^2$. To prevent overfitting, use <strong>Adjusted R²</strong>, which penalizes the addition of irrelevant variables.</div>
    </div>

    <!-- SECTION 6 -->
    <h2 id="residuals" class="premium-h2">Analytical Theory of Residuals</h2>
    <p>Residuals $e_i = y_i - \hat{y}_i$ are the empirical measures of the population error $\epsilon_i$.</p>
    <div class="premium-def-box">
      <div class="premium-def-title">Leverage and Influence</div>
      <p><strong>Leverage</strong> $(h_{ii})$ measures how far a point's $X$ values are from the mean. <br/><strong>Cook's Distance</strong> quantifies how much a single point affects all fitted values.</p>
    </div>

    <h2 id="diagnostics" class="premium-h2">Diagnostic Visual Analytics</h2>
    <p>We use residuals plots to validate model assumptions:</p>
    <ul>
      <li><strong>Residuals vs. Fitted:</strong> Checks for non-linearity (U-shape) and heteroscedasticity (Funnel shape).</li>
      <li><strong>Normal Q-Q Plot:</strong> Checks if residuals are normally distributed.</li>
      <li><strong>Scale-Location:</strong> A more robust check for homoscedasticity.</li>
    </ul>

    <!-- SECTION 7 -->
    <h2 id="cases" class="premium-h2">Practical Case Study: Biometric Estimation</h2>
    <div class="premium-case-study">
      <h4>Height vs. Weight Regression</h4>
      <p>For a sample of 24 individuals: $r=0.825, \bar{y}=118.1, \bar{x}=66.9, s_y=8.4, s_x=2.0$</p>
      <div class="premium-math-block">
        \[ b_1 = r \cdot \frac{s_y}{s_x} = 0.825 \cdot \frac{8.4}{2.0} \approx 3.46 \text{ lbs/inch} \]
        \[ b_0 = \bar{y} - b_1\bar{x} = 118.1 - 3.46(66.9) \approx -113.4 \]
      </div>
      <p>The model explains <strong>68.1%</strong> ($R^2 = 0.825^2$) of the variation in weight.</p>
    </div>
  `,
};
