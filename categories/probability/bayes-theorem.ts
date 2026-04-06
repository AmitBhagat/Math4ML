import { TopicSection } from '../../src/data/types';

export const bayesTheoremSection: TopicSection = {
  id: "bayes-theorem",
  title: "Bayes' Theorem",
  description: "Bayes' Theorem is a fundamental principle in probability that describes how to update the probability of a hypothesis as more evidence or information becomes available.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔄 Probability · Bayes' Theorem</div>
      <h1>Bayes' Theorem</h1>
      <p><strong>Bayes' Theorem</strong> is a fundamental principle in probability that describes how to update the probability of a hypothesis as more evidence or information becomes available. It transitions us from "prior" knowledge to "posterior" knowledge. In ML, it is the mathematical engine behind everything from simple spam filters to complex uncertainty estimation in Deep Learning.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#why">Core Theory: The "Why"</a>
      <a href="#formula">The Formula &amp; Key Components</a>
      <a href="#derivation">Mathematical Derivation</a>
      <a href="#applications">Core Applications in ML</a>
      <a href="#applications" class="sub">↳ 1. Naive Bayes</a>
      <a href="#applications" class="sub">↳ 2. Bayesian Inference</a>
      <a href="#applications" class="sub">↳ 3. Bayesian Neural Networks (BNNs)</a>
      <a href="#example">Illustrative Example: Medical Testing</a>
      <a href="#implementation">Implementation: Naive Bayes Logic in Python</a>
      <a href="#takeaways">Key Takeaways</a>
    </div>

    <div class="def-box">
      <div class="def-title">Prerequisites</div>
      <ul style="margin:0">
        <li><strong>Basic Axioms of Probability:</strong> Sample space and events.</li>
        <li><strong>Conditional Probability:</strong> \(P(A|B) = \frac{P(A \cap B)}{P(B)}\).</li>
        <li><strong>Product Rule:</strong> \(P(A \cap B) = P(A|B)P(B) = P(B|A)P(A)\).</li>
      </ul>
    </div>

    <h2 id="why">Core Theory: The "Why"</h2>
    <p>In many real-world scenarios, we know the probability of an effect given a cause, but we want to find the probability of the <strong>cause given the effect</strong>.</p>
    <p>For example, we might know the probability that a patient has a cough given they have the flu, but a doctor needs to know the probability the patient has the flu given they have a cough. Bayes' Theorem provides the exact formula for this "inversion."</p>

    <h2 id="formula">The Formula</h2>
    <div class="premium-math-block" style="text-align: center;">
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--accent); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Bayes' Theorem</div>
      $$P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)}$$
    </div>

    <div class="premium-toc" style="background: transparent; border: none; padding: 0;">
      <div class="perspectives-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 18px 0;">
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(H|E) — Posterior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The probability of Hypothesis \(H\) <em>after</em> seeing Evidence \(E\).</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(E|H) — Likelihood</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The probability of seeing Evidence \(E\) if the Hypothesis \(H\) is true.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(H) — Prior</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">Our initial belief about the Hypothesis before seeing any evidence.</p>
        </div>
        <div class="persp-card" style="background: var(--bg-tertiary); border: 1px solid var(--border-premium); border-radius: 8px; padding: 14px 16px;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin-bottom: 6px;">P(E) — Evidence / Marginal</div>
          <p style="margin: 0; font-size: 13.5px; font-weight: 300;">The total probability of the evidence occurring under all possible hypotheses.</p>
        </div>
      </div>
    </div>

    <h2 id="derivation">Mathematical Derivation</h2>
    <p>The derivation is a direct consequence of the <strong>Definition of Conditional Probability</strong>.</p>
    <div class="step-box"><div class="step-num">1</div><div>Start with the definition of \(P(H|E)\): \(\displaystyle P(H|E) = \frac{P(H \cap E)}{P(E)}\)</div></div>
    <div class="step-box"><div class="step-num">2</div><div>From the Product Rule, we know: \(P(H \cap E) = P(E|H) \cdot P(H)\)</div></div>
    <div class="step-box"><div class="step-num">3</div><div>Substitute step 2 into step 1:</div></div>
    <div class="math-block">$$P(H|E) = \frac{P(E|H) \cdot P(H)}{P(E)}$$</div>
    <p>To calculate \(P(E)\), we often use the <strong>Law of Total Probability</strong>:</p>
    <div class="math-block">$$P(E) = P(E|H)P(H) + P(E|H^c)P(H^c)$$</div>

    <h2 id="applications">Core Applications in ML</h2>

    <h3>1. Naive Bayes</h3>
    <p>This is a classification algorithm that applies Bayes' Theorem with a "Naive" assumption: <strong>all features are independent of each other</strong> given the class label.</p>
    <div class="callout info"><div class="callout-icon">💡</div><div class="callout-body"><strong>Why use it?</strong> It drastically simplifies the calculation of \(P(E|H)\) by multiplying individual feature probabilities: \(P(x_1, x_2 | H) = P(x_1|H) \cdot P(x_2|H)\).</div></div>

    <h3>2. Bayesian Inference</h3>
    <p>This is the process of using Bayes' Theorem to update a probability distribution for a parameter as more data is collected. Unlike frequentist statistics (which gives a single "best" estimate), Bayesian inference gives a <strong>distribution</strong> showing our uncertainty.</p>

    <h3>3. Bayesian Neural Networks (BNNs)</h3>
    <p>In standard Neural Networks, weights are fixed numbers. In <strong>BNNs</strong>, weights are <strong>probability distributions</strong>.</p>
    <div class="callout info"><div class="callout-icon">🧠</div><div class="callout-body"><strong>Benefit:</strong> The model can tell you "I don't know." If it sees data far from its training set, the variance in the weight distributions leads to high uncertainty in the output.</div></div>

    <h2 id="example">Illustrative Example: Medical Testing</h2>
    <div class="example-box">
      <h4>Problem: Disease Testing Paradox</h4>
      <p>A disease affects <strong>1%</strong> of the population. A test is <strong>99% accurate</strong> (if you have it, it's positive 99% of the time) but has a <strong>2% false-positive rate</strong>. If you test positive, what is the probability you actually have the disease?</p>
      <ol>
        <li><strong>Prior \(P(D)\):</strong> \(0.01\)</li>
        <li><strong>Likelihood \(P(+|D)\):</strong> \(0.99\)</li>
        <li><strong>False Positive \(P(+|\text{no }D)\):</strong> \(0.02\)</li>
        <li><strong>Calculate Evidence \(P(+)\):</strong></li>
      </ol>
      <div class="math-block">$$P(+) = (0.99 \times 0.01) + (0.02 \times 0.99) = 0.0099 + 0.0198 = 0.0297$$</div>
      <p><strong>Calculate Posterior \(P(D|+)\):</strong></p>
      <div class="math-block">$$P(D|+) = \frac{0.99 \times 0.01}{0.0297} = \frac{0.0099}{0.0297} \approx 0.333$$</div>
      <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><strong>Result:</strong> Even with a "99% accurate" test, you only have a <strong>33.3%</strong> chance of having the disease because the disease is so rare! This is the power of the prior.</div></div>
    </div>

    <h2 id="implementation">Implementation: Naive Bayes Logic in Python</h2>
    <python-code>
import numpy as np

# P(Spam) = 0.4, P(Ham) = 0.6
prior_spam = 0.4
prior_ham = 0.6

# Likelihood of word "Offer" given Spam or Ham
p_offer_given_spam = 0.8
p_offer_given_ham = 0.1

# Evidence: P(Offer)
p_offer = (p_offer_given_spam * prior_spam) + (p_offer_given_ham * prior_ham)

# Posterior: P(Spam | Offer)
p_spam_given_offer = (p_offer_given_spam * prior_spam) / p_offer

print(f"Probability it is Spam given the word 'Offer': {p_spam_given_offer:.2f}")
    </python-code>

    <h2 id="takeaways">Key Takeaways</h2>
    <ul>
      <li><strong>Priors Matter:</strong> Your initial belief heavily influences the final result, especially with small amounts of data.</li>
      <li><strong>The "Naive" part:</strong> In Naive Bayes, we assume features don't interact, which makes the math fast but potentially less accurate.</li>
      <li><strong>Uncertainty:</strong> Bayesian methods are the gold standard for quantifying how "sure" a model is about its prediction.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Once we know the "mapping" of random variables, we can summarize them by calculating <strong><a href="#/mathematics/probability/expectation-variance">Expectation and Variance</a></strong>.
    </div>
  `
};
