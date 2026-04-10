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
    
    <visualizer topic="ConfidenceIntervals" />

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Probabilistic Bound & Standard Error Scaling</div>
      <p>A Confidence Interval is "Honest Estimation." It tells you exactly how much room for error your data actually has.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine the <strong>Sampling Distribution</strong> of the mean (the bell curve of all possible averages you could have calculated). A single sample mean $\bar{X}$ is just one point on this curve. A <strong>Confidence Interval</strong> is a "Cage" centered around your sample mean. Geometrically, it’s the width required to cover exactly $(1 - \alpha)$ of the total area under that bell curve. If you want more certainty (99%), you have to build a wider cage. If you have more data ($n$), the bell curve becomes skinnier, and your cage becomes more precise.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We derive the interval starting from the <strong>Z-Statistic</strong> of the sample mean. We know that for a large enough sample size $n$:</p>
      <div class="math-block">
        $$Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim \mathcal{N}(0, 1)$$
      </div>
      <p>For a confidence level of $1-\alpha$, we find the critical value $z^*$ such that the area between $-z^*$ and $z^*$ is $1-\alpha$. This leads to the probability inequality:</p>
      <div class="math-block">
        $$P\left( -z^* \le \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \le z^* \right) = 1 - \alpha$$
      </div>
      <p>Rearranging this inequality to isolate the true population mean $\mu$, we arrive at the <strong>Confidence Interval formula</strong>:</p>
      <div class="math-block">
        $$CI = \bar{X} \pm z^* \cdot \frac{\sigma}{\sqrt{n}}$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, Confidence Intervals are our <strong>Stability Metrics</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Precision over Accuracy</strong>: A model that is "90% accurate" with a $\pm 10\%$ CI is effectively useless—it might be an 80% model or a 100% model. We need high precision (tight intervals) to trust our deployments.</li>
        <li><strong>The $\sqrt{n}$ Law</strong>: To cut your error bar in half, you need <strong>four times</strong> more data. This is the fundamental "diminishing returns" of data collection.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: A 95% Confidence Interval DOES NOT mean there is a 95% chance that the true mean is in *your* specific interval. It means that if you repeated the experiment, 95% of the *different* intervals you created would contain the true mean. It is a property of the process, not the specific outcome.</p>
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
    <p>A Confidence Interval is a "Safety Net." Instead of giving a single fragile number, it gives a range that tells you how much you should <strong>Trust</strong> your model's predictions.</p>
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


