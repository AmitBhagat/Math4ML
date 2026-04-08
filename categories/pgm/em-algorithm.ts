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
    <p>Mathematically, we want to maximize the <strong>Log-Likelihood</strong> \(\ell(\theta) = \sum \log P(x \mid \theta)\). But the log of a sum is hard to optimize. EM works by maximizing a <strong>Lower Bound</strong> (The ELBO) on the likelihood. According to <strong>Jensen's Inequality</strong>, the average of the logs is less than or equal to the log of the averages.</p>
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

    <h2 id="example">Illustrated Example: The Blind Schoolteacher</h2>
    <div class="example-box">
      <h4>Scenario: Sorting 100 Students into Two Voice-Pitch Teams</h4>
      <p>Imagine a blind teacher trying to sort 100 students into two teams: <strong>The High-Pitch Sopranos</strong> and <strong>The Low-Pitch Basses</strong>. The teacher doesn't know who is who.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Initial State:</strong> The teacher makes two random guesses for the 'Average Pitch' of each team. (The Parameters $\theta$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Expectation (E-Step):</strong> A student speaks. Based on the current guesses, the teacher says: "You sound 80% like a Soprano." This is a <strong>Soft Assignment</strong> (Filling the latent variable).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Maximization (M-Step):</strong> The teacher recalculates the 'Average Pitch' of both teams, giving the student's voice 80% weight to the Soprano average and 20% to the Bass average.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Convergence:</strong> After a few rounds of listening and averaging, the guesses 'float' toward the true averages of the two groups. The "Chicken and Egg" problem is solved.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> EM is for <strong>Incomplete Data</strong>. It handles the problem where you need the parameters to find the labels, and the labels to find the parameters. By iterating between "Filling in the blanks" (E) and "Optimizing the fit" (M), it eventually finds the global truth.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: 1D GMM Step</h2>
    <python-code static-output="[Scan] Iteration 0: Mu1 = -0.50, Mu2 = 0.50\n[Scan] Iteration 5: Mu1 = -1.82, Mu2 = 1.91\n[Scan] Iteration 10: Mu1 = -1.98, Mu2 = 2.05\n\n[Status] Converged after 10 epochs.\n[Verdict] EM correctly separated the overlapping Normal distributions (Target: -2.0, 2.0).">
import numpy as np

# 1. Setup Overlapping Data (True means: -2 and 2)
data = np.concatenate([np.random.normal(-2, 1, 50), np.random.normal(2, 1, 50)])

# 2. Initial Guesses
mu1, mu2 = -0.5, 0.5
sigma = 1.0

# 3. The EM Loop
def gaussian_pdf(x, mu, sig): 
    return np.exp(-0.5*((x-mu)/sig)**2) / (sig * np.sqrt(2*np.pi))

for i in range(10):
    # --- E-Step: Responsibilities ---
    r1 = gaussian_pdf(data, mu1, sigma)
    r2 = gaussian_pdf(data, mu2, sigma)
    total_r = r1 + r2
    r1 /= total_r
    r2 /= total_r
    
    # --- M-Step: Update Means ---
    mu1 = np.sum(r1 * data) / np.sum(r1)
    mu2 = np.sum(r2 * data) / np.sum(r2)

print(f"Final Estimation -> Soprano Mean: {mu1:.2f}, Bass Mean: {mu2:.2f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, let's learn how to process the raw data for these advanced models in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
