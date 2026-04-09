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

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Standard Error</strong>: Standard deviation of the sample mean.</li>
        <li><strong>Z-Scores / T-Scores</strong>: Critical values from distributions.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single number is extremely fragile—it can be easily swayed by a single outlier or a tiny quirk in your dataset. <strong>Confidence Intervals</strong> provide the <strong>Precision</strong> that a single average lacks. instead of shouting a single value, you are providing a mathematical "Safety Net" that admits to uncertainty. A 95% Confidence Interval means: <em>"If I repeat this entire experiment 100 times, 95 of my calculated intervals will successfully contain the True Answer."</em> In Machine Learning, this is the difference between a lucky guess and a reliable product. It tells you if your model's accuracy is a rock-solid foundation you can build on, or a moving target that you happened to hit once by sheer chance. It is the tactical way we communicate <strong>Trust</strong> in our findings.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Interval Estimation</div>
      <p>A **Confidence Interval (CI)** for a population parameter $\theta$ is an interval $[L, U]$ computed from sample data, associated with a confidence level $1 - \alpha$ (commonly 0.95 or 0.99):</p>
      <div class="math-block">
        $$P(L \le \theta \le U) = 1 - \alpha$$
      </div>
      <p>For estimating the population mean $\mu$ under the assumption of normality, the interval is constructed as:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Standard Formula</strong>: $CI = \bar{x} \pm z^* \left( \frac{\sigma}{\sqrt{n}} \right)$, where $\bar{x}$ is the sample mean.</li>
        <li><strong>Margin of Error</strong>: The term $z^* \frac{\sigma}{\sqrt{n}}$ represents the maximum expected distance between the point estimate and the true parameter.</li>
        <li><strong>Critical Value ($z^*$)</strong>: Determined by the level of confidence; for a 95% CI, $z^* \approx 1.96$ (from the standard normal distribution).</li>
        <li><strong>Sample Size Impact</strong>: The width of the interval is inversely proportional to $\sqrt{n}$. Tripling the confidence level requires a much larger sample to maintain the same precision.</li>
      </ul>
      <p class="mt-2">In ML, we use CIs (often via **Bootstrapping**) to determine if the performance gap between two models is statistically significant or the result of sampling noise.</p>
    </div>
    
    <h2 id="example-error" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Error Bars on Predictions</h2>
    
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
    

    <h2 id="example-boot" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Bootstrapping for UI Latency</h2>
    
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
    

    <h2 id="implementation">Implementation</h2>
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
    <p>A Confidence Interval is a "Safety Net." Instead of giving a single fragile number, it gives a range that tells you how much you should **Trust** your model's predictions.</p>
    <ul>
      <li><strong>A/B Testing (Lift Analysis)</strong>: When we change a website's layout, we don't just calculate the mean increase in sales. We calculate a 95% Confidence Interval for that "Lift." If the interval doesn't cross Zero, we can say with mathematical certainty that the change actually helped and wasn't just a fluke.</li>
      <li><strong>Model Benchmarking (Bootstrap CI)</strong>: In academic papers, we don't just say "My Model is 92% accurate." We use Bootstrapping to create 1,000 virtual test sets and find the range where the model's accuracy actually lives. This tells other scientists how robust your model is to variations in the data.</li>
    </ul>
    <p>Teacher's Final Word: In Machine Learning, communicating uncertainty is a sign of wisdom. A confidence interval is the difference between a lucky guess and a reliable product that you can trust in the real world.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve completed the core logic of Statistics. Now, learn how we use these tools to find the best possible models in <strong><a href="#/mathematics/optimization/gradient-descent">Optimization Theory</a></strong>.
    </div>
  `
};


