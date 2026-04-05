# Theoretical Foundations and Computational Rigor in Regression Analysis for Machine Learning

The evolution of predictive modeling within the field of machine learning traces its origins to the mathematical principles of regression analysis, a statistical methodology developed to quantify the relationship between a dependent response variable and one or more independent predictors. While contemporary machine learning often emphasizes complex non-linear architectures, the linear regression model remains the fundamental building block for supervised learning, providing a framework for both point estimation and statistical inference. The utility of regression analysis extends beyond mere prediction; it serves as a diagnostic tool for understanding the underlying mechanisms of data generation, identifying causal drivers, and assessing the proportion of variability in a system that can be attributed to known factors.

## The Probabilistic Specification of the Linear Model

At its core, a linear regression model assumes that the relationship between a set of independent variables X and a dependent variable Y can be approximated by a linear function of the parameters. This specification is not merely a deterministic geometric line but a probabilistic model that accounts for stochastic uncertainty through an error term. The general form of the multiple linear regression model is expressed as follows:

In this formulation, Y represents the response variable, \\beta_0 is the intercept, \\beta_j represents the slope coefficients (parameters) for each predictor X_j, and \\epsilon is the random error or disturbance term. The inclusion of \\epsilon acknowledges that no linear combination of predictors can perfectly capture the complexity of real-world phenomena. For a single observation i, the model is written as y_i = x_i^T \\beta + \\epsilon_i, where x_i is a vector of features and \\beta is the vector of unknown population parameters that the analyst seeks to estimate.

The transition from a population model to an estimated sample model is marked by the replacement of true parameters with estimators, denoted with "hats" (\\hat{\\beta}). The predicted value for a given input x is thus \\hat{y} = \\hat{\\beta}\_0 + \\hat{\\beta}\_1 x_1 + \\dots + \\hat{\\beta}\_k x_k. The primary objective of Ordinary Least Squares (OLS) estimation is to determine the values of these coefficients that minimize the discrepancy between the observed values y and the predicted values \\hat{y}.

| Component | Notation | Role in the Model |
| --- | --- | --- |
| Dependent Variable | Y   | The quantitative response being predicted. |
| --- | --- | --- |
| Independent Variables | X_1, \\dots, X_k | Features used to explain the variation in Y. |
| --- | --- | --- |
| Intercept | \\beta_0 | The value of Y when all X are zero. |
| --- | --- | --- |
| Coefficients | \\beta_1, \\dots, \\beta_k | The marginal change in Y per unit change in X. |
| --- | --- | --- |
| Error Term | \\epsilon | Unobserved factors and random noise. |
| --- | --- | --- |
| Residual | e   | The empirical difference between \[span_11\](start_span)\[span_11\](end_span)\[span_13\](start_span)\[span_13\](end_span)y and \\hat{y}. |
| --- | --- | --- |

## Mathematical Derivation of Ordinary Least Squares

The Ordinary Least Squares (OLS) estimator is derived through the application of differential calculus to minimize a loss function, specifically the sum of squared residuals. Squaring the residuals serves two critical purposes: it ensures that positive and negative deviations do not cancel each other out, and it penalizes larger errors more heavily than smaller ones, which is desirable in many optimization contexts.

### Scalar Derivation for Simple Linear Regression

In the simple linear regression case, where there is only one predictor x, the model is y_t = \\beta_1 + \\beta_2 x_t + e_t. The objective function to be minimized is the Sum of Squared Errors (S):

To find the minimum, one must take the partial derivatives of S with respect to \\beta_1 and \\beta_2 and set them to zero.

For the intercept \\beta_1:

Dividing by T and rearranging yields the first condition for the estimator b_1:

where \\bar{y} and \\bar{x} are the sample means of the dependent and independent variables, respectively.

For the slope \\beta_2:

Substituting b_1 = \\bar{y} - b_2 \\bar{x} into this equation allows for the isolation of b_2:

Rearranging these terms lead to the standard formula for the OLS slope estimator :$$b_2 = \\frac{\\sum (x_t - \\bar{x})(y_t - \\bar{y})}{\\sum (x_t - \\bar{x})^2}$$This coefficient can also be expressed in terms of the correlation coefficient r and the standard deviations s_y and s_x :

This relationship indicates that the slope is effectively the correlation between the two variables, scaled by the ratio of their respective variabilities.

### Matrix Derivation for Multiple Linear Regression

For models involving multiple predictors, matrix algebra provides a concise and generalized framework for derivation. Let Y be an n \\times 1 vector of observations, X an n \\times k matrix of independent variables (including a column of ones for the intercept), and \\beta a k \\times 1 vector of parameters. The error sum of squares is expressed in quadratic form as :

Given that \\beta^T X^T Y is a scalar, it is equal to its transpose Y^T X \\beta. Thus, the expression simplifies to :

Taking the gradient with respect to \\beta:

Setting the gradient to the zero vector yields the normal equations :

If the matrix X^T X is non-singular (implying the predictors are not perfectly collinear), the OLS estimator is uniquely determined by :

The second-order derivative (the Hessian) is 2X^T X. Since X^T\[span_55\](start_span)\[span_55\](end_span) X is a positive definite matrix (provided X has full rank), the solution found is guaranteed to be a global minimum for the error surface.

## The Gauss-Markov Theorem and Estimator Optimality

The prominence of OLS in statistical theory is attributed to the Gauss-Markov Theorem, which defines the conditions under which OLS is the Best Linear Unbiased Estimator (BLUE). It is a critical insight that OLS maintains this optimality within the class of linear estimators even if the underlying error distribution is not normal, provided the first two moments (mean and variance) are well-defined.

### Fundamental Assumptions for BLUE

For an OLS estimator to reach the threshold of BLUE, the following classical linear regression model (CLRM) assumptions must be satisfied :

1.  **Linearity in Parameters**: The model must be linear in the \\beta coefficients, although the X variables can be non-linear transformations.
2.  **Exogeneity (Conditional Mean Zero)**: E\[\\epsilon | X\] = 0. This implies that the error term is uncorrelated with the independent variables. If this is violated, the model suffers from endogeneity, leading to biased and inconsistent estimates.
3.  **Homoscedasticity (Constant Variance)**: Var(\\epsilon | X) = \\sigma^2 I. The variance of the error term must be constant across all observations. When variance changes with the level of predictors, heteroscedasticity occurs, which inflates standard errors and renders hypothesis tests unreliable.
4.  **No Autocorrelation**: Errors must be uncorrelated between observations, Cov(\\epsilon_i, \\epsilon_j) = 0 for i \\neq j.
5.  **No Perfect Multicollinearity**: The design matrix X must have full column rank, meaning no predictor can be written as a perfect linear combination of others.

### Significance of the BLUE Property

The term "Best" signifies that among all linear unbiased estimators, OLS has the minimum variance. "Linear" implies the estimator is a linear function of the data Y, specifically \\hat{\\beta} = AY for some matrix A. "Unbiased" ensures that the expected value of the estimator is the true population parameter (E\[\\hat{\\beta}\] = \\beta). The theorem implies that if we restrict ourselves to linear unbiased estimators, we cannot find an estimator with greater precision than OLS. However, it is possible to obtain lower variance by accepting some bias, as seen in Ridge or Lasso regression models.

## Decomposition of Variance and the ANOVA Framework

The evaluation of model performance requires partitioning the total variation of the dependent variable into portions that are explained and unexplained by the regression model. This partitioning is the foundation for calculating the coefficient of determination and conducting F-tests for model utility.

### SST, SSR, and SSE

The total variation in Y is captured by the Total Sum of Squares (SST), which measures the deviation of each observation from the sample mean \\bar{y} :

This total variation is decomposed into two orthogonal components:

1.  **Regression Sum of Squares (SSR)**: Also known as the "Explained Sum of Squares" (ESS), this measures the variation accounted for by the model :
2.  **Error Sum of Squares (SSE)**: Also known as the "Residual Sum of Squares" (RSS), this measures the remaining unexplained variation :

The relationship is formally defined by the identity SST = SSR + SSE. The mathematical proof of this identity rests on the fact that the OLS normal equations ensure that the residuals e_i are uncorrelated with the fitted values \\hat{y}\_i, causing the cross-product term 2\\sum(\\hat{y}\_i - \\bar{y})(y_i - \\hat{y}\_i) to vanish.

### Mean Squares and Model Assessment

By dividing these sums of squares by their respective degrees of freedom, we obtain Mean Squares (MS), which are estimates of variance :

| Source of Variation | Sum of Squares (SS) | Degrees of Freedom (df) | Mean Square (MS) |
| --- | --- | --- | --- |
| Regression | SSR | k   | MSR = SSR / k |
| --- | --- | --- | --- |
| Error (Residual) | SSE | n - k - 1 | MSE = SSE / (n - k - 1) |
| --- | --- | --- | --- |
| Total | SST | n - 1 | MST = SST / (n - 1) |
| --- | --- | --- | --- |

The ratio F = MSR / MSE serves as a test statistic to determine if the predictors as a whole have significant explanatory power over a null model containing only the mean.

## The Coefficient of Determination: R-squared and Adjusted R-squared

The R^2 statistic is the most prevalent metric for assessing the "goodness of fit" of a linear model. It quantifies the proportion of the variance in the dependent variable that is predictable from the independent variables.

### Derivation of R-squared

R^2 is defined as the ratio of explained variation to total variation :

The value of R^2 ranges from 0 to 1, where 1 indicates that the regression model perfectly explains all the variability in the data, and 0 indicates that the model provides no better prediction than the simple mean of Y. For simple linear regression, R^2 is exactly equal to the square of the Pearson correlation coefficient between x and y.

### The Limitations of R-squared and the Adjusted Metric

A significant drawback of R^2 is its monotonic property: adding any predictor to the model, regardless of its relevance or statistical significance, will either increase or maintain the R^2 value. This creates a mathematical incentive for overfitting, as an analyst could include irrelevant "noise" variables to artificially inflate the apparent fit.

The Adjusted R^2 (R^2_{adj}) addresses this by incorporating a penalty for each additional predictor. It uses the Mean Squares instead of the Sum of Squares:

The Adjusted R^2 only increases if the addition of a new predictor improves the model fit by more than would be expected by chance. This makes it a more reliable metric for model selection and comparing models with different numbers of predictors.

## Analytical Theory of Residuals

Residuals (e) are the empirical manifestations of the unobservable population error terms (\\epsilon). While we define the model in terms of errors, we evaluate it in terms of residuals. A deep understanding of residual properties is essential for validating the underlying assumptions of the OLS framework.

### Properties and Types of Residuals

In an OLS model with an intercept, the residuals possess several algebraic properties :

1.  **Zero Sum**: The sum of residuals \\sum e_i = 0, which ensures the mean of residuals is zero.
2.  **Orthogonality to Predictors**: \\sum x_{ij} e_i = 0. Residuals are uncorrelated with each of the independent variables.
3.  **Orthogonality to Fitted Values**: \\sum \\hat{y}\_i e_i = 0. The residuals carry no information that could be used to predict the fitted values.

Despite these properties, ordinary residuals have non-constant variance, even if the error terms are homoscedastic. The variance of the i^{th} residual is given by:

where h_{ii} represents the leverage of the observation. To correct for this, analysts often use Standardized Residuals (r_i) or Studentized Residuals (t_i).

| Residual Type | Formula | Application |
| --- | --- | --- |
| Ordinary | e_i = y_i - \\hat{y}\_i | Basic difference between observed and predicted. |
| --- | --- | --- |
| Standardized | r_i = e_i / (\\hat{\\sigma} \\sqrt{1 - h_{ii}}) | Identifying outliers with consistent scale. |
| --- | --- | --- |
| Studentized | t_i = e_i / (\\hat{\\sigma}\_{(i)} \\sqrt{1 - h_{ii}}) | Detecting influential outliers by excluding the observation from \\sigma estimate. |
| --- | --- | --- |
| Pearson | r_{Pi} = \\sqrt{w_i}(y_i - \\hat{y}\_i) | Used in Weighted Least Squares to account for known variance structures. |
| --- | --- | --- |

### Influence and Leverage

Not all data points contribute equally to the estimation of regression coefficients. Influence is the product of two factors: the outlier status of a point (residual magnitude) and its leverage (how unusual the X values are).

Leverage is mathematically derived from the "Hat Matrix" (H), which projects Y onto the space spanned by X :

The diagonal elements h_{ii} of the matrix H represent the leverage of each case. A high leverage point is far from the average covariate pattern. If such a point also has a large residual, it becomes an "influential observation," meaning its removal would significantly shift the regression coefficients. Cook's Distance is a standard summary statistic used to quantify this influence.

## Model Diagnostics through Visual Analytics

Residual plots are the primary diagnostic tool for assessing whether the OLS assumptions hold for a specific dataset. Interpreting these plots requires a blend of statistical theory and subjective judgment.

### Residuals vs. Fitted Values Plot

This plot is used to verify the linearity and homoscedasticity assumptions. In a well-behaved model, the residuals should "bounce randomly" around the horizontal zero line, forming a "horizontal band" with no discernible pattern.

- **Curvature (U-shape or S-shape)**: Suggests non-linearity, indicating that the model has failed to capture a quadratic or higher-order relationship in the data.
- **Funnel/Megaphone Shape**: Indicates heteroscedasticity, where the spread of residuals increases or decreases with the predicted values. This suggests that the variance is not constant, and predictions at the wider end of the funnel will be less reliable.

### Normal Q-Q Plot

The Quantile-Quantile (Q-Q) plot assesses the normality of residuals. It charts the quantiles of the empirical residuals against the theoretical quantiles of a normal distribution. If the points fall approximately along a 45-degree straight line, the normality assumption is satisfied. Systematic deviations at the tails suggest "heavy-tailed" or skewed distributions, which can affect the validity of p-values and confidence intervals in small samples.

### Scale-Location and Residuals vs. Leverage Plots

The Scale-Location plot (plotting the square root of standardized residuals against fitted values) provides a clearer view of heteroscedasticity by neutralizing the sign of the residuals. Meanwhile, the Residuals vs. Leverage plot identifies points that have high influence over the model's coefficients. Observations outside the Cook's distance bounds are potential candidates for removal or further investigation, as they exert disproportionate pull on the regression line.

## Practical Computational Examples and Solutions

To solidify the theoretical framework, consider the manual calculation process for both simple and multiple linear regression models using representative datasets.

### Case Study 1: Biometric Estimation (24 Observations)

Consider a scenario where height (x) is used to predict weight (y) for a sample of 24 individuals. The following summary statistics are provided:

- Sample size n = 24
- Mean height \\bar{x} = 66.92; Standard deviation s_x = 2.02
- Mean weight \\bar{y} = 118.13; Standard deviation s_y = 8.46
- Correlation coefficient r = 0.825

**Step 1: Calculate the Slope (b_1)** The slope is derived from the correlation and the ratio of variabilities :

The interpretation is that for each 1-inch increase in height, weight is expected to increase by approximately 3.455 lbs.

**Step 2: Calculate the Intercept (b_0)** The line must pass through the point of means (\\bar{x}, \\bar{y}) :

The resulting regression equation is \\hat{y} = -113.08 + 3.455x.

**Step 3: Model Fit and Inference** The R^2 value is calculated as the square of the correlation :

This indicates that height explains 68.1% of the variation in weight. If a specific individual in the dataset is 69 inches tall and weighs 125 lbs, the predicted weight would be \\hat{y} = -113.08 + 3.455(69) = 125.315 lbs. The residual for this observation is 125 - 125.315 = -0.315, indicating the model slightly overpredicted the weight for this specific case.

### Case Study 2: Multiple Regression via Matrix Operations

Consider a dataset with 3 observations and 2 predictors (including the intercept). The task is to find the best fit for points (0, 1), (1, 0), and (2, 2) where the independent variable is x. The design matrix X and response vector Y are:

**Step 1: Compute X^T X and its Inverse**

**Step 2: Compute X^T Y**

**Step 3: Solve for \\hat{\\beta}**

The estimated model is \\hat{y} = 0.5 + 0.5x. One can verify that the residuals e = \[0.5, -1.0, 0.5\]^T sum to zero and are orthogonal to the column space of X.

## Inference and the Central Limit Theorem

While OLS provides the BLUE estimates without the need for distributional assumptions on the errors, the construction of confidence intervals and the calculation of p-values for hypothesis testing traditionally require the assumption of normally distributed errors (\\epsilon \\sim N(0, \\sigma^2)).

### The Role of Normality in Small Samples

In small datasets, if the error terms are not normal, the sampling distribution of the coefficients \\hat{\\beta} will not be normal, making t-tests and F-tests invalid. However, this requirement is often relaxed in large samples due to the Central Limit Theorem (CLT). The CLT states that the sum of many independent, identically distributed variables approximates a normal distribution regardless of the original distribution. Since each individual error term can be viewed as the sum of many small, omitted independent factors, the assumption of normality is often theoretically justifiable even if it cannot be perfectly observed.

### Asymptotic Properties of OLS

As the sample size n approaches infinity, OLS estimators gain the property of consistency. Consistency implies that the estimator converges in probability to the true population parameter (\\hat{\\beta} \\to \\beta as n \\to \\infty). This property is maintained even in the presence of non-normal or heteroscedastic errors, provided the exogeneity assumption E\[\\epsilon | X\] = 0 is satisfied.

## Violations of Assumptions and Remedial Strategies

In practical machine learning applications, the strict assumptions of the Gauss-Markov theorem are frequently violated. Identifying these violations and implementing corrections is a critical phase of model building.

### Multicollinearity

Multicollinearity arises when predictors are highly correlated, making it mathematically difficult for the model to distinguish their individual effects. This results in very large standard errors and unstable coefficient estimates, where small changes in the data can lead to drastic swings in \\hat{\\beta}.

- **Detection**: Variance Inflation Factors (VIF) are used to identify variables that are highly redundant.
- **Correction**: Removing one of the correlated variables or using dimensionality reduction techniques such as Principal Component Analysis (PCA) can mitigate these issues.

### Endogeneity and Bias

Endogeneity is arguably the most serious violation, as it creates bias that does not disappear with larger sample sizes. If E\[\\epsilon | X\] \\neq 0, OLS attributes some of the variance caused by the error term to the independent variables.

- **Omitted Variable Bias**: Occurs when a variable that influences both X and Y is excluded from the model.
- **Simultaneity**: Occurs when there is a reverse causality, where Y also influences X.
- **Correction**: The use of Instrumental Variables (IV) or structural equation modeling is required to obtain consistent estimates in these scenarios.

### Heteroscedasticity

While heteroscedasticity does not cause bias, it invalidates the OLS standard errors.

- **Correction**: Analysts can employ Robust Standard Errors (White's errors), which provide valid inference by adjusting for the unknown variance structure. Alternatively, Weighted Least Squares (WLS) can be used if the variance function is known, assigning more weight to observations with lower variance.

## Final Synthesis and Conclusions

Regression analysis remains a foundational pillar of predictive modeling, providing a mathematically elegant and theoretically robust framework for understanding the interplay between variables. The Ordinary Least Squares method, through the minimization of squared residuals, yields estimators that are optimal under the Gauss-Markov assumptions. The decomposition of total variability into explained (SSR) and unexplained (SSE) components allows for a rigorous assessment of model fit through R^2 and the F-test, while the Adjusted R^2 provides the necessary correction for model complexity and the avoidance of overfitting.

The diagnostic process, anchored in the analysis of residuals and leverage, ensures that the insights derived from the model are not artifacts of outliers or violated assumptions. While machine learning has evolved to include non-linear and high-dimensional techniques, the transparency and inferential power of linear regression continue to make it an indispensable tool for both scientific research and industrial applications. Mastery of the mathematical derivations, the nuances of residual diagnostics, and the limitations of goodness-of-fit metrics is therefore essential for any practitioner seeking to apply statistical learning with precision and integrity.

#### Works cited

1\. Lecture 2: Linear and Logistic Regression - Sherrie Wang sherwang@stanford.edu, https://web.stanford.edu/class/cme250/files/cme250_lecture2.pdf 2. Simple Linear Regression: Everything You Need to Know | DataCamp, https://www.datacamp.com/tutorial/simple-linear-regression 3. "Gauss--Markov theorem" in - ResearchGate, https://www.researchgate.net/profile/Marc-Hallin/publication/316405046_Gauss-Markov_Theorem_in_Statistics/links/59dfd2d0aca272386b633c04/Gauss-Markov-Theorem-in-Statistics.pdf 4. 3024 Simple Linear Regression Overview - Statistics, https://users.stat.ufl.edu/~mripol/3024/Fall2004/Project1_files/3024%20Simple%20Linear%20Regression%20Overview.pdf 5. Understanding Sum of Squares: A Guide to SST, SSR, and SSE | DataCamp, https://www.datacamp.com/tutorial/regression-sum-of-squares 6. Gauss-Markov theorem - the intact one, https://theintactone.com/2023/08/15/gauss-markov-theorem/ 7. OLS in Matrix Form, https://web.stanford.edu/~mrosenfe/soc_meth_proj3/matrix_OLS_NYU_notes.pdf 8. Simple Linear Regression - MIT Open Learning Library, https://openlearninglibrary.mit.edu/assets/courseware/v1/047cd0ffc96e4e45ea75c956b88a03e7/asset-v1:MITx+15.481x+1T2021+type@asset+block/Recitation_7.pdf 9. Simple Linear Regression, https://www.colorado.edu/amath/sites/default/files/attached-files/ch12.pdf 10. Multiple Linear Regression - San Jose State University, https://www.sjsu.edu/faculty/guangliang.chen/Math261a/Ch3slides-multiple-linear-regression.pdf 11. Derivation of OLS Estimators in a Simple Regression, https://www.k-state.edu/economics/about/staff/websites/li/ppt/630/simpleols.pdf 12. 12.3 - Simple Linear Regression - Statistics Online, https://online.stat.psu.edu/stat200/book/export/html/244 13. Lecture 3: More on linear regression - MS&E 226: “Small” Data, http://web.stanford.edu/~rjohari/teaching/notes/226_lecture3_linear_regression.pdf 14. Simple linear regression - Wikipedia, https://en.wikipedia.org/wiki/Simple_linear_regression 15. 5.4 - A Matrix Formulation of the Multiple Regression Model | STAT 462 - Statistics Online, https://online.stat.psu.edu/stat462/node/132/ 16. A Modern Gauss-Markov Theorem - University of Wisconsin–Madison, https://www.ssc.wisc.edu/~bhansen/papers/gauss.pdf 17. What are the consequences of the violation of Gauss-Markov assumptions? - Stats StackExchange, https://stats.stackexchange.com/questions/605213/what-are-the-consequences-of-the-violation-of-gauss-markov-assumptions 18. Gauss-Markov Assumptions & OLS Properties | Intro to... - Fiveable, https://fiveable.me/introduction-econometrics/unit-4 19. A Modern Gauss-Markov Theorem, https://users.ssc.wisc.edu/~behansen/papers/ecnmt_2022.pdf 20. 7 Classical Assumptions of Ordinary Least Squares (OLS) Linear ..., https://statisticsbyjim.com/regression/ols-linear-regression-assumptions/ 21. Violations of Gauss Markov Assumptions: Omitted Variable Bias - Search StFX.ca, https://people.stfx.ca/tleo/econ370term2lec3.pdf 22. The Gauss-Markov Theorem - STA 211: The Mathematics of Regression - Stat@Duke, https://www2.stat.duke.edu/courses/Spring23/sta211.01/slides/lec-8.pdf 23. Chapter 2 Multiple Regression (Part 2) - NJIT, https://web.njit.edu/~wguo/Math644_2012/Math644_Chapter%202_part2.pdf 24. 2.5 - The Coefficient of Determination, r-squared | STAT 462, https://online.stat.psu.edu/stat462/node/95/ 25. R2.pdf - Computer Sciences User Pages, https://pages.stat.wisc.edu/~mchung/papers/R2.pdf 26. R-Squared, Adjusted R-Squared and the Degree of Freedom | by Md Junaid Alam | Geek Culture | Medium, https://medium.com/geekculture/r-squared-adjusted-r-squared-and-the-degree-of-freedom-80e7203a7e27 27. Derivation of R² and adjusted R² | The Book of Statistical Proofs, https://statproofbook.github.io/P/rsq-der.html 28. Multiple Linear Regression, https://www.colorado.edu/amath/sites/default/files/attached-files/lesson12_multregression.pdf 29. Coefficient of determination - Wikipedia, https://en.wikipedia.org/wiki/Coefficient_of_determination 30. Adjusted R-Squared: A Clear Explanation with Examples | DataCamp, https://www.datacamp.com/tutorial/adjusted-r-squared 31. R-squared VS Adjusted R-squared - Simplified | Towards Data Science, https://towardsdatascience.com/r-squared-vs-adjusted-r-squared-simplified-543993e69558/ 32. Regression Diagnostics | Stat@Duke, https://www2.stat.duke.edu/courses/Fall21/sta521.001/papers/Applied_Linear_Regression_CHAPTER_9_Regression_Diagnostics.pdf 33. 4.2 - Residuals vs. Fits Plot | STAT 462 - Statistics Online, https://online.stat.psu.edu/stat462/node/117/ 34. Diagnostic plots for linear regression - NIRPY Research, https://nirpyresearch.com/diagnostic-plots-for-linear-regression/ 35. Residuals and regression diagnostics: focusing on logistic regression - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC4885900/ 36. Diagnostic Plots for Model Evaluation - GeeksforGeeks, https://www.geeksforgeeks.org/r-machine-learning/diagnostic-plots-for-model-evaluation/ 37. \[Q\] Why do we need the errors to be normally distributed in Linear Regression? - Reddit, https://www.reddit.com/r/statistics/comments/f6qt0q/q_why_do_we_need_the_errors_to_be_normally/ 38. Are the Error Terms Normally Distributed in a Linear Regression Model?, https://towardsdatascience.com/are-the-error-terms-normally-distributed-in-a-linear-regression-model-15e6882298a4/ 39. Should I Always Transform My Variables to Make Them Normal? - UVA Library, https://library.virginia.edu/data/articles/normality-assumption 40. Why assume normal errors in regression? - Cross Validated - Stats StackExchange, https://stats.stackexchange.com/questions/668523/why-assume-normal-errors-in-regression