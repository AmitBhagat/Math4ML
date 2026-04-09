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

    <h2 id="theory">Intuition & Motivation</h2>
    <p>How do you find the average height of two different species if you don't know which height measurement belongs to which species? You can't find the average without knowing the group, and you can't find the group without knowing the average. This is the <strong>"Chicken and Egg" problem</strong> of Latent Variables (unseen factors). The <strong>Expectation-Maximization (EM)</strong> algorithm is the iterative engine that solves this by "Soft Guessing." It alternates between filling in the missing labels (Expectation) and optimizing the parameters based on those guesses (Maximization). It is the foundational algorithm for clustering and training complex probabilistic models where the ground truth is hidden from view.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: ELBO Optimization & Coordinate Ascent</div>
      <p>The EM Algorithm is the "Sherlock Holmes" of statistics. It provides a rigorous way to find the truth when the most important clues are missing.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are trying to find the highest peak in a mountain range, but it's middle of the night and you can only see 5 feet in front of you. <strong>Expectation-Maximization (EM)</strong> is a two-step climb. Geometrically, it is a <strong>Coordinate Ascent</strong> on a Likelihood surface. Because our data has "Hidden" (Latent) variables, the true peak is hard to see. EM works by building a "Proxy Hill" (a lower bound) at your current location, climbing to its peak, and then building a new hill. It ensures that every step you take is mathematically guaranteed to lead you higher than where you started.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We want to find parameters $\theta$ that maximize the marginal log-likelihood $\mathcal{L}(\theta) = \sum_i \ln P(\mathbf{x}_i \mid \theta)$. But since we have unobserved latent variables $\mathbf{Z}$, the direct maximization is a nightmare. Using <strong>Jensen's Inequality</strong>, we define the <strong>Evidence Lower Bound (ELBO)</strong>:</p>
      <div class="math-block">
        $$\text{ELBO}(Q, \theta) = \mathbb{E}_{Q(\mathbf{Z})} [ \ln P(\mathbf{X}, \mathbf{Z} \mid \theta) ] + \mathbb{H}(Q)$$
      </div>
      <p>The EM algorithm alternates between optimizing $Q$ and optimizing $\theta$:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>E-Step (Expectation)</strong>: We set $Q(\mathbf{Z})$ to be the posterior distribution of the missing data: $Q(\mathbf{Z}) = P(\mathbf{Z} \mid \mathbf{X}, \theta^{(t)})$. This "Fills in the blanks" with our best possible guess.</li>
        <li><strong>M-Step (Maximization)</strong>: We find the $\theta$ that maximizes the expected log-likelihood:
          $$\theta^{(t+1)} = \arg \max_\theta \sum_{\mathbf{Z}} P(\mathbf{Z} \mid \mathbf{X}, \theta^{(t)}) \ln P(\mathbf{X}, \mathbf{Z} \mid \theta)$$
        </li>
      </ul>
      <p>Because the M-step maximizes the ELBO, and the E-step makes the ELBO equal to the true likelihood, the algorithm is guaranteed to never decrease the likelihood of your data.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Graphical Models, EM is the <strong>Incomplete Data Solver</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Latent Variables</strong>: These are the "Shadows" (like the species label in GMM or the hidden state in HMM) that we cannot see but must estimate to understand the system.</li>
        <li><strong>Local Convergence</strong>: While EM is guaranteed to go "Up," it is a greedy algorithm. It might get stuck on a small "Hill" and miss the "Mount Everest" of global maximum likelihood.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Initialization Matters. If you start your EM algorithm at a terrible location, it will converge to a terrible answer. Always run EM multiple times with different random start points to make sure you've found the true summit.</p>
    </div>
    
    <h2 id="steps">The 2 Big Steps: E and M</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Blind Schoolteacher</h2>
    
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
          EM is for <strong>Incomplete Data</strong>. It handles the problem where you need the parameters to find the labels, and the labels to find the parameters. By iterating between "Filling in the blanks" (E) and "Optimizing the fit" (M), it eventually finds the global truth.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code>
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

    <h2 id="applications">Applications in ML</h2>
    <p>The EM algorithm is the "Chicken-and-Egg Negotiator." It allows us to train complex models even when we are missing critical information about the data labels, making it the bedrock of unsupervised and semi-supervised learning.</p>
    <ul>
      <li><strong>Image Segmentation (Object vs. Background)</strong>: When you use a "Background Blur" feature on a video call, an EM-like process is at work. The model doesn't know which pixels are "You" and which are "The Wall." It starts with a guess, identifies the probable regions (E-Step), and then refines the color and edge boundaries of those regions (M-Step) until it has a clean separation between the person and the room.</li>
      <li><strong>Latent Consumer Profile Analysis</strong>: Market researchers use EM to find "Hidden Types" of shoppers in a massive dataset of purchase history. They don't have labels for "Budget Conscious" or "Luxury Buyer." The algorithm iterates through the data, assigning consumers to probable profiles (Expectation) and then updating the characteristics of those profiles (Maximization) until the true market segments emerge from the noise.</li>
    </ul>
    <p>Teacher's Final Word: When you don't know the answer, start with a guess and keep refining it until the math stops arguing with you. EM teaches us that even if the truth is hidden, we can still reach it through the persistence of iterative logic.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered structured probability. Now, explore the high-speed engines that train these models in <strong><a href="#/machine-learning/optimization-ml/gradient-descent">Optimization in ML</a></strong>.
    </div>
  `
};



