import { TopicSection } from '../../src/data/types';

export const bayesMleSection: TopicSection = {
  id: "bayes-mle",
  title: "Bayes' Theorem & MLE",
  description: "Maximum Likelihood Estimation (MLE) and Bayesian Inference are two different philosophies for 'training' a model by finding the best parameters for a probability distribution.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎯 Probability · Bayes' Theorem & MLE</div>
      <h1>Bayes' Theorem &amp; MLE</h1>
      <p>Maximum Likelihood Estimation (MLE) and Bayesian Inference are two different philosophies for "training" a model. While one finds the single "best" parameter, the other treats parameters as uncertainty-filled distributions. This section bridges the gap between <strong>Probability Theory</strong> and <strong>Machine Learning Practice</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#intro">1. The Need for Estimation</a>
      <a href="#bayes">2. Bayes' Theorem Revisited</a>
      <a href="#likelihood">3. Likelihood vs. Probability</a>
      <a href="#mle">4. Maximum Likelihood Estimation (MLE)</a>
      <a href="#mle" class="sub">↳ The Log-Likelihood Trick</a>
      <a href="#comparison">MLE vs. MAP (Maximum A Posteriori)</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Bayes' Theorem:</strong> The formula \(P(H|E) = \frac{P(E|H)P(H)}{P(E)}\).</li>
        <li><strong>Probability Distributions:</strong> Gaussian \(\mathcal{N}(\mu, \sigma^2)\) and Bernoulli.</li>
        <li><strong>Calculus:</strong> Finding the maximum of a function using derivatives.</li>
      </ul>
    </div>

    <h2 id="intro">1. The Need for Estimation</h2>
    <p>In pure probability, we assume we know the parameters (e.g., "The coin is fair, \(p=0.5\)"). In Machine Learning, we have the opposite: we have the <strong>data</strong> (the flips), and we must estimate the <strong>parameters</strong> (is the coin fair?).</p>

    <h2 id="bayes">2. Bayes' Theorem Revisited</h2>
    <p>In estimation, we rewrite Bayes' Theorem using parameters \((\theta)\) and data \((D)\):</p>
    <div class="math-block">$$P(\theta|D) = \frac{P(D|\theta) \cdot P(\theta)}{P(D)}$$</div>

    <div class="premium-toc" style="background: transparent; border: none; padding: 0;">
      <div class="perspectives-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 18px 0;">
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(θ|D) — Posterior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">What we believe about the parameters AFTER seeing the data.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(D|θ) — Likelihood</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">How well the parameters explain the observed data.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(θ) — Prior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">What we believed BEFORE seeing the data (e.g., "Most coins are fair").</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(D) — Evidence</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">A constant that ensures the total probability is 1.</p>
        </div>
      </div>
    </div>

    <h2 id="likelihood">3. Likelihood vs. Probability</h2>
    <p>This is a subtle but vital distinction:</p>
    <ul>
      <li><strong>Probability \(P(D|\theta)\):</strong> We fix \(\theta\) and vary \(D\). "Given this fair coin, what's the chance of 3 heads?"</li>
      <li><strong>Likelihood \(L(\theta|D)\):</strong> We fix \(D\) and vary \(\theta\). "Given we saw 3 heads, how likely is it that the coin's fairness parameter is \(0.8\)?</li>
    </ul>

    <h2 id="mle">4. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE asks: "Which parameter \(\theta\) makes the observed data \(D\) most probable?" It ignores the Prior \(P(\theta)\) entirely.</p>
    <div class="math-block">$$\hat{\theta}_{MLE} = \arg\max_{\theta} P(D|\theta)$$</div>

    <h3>The Log-Likelihood Trick</h3>
    <p>Data points are usually independent, so \(P(D|\theta) = P(d_1|\theta) \cdot P(d_2|\theta) \cdot \dots \cdot P(d_n|\theta)\). Multiplying many small probabilities leads to numbers so small that computers can't handle them (underflow).</p>
    <p>To fix this, we maximize the <strong>Log-Likelihood</strong>. Since \(\log(x)\) is a monotonically increasing function, the \(\theta\) that maximizes \(\log(P)\) also maximizes \(P\).</p>
    <div class="math-block">$$\log \left( \prod P(d_i|\theta) \right) = \sum \log(P(d_i|\theta))$$</div>
    <div class="callout tip"><div class="callout-icon">🚀</div><div class="callout-body"><strong>Why?</strong> It turns difficult multiplication into easy addition and makes the derivatives much simpler to compute!</div></div>

    <h2 id="comparison">MLE vs. MAP</h2>
    <p><strong>MAP (Maximum A Posteriori)</strong> is like MLE but it includes the Prior belief:</p>
    <div class="math-block">$$\hat{\theta}_{MAP} = \arg\max_{\theta} P(D|\theta) \cdot P(\theta)$$</div>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead><tr><th>Feature</th><th>MLE</th><th>MAP</th></tr></thead>
        <tbody>
          <tr><td><strong>Formula</strong></td><td>Maximize Likelihood only.</td><td>Maximize Likelihood \(\times\) Prior.</td></tr>
          <tr><td><strong>ML Analogy</strong></td><td>Standard Training.</td><td>Training with <strong>Regularization</strong>.</td></tr>
          <tr><td><strong>Data Sensitivity</strong></td><td>Can overfit if data is small.</td><td>More robust; pulls towards the Prior.</td></tr>
          <tr><td><strong>Outcome</strong></td><td>A single "best" point estimate.</td><td>A single "best" point estimate.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Likelihood:</strong> Measures how well parameters fit data.</li>
      <li><strong>MLE:</strong> Picks \(\theta\) that maximizes likelihood \(P(D|\theta)\).</li>
      <li><strong>MAP:</strong> Picks \(\theta\) that maximizes \(P(\theta|D)\) by using a Prior.</li>
      <li><strong>Regularization:</strong> In Machine Learning, adding a penalty (like L2) is mathematically identical to using a <strong>Gaussian Prior</strong> in MAP estimation.</li>
    </ul>

    <div class="linking-rule">
      <strong>The "Linking" Rule:</strong> Now work through <strong>Practical Examples</strong> (Spam filtering and Coin tossing) to see exactly how the Log-Likelihood trick and Bayes' inversion work in code.
    </div>
  `
};
