import { TopicSection } from '../../src/data/types';

export const bayesMleSection: TopicSection = {
  id: "bayes-mle",
  title: "Bayes' Theorem & MLE",
  description: "Maximum Likelihood Estimation (MLE) and Bayesian Inference are two different philosophies for 'training' a model by finding the best parameters for a probability distribution.",
  color: "#FFC107",
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
      <a href="#mle-example">5. Illustrative Example: MLE (Coin Bias)</a>
      <a href="#map-example">6. Illustrative Example: MAP (Beta Prior)</a>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> This version of Bayes is the <strong>"Learning Formula."</strong> It tells us how to update our internal model ($\theta$) by looking at the world ($D$). This is how a child learns what a "dog" looks like—by starting with a fuzzy prior and sharpening it with every dog they see.
      </div>
    </div>

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
    <div class="example-box">
      <h4>The "Inversion" of Perspective</h4>
      <p>Imagine a coin with success probability \(\theta\). You flip it and get Heads (H).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Probability \(P(H|\theta=0.5)\):</strong> You fix the coin as fair. The chance of H is \(0.5\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Likelihood \(L(\theta=0.5|H)\):</strong> You fix the data (Heads). How well does "fairness" explain this observation?</div></div>

      <div class="callout tip"><div class="callout-icon">💡</div><div class="callout-body"><strong>Crucially:</strong> Likelihood is <strong>not</strong> a probability distribution. It doesn't sum to 1. It is a "score" of how well parameters fit the facts.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> The <strong>Probability</strong> perspective is <em>Forecasting</em> (given $\theta$, what's the data?). The <strong>Likelihood</strong> perspective is <em>Fitting</em> (given data, what's $\theta$?). ML is almost entirely about <strong>Fitting</strong>.
        </div>
      </div>
    </div>
    </div>

    <h2 id="mle">4. Maximum Likelihood Estimation (MLE)</h2>
    <p>MLE asks: "Which parameter \(\theta\) makes the observed data \(D\) most probable?" It ignores the Prior \(P(\theta)\) entirely.</p>
    <div class="math-block">$$\hat{\theta}_{MLE} = \arg\max_{\theta} P(D|\theta)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MLE</strong> is the <strong>"Blind Expert."</strong> It trusts the data 100%. If you flip a coin once and get Heads, MLE will insist that tails is <em>impossible</em> ($p=1.0$). It has no common sense—only the facts in front of it.
      </div>
    </div>

    <h2 id="mle-example">5. Illustrative Example: MLE (Estimating Coin Bias)</h2>
    <div class="example-box">
      <h4>Problem: Finding the "Most Likely" \(\theta\)</h4>
      <p>In 10 flips of a mysterious coin, you see 8 Heads and 2 Tails. What is the MLE estimate of \(\theta\)?</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Likelihood Function:</strong> \(L(\theta) = \theta^8 (1-\theta)^2\).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Log-Likelihood:</strong> \(\ln L(\theta) = 8 \ln \theta + 2 \ln(1-\theta)\).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Optimize:</strong> Set derivative to zero: \(\frac{8}{\theta} - \frac{2}{1-\theta} = 0\).</div></div>

      <div class="math-block">$$8(1-\theta) = 2\theta \implies 8 = 10\theta \implies \hat{\theta}_{MLE} = 0.8$$</div>

      <div class="callout success"><div class="callout-icon">✓</div><div class="callout-body"><strong>Result:</strong> MLE perfectly matches the observed frequency (8/10). It assumes the data is all that matters.</div></div>
    </div>

    <h2 id="map-example">6. Illustrative Example: MAP (Beta Prior)</h2>
    <div class="example-box">
      <h4>Problem: When Priors Pull Back</h4>
      <p>Using the same 8/10 data, but now we have a <strong>Prior</strong> that the coin is fair (\(\mu=0.5\)). This prior behaves like having seen 2 virtual Heads and 2 virtual Tails previously.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Posterior Logic:</strong> Combine observed (8H, 2T) with prior (2H, 2T).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>New Totals:</strong> 10 Heads, 4 Tails. Total flips = 14.</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>MAP Estimate:</strong> \(\hat{\theta}_{MAP} = \frac{10}{14} \approx 0.71\).</div></div>

      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Result:</strong> See how the Prior "pulled" the estimate from 0.8 back towards 0.5? This is <strong>Regularization</strong>. It prevents the model from overreacting to a small sample of 10 flips.</div></div>
    </div>

    <h2 id="comparison">MLE vs. MAP</h2>
    <p><strong>MAP (Maximum A Posteriori)</strong> is like MLE but it includes the Prior belief:</p>
    <div class="math-block">$$\hat{\theta}_{MAP} = \arg\max_{\theta} P(D|\theta) \cdot P(\theta)$$</div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>MAP</strong> is the <strong>"Skeptical Expert."</strong> It balances the data against its existing knowledge (the Prior). In ML, <strong>L2 Regularization</strong> (Weight Decay) is exactly the same as using a Gaussian Prior. It says: "The data suggests the weights should be huge, but my Prior says they should stay small."
      </div>
    </div>

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
      <strong>Next Step:</strong> Theory is best solidified through practice. Let's look at <strong><a href="#/mathematics/probability/bayes-mle-examples">Practical Examples</a></strong> of Spam Filtering and Coin Tosses.
    </div>
  `
};
