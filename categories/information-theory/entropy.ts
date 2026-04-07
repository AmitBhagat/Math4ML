import { TopicSection } from '../../src/data/types';

export const entropySection: TopicSection = {
  id: "entropy",
  title: "Information Theory Basics",
  description: "Introduction to Information Theory, Entropy, Cross-Entropy Loss, and KL Divergence in Machine Learning.",
  color: "#26C6DA",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📊 Info Theory · Introduction</div>
      <h1>Information Theory in Machine Learning</h1>
      <p><strong>Information Theory</strong>, originally developed by Claude Shannon, is a mathematical framework for quantifying information. In Machine Learning, it provides the foundational principles for understanding how models learn and optimize loss functions.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#what-is-entropy">What is Entropy?</a>
      <a href="#cross-entropy">Cross-Entropy Loss</a>
      <a href="#kl-divergence">KL Divergence (Relative Entropy)</a>
      <a href="#applications">Real-world Application: LLMs</a>
    </div>

    <h2 id="what-is-entropy">What is Entropy?</h2>
    <p>Entropy is a measure of the <strong>uncertainty</strong> or <strong>randomness</strong> associated with a random variable. In ML, it quantifies the amount of "information" or "surprise" contained in a dataset.</p>
    
    <div class="def-box">
      <div class="def-title">The Mathematical Formula $H(X)$</div>
      <p style="margin:0">For a discrete random variable $X$ with possible outcomes $x_1, \dots, x_n$ and probability mass function $P(X)$, Entropy is defined as:</p>
      <div class="math-block" style="margin-top:15px; margin-bottom:10px; background:transparent; border:none; padding:0;">
        $$H(X) = -\sum_{i=1}^{n} P(x_i) \log P(x_i)$$
      </div>
      <ul style="margin-bottom:0">
        <li><strong>Low Entropy:</strong> Occurs when one outcome is highly likely (low uncertainty).</li>
        <li><strong>High Entropy:</strong> Occurs when all outcomes are equally likely (maximum uncertainty).</li>
      </ul>
    </div>

    <h2 id="cross-entropy">Cross-Entropy Loss</h2>
    <p>Cross-Entropy measures the difference between two probability distributions: the <strong>true distribution</strong> ($P$) and the <strong>predicted distribution</strong> ($Q$).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Why it is the standard for Multi-class Classification:</strong>
        <ol style="margin-top:5px; margin-bottom:0">
          <li><strong>Probability-Based:</strong> Naturally penalizes models based on how far the predicted probability of the correct class is from 1.0.</li>
          <li><strong>Steep Gradients:</strong> Unlike MSE, it provides steeper gradients when the model is very wrong, preventing vanishing gradients during initial training.</li>
          <li><strong>Maximum Likelihood:</strong> Minimizing Cross-Entropy is mathematically equivalent to maximizing the likelihood of the training data.</li>
        </ol>
      </div>
    </div>

    <h2 id="kl-divergence">KL Divergence (Kullback-Leibler Divergence)</h2>
    <p>KL Divergence, often called "Relative Entropy," measures how much one probability distribution $Q$ (approximation) diverges from a second, reference distribution $P$ (truth).</p>
    <div class="math-block">
      $$D_{KL}(P || Q) = \sum_{i} P(x_i) \log \frac{P(x_i)}{Q(x_i)}$$
    </div>
    <div class="callout info">
      <div class="callout-icon">📊</div>
      <div class="callout-body">
        <strong>Key Characteristics:</strong>
        <ul>
          <li><strong>Non-Symmetric:</strong> It's not a true distance metric ($D_{KL}(P || Q) \neq D_{KL}(Q || P)$).</li>
          <li><strong>Information Loss:</strong> Quantifies extra bits required to represent $P$ using a code optimized for $Q$.</li>
          <li><strong>Optimization:</strong> In ML, we minimize KL Divergence to make our model's distribution close to the target.</li>
        </ul>
      </div>
    </div>

    <h2 id="applications">Real-world Application: Training Large Language Models (LLMs)</h2>
    <p>Information theory is the backbone of how models like GPT-4 or Llama are trained.</p>
    <ul>
      <li><strong>Pre-training:</strong> LLMs use <strong>Cross-Entropy Loss</strong> for next-token prediction across the entire vocabulary.</li>
      <li><strong>RLHF:</strong> During alignment, <strong>KL Divergence</strong> is used as a penalty term to ensure the model doesn't diverge too far from the pre-trained base.</li>
      <li><strong>Evaluation:</strong> Metrics like <strong>Perplexity</strong> are directly derived from Entropy.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Entropy measures uncertainty in one variable. Now, explore the mathematical depth in <strong><a href="#/mathematics/information-theory/shannon-entropy">Shannon Entropy</a></strong>.
    </div>
  `
};
