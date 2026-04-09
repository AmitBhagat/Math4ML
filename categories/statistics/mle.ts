import { TopicSection } from '../../src/data/types';

export const mleSection: TopicSection = {
  id: "mle",
  title: "Maximum Likelihood Estimation (MLE)",
  description: "MLE is a method of estimating the parameters of a probability distribution by maximizing a likelihood function.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Estimation</div>
      <h1>Maximum Likelihood Estimation: Finding the Best Parameters</h1>
      <p><strong>Maximum Likelihood Estimation (MLE)</strong> is the fundamental way we "train" models. It asks a simple question: "Given this data, what are the most likely parameters that could have produced it?" In ML, this is how we find the optimal weights for our models.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Likelihood vs Probability</strong>: Understanding the difference in perspective.</li>
        <li><strong>Logarithms</strong>: Used to turn products into sums.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Probability allows us to predict data if we know the parameters—the "Rules" of the world. <strong>Maximum Likelihood Estimation (MLE)</strong> works in reverse: we have the data, and we want to find the parameters. MLE is the method of picking the setting that makes the observed data as "unsurprising" as possible. If the data we see is very likely under setting A but nearly impossible under setting B, MLE tells us to bet on A. In Machine Learning, this is the fundamental way we "train": we hunt for the weights that make our training labels the most probable outcome of our model's logic. It is the tactical decision to trust the data completely, finding the "Ideal Knob Setting" that explains exactly what we have seen.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Likelihood Landscape & The Optimal Parameter</div>
      <p>MLE is "Inverting the Universe." Instead of predicting data from rules, we are finding the rules that make our data look inevitable.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a <strong>Likelihood Surface</strong> $L(\theta)$. Every coordinate on the floor is a possible "Rule" (parameter $\theta$) for how the world works, and the height of the surface at that point is the probability that the data you *actually saw* would happen under that rule. Geometrically, MLE is a mountain-climbing mission. We are searching for the <strong>Global Maximum</strong>—the exact knob-setting that places our observed data at the absolute center of "Expected Reality." If the surface is flat, the data tells us nothing; if there is a sharp peak, the data has revealed a clear truth.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>Given $n$ independent and identically distributed (i.i.d.) observations $\{x_1, \dots, x_n\}$, the probability of seeing this specific collection is the product of their individual probabilities:</p>
      <div class="math-block">
        $$L(\theta) = \prod_{i=1}^n P(x_i | \theta)$$
      </div>
      <p>Products are a nightmare for calculus, so we transform the surface using the <strong>natural logarithm</strong>. Since $\ln(x)$ is monotonically increasing, the peak of the log-surface is at the same location as the peak of the original surface. This gives us the <strong>Log-Likelihood</strong>:</p>
      <div class="math-block">
        $$\ell(\theta) = \sum_{i=1}^n \ln P(x_i | \theta)$$
      </div>
      <p>We find the maximum by taking the derivative with respect to $\theta$ and setting it to zero (the "Score Function"):</p>
      <div class="math-block">
        $$\frac{\partial}{\partial \theta} \sum_{i=1}^n \ln P(x_i | \theta) = 0$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, MLE is the reason for our <strong>Loss Functions</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Negative Log-Likelihood (NLL)</strong>: Computers like to *minimize* things, so we multiply the Log-Likelihood by -1. Lowering the NLL is mathematically exactly the same as finding the Maximum Likelihood.</li>
        <li><strong>Least Squares Link</strong>: If you assume your data has Gaussian noise, the MLE derivation leads exactly to the <strong>Mean Squared Error (MSE)</strong>. The standard "Line of Best Fit" is just an MLE mountain climb in disguise.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: MLE is dangerously over-confident on small datasets. If you flip a coin once and get Heads, MLE will tell you the coin is 100% rigged for Heads with absolute certainty. This is why we use MAP (regularization) to keep MLE from drinking the kool-aid of small-sample noise.</p>
    </div>
    
    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Estimating Coin Bias</h2>
    
      <h4>Problem: Finding the "True" Chance of Heads</h4>
      <p>You flip a coin 10 times and get 7 Heads. Estimate the bias \(p\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Likelihood Function:</strong> \(L(p) = p^7 (1-p)^3\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Log-Likelihood:</strong> \(\ell(p) = 7 \log(p) + 3 \log(1-p)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Optimize:</strong> Set derivative to zero: \(\frac{7}{p} - \frac{3}{1-p} = 0\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Solve:</strong> \(7(1-p) = 3p \to 7 - 7p = 3p \to 10p = 7 \to p = 0.7\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> \(p = 0.7\). Our intuition matches the math: the most likely bias is exactly the observed ratio of successes.
        </div>
      </div>
    

    <h2 id="example-gauss" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Mean of Gaussian Data</h2>
    
      <h4>Problem: Estimating the "Center" of Noise</h4>
      <p>Data: [10, 12, 11]. Assume data is Normal with unknown \(\mu\).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> The Log-Likelihood of Gaussian data is proportional to the <strong>Negative Squared Error</strong> (\(-(x - \mu)^2\)).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Conclusion:</strong> To maximize the likelihood, we must <strong>minimize</strong> the squared error.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is why we use <strong>MSE (Mean Squared Error)</strong> in Regression! It's not just a random choice; it is mathematically derived from the MLE of a Gaussian distribution. Max Likelihood = Min Error.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np
from scipy.optimize import minimize

# Some data generated from a distribution (e.g. Normal mean=5)
data = np.random.normal(5.2, 1.0, 100)

def neg_log_likelihood(mu):
    # Sum of log of Normal PDF
    # (Since minimize works on 'negative', we negate the log-likelihood)
    return -np.sum(-0.5 * (data - mu)**2)

# Start guess and optimize
res = minimize(neg_log_likelihood, x0=[0.0])
print(f"Estimated Mean (MLE): {res.x[0]:.4f}")
print(f"Sample Mean: {data.mean():.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>MLE is the fundamental way we "Train" models. It asks: "Given this data, what is the Ideal Knob Setting for my model?"</p>
    <ul>
      <li><strong>Logistic Regression</strong>: This classifier doesn't just guess "Yes or No." It uses MLE to find the weights that make the observed classes in your dataset the most probable outcome. It's the engine that finds the parameters which explain your data with the highest mathematical confidence.</li>
      <li><strong>Mean Squared Error (MSE) Derivation</strong>: Most people think MSE is an arbitrary choice, but it's actually the result of performing MLE on a "Normal" (Gaussian) noise distribution. When you minimize the squared error, you are mathematically finding the most likely average for your data points.</li>
    </ul>
    <p>Teacher's Final Word: MLE is the tactical decision to trust the data completely and find the parameters that make the reality we see as unsurprising as possible. It is the bedrock of almost every learning algorithm.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already have a <em>hunch</em> about the parameters before seeing data? Explore <strong><a href="#/mathematics/statistics/map">Maximum a Posteriori (MAP)</a></strong>.
    </div>
  `
};


