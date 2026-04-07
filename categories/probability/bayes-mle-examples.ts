import { TopicSection } from '../../src/data/types';

export const bayesMleExamplesSection: TopicSection = {
  id: "bayes-mle-examples",
  title: "Practical Examples",
  description: "Solidify your understanding of Bayes' Theorem and Maximum Likelihood Estimation with practical examples: Spam Filtering and a Bernoulli Coin Toss.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📝 Solved Examples · Bayes' Theorem &amp; MLE</div>
      <h1>Bayes' Theorem &amp; MLE: Practical Examples</h1>
      <p>Solidify your understanding of <strong>Bayes' Theorem</strong> and <strong>Maximum Likelihood Estimation (MLE)</strong> with two of the most famous examples in Machine Learning: Spam Filtering (Bayesian) and the Bernoulli Coin Toss (MLE).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#spam">Example 1: The Bayesian Spam Filter</a>
      <a href="#spam" class="sub">↳ The "Naive" Assumption</a>
      <a href="#coin">Example 2: Bernoulli MLE (Coin Toss)</a>
      <a href="#coin" class="sub">↳ Using the Log-Likelihood Trick</a>
      <a href="#coin" class="sub">↳ Finding the Global Maximum</a>
      <a href="#interpretation">Interpretation for ML</a>
    </div>

    <h2 id="spam">Example 1: The Bayesian Spam Filter</h2>
    <div class="example-box">
      <h4>Problem: Does this email contain spam?</h4>
      <p>Given an email with the subject <strong>"Free Winner"</strong>, we want to calculate the probability it is Spam \((S)\).</p>
      <ul>
        <li><strong>Prior \(P(S)\):</strong> From our history, 40% of emails are Spam \((0.4)\).</li>
        <li><strong>Likelihoods:</strong>
          <ul>
            <li>\(P(\text{"Free"}|S) = 0.8\), \(P(\text{"Winner"}|S) = 0.6\)</li>
            <li>\(P(\text{"Free"}|\text{Not }S) = 0.1\), \(P(\text{"Winner"}|\text{Not }S) = 0.05\)</li>
          </ul>
        </li>
      </ul>

      <p><strong>Step-by-step Solution:</strong></p>
      <div class="step-box"><div class="step-num">1</div><div><strong>Joint Likelihood (Naive Assumption):</strong> We assume "Free" and "Winner" are independent given Spam.
\[P(\text{"Free", "Winner"}|S) = 0.8 \times 0.6 = 0.48\]</div></div>
      <div class="step-box"><div class="step-num">2</div><div><strong>Joint Likelihood (Not Spam):</strong>
\[P(\text{"Free", "Winner"}|\text{Not }S) = 0.1 \times 0.05 = 0.005\]</div></div>
      <div class="step-box"><div class="step-num">3</div><div><strong>Apply Bayes' Theorem (Numerator only for now):</strong>
<ul>
  <li>Posterior for Spam \(\propto 0.48 \times 0.4 = 0.192\)</li>
  <li>Posterior for Not Spam \(\propto 0.005 \times 0.6 = 0.003\)</li>
</ul></div></div>
      <div class="step-box"><div class="step-num">4</div><div><strong>Normalize:</strong>
\[P(S|\text{Data}) = \frac{0.192}{0.192 + 0.003} = \frac{0.192}{0.195} \approx 0.985\]</div></div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> There is a <strong>98.5%</strong> chance the email is Spam.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> This is <strong>Bayesian Inference</strong> in action. We started with a "Weak Prior" (40% spam), but the specific combination of words "Free" and "Winner" provided such strong <strong>Likelihood</strong> that it pulled our confidence almost to 100%. One piece of evidence can change everything.
        </div>
      </div>
    </div>
    </div>

    <h2 id="coin">Example 2: Bernoulli MLE (Coin Toss)</h2>
    <p>How do we actually <em>calculate</em> the best parameter \(p\) if we flip a coin \(n\) times and get \(k\) heads?</p>

    <div class="example-box">
      <h4>Mathematical Walkthrough</h4>
      <p>Data \(D = \{x_1, x_2, \dots, x_n\}\). For each flip, \(P(x_i) = p^{x_i}(1-p)^{1-x_i}\).</p>

      <div class="step-box"><div class="step-num">1</div><div><strong>Total Likelihood:</strong>
\[L(p) = \prod_{i=1}^n p^{x_i}(1-p)^{1-x_i} = p^k(1-p)^{n-k}\] (where \(k = \sum x_i\) is the number of heads).</div></div>
      <div class="step-box"><div class="step-num">2</div><div><strong>Apply Log-Likelihood trick:</strong>
\[\log(L(p)) = k \log(p) + (n-k) \log(1-p)\]</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> Why the <strong>Log Trick</strong>? In ML, we often multiply thousands of tiny probabilities together, which leads to <strong>Numerical Underflow</strong> (the computer rounds your number to zero). By taking the log, we turn <strong>Products into Sums</strong>, which are much more stable and easier to optimize with Gradient Descent.
        </div>
      </div>
      <div class="step-box"><div class="step-num">3</div><div><strong>Take the derivative with respect to \(p\):</strong>
\[\frac{d}{dp} \log(L(p)) = \frac{k}{p} - \frac{n-k}{1-p}\]</div></div>
      <div class="step-box"><div class="step-num">4</div><div><strong>Set to zero to find the maximum:</strong>
\[\frac{k}{p} = \frac{n-k}{1-p} \implies k(1-p) = p(n-k)\]
\[k - kp = np - kp \implies \hat{p} = \frac{k}{n}\]</div></div>
      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Intuitive Result:</strong> The Best MLE for the parameter \(p\) is simply the <strong>fraction of heads</strong> we saw in our sample!</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> This is a beautiful moment where math meets intuition. MLE essentially proves that if you see 8 heads out of 10, the "smartest" guess for the coin's bias is 0.8. This derivation is the root of almost every <strong>Loss Function</strong> in modern AI.
        </div>
      </div>
    </div>
    </div>

    <h2 id="interpretation">Interpretation for ML</h2>
    <ul>
      <li><strong>Spam Filter:</strong> Shows how Bayes' Theorem handles "Updating evidence."</li>
      <li><strong>Coin Toss:</strong> Shows how MLE provides the formula for "Learning from data."</li>
      <li>In Linear Regression, the formula for the weights is derived exactly like the Coin Toss example, but using the <strong>Gaussian Likelihood</strong> instead of the Bernoulli Likelihood!</li>
    </ul>

    <div class="linking-rule">
      <strong>Final Step:</strong> Now that you've mastered <strong>Probability</strong>, you can transition into <strong><a href="#/mathematics/statistics/descriptive-statistics">Statistics</a></strong>, where we use these tools to analyze real-world datasets and infer population properties.
    </div>
  `
};
