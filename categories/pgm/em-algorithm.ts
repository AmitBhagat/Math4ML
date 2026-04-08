import { TopicSection } from '../../src/data/types';

export const emAlgorithmSection: TopicSection = {
  id: "em-algorithm",
  title: "Expectation-Maximization (EM) Algorithm",
  description: "An iterative method to find maximum likelihood or maximum a posteriori (MAP) estimates of parameters in statistical models, where the model depends on unobserved latent variables.",
  color: "#FF5722",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 PGM · Inference</div>
      <h1>EM Algorithm: The Chicken & Egg Solver</h1>
      <p>How do you find the <strong>Average Height</strong> of two different species if you don't know <strong>Which Height belongs to Which Species</strong>? You can't find the average without the species, and you can't find the species without the average. This is the "Chicken and Egg" problem of Latent Variables. <strong>Expectation-Maximization (EM)</strong> is the algorithm that guesses its way to the truth.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Latent Variables</a>
      <a href="#math">Jensen's Inequality & Lower Bound</a>
      <a href="#steps">The 2 Big Steps: E and M</a>
      <a href="#convergence">Convergence: Finding the Peak</a>
      <a href="#analogy">The "Blind School" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Latent Variables</h2>
    <p>In many real-world problems, we have <strong>Latent Variables (Z)</strong>—things that exist but aren't in our dataset. If we knew \(Z\), the problem would be simple. If we don't, we have to <strong>Iterate</strong>. EM is the engine that powers Gaussian Mixture Models (GMM) and Hidden Markov Model (HMM) training.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Soft Guessing."</strong> 
        The algorithm doesn't say "Point A *definitely* belongs to Species 1." It says "Point A belongs to Species 1 with <strong>70% probability</strong>." This "Soft" assignment is what allows the algorithm to converge smoothly.
      </div>
    </div>

    <h2 id="math">Jensen's Inequality & Lower Bound</h2>
    <p>Mathematically, we want to maximize the <strong>Log-Likelihood</strong> \(\ell(\theta) = \sum \log P(x \mid \theta)\). But the log of a sum is hard to optimize. EM works by maximizing a <strong>Lower Bound</strong> (The ELBO) on the likelihood. According to **Jensen's Inequality**, the average of the logs is less than or equal to the log of the averages.</p>
    <div class="math-block">$$\log \sum_z P(x, z \mid \theta) \ge \sum_z Q(z) \log \frac{P(x, z \mid \theta)}{Q(z)}$$</div>

    <h2 id="steps">The 2 Big Steps: E and M</h2>
    <div class="example-box">
      <h4>How to solve the unsolvable:</h4>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Expectation (E-Step):</strong> Using your current guess for the parameters (\(\theta\)), calculate the <strong>Expected Value</strong> of the hidden variables (\(Z\)). (Fill in the blanks).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Maximization (M-Step):</strong> Now that the blanks are filled, find the <strong>Highest Probability Parameters</strong> (\(\theta\)) to fit the data. (Update the averages).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Convergence:</strong> Keep bouncing between E and M until the parameters stop changing.</div>
        </div>
      </div>
    </div>

    <h2 id="analogy">The "Blind School" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Blind Schoolteacher** trying to separate 100 students into **2 Teams (Blue and Red)**. 
        He doesn't know who is who. 
        * **E-Step:** He hears a voice and **Guesses** "That sounds like a 60% chance of being Blue." 
        * **M-Step:** He takes all the "Mostly Blue" students and calculates their **Average Voice Pitch**. 
        * **E-Step again:** He uses the <strong>New Average</strong> to make better guesses. 
        **EM Algorithm** is that teacher. By the end of the day, even though he is blind, he has **perfectly separated the teams.**
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, let's learn how to process the raw data for these advanced models in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
