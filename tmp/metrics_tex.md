# Theoretical Foundations and Mathematical Frameworks for Machine Learning Evaluation Metrics

The evaluation of machine learning models constitutes a rigorous
statistical discipline that transcends simple binary comparisons of
\"correct\" or \"incorrect.\" As predictive algorithms become
increasingly integrated into high-stakes domains such as oncology,
financial risk assessment, and autonomous systems, the metrics used to
validate their performance must be rooted in deep mathematical theory
and information science. This report provides an exhaustive analysis of
classification and regression metrics, detailing their probabilistic
underpinnings, formal derivations, and practical applications within
complex data topologies.

## The Taxonomy of Classification Performance

In the supervised learning paradigm, classification involves the
assignment of an input vector to a discrete category. While the ultimate
objective is to minimize error, the nature of that error often dictates
the choice of metric. The fundamental building block for all
classification evaluation is the confusion matrix, a structured
representation that disaggregates the model\'s predictive outcomes
against the ground-truth observations.^1^

### The Binary Confusion Matrix and Error Typology

A confusion matrix for a binary task---where the outcomes are typically
labeled as \"Positive\" (1) and \"Negative\" (0)---categorizes results
into four distinct quadrants. These counts serve as the primary
variables for subsequent mathematical derivations.^1^

1.  **True Positives (TP):** The instances where the model correctly
    identifies the positive class. In clinical diagnostics, this
    represents a patient with a disease correctly flagged as
    infected.^3^

2.  **True Negatives (TN):** The instances where the model correctly
    identifies the negative class, such as a healthy patient correctly
    identified as non-infected.^2^

3.  **False Positives (FP):** Occurring when the model incorrectly
    assigns a positive label to a negative instance. Statistically, this
    is a Type I error or a \"false alarm.\" For image recognition, this
    might involve misidentifying a \"Not Dog\" image as a \"Dog\".^2^

4.  **False Negatives (FN):** Occurring when the model incorrectly
    assigns a negative label to a positive instance. This is a Type II
    error, often considered more dangerous in safety-critical
    applications.^2^

  -----------------------------------------------------------------------
  **Actual \\       **Predicted       **Predicted       **Total Actual**
  Predicted**       Positive**        Negative**        
  ----------------- ----------------- ----------------- -----------------
  **Actual          True Positive     False Negative    TP + FN
  Positive**        (TP)              (FN)              

  **Actual          False Positive    True Negative     FP + TN
  Negative**        (FP)              (TN)              

  **Total           TP + FP           FN + TN           Total Samples
  Predicted**                                           
  -----------------------------------------------------------------------

The distribution of these values provides the first layer of insight
into a model\'s bias and discriminative capability. For instance, a
model with a high FP count is considered \"over-zealous,\" while one
with a high FN count is \"under-sensitive\".^2^

### Global Accuracy and the Imbalance Paradox

Accuracy is the most basic metric used to measure overall performance.
It represents the ratio of correct predictions to the total number of
observations.^1^

![](media/image89.png){width="6.458333333333333in"
height="0.6929538495188101in"}

While mathematically straightforward, accuracy is often a deceptive
measure of model quality, particularly in the presence of class
imbalance.^2^ In a dataset where 99% of the samples belong to the
negative class, a non-discriminative model that predicts \"Negative\"
for every input will achieve 99% accuracy. This \"Accuracy Paradox\"
renders the metric useless for identifying minority class instances,
which are frequently the focus of the investigation.^1^

Consider a scenario with 100 people: 40 are pregnant (Positive) and 60
are not (Negative).^3^ If the model predicts:

- TP = 30

- FN = 10

- TN = 55

- FP = 5

The accuracy is calculated as:

![](media/image86.png){width="6.458333333333333in"
height="0.6721653543307087in"}

However, if the dataset were imbalanced (e.g., only 10% positive), the
high TN count would mask the model\'s inability to detect the positive
class. This necessitates the use of more granular metrics like Precision
and Recall.^1^

## Precision, Recall, and the Validity of Positive Predictions

To move beyond the limitations of accuracy, practitioners isolate the
performance on the positive class using two complementary measures:
Precision and Recall.

### Precision: The Measure of Exactness

Precision, or Positive Predictive Value (PPV), quantifies the
reliability of the model\'s positive predictions.^2^ It answers the
question: \"Of all instances identified as positive, how many are truly
positive?\".^3^

![](media/image88.png){width="6.458333333333333in"
height="0.6929538495188101in"}

Precision is optimized to 1.0 when the False Positive count is zero.^3^
This metric is critical in scenarios where a False Positive carries a
significant penalty, such as in email spam filtering or legal evidence
analysis, where falsely flagging a legitimate message or person has high
costs.^2^

### Recall: The Measure of Completeness

Recall, also known as Sensitivity or the True Positive Rate (TPR),
measures the ability of the model to find all positive instances within
the dataset.^2^ It answers the question: \"Of all actual positive cases,
how many did the model find?\".^3^

![](media/image94.png){width="6.458333333333333in"
height="0.6929538495188101in"}

Recall is optimized to 1.0 when the False Negative count is zero.^3^
High recall is paramount in medical testing for life-threatening
conditions, where missing a single positive case (False Negative) is
unacceptable, even at the cost of more False Positives.^3^

### The Precision-Recall Trade-off and Boundary Decisions

In practice, increasing precision often leads to a decrease in recall,
and vice-versa.^5^ This occurs because classification models typically
output a probability score; the final class assignment depends on a
chosen threshold (usually 0.5).^3^

- A **stringent threshold** (e.g., 0.9) increases precision but
  decreases recall, as fewer instances meet the high bar for a positive
  prediction.

- A **lenient threshold** (e.g., 0.1) increases recall but decreases
  precision, as more \"marginal\" instances are labeled positive,
  including more actual negatives.^5^

Using the Breast Cancer Wisconsin dataset as an example ^5^:

- TP = 60

- FN = 4

- FP = 1

- TN = 106

Precision = ![](media/image76.png){width="1.6361253280839896in"
height="0.23590660542432196in"}

Recall = ![](media/image90.png){width="1.6361253280839896in"
height="0.23590660542432196in"}

If the threshold is lowered to ensure all malignant tumors are caught
(Recall ![](media/image99.png){width="0.20170384951881015in"
height="0.2404932195975503in"} 1.0), the precision might drop as benign
tumors are misclassified as malignant.^5^

## The F1-Score: Mathematical Derivation and Harmonic Justification

The F1-score provides a single numeric measure that balances Precision
(![](media/image47.png){width="0.1574332895888014in"
height="0.2676367016622922in"}) and Recall
(![](media/image108.png){width="0.15471128608923884in"
height="0.26300962379702536in"}). It is defined as the harmonic mean of
the two.^1^

![](media/image110.png){width="6.458333333333333in"
height="0.6929538495188101in"}

Expanding this using the raw counts from the confusion matrix ^4^:

![](media/image93.png){width="6.458333333333333in"
height="0.6929538495188101in"}

### Why the Harmonic Mean?

A critical theoretical question is why the harmonic mean is used instead
of the arithmetic mean
(![](media/image92.png){width="0.7967563429571304in"
height="0.2604779090113736in"}). The arithmetic mean allows for an
\"unbalanced\" performance to be masked.^6^ For instance, if a model has
![](media/image101.png){width="0.6841852580927384in"
height="0.25847003499562554in"} and
![](media/image109.png){width="0.6814632545931758in"
height="0.2603346456692913in"}, the arithmetic mean is
![](media/image98.png){width="0.2578127734033246in"
height="0.23506452318460191in"}, which suggests moderate performance
despite the model failing to identify any positive cases. The harmonic
mean for this case would be
![](media/image105.png){width="0.2578127734033246in"
height="0.23506452318460191in"}, correctly reflecting the model\'s
failure.^7^

  -----------------------------------------------------------------------
  **Metric**              **Model A (P=0.9,       **Model B (P=1.0,
                          R=0.9)**                R=0.1)**
  ----------------------- ----------------------- -----------------------
  **Arithmetic Mean**     0.90                    0.55

  **Geometric Mean**      0.90                    0.31

  **Harmonic Mean (F1)**  0.90                    0.18
  -----------------------------------------------------------------------

The harmonic mean is the reciprocal of the arithmetic mean of the
reciprocals.^9^ In the context of F1, it gives equal weight to each
value\'s reciprocal, ensuring that the lower of the two metrics (P or R)
has a more significant impact on the final score.^8^ This \"punishes\"
extreme values, incentivizing the development of models that achieve a
high balance between precision and recall.^7^

### 3D Visualization of the F1-Score Surface

Visualizing the F1-score as a function of Precision and Recall reveals a
curved plane that drops sharply toward the origin.^7^ While the
arithmetic mean creates a flat, linear plane, the F1-score surface is
concave. This geometric property explains why F1 is a better indicator
for imbalanced datasets: it captures the \"bottleneck\" effect where low
performance in either dimension limits the total utility of the
classifier.^7^

## Discriminative Power and the Area Under the ROC Curve (ROC-AUC)

While the metrics discussed thus far depend on a single, fixed
classification threshold, the Receiver Operating Characteristic (ROC)
curve evaluates a model across *all possible* thresholds.^12^

### The Geometric Construction of the ROC Curve

The ROC curve is created by plotting the True Positive Rate (Recall) on
the y-axis against the False Positive Rate (FPR) on the x-axis for
various thresholds.^4^

- **FPR (1 - Specificity):** The proportion of actual negatives
  incorrectly identified as positives.^4^\
  ![](media/image96.png){width="6.458333333333333in"
  height="0.733902012248469in"}

- The curve typically begins at
  ![](media/image103.png){width="0.4483902012248469in"
  height="0.2355949256342957in"}, representing a threshold so high that
  no positives are identified, and ends at
  ![](media/image111.png){width="0.4483902012248469in"
  height="0.2355949256342957in"}, representing a threshold so low that
  everything is identified as positive.^15^

### Probabilistic Interpretation of the AUC

The Area Under the Curve (AUC) is a scalar value representing the
overall performance of the classifier.^13^ It has a specific
probabilistic meaning: given a randomly chosen positive instance
![](media/image81.png){width="0.3312029746281715in"
height="0.25592957130358707in"} and a randomly chosen negative instance
![](media/image61.png){width="0.3483661417322835in"
height="0.2632108486439195in"}, the AUC is the probability that the
model will assign a higher score to
![](media/image81.png){width="0.3312029746281715in"
height="0.25592957130358707in"} than to
![](media/image61.png){width="0.3483661417322835in"
height="0.2632108486439195in"}.^13^

#### Formal Derivation of the Probabilistic Interpretation

Let ![](media/image80.png){width="0.3755916447944007in"
height="0.2606146106736658in"} be the True Positive Rate and
![](media/image24.png){width="0.3875470253718285in"
height="0.2635323709536308in"} be the False Positive Rate at threshold
![](media/image45.png){width="7.291666666666667e-2in"
height="0.2754625984251968in"}.^13^

1.  ![](media/image79.png){width="2.2065627734033244in"
    height="0.2578116797900262in"}

2.  ![](media/image95.png){width="2.2185104986876643in"
    height="0.25832020997375327in"}

The AUC is defined as the integral of
![](media/image74.png){width="0.14571412948381451in"
height="0.26075240594925636in"} with respect to
![](media/image70.png){width="0.1576706036745407in"
height="0.26804024496937884in"} ^13^:

![](media/image9.png){width="6.458333333333333in"
height="0.7622495625546807in"}

Let ![](media/image15.png){width="0.4094455380577428in"
height="0.2626629483814523in"} be the probability density function (PDF)
of scores for the negative class. Since
![](media/image24.png){width="0.3875470253718285in"
height="0.2635323709536308in"} is the complementary cumulative
distribution function (CCDF) for the negative class, its derivative is
![](media/image12.png){width="0.5664063867016623in"
height="0.2602405949256343in"}.^13^ Performing a change of variables
where ![](media/image21.png){width="0.8669510061242345in"
height="0.2585640857392826in"}, we obtain:

![](media/image25.png){width="6.458333333333333in"
height="0.7414610673665791in"}

This integral represents the expected value of the probability that the
score for a random positive instance is greater than
![](media/image45.png){width="7.291666666666667e-2in"
height="0.2754625984251968in"}, where
![](media/image45.png){width="7.291666666666667e-2in"
height="0.2754625984251968in"} is drawn from the distribution of scores
for the negative class. Thus:

![](media/image18.png){width="6.458333333333333in"
height="0.5405041557305337in"}

This explains why an AUC of 0.5 represents a random classifier
(equivalent to a coin toss) and an AUC of 1.0 represents a perfect
discriminator.^13^

### Equivalence to the Wilcoxon-Mann-Whitney Test

The AUC is mathematically equivalent to the Wilcoxon-Mann-Whitney (WMW)
U-statistic, divided by the product of the number of positive and
negative samples.^12^ The WMW test is a non-parametric test of the null
hypothesis that it is equally likely that a randomly selected value from
one population will be less than or greater than a randomly selected
value from a second population.^16^

The relation is:

![](media/image16.png){width="6.458333333333333in"
height="0.7276017060367455in"}

Where ![](media/image38.png){width="0.15968175853018374in"
height="0.27145997375328085in"} is the number of pairs
![](media/image2.png){width="0.9262554680664917in"
height="0.25813648293963254in"} where the positive instance is ranked
higher than the negative instance.^12^ This allows AUC to be calculated
without plotting the ROC curve by simply iterating through all possible
positive-negative pairs and counting \"wins\".^17^

### Numerical Example: The Tortoise and the Hare Ranking

Consider a dataset with 6 tortoises (Group 1) and 6 hares (Group 2),
ranked by their race completion times.^16^ Direct Method: For each
tortoise, count how many hares it beats.

- Tortoise 1 beats 6 hares.

- Tortoise 2 beats 1 hare.

- Tortoises 3, 4, 5, 6 beat 1 hare each. Total
  ![](media/image5.png){width="2.73662510936133in"
  height="0.25774278215223095in"}.^16^

The maximum possible
![](media/image38.png){width="0.15968175853018374in"
height="0.27145997375328085in"} is
![](media/image4.png){width="0.9187981189851269in"
height="0.2353947944006999in"}.

![](media/image1.png){width="1.9496872265966754in"
height="0.23517607174103236in"}.

This ranking-based approach is used by many software packages to
calculate AUC efficiently on large datasets.^12^

### Trapezoidal Rule for AUC Integration

When the ROC curve is constructed from a finite set of points
![](media/image14.png){width="0.5785990813648294in"
height="0.25548556430446195in"}, the area is typically estimated using
the trapezoidal rule.^13^ The area of each segment between two points on
the FPR axis is:

![](media/image3.png){width="6.458333333333333in"
height="0.6929538495188101in"}

Summing these individual trapezoids across the entire range \$\$ yields
the total AUROC.^17^ This method is preferred in packages like Prism and
ROCR because it correctly handles ties by averaging the effect between
points.^15^

## Regression Metrics: Statistical Properties of Errors

In regression analysis, metrics evaluate the distance between the
predicted scalar ![](media/image17.png){width="0.10606080489938757in"
height="0.25291338582677164in"} and the ground-truth
![](media/image22.png){width="0.10606080489938757in"
height="0.27738845144356955in"}. The residuals, defined as
![](media/image43.png){width="0.9835465879265092in"
height="0.2592290026246719in"}, form the basis for Mean Squared Error
(MSE) and Mean Absolute Error (MAE).^20^

### Mean Squared Error (MSE) and the L2 Norm

MSE is the average of the squared residuals.^20^

![](media/image39.png){width="6.458333333333333in"
height="0.8454046369203849in"}

MSE corresponds to the squared Euclidean
(![](media/image32.png){width="0.2181583552055993in"
height="0.2649070428696413in"}) norm.^22^ Because it squares the errors,
it disproportionately penalizes large residuals. This makes MSE
sensitive to outliers; a single data point with a massive error can
dominate the entire loss function.^20^

#### Mathematical Proof: MSE Minimizes to the Mean

To find the constant predictor
![](media/image30.png){width="8.73578302712161e-2in"
height="0.2700153105861767in"} that minimizes the MSE for a set of
values ![](media/image52.png){width="0.8226804461942258in"
height="0.2589916885389326in"}, we define the objective function:

![](media/image35.png){width="6.458333333333333in"
height="0.8454046369203849in"}

Taking the derivative with respect to
![](media/image30.png){width="8.73578302712161e-2in"
height="0.2700153105861767in"} and setting it to zero:

![](media/image44.png){width="6.458333333333333in"
height="0.6860247156605425in"}

![](media/image84.png){width="6.458333333333333in"
height="0.5959405074365705in"}

![](media/image48.png){width="6.458333333333333in"
height="0.6721653543307087in"}

Thus, the optimal value for
![](media/image30.png){width="8.73578302712161e-2in"
height="0.2700153105861767in"} is the sample mean. Minimizing MSE is
equivalent to modeling the conditional mean of the target
distribution.^24^

### Mean Absolute Error (MAE) and the L1 Norm

MAE is the average of the absolute residuals.^20^

![](media/image23.png){width="6.458333333333333in"
height="0.8454046369203849in"}

MAE corresponds to the Manhattan
(![](media/image33.png){width="0.2181583552055993in"
height="0.2649070428696413in"}) norm.^22^ Because the penalty scales
linearly with error, MAE is robust to outliers.^20^

#### Mathematical Proof: MAE Minimizes to the Median

To find the constant predictor
![](media/image30.png){width="8.73578302712161e-2in"
height="0.2700153105861767in"} that minimizes the MAE:

![](media/image26.png){width="6.458333333333333in"
height="0.8454046369203849in"}

Using the Leibniz integral rule to differentiate the objective function
(split into two parts where
![](media/image34.png){width="0.5139676290463692in"
height="0.26081911636045496in"} and
![](media/image36.png){width="0.5139676290463692in"
height="0.26081911636045496in"}) ^26^:

![](media/image28.png){width="6.458333333333333in"
height="0.7483902012248469in"}

![](media/image27.png){width="6.458333333333333in"
height="0.7414610673665791in"}

![](media/image29.png){width="6.458333333333333in"
height="0.5405041557305337in"}

This condition is satisfied when
![](media/image30.png){width="8.73578302712161e-2in"
height="0.2700153105861767in"} is the median. Thus, a model trained with
MAE loss will converge toward the conditional median, making it a
\"robust estimator\" in the presence of noise or heavy-tailed
distributions.^24^

### Comparison of Sensitivity: A Numerical Example

Consider a dataset of errors:
![](media/image20.png){width="0.9751421697287839in"
height="0.23433617672790902in"}, where
![](media/image72.png){width="0.20170384951881015in"
height="0.2404932195975503in"} is an outlier.^25^

- **MAE:** ![](media/image67.png){width="2.129021216097988in"
  height="0.23571303587051617in"}

- **MSE:** ![](media/image54.png){width="2.6535312773403326in"
  height="0.23502734033245845in"}

- **RMSE:** ![](media/image53.png){width="1.3557086614173228in"
  height="0.23610673665791776in"}

The MSE/RMSE values are drastically pulled by the outlier, whereas MAE
remains relatively stable. If the model is used for financial
forecasting where a large error is catastrophic (e.g., bankruptcy), MSE
is appropriate. If the model is for a recommender system where we want a
\"typical\" user experience regardless of extreme cases, MAE is
better.^20^

  ------------------------------------------------------------------------------------------------------
  **Feature**             **MSE (Mean Squared Error)**                           **MAE (Mean Absolute
                                                                                 Error)**
  ----------------------- ------------------------------------------------------ -----------------------
  **Statistical Target**  Conditional Mean                                       Conditional Median

  **Outlier Handling**    Highly sensitive; squares large errors                 Robust; treats errors
                                                                                 linearly

  **Optimization**        Smooth, differentiable everywhere                      Non-differentiable at
                                                                                 zero; constant gradient

  **Units**               Squared units (e.g.,                                   Same as original data
                          ![](media/image68.png){width="0.18158136482939632in"   (e.g., \$\$
                          height="0.24473972003499564in"})                       

  **Best Use Case**       When large errors must be discouraged                  When data is noisy or
                                                                                 robust estimates are
                                                                                 needed
  ------------------------------------------------------------------------------------------------------

## Information Theory and Cross-Entropy

In probabilistic classification, the model does not just predict a
class; it predicts a probability distribution
![](media/image64.png){width="0.15956474190726158in"
height="0.27125984251968505in"} over the classes. Cross-entropy measures
how much the predicted distribution
![](media/image64.png){width="0.15956474190726158in"
height="0.27125984251968505in"} differs from the true distribution
![](media/image47.png){width="0.1574332895888014in"
height="0.2676367016622922in"}.^27^

### Shannon Entropy: The Foundation of Uncertainty

Information theory, pioneered by Claude Shannon, defines \"information
content\" as the surprise of an event.^28^ If an event
![](media/image55.png){width="0.11541119860017497in"
height="0.26159886264216975in"} has probability
![](media/image65.png){width="0.4298064304461942in"
height="0.26095363079615047in"}, its information content
![](media/image63.png){width="0.38861220472440944in"
height="0.26425634295713035in"} is:

![](media/image51.png){width="6.458333333333333in"
height="0.5405041557305337in"}

The Shannon Entropy ![](media/image42.png){width="0.49834317585301835in"
height="0.2567224409448819in"} is the expected value of the information
content ^28^:

![](media/image40.png){width="6.458333333333333in"
height="0.7414610673665791in"}

Entropy is maximized when all outcomes are equally likely (maximum
uncertainty) and minimized (at zero) when one outcome is certain.^30^

### KL Divergence: Relative Entropy

The Kullback-Leibler (KL) Divergence measures the distance from
![](media/image64.png){width="0.15956474190726158in"
height="0.27125984251968505in"} to
![](media/image47.png){width="0.1574332895888014in"
height="0.2676367016622922in"}.^27^ \$\$D\_{KL}(P \|

\| Q) = \\sum\_{x \\in \\mathcal{X}} P(x) \\log \\frac{P(x)}{Q(x)}\$\$

KL divergence is always non-negative and is zero if and only if
![](media/image62.png){width="0.5859372265966755in"
height="0.2587259405074366in"}. It is asymmetric, meaning \$D\_{KL}(P \|

\| Q) \\neq D\_{KL}(Q \| \| P)\$, and thus is not a true distance metric
in the geometric sense.^32^

### The Decomposition of Cross-Entropy

Cross-entropy ![](media/image46.png){width="0.7476323272090989in"
height="0.25676290463692036in"} measures the average number of bits
needed to identify an event from
![](media/image47.png){width="0.1574332895888014in"
height="0.2676367016622922in"} when using a coding scheme optimized for
![](media/image64.png){width="0.15956474190726158in"
height="0.27125984251968505in"}.^27^ It is derived as:

![](media/image50.png){width="6.458333333333333in"
height="0.7414610673665791in"}

The relationship between these terms is:

\$\$H(P, Q) = H(P) + D\_{KL}(P \|

\| Q)\$\$

In a supervised learning context, the true labels
![](media/image47.png){width="0.1574332895888014in"
height="0.2676367016622922in"} are fixed, so
![](media/image42.png){width="0.49834317585301835in"
height="0.2567224409448819in"} is a constant. Minimizing the
cross-entropy ![](media/image46.png){width="0.7476323272090989in"
height="0.25676290463692036in"} is therefore mathematically equivalent
to minimizing the KL divergence between the model\'s predictions and the
actual labels.^27^

### Derivation from Maximum Likelihood Estimation (MLE)

Cross-entropy arises naturally from the Principle of Maximum
Likelihood.^27^ In a binary classification problem (Logistic
Regression), for each sample
![](media/image19.png){width="6.960192475940508e-2in"
height="0.26294181977252845in"}, we have a label
![](media/image97.png){width="0.8973720472440945in"
height="0.25856517935258094in"} and a predicted probability
![](media/image107.png){width="0.1576706036745407in"
height="0.24438976377952756in"}.^34^

The likelihood of the entire dataset is the product of the probabilities
of each observation ^35^:

![](media/image106.png){width="6.458333333333333in"
height="0.8454046369203849in"}

To find the optimal parameters
![](media/image41.png){width="0.10026027996500438in"
height="0.2622200349956256in"}, we maximize the log-likelihood (LL):

![](media/image11.png){width="6.458333333333333in"
height="0.8454046369203849in"}

The standard Binary Cross-Entropy (BCE) loss is the negative average
log-likelihood ^31^:

![](media/image37.png){width="6.458333333333333in"
height="0.8454046369203849in"}

For multi-class classification, this is extended using the Softmax
function to generate a probability vector for
![](media/image31.png){width="0.15861767279090114in"
height="0.26965004374453194in"} classes ^34^:

![](media/image10.png){width="6.458333333333333in"
height="0.9008409886264217in"}

Where ![](media/image8.png){width="0.2632567804024497in"
height="0.2632567804024497in"} is 1 if the true class for sample
![](media/image19.png){width="6.960192475940508e-2in"
height="0.26294181977252845in"} is
![](media/image13.png){width="9.457895888013998e-2in"
height="0.2679724409448819in"}, and 0 otherwise. This unrolling of the
sum shows that for each sample, the loss is simply
![](media/image6.png){width="1.246687445319335in"
height="0.2568930446194226in"}, which penalizes overconfident incorrect
predictions logarithmically.^29^

## Computational Implementation and Gradient Dynamics

The choice of metric impacts not only how we judge a model but also how
it learns. Gradient-based optimization relies on the derivatives of
these loss functions.

### Gradient Behavior of MSE vs. MAE

- **MSE Gradients:** The derivative of
  ![](media/image7.png){width="0.6962598425196851in"
  height="0.25731299212598424in"} is
  ![](media/image69.png){width="0.7163823272090989in"
  height="0.2591174540682415in"}. The gradient magnitude is proportional
  to the error.^24^ When the prediction is far from the target, the
  gradient is large, forcing rapid correction. As it approaches the
  target, the gradient shrinks, allowing for fine-tuning without
  oscillation.^24^

- **MAE Gradients:** The derivative of
  ![](media/image59.png){width="0.5707863079615048in"
  height="0.25875656167979005in"} is
  ![](media/image75.png){width="0.2578127734033246in"
  height="0.23506452318460191in"}. The gradient magnitude is constant
  regardless of error size.^24^ This can cause the model to overshoot
  the optimum and oscillate unless the learning rate is carefully
  decayed.^24^

### Cross-Entropy and the Sigmoid/Softmax Gradient

In logistic regression and neural networks, cross-entropy is almost
always paired with Sigmoid (binary) or Softmax (multiclass) activation
functions.^34^

- The **vanishing gradient** problem occurs when the Sigmoid output is
  near 0 or 1, as the derivative
  ![](media/image60.png){width="1.9680413385826772in"
  height="0.2583530183727034in"} approaches zero.

- The cross-entropy loss mitigates this. When calculating the derivative
  of the BCE loss with respect to the pre-activation weight
  ![](media/image58.png){width="0.14973972003499564in"
  height="0.2679549431321085in"}, the terms cancel out to yield
  ![](media/image57.png){width="1.235916447944007in"
  height="0.2577985564304462in"}.^27^

- This result is mathematically elegant: the gradient is simply the
  input ![](media/image55.png){width="0.11541119860017497in"
  height="0.26159886264216975in"} scaled by the error
  ![](media/image66.png){width="0.6155304024496938in"
  height="0.2583705161854768in"}. This is identical to the gradient of
  MSE for linear regression, ensuring efficient and stable learning.^27^

## Integrated Performance Assessment: A Synthetic Perspective

Selecting the appropriate metric requires a holistic understanding of
the problem\'s constraints. A comprehensive evaluation strategy often
employs multiple metrics to capture different facets of performance.

  -------------------------------------------------------------------------
  **Domain**                **Prioritized Metrics** **Rationale**
  ------------------------- ----------------------- -----------------------
  **Medical Screening**     Recall, ROC-AUC         Identifying all
                                                    positive cases is
                                                    vital;
                                                    threshold-invariance
                                                    allows for tuning
                                                    sensitivity later.^3^

  **Financial Fraud**       Precision, F1-Score     False Positives lead to
                                                    customer friction and
                                                    operational costs;
                                                    balancing P and R is
                                                    essential.^5^

  **Recommender Systems**   MAE, Rank Metrics       User ratings are often
                                                    noisy; robust estimates
                                                    are preferred over
                                                    minimizing rare large
                                                    deviations.^24^

  **Physics/Engineering**   MSE, RMSE               Precise accuracy and
                                                    penalizing large
                                                    structural errors are
                                                    critical for
                                                    safety.^20^

  **Generative Models**     Cross-Entropy,          Measures how well the
                            Perplexity              model approximates the
                                                    true data-generating
                                                    distribution.^27^
  -------------------------------------------------------------------------

### Summary of Explained Solutions

#### Classification Example: COVID-19 X-Ray Detection

Given: TP=261, TN=193, FP=107, FN=39 (Total=600).^1^

1.  Accuracy: ![](media/image71.png){width="2.1402712160979878in"
    height="0.23611548556430445in"}.

2.  Precision: ![](media/image56.png){width="2.1402712160979878in"
    height="0.23611548556430445in"}.

3.  Recall: ![](media/image102.png){width="2.039417104111986in"
    height="0.23502624671916011in"}.

4.  F1-Score: ![](media/image104.png){width="3.6191983814523185in"
    height="0.23520997375328084in"}.

#### Regression Example: Housing Price Residuals

Given Error: ![](media/image91.png){width="0.5646303587051619in"
height="0.25942475940507437in"} (Outlier). MSE Penalty:
![](media/image78.png){width="0.8539304461942258in"
height="0.23635608048993875in"}. MAE Penalty:
![](media/image87.png){width="0.7844455380577428in"
height="0.2360958005249344in"}. Result: MSE focuses the model on
reducing the \$20\$ error significantly more than MAE, which treats it
as just another error segment.^25^

#### Cross-Entropy Example: Sentiment Analysis

True Label: Positive
(![](media/image83.png){width="0.3703838582677165in"
height="0.25700021872265966in"}). Model Logits:
![](media/image82.png){width="0.7175667104111986in"
height="0.2366447944006999in"}. Softmax:
![](media/image100.png){width="2.6401563867016624in"
height="0.2891240157480315in"}. Loss:
![](media/image73.png){width="2.9244794400699914in"
height="0.2575962379702537in"}. If model predicted
![](media/image77.png){width="0.7175667104111986in"
height="0.2366447944006999in"}
(![](media/image49.png){width="1.3477712160979878in"
height="0.2588943569553806in"}): Loss:
![](media/image85.png){width="1.9079057305336833in"
height="0.23563757655293088in"} (Higher penalty for wrong
confidence).^35^

Through the integration of confusion matrix dynamics, rank-sum
statistics, L-norm variance, and information-theoretic divergence, the
evaluation of machine learning models is revealed as a multi-dimensional
optimization problem. Professional competence in this field requires
moving beyond the calculation of Accuracy toward a nuanced application
of metrics that align with the specific statistical and operational
requirements of the deployment environment.

#### Works cited

1.  Evaluation metrics and statistical tests for machine learning - PMC,
    accessed April 5, 2026,
    [[https://pmc.ncbi.nlm.nih.gov/articles/PMC10937649/]{.underline}](https://pmc.ncbi.nlm.nih.gov/articles/PMC10937649/)

2.  Understanding the Confusion Matrix in Machine Learning -
    GeeksforGeeks, accessed April 5, 2026,
    [[https://www.geeksforgeeks.org/machine-learning/confusion-matrix-machine-learning/]{.underline}](https://www.geeksforgeeks.org/machine-learning/confusion-matrix-machine-learning/)

3.  Confusion Matrix, Accuracy, Precision, Recall, F1 Score \| by
    Harikrishnan N B - Medium, accessed April 5, 2026,
    [[https://medium.com/analytics-vidhya/confusion-matrix-accuracy-precision-recall-f1-score-ade299cf63cd]{.underline}](https://medium.com/analytics-vidhya/confusion-matrix-accuracy-precision-recall-f1-score-ade299cf63cd)

4.  Classification: Accuracy, recall, precision, and related metrics \|
    Machine Learning, accessed April 5, 2026,
    [[https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall]{.underline}](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)

5.  Confusion Matrix Made Simple: Accuracy, Precision, Recall &
    F1-Score, accessed April 5, 2026,
    [[https://towardsdatascience.com/confusion-matrix-made-simple-accuracy-precision-recall-f1-score/]{.underline}](https://towardsdatascience.com/confusion-matrix-made-simple-accuracy-precision-recall-f1-score/)

6.  Why we don\'t use weighted arithmetic mean instead of harmonic
    mean? - Cross Validated, accessed April 5, 2026,
    [[https://stats.stackexchange.com/questions/328225/why-we-dont-use-weighted-arithmetic-mean-instead-of-harmonic-mean]{.underline}](https://stats.stackexchange.com/questions/328225/why-we-dont-use-weighted-arithmetic-mean-instead-of-harmonic-mean)

7.  Essential Things You Need to Know About F1-Score \| Towards Data
    \..., accessed April 5, 2026,
    [[https://towardsdatascience.com/essential-things-you-need-to-know-about-f1-score-dbd973bf1a3/]{.underline}](https://towardsdatascience.com/essential-things-you-need-to-know-about-f1-score-dbd973bf1a3/)

8.  accessed April 5, 2026,
    [[https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall#:\~:text=\*\*Equal%20Weighting%3A%20\*\*Unlike,harmonic%20mean%20than%20larger%20values.]{.underline}](https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall#:~:text=**Equal%20Weighting%3A%20**Unlike,harmonic%20mean%20than%20larger%20values.)

9.  Harmonic mean - Wikipedia, accessed April 5, 2026,
    [[https://en.wikipedia.org/wiki/Harmonic_mean]{.underline}](https://en.wikipedia.org/wiki/Harmonic_mean)

10. Understanding the F1 Score - Ellie Frank - Medium, accessed April 5,
    2026,
    [[https://ellielfrank.medium.com/understanding-the-f1-score-55371416fbe1]{.underline}](https://ellielfrank.medium.com/understanding-the-f1-score-55371416fbe1)

11. Understanding the F1 Score in Machine Learning: The Harmonic Mean of
    Precision and Recall \| Picsellia, accessed April 5, 2026,
    [[https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall]{.underline}](https://www.picsellia.com/post/understanding-the-f1-score-in-machine-learning-the-harmonic-mean-of-precision-and-recall)

12. The ROC-AUC and the Mann-Whitney U-test (Wilcoxon rank sum test) \|
    Johannes Haupt, accessed April 5, 2026,
    [[https://johaupt.github.io/blog/Area_under_ROC_curve.html]{.underline}](https://johaupt.github.io/blog/Area_under_ROC_curve.html)

13. Probabilistic interpretation of AUC \| 0-fold Cross-Validation,
    accessed April 5, 2026,
    [[https://www.alexejgossmann.com/auc/]{.underline}](https://www.alexejgossmann.com/auc/)

14. This document is an extract from the PhD thesis entitled "Can
    satellites help organic crops certification?", pages 90-99, An -
    ORBi, accessed April 5, 2026,
    [[https://orbi.uliege.be/bitstream/2268/226209/14/ROC-AUC%20and%20Mann-Whitney-Wilcoxon%20statistical%20test%20P-value%20-%20SECTIONS.pdf]{.underline}](https://orbi.uliege.be/bitstream/2268/226209/14/ROC-AUC%20and%20Mann-Whitney-Wilcoxon%20statistical%20test%20P-value%20-%20SECTIONS.pdf)

15. How to calculate Area Under the Curve (AUC), or the c-statistic, by
    hand - Cross Validated, accessed April 5, 2026,
    [[https://stats.stackexchange.com/questions/145566/how-to-calculate-area-under-the-curve-auc-or-the-c-statistic-by-hand]{.underline}](https://stats.stackexchange.com/questions/145566/how-to-calculate-area-under-the-curve-auc-or-the-c-statistic-by-hand)

16. Mann--Whitney U test - Wikipedia, accessed April 5, 2026,
    [[https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test]{.underline}](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test)

17. A Complete Guide to Area Under Curve (AUC) - ListenData, accessed
    April 5, 2026,
    [[https://www.listendata.com/2014/08/learn-area-under-curve-auc.html]{.underline}](https://www.listendata.com/2014/08/learn-area-under-curve-auc.html)

18. Area under the curve - GraphPad Prism 11 Statistics Guide, accessed
    April 5, 2026,
    [[https://www.graphpad.com/guides/prism/latest/statistics/stat_area_under_the_curve.htm]{.underline}](https://www.graphpad.com/guides/prism/latest/statistics/stat_area_under_the_curve.htm)

19. ROC and AUC with a Binary Predictor: a Potentially Misleading
    Metric - PMC, accessed April 5, 2026,
    [[https://pmc.ncbi.nlm.nih.gov/articles/PMC7695228/]{.underline}](https://pmc.ncbi.nlm.nih.gov/articles/PMC7695228/)

20. Choosing the Right Loss Function: MSE vs. MAE in Regression
    Problems - Medium, accessed April 5, 2026,
    [[https://medium.com/@elmahfoudradwane/choosing-the-right-loss-function-mse-vs-mae-in-regression-problems-199e37d25e7b]{.underline}](https://medium.com/@elmahfoudradwane/choosing-the-right-loss-function-mse-vs-mae-in-regression-problems-199e37d25e7b)

21. Understanding MAE, MSE, and RMSE: Key Metrics in Machine Learning -
    DEV Community, accessed April 5, 2026,
    [[https://dev.to/mondal_sabbha/understanding-mae-mse-and-rmse-key-metrics-in-machine-learning-4la2]{.underline}](https://dev.to/mondal_sabbha/understanding-mae-mse-and-rmse-key-metrics-in-machine-learning-4la2)

22. What are the advantages of using mean squared error instead of a
    mean higher power error? \[Question\] : r/statistics - Reddit,
    accessed April 5, 2026,
    [[https://www.reddit.com/r/statistics/comments/1ajsnbs/what_are_the_advantages_of_using_mean_squared/]{.underline}](https://www.reddit.com/r/statistics/comments/1ajsnbs/what_are_the_advantages_of_using_mean_squared/)

23. My Notes on MAE vs MSE Error Metrics - HackerNoon, accessed April 5,
    2026,
    [[https://hackernoon.com/my-notes-on-mae-vs-mse-error-metrics]{.underline}](https://hackernoon.com/my-notes-on-mae-vs-mse-error-metrics)

24. MSE and MAE Loss Functions \| Abhik Sarkar, accessed April 5, 2026,
    [[https://www.abhik.ai/concepts/machine-learning/mse-mae]{.underline}](https://www.abhik.ai/concepts/machine-learning/mse-mae)

25. Learn Mean Absolute Error (MAE): Robustness and Median \...,
    accessed April 5, 2026,
    [[https://codefinity.com/courses/v2/abf891a8-0a13-4925-bcbc-0bafe55c27be/87648e3a-43fc-49c1-976d-ed01da53cb73/17116bc5-5a5d-4bb9-af6b-3134d375de09]{.underline}](https://codefinity.com/courses/v2/abf891a8-0a13-4925-bcbc-0bafe55c27be/87648e3a-43fc-49c1-976d-ed01da53cb73/17116bc5-5a5d-4bb9-af6b-3134d375de09)

26. The median minimizes the mean absolute error \| The Book of \...,
    accessed April 5, 2026,
    [[https://statproofbook.github.io/P/med-mae.html]{.underline}](https://statproofbook.github.io/P/med-mae.html)

27. Cross-entropy - Wikipedia, accessed April 5, 2026,
    [[https://en.wikipedia.org/wiki/Cross-entropy]{.underline}](https://en.wikipedia.org/wiki/Cross-entropy)

28. Cross Entropy - Medium, accessed April 5, 2026,
    [[https://medium.com/@prajun_t/cross-entropy-cbb4a7c7553a]{.underline}](https://medium.com/@prajun_t/cross-entropy-cbb4a7c7553a)

29. A Gentle Introduction to Cross-Entropy for Machine Learning -
    MachineLearningMastery.com, accessed April 5, 2026,
    [[https://machinelearningmastery.com/cross-entropy-for-machine-learning/]{.underline}](https://machinelearningmastery.com/cross-entropy-for-machine-learning/)

30. Shannon Entropy and Kullback-Leibler Divergence - Statistics & Data
    Science, accessed April 5, 2026,
    [[https://www.stat.cmu.edu/\~cshalizi/754/2006/notes/lecture-28.pdf]{.underline}](https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-28.pdf)

31. Cross Entropy Loss: Intro, Applications, Code - V7 Labs, accessed
    April 5, 2026,
    [[https://www.v7labs.com/blog/cross-entropy-loss-guide]{.underline}](https://www.v7labs.com/blog/cross-entropy-loss-guide)

32. Deep Learning and Information Theory, accessed April 5, 2026,
    [[https://deep-and-shallow.com/2020/01/09/deep-learning-and-information-theory/]{.underline}](https://deep-and-shallow.com/2020/01/09/deep-learning-and-information-theory/)

33. Understanding KL Divergence, Entropy, and Related Concepts \|
    Towards Data Science, accessed April 5, 2026,
    [[https://towardsdatascience.com/understanding-kl-divergence-entropy-and-related-concepts-75e766a2fd9e/]{.underline}](https://towardsdatascience.com/understanding-kl-divergence-entropy-and-related-concepts-75e766a2fd9e/)

34. Cross-Entropy, Negative Log-Likelihood, and All That Jazz \...,
    accessed April 5, 2026,
    [[https://towardsdatascience.com/cross-entropy-negative-log-likelihood-and-all-that-jazz-47a95bd2e81/]{.underline}](https://towardsdatascience.com/cross-entropy-negative-log-likelihood-and-all-that-jazz-47a95bd2e81/)

35. Deriving cross-entropy losses from first principles. From binary
    \..., accessed April 5, 2026,
    [[https://drazenzaric.com/blog/cross-entropy-loss/]{.underline}](https://drazenzaric.com/blog/cross-entropy-loss/)

36. Lecture 5: Logistic Regression 1 MLE Derivation - Zhiwei Steven Wu,
    accessed April 5, 2026,
    [[https://zstevenwu.com/courses/s20/csci5525/resources/slides/lecture05.pdf]{.underline}](https://zstevenwu.com/courses/s20/csci5525/resources/slides/lecture05.pdf)

37. A Brief Guide to Cross-Entropy Loss - Lightly AI, accessed April 5,
    2026,
    [[https://www.lightly.ai/blog/cross-entropy-loss]{.underline}](https://www.lightly.ai/blog/cross-entropy-loss)

38. Cross-Entropy Loss Function in Machine Learning: Enhancing Model
    Accuracy \| DataCamp, accessed April 5, 2026,
    [[https://www.datacamp.com/tutorial/the-cross-entropy-loss-function-in-machine-learning]{.underline}](https://www.datacamp.com/tutorial/the-cross-entropy-loss-function-in-machine-learning)
