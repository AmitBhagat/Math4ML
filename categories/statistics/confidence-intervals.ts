import { TopicSection } from '../../src/data/types';

export const confidenceIntervalsSection: TopicSection = {
  id: "confidence-intervals",
  title: "Confidence Intervals",
  description: "Confidence Intervals are a range of values that likely contain the true population parameter. They provide a measure of precision for our estimates.",
  color: "#D32F2F",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Statistics · Estimation</div>
      <h1>Confidence Intervals: The Margin of Error</h1>
      <p>A <strong>Confidence Interval (CI)</strong> is a mathematical "Safety Net." instead of giving a single point estimate (e.g., "The mean is 5.0"), it gives a range (e.g., "The mean is between 4.8 and 5.2"). In Machine Learning, this tells us exactly how much we should <strong>Trust</strong> our model's predictions.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#prerequisites">Prerequisites</a>
      <a href="#theory">Core Theory: The "Why"</a>
      <a href="#derivation">Mathematical Definition</a>
      <a href="#example-error">Example 1: Error Bars on Predictions</a>
      <a href="#example-boot">Example 2: Bootstrapping for UI Latency</a>
      <a href="#implementation">Implementation (Python/SciPy)</a>
      <a href="#applications">Applications in ML</a>
    </div>

    <h2 id="prerequisites">Prerequisites</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Standard Error</strong>: Standard deviation of the sample mean.</li>
        <li><strong>Z-Scores / T-Scores</strong>: Critical values from distributions.</li>
      </ul>
    </div>

    <h2 id="theory">Core Theory: The "Why"</h2>
    <p>A single number is extremely fragile—it can be easily swayed by one outlier in your data. <strong>Confidence Intervals</strong> quantify the <strong>Precision</strong> of your work. A 95% Confidence Interval doesn't mean "The truth is 95% likely to be inside." It means: <em>"If I repeat this entire experiment 100 times, 95 of my calculated intervals will successfully contain the True Answer."</em></p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of a Confidence Interval as <strong>"Honesty in Data."</strong> 
        If you predict a house price is $500k, but your interval is [$300k, $700k], your model is saying: <em>"I'm guessing, but don't bet your life on it."</em> 
        If the interval is [$495k, $505k], your model is highly confident. 
        In ML, we want these intervals to be as <strong>Narrow</strong> as possible.
      </div>
    </div>

    <h2 id="derivation">Mathematical Definition</h2>
    <p>A typical Confidence Interval is: \(\text{Point Estimate} \pm \text{Margin of Error}\).</p>
    <div class="math-block">$$\text{CI} = \overline{X} \pm Z^* \left( \frac{\sigma}{\sqrt{n}} \right)$$</div>
    <ul>
      <li><strong>\(Z^*\)</strong>: Critical value (usually 1.96 for 95%).</li>
      <li><strong>Standard Error</strong>: \(\frac{\sigma}{\sqrt{n}}\). Notice how larger samples (\(n\)) make the interval smaller/narrower!</li>
    </ul>

    <h2 id="example-error">Example 1: Error Bars on Predictions</h2>
    <div class="example-box">
      <h4>Problem: Finding the Range of Accuracy</h4>
      <p>Your model's mean accuracy is 85% with a Standard Error of 1% across 100 trials. What is the 95% Confidence Interval?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(\overline{X} = 0.85, SE = 0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Margin:</strong> \(1.96 \times 0.01 = 0.0196\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Range:</strong> \(0.85 \pm 0.0196 \to [83\%, 87\%]\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Your model isn't just "85% accurate." It is <strong>Statistically Proven</strong> to be between 83% and 87%. You are now communicating like a true scientist.
        </div>
      </div>
    </div>

    <h2 id="example-boot">Example 2: Bootstrapping for UI Latency</h2>
    <div class="example-box">
      <h4>Problem: Measuring 'Average' Speed in the Real World</h4>
      <p>Data: 5 Latency points [10ms, 12ms, 15ms, 200ms (Outlier!), 11ms]. How do we get a robust interval?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Test:</strong> <strong>Bootstrap Resampling</strong>. We create 1,000 "Virtual Datasets" by drawing samples with replacement.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculation:</strong> For every virtual dataset, we find the median. We then look for the 2.5% and 97.5% marks in our collection of 1,000 medians.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Even with small data or outliers, <strong>Bootstrapping</strong> gives us a reliable confidence interval without assuming the data is Normal. This is the "Gold Standard" for modern data science.
        </div>
      </div>
    </div>

    <h2 id="implementation">Implementation (Python/SciPy)</h2>
    <python-code>
import numpy as np
import scipy.stats as stats

data = [10.2, 11.5, 9.8, 10.5, 12.1]
confidence = 0.95

# 1. Using the T-Distribution (Best for small data)
mean = np.mean(data)
se = stats.sem(data)
interval = stats.t.interval(confidence, len(data)-1, loc=mean, scale=se)

print(f"95% Confidence Interval: [{interval[0]:.2f}, {interval[1]:.2f}]")

# 2. Bootstrapping (Non-parametric)
bootstrap_means = [np.mean(np.random.choice(data, len(data))) for _ in range(1000)]
ci_low = np.percentile(bootstrap_means, 2.5)
ci_high = np.percentile(bootstrap_means, 97.5)
print(f"Bootstrap 95% CI: [{ci_low:.2f}, {ci_high:.2f}]")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>A/B Testing</strong>: We only implement a change if the 95% confidence interval of the "Lift" doesn't overlap with Zero.</li>
      <li><strong>Feature Importance</strong>: Calculating confidence intervals for coefficients helps us ignore features that are inconsistent.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve completed the core mathematics sequence of <strong>Linear Algebra, Calculus, Probability, & Statistics</strong>. You are now ready to dive into the <strong>Foundations of Information Theory</strong>. Explore <strong><a href="#/mathematics/information-theory/basics">Information Theory Basics</a></strong>.
    </div>
  `
};
