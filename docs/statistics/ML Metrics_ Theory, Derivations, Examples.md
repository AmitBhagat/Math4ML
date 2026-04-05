# Theoretical Foundations and Mathematical Frameworks for Machine Learning Evaluation Metrics

The evaluation of machine learning models constitutes a rigorous statistical discipline that transcends simple binary comparisons of "correct" or "incorrect." As predictive algorithms become increasingly integrated into high-stakes domains such as oncology, financial risk assessment, and autonomous systems, the metrics used to validate their performance must be rooted in deep mathematical theory and information science. This report provides an exhaustive analysis of classification and regression metrics, detailing their probabilistic underpinnings, formal derivations, and practical applications within complex data topologies.

## The Taxonomy of Classification Performance

In the supervised learning paradigm, classification involves the assignment of an input vector to a discrete category. While the ultimate objective is to minimize error, the nature of that error often dictates the choice of metric. The fundamental building block for all classification evaluation is the confusion matrix, a structured representation that disaggregates the model's predictive outcomes against the ground-truth observations.<sup>1</sup>

### The Binary Confusion Matrix and Error Typology

A confusion matrix for a binary task—where the outcomes are typically labeled as "Positive" (1) and "Negative" (0)—categorizes results into four distinct quadrants. These counts serve as the primary variables for subsequent mathematical derivations.<sup>1</sup>

1.  **True Positives (TP):** The instances where the model correctly identifies the positive class. In clinical diagnostics, this represents a patient with a disease correctly flagged as infected.<sup>3</sup>
2.  **True Negatives (TN):** The instances where the model correctly identifies the negative class, such as a healthy patient correctly identified as non-infected.<sup>2</sup>
3.  **False Positives (FP):** Occurring when the model incorrectly assigns a positive label to a negative instance. Statistically, this is a Type I error or a "false alarm." For image recognition, this might involve misidentifying a "Not Dog" image as a "Dog".<sup>2</sup>
4.  **False Negatives (FN):** Occurring when the model incorrectly assigns a negative label to a positive instance. This is a Type II error, often considered more dangerous in safety-critical applications.<sup>2</sup>

| **Actual \\ Predicted** | **Predicted Positive** | **Predicted Negative** | **Total Actual** |
| --- | --- | --- | --- |
| **Actual Positive** | True Positive (TP) | False Negative (FN) | TP + FN |
| --- | --- | --- | --- |
| **Actual Negative** | False Positive (FP) | True Negative (TN) | FP + TN |
| --- | --- | --- | --- |
| **Total Predicted** | TP + FP | FN + TN | Total Samples |
| --- | --- | --- | --- |

The distribution of these values provides the first layer of insight into a model's bias and discriminative capability. For instance, a model with a high FP count is considered "over-zealous," while one with a high FN count is "under-sensitive".<sup>2</sup>

### Global Accuracy and the Imbalance Paradox

Accuracy is the most basic metric used to measure overall performance. It represents the ratio of correct predictions to the total number of observations.<sup>1</sup>

<sup></sup>

While mathematically straightforward, accuracy is often a deceptive measure of model quality, particularly in the presence of class imbalance.<sup>2</sup> In a dataset where 99% of the samples belong to the negative class, a non-discriminative model that predicts "Negative" for every input will achieve 99% accuracy. This "Accuracy Paradox" renders the metric useless for identifying minority class instances, which are frequently the focus of the investigation.<sup>1</sup>

Consider a scenario with 100 people: 40 are pregnant (Positive) and 60 are not (Negative).<sup>3</sup> If the model predicts:

- TP = 30
- FN = 10
- TN = 55
- FP = 5

The accuracy is calculated as:

However, if the dataset were imbalanced (e.g., only 10% positive), the high TN count would mask the model's inability to detect the positive class. This necessitates the use of more granular metrics like Precision and Recall.<sup>1</sup>

## Precision, Recall, and the Validity of Positive Predictions

To move beyond the limitations of accuracy, practitioners isolate the performance on the positive class using two complementary measures: Precision and Recall.

### Precision: The Measure of Exactness

Precision, or Positive Predictive Value (PPV), quantifies the reliability of the model's positive predictions.<sup>2</sup> It answers the question: "Of all instances identified as positive, how many are truly positive?".<sup>3</sup>

<sup></sup>

Precision is optimized to 1.0 when the False Positive count is zero.<sup>3</sup> This metric is critical in scenarios where a False Positive carries a significant penalty, such as in email spam filtering or legal evidence analysis, where falsely flagging a legitimate message or person has high costs.<sup>2</sup>

### Recall: The Measure of Completeness

Recall, also known as Sensitivity or the True Positive Rate (TPR), measures the ability of the model to find all positive instances within the dataset.<sup>2</sup> It answers the question: "Of all actual positive cases, how many did the model find?".<sup>3</sup>

<sup></sup>

Recall is optimized to 1.0 when the False Negative count is zero.<sup>3</sup> High recall is paramount in medical testing for life-threatening conditions, where missing a single positive case (False Negative) is unacceptable, even at the cost of more False Positives.<sup>3</sup>

### The Precision-Recall Trade-off and Boundary Decisions

In practice, increasing precision often leads to a decrease in recall, and vice-versa.<sup>5</sup> This occurs because classification models typically output a probability score; the final class assignment depends on a chosen threshold (usually 0.5).<sup>3</sup>

- A **stringent threshold** (e.g., 0.9) increases precision but decreases recall, as fewer instances meet the high bar for a positive prediction.
- A **lenient threshold** (e.g., 0.1) increases recall but decreases precision, as more "marginal" instances are labeled positive, including more actual negatives.<sup>5</sup>

Using the Breast Cancer Wisconsin dataset as an example <sup>5</sup>:

- TP = 60
- FN = 4
- FP = 1
- TN = 106

Precision = 

Recall = 

If the threshold is lowered to ensure all malignant tumors are caught (Recall  1.0), the precision might drop as benign tumors are misclassified as malignant.<sup>5</sup>

## The F1-Score: Mathematical Derivation and Harmonic Justification

The F1-score provides a single numeric measure that balances Precision () and Recall (). It is defined as the harmonic mean of the two.<sup>1</sup>

<sup></sup>

Expanding this using the raw counts from the confusion matrix <sup>4</sup>:

### Why the Harmonic Mean?

A critical theoretical question is why the harmonic mean is used instead of the arithmetic mean (). The arithmetic mean allows for an "unbalanced" performance to be masked.<sup>6</sup> For instance, if a model has  and , the arithmetic mean is , which suggests moderate performance despite the model failing to identify any positive cases. The harmonic mean for this case would be , correctly reflecting the model's failure.<sup>7</sup>

| **Metric** | **Model A (P=0.9, R=0.9)** | **Model B (P=1.0, R=0.1)** |
| --- | --- | --- |
| **Arithmetic Mean** | 0.90 | 0.55 |
| --- | --- | --- |
| **Geometric Mean** | 0.90 | 0.31 |
| --- | --- | --- |
| **Harmonic Mean (F1)** | 0.90 | 0.18 |
| --- | --- | --- |

The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals.<sup>9</sup> In the context of F1, it gives equal weight to each value's reciprocal, ensuring that the lower of the two metrics (P or R) has a more significant impact on the final score.<sup>8</sup> This "punishes" extreme values, incentivizing the development of models that achieve a high balance between precision and recall.<sup>7</sup>

### 3D Visualization of the F1-Score Surface

Visualizing the F1-score as a function of Precision and Recall reveals a curved plane that drops sharply toward the origin.<sup>7</sup> While the arithmetic mean creates a flat, linear plane, the F1-score surface is concave. This geometric property explains why F1 is a better indicator for imbalanced datasets: it captures the "bottleneck" effect where low performance in either dimension limits the total utility of the classifier.<sup>7</sup>

## Discriminative Power and the Area Under the ROC Curve (ROC-AUC)

While the metrics discussed thus far depend on a single, fixed classification threshold, the Receiver Operating Characteristic (ROC) curve evaluates a model across _all possible_ thresholds.<sup>12</sup>

### The Geometric Construction of the ROC Curve

The ROC curve is created by plotting the True Positive Rate (Recall) on the y-axis against the False Positive Rate (FPR) on the x-axis for various thresholds.<sup>4</sup>

- **FPR (1 - Specificity):** The proportion of actual negatives incorrectly identified as positives.<sup>4</sup>  
    
- The curve typically begins at , representing a threshold so high that no positives are identified, and ends at , representing a threshold so low that everything is identified as positive.<sup>15</sup>

### Probabilistic Interpretation of the AUC

The Area Under the Curve (AUC) is a scalar value representing the overall performance of the classifier.<sup>13</sup> It has a specific probabilistic meaning: given a randomly chosen positive instance  and a randomly chosen negative instance , the AUC is the probability that the model will assign a higher score to  than to .<sup>13</sup>

#### Formal Derivation of the Probabilistic Interpretation

Let  be the True Positive Rate and  be the False Positive Rate at threshold .<sup>13</sup>

1.  <sup></sup>
2.  <sup></sup>

The AUC is defined as the integral of  with respect to  <sup>13</sup>:

Let  be the probability density function (PDF) of scores for the negative class. Since  is the complementary cumulative distribution function (CCDF) for the negative class, its derivative is .<sup>13</sup> Performing a change of variables where , we obtain:

This integral represents the expected value of the probability that the score for a random positive instance is greater than , where  is drawn from the distribution of scores for the negative class. Thus:

This explains why an AUC of 0.5 represents a random classifier (equivalent to a coin toss) and an AUC of 1.0 represents a perfect discriminator.<sup>13</sup>

### Equivalence to the Wilcoxon-Mann-Whitney Test

The AUC is mathematically equivalent to the Wilcoxon-Mann-Whitney (WMW) U-statistic, divided by the product of the number of positive and negative samples.<sup>12</sup> The WMW test is a non-parametric test of the null hypothesis that it is equally likely that a randomly selected value from one population will be less than or greater than a randomly selected value from a second population.<sup>16</sup>

The relation is:

Where  is the number of pairs  where the positive instance is ranked higher than the negative instance.<sup>12</sup> This allows AUC to be calculated without plotting the ROC curve by simply iterating through all possible positive-negative pairs and counting "wins".<sup>17</sup>

### Numerical Example: The Tortoise and the Hare Ranking

Consider a dataset with 6 tortoises (Group 1) and 6 hares (Group 2), ranked by their race completion times.<sup>16</sup> Direct Method: For each tortoise, count how many hares it beats.

- Tortoise 1 beats 6 hares.
- Tortoise 2 beats 1 hare.
- Tortoises 3, 4, 5, 6 beat 1 hare each. Total .<sup>16</sup>

The maximum possible  is .

.

This ranking-based approach is used by many software packages to calculate AUC efficiently on large datasets.<sup>12</sup>

### Trapezoidal Rule for AUC Integration

When the ROC curve is constructed from a finite set of points , the area is typically estimated using the trapezoidal rule.<sup>13</sup> The area of each segment between two points on the FPR axis is:

Summing these individual trapezoids across the entire range $$ yields the total AUROC.<sup>17</sup> This method is preferred in packages like Prism and ROCR because it correctly handles ties by averaging the effect between points.<sup>15</sup>

## Regression Metrics: Statistical Properties of Errors

In regression analysis, metrics evaluate the distance between the predicted scalar  and the ground-truth . The residuals, defined as , form the basis for Mean Squared Error (MSE) and Mean Absolute Error (MAE).<sup>20</sup>

### Mean Squared Error (MSE) and the L2 Norm

MSE is the average of the squared residuals.<sup>20</sup>

<sup></sup>

MSE corresponds to the squared Euclidean () norm.<sup>22</sup> Because it squares the errors, it disproportionately penalizes large residuals. This makes MSE sensitive to outliers; a single data point with a massive error can dominate the entire loss function.<sup>20</sup>

#### Mathematical Proof: MSE Minimizes to the Mean

To find the constant predictor  that minimizes the MSE for a set of values , we define the objective function:

Taking the derivative with respect to  and setting it to zero:

Thus, the optimal value for  is the sample mean. Minimizing MSE is equivalent to modeling the conditional mean of the target distribution.<sup>24</sup>

### Mean Absolute Error (MAE) and the L1 Norm

MAE is the average of the absolute residuals.<sup>20</sup>

<sup></sup>

MAE corresponds to the Manhattan () norm.<sup>22</sup> Because the penalty scales linearly with error, MAE is robust to outliers.<sup>20</sup>

#### Mathematical Proof: MAE Minimizes to the Median

To find the constant predictor  that minimizes the MAE:

Using the Leibniz integral rule to differentiate the objective function (split into two parts where  and ) <sup>26</sup>:

This condition is satisfied when  is the median. Thus, a model trained with MAE loss will converge toward the conditional median, making it a "robust estimator" in the presence of noise or heavy-tailed distributions.<sup>24</sup>

### Comparison of Sensitivity: A Numerical Example

Consider a dataset of errors: , where  is an outlier.<sup>25</sup>

- **MAE:** 
- **MSE:** 
- **RMSE:** 

The MSE/RMSE values are drastically pulled by the outlier, whereas MAE remains relatively stable. If the model is used for financial forecasting where a large error is catastrophic (e.g., bankruptcy), MSE is appropriate. If the model is for a recommender system where we want a "typical" user experience regardless of extreme cases, MAE is better.<sup>20</sup>

| **Feature** | **MSE (Mean Squared Error)** | **MAE (Mean Absolute Error)** |
| --- | --- | --- |
| **Statistical Target** | Conditional Mean | Conditional Median |
| --- | --- | --- |
| **Outlier Handling** | Highly sensitive; squares large errors | Robust; treats errors linearly |
| --- | --- | --- |
| **Optimization** | Smooth, differentiable everywhere | Non-differentiable at zero; constant gradient |
| --- | --- | --- |
| **Units** | Squared units (e.g., ) | Same as original data (e.g., $$ |
| --- | --- | --- |
| **Best Use Case** | When large errors must be discouraged | When data is noisy or robust estimates are needed |
| --- | --- | --- |

## Information Theory and Cross-Entropy

In probabilistic classification, the model does not just predict a class; it predicts a probability distribution  over the classes. Cross-entropy measures how much the predicted distribution  differs from the true distribution .<sup>27</sup>

### Shannon Entropy: The Foundation of Uncertainty

Information theory, pioneered by Claude Shannon, defines "information content" as the surprise of an event.<sup>28</sup> If an event  has probability , its information content  is:

The Shannon Entropy  is the expected value of the information content <sup>28</sup>:

Entropy is maximized when all outcomes are equally likely (maximum uncertainty) and minimized (at zero) when one outcome is certain.<sup>30</sup>

### KL Divergence: Relative Entropy

The Kullback-Leibler (KL) Divergence measures the distance from  to .<sup>27</sup> $$D_{KL}(P |

| Q) = \\sum_{x \\in \\mathcal{X}} P(x) \\log \\frac{P(x)}{Q(x)}$$

KL divergence is always non-negative and is zero if and only if . It is asymmetric, meaning $D_{KL}(P |

| Q) \\neq D_{KL}(Q | | P)$, and thus is not a true distance metric in the geometric sense.<sup>32</sup>

### The Decomposition of Cross-Entropy

Cross-entropy  measures the average number of bits needed to identify an event from  when using a coding scheme optimized for .<sup>27</sup> It is derived as:

The relationship between these terms is:

$$H(P, Q) = H(P) + D_{KL}(P |

| Q)$$

In a supervised learning context, the true labels  are fixed, so  is a constant. Minimizing the cross-entropy  is therefore mathematically equivalent to minimizing the KL divergence between the model's predictions and the actual labels.<sup>27</sup>

### Derivation from Maximum Likelihood Estimation (MLE)

Cross-entropy arises naturally from the Principle of Maximum Likelihood.<sup>27</sup> In a binary classification problem (Logistic Regression), for each sample , we have a label  and a predicted probability .<sup>34</sup>

The likelihood of the entire dataset is the product of the probabilities of each observation <sup>35</sup>:

To find the optimal parameters , we maximize the log-likelihood (LL):

The standard Binary Cross-Entropy (BCE) loss is the negative average log-likelihood <sup>31</sup>:

For multi-class classification, this is extended using the Softmax function to generate a probability vector for  classes <sup>34</sup>:

Where  is 1 if the true class for sample  is , and 0 otherwise. This unrolling of the sum shows that for each sample, the loss is simply , which penalizes overconfident incorrect predictions logarithmically.<sup>29</sup>

## Computational Implementation and Gradient Dynamics

The choice of metric impacts not only how we judge a model but also how it learns. Gradient-based optimization relies on the derivatives of these loss functions.

### Gradient Behavior of MSE vs. MAE

- **MSE Gradients:** The derivative of  is . The gradient magnitude is proportional to the error.<sup>24</sup> When the prediction is far from the target, the gradient is large, forcing rapid correction. As it approaches the target, the gradient shrinks, allowing for fine-tuning without oscillation.<sup>24</sup>
- **MAE Gradients:** The derivative of  is . The gradient magnitude is constant regardless of error size.<sup>24</sup> This can cause the model to overshoot the optimum and oscillate unless the learning rate is carefully decayed.<sup>24</sup>

### Cross-Entropy and the Sigmoid/Softmax Gradient

In logistic regression and neural networks, cross-entropy is almost always paired with Sigmoid (binary) or Softmax (multiclass) activation functions.<sup>34</sup>

- The **vanishing gradient** problem occurs when the Sigmoid output is near 0 or 1, as the derivative  approaches zero.
- The cross-entropy loss mitigates this. When calculating the derivative of the BCE loss with respect to the pre-activation weight , the terms cancel out to yield .<sup>27</sup>
- This result is mathematically elegant: the gradient is simply the input  scaled by the error . This is identical to the gradient of MSE for linear regression, ensuring efficient and stable learning.<sup>27</sup>

## Integrated Performance Assessment: A Synthetic Perspective

Selecting the appropriate metric requires a holistic understanding of the problem's constraints. A comprehensive evaluation strategy often employs multiple metrics to capture different facets of performance.

| **Domain** | **Prioritized Metrics** | **Rationale** |
| --- | --- | --- |
| **Medical Screening** | Recall, ROC-AUC | Identifying all positive cases is vital; threshold-invariance allows for tuning sensitivity later.<sup>3</sup> |
| --- | --- | --- |
| **Financial Fraud** | Precision, F1-Score | False Positives lead to customer friction and operational costs; balancing P and R is essential.<sup>5</sup> |
| --- | --- | --- |
| **Recommender Systems** | MAE, Rank Metrics | User ratings are often noisy; robust estimates are preferred over minimizing rare large deviations.<sup>24</sup> |
| --- | --- | --- |
| **Physics/Engineering** | MSE, RMSE | Precise accuracy and penalizing large structural errors are critical for safety.<sup>20</sup> |
| --- | --- | --- |
| **Generative Models** | Cross-Entropy, Perplexity | Measures how well the model approximates the true data-generating distribution.<sup>27</sup> |
| --- | --- | --- |

### Summary of Explained Solutions

#### Classification Example: COVID-19 X-Ray Detection

Given: TP=261, TN=193, FP=107, FN=39 (Total=600).<sup>1</sup>

1.  Accuracy: .
2.  Precision: .
3.  Recall: .
4.  F1-Score: .

#### Regression Example: Housing Price Residuals

Given Error:  (Outlier). MSE Penalty: . MAE Penalty: . Result: MSE focuses the model on reducing the $20$ error significantly more than MAE, which treats it as just another error segment.<sup>25</sup>

#### Cross-Entropy Example: Sentiment Analysis

True Label: Positive (). Model Logits: . Softmax: . Loss: . If model predicted  (): Loss:  (Higher penalty for wrong confidence).<sup>35</sup>

Through the integration of confusion matrix dynamics, rank-sum statistics, L-norm variance, and information-theoretic divergence, the evaluation of machine learning models is revealed as a multi-dimensional optimization problem. Professional competence in this field requires moving beyond the calculation of Accuracy toward a nuanced application of metrics that align with the specific statistical and operational requirements of the deployment environment.

#### Works cited

1.  Evaluation metrics and statistical tests for machine learning - PMC, accessed April 5, 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC10937649/
2.  Understanding the Confusion Matrix in Machine Learning - GeeksforGeeks, accessed April 5, 2026, https://www.geeksforgeeks.org/machine-learning/confusion-matrix-machine-learning/
3.  Confusion Matrix, Accuracy, Precision, Recall, F1 Score | by Harikrishnan N B - Medium, accessed April 5, 2026, https://medium.com/analytics-vidhya/confusion-matrix-accuracy-precision-recall-f1-score-ade299cf63cd
4.  Classification: Accuracy, recall, precision, and related metrics | Machine Learning, accessed April 5, 2026, https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
5.  Confusion Matrix Made Simple: Accuracy, Precision, Recall & F1-Score, accessed April 5, 2026, https://towardsdatascience.com/confusion-matrix-made-simple-accuracy-precision-recall-f1-score/
6.  Why we don't use weighted arithmetic mean instead of harmonic mean? - Cross Validated, accessed April 5, 2026, https://stats.stackexchange.com/questions/328225/why-we-dont-use-weighted-arithmetic-mean-instead-of-harmonic-mean
7.  Essential Things You Need to Know About F1-Score | Towards Data ..., accessed April 5, 2026, https://towardsdatascience.com/essential-things-you-need-to-know-about-f1-score-dbd973bf1a3/
8.  accessed April 5, 2026, https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall#:~:text=**Equal%20Weighting%3A%20**Unlike,harmonic%20mean%20than%20larger%20values.
9.  Harmonic mean - Wikipedia, accessed April 5, 2026, https://en.wikipedia.org/wiki/Harmonic_mean
10. Understanding the F1 Score - Ellie Frank - Medium, accessed April 5, 2026, https://ellielfrank.medium.com/understanding-the-f1-score-55371416fbe1
11. Understanding the F1 Score in Machine Learning: The Harmonic Mean of Precision and Recall | Picsellia, accessed April 5, 2026, https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall
12. The ROC-AUC and the Mann-Whitney U-test (Wilcoxon rank sum test) | Johannes Haupt, accessed April 5, 2026, https://johaupt.github.io/blog/Area_under_ROC_curve.html
13. Probabilistic interpretation of AUC | 0-fold Cross-Validation, accessed April 5, 2026, https://www.alexejgossmann.com/auc/
14. This document is an extract from the PhD thesis entitled “Can satellites help organic crops certification?”, pages 90-99, An - ORBi, accessed April 5, 2026, https://orbi.uliege.be/bitstream/2268/226209/14/ROC-AUC%20and%20Mann-Whitney-Wilcoxon%20statistical%20test%20P-value%20-%20SECTIONS.pdf
15. How to calculate Area Under the Curve (AUC), or the c-statistic, by hand - Cross Validated, accessed April 5, 2026, https://stats.stackexchange.com/questions/145566/how-to-calculate-area-under-the-curve-auc-or-the-c-statistic-by-hand
16. Mann–Whitney U test - Wikipedia, accessed April 5, 2026, https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test
17. A Complete Guide to Area Under Curve (AUC) - ListenData, accessed April 5, 2026, https://www.listendata.com/2014/08/learn-area-under-curve-auc.html
18. Area under the curve - GraphPad Prism 11 Statistics Guide, accessed April 5, 2026, https://www.graphpad.com/guides/prism/latest/statistics/stat_area_under_the_curve.htm
19. ROC and AUC with a Binary Predictor: a Potentially Misleading Metric - PMC, accessed April 5, 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC7695228/
20. Choosing the Right Loss Function: MSE vs. MAE in Regression Problems - Medium, accessed April 5, 2026, https://medium.com/@elmahfoudradwane/choosing-the-right-loss-function-mse-vs-mae-in-regression-problems-199e37d25e7b
21. Understanding MAE, MSE, and RMSE: Key Metrics in Machine Learning - DEV Community, accessed April 5, 2026, https://dev.to/mondal_sabbha/understanding-mae-mse-and-rmse-key-metrics-in-machine-learning-4la2
22. What are the advantages of using mean squared error instead of a mean higher power error? \[Question\] : r/statistics - Reddit, accessed April 5, 2026, https://www.reddit.com/r/statistics/comments/1ajsnbs/what_are_the_advantages_of_using_mean_squared/
23. My Notes on MAE vs MSE Error Metrics - HackerNoon, accessed April 5, 2026, https://hackernoon.com/my-notes-on-mae-vs-mse-error-metrics
24. MSE and MAE Loss Functions | Abhik Sarkar, accessed April 5, 2026, https://www.abhik.ai/concepts/machine-learning/mse-mae
25. Learn Mean Absolute Error (MAE): Robustness and Median ..., accessed April 5, 2026, https://codefinity.com/courses/v2/abf891a8-0a13-4925-bcbc-0bafe55c27be/87648e3a-43fc-49c1-976d-ed01da53cb73/17116bc5-5a5d-4bb9-af6b-3134d375de09
26. The median minimizes the mean absolute error | The Book of ..., accessed April 5, 2026, https://statproofbook.github.io/P/med-mae.html
27. Cross-entropy - Wikipedia, accessed April 5, 2026, https://en.wikipedia.org/wiki/Cross-entropy
28. Cross Entropy - Medium, accessed April 5, 2026, https://medium.com/@prajun_t/cross-entropy-cbb4a7c7553a
29. A Gentle Introduction to Cross-Entropy for Machine Learning - MachineLearningMastery.com, accessed April 5, 2026, https://machinelearningmastery.com/cross-entropy-for-machine-learning/
30. Shannon Entropy and Kullback-Leibler Divergence - Statistics & Data Science, accessed April 5, 2026, https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-28.pdf
31. Cross Entropy Loss: Intro, Applications, Code - V7 Labs, accessed April 5, 2026, https://www.v7labs.com/blog/cross-entropy-loss-guide
32. Deep Learning and Information Theory, accessed April 5, 2026, https://deep-and-shallow.com/2020/01/09/deep-learning-and-information-theory/
33. Understanding KL Divergence, Entropy, and Related Concepts | Towards Data Science, accessed April 5, 2026, https://towardsdatascience.com/understanding-kl-divergence-entropy-and-related-concepts-75e766a2fd9e/
34. Cross-Entropy, Negative Log-Likelihood, and All That Jazz ..., accessed April 5, 2026, https://towardsdatascience.com/cross-entropy-negative-log-likelihood-and-all-that-jazz-47a95bd2e81/
35. Deriving cross-entropy losses from first principles. From binary ..., accessed April 5, 2026, https://drazenzaric.com/blog/cross-entropy-loss/
36. Lecture 5: Logistic Regression 1 MLE Derivation - Zhiwei Steven Wu, accessed April 5, 2026, https://zstevenwu.com/courses/s20/csci5525/resources/slides/lecture05.pdf
37. A Brief Guide to Cross-Entropy Loss - Lightly AI, accessed April 5, 2026, https://www.lightly.ai/blog/cross-entropy-loss
38. Cross-Entropy Loss Function in Machine Learning: Enhancing Model Accuracy | DataCamp, accessed April 5, 2026, https://www.datacamp.com/tutorial/the-cross-entropy-loss-function-in-machine-learning