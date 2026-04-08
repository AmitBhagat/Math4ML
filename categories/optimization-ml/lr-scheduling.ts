import { TopicSection } from '../../src/data/types';

export const lrSchedulingSection: TopicSection = {
  id: "lr-scheduling-ml",
  title: "Learning Rate Scheduling",
  description: "Advanced techniques to systematically anneal the learning rate over time to ensure fine-grained convergence and prevent 'overshooting' the global minimum.",
  color: "#F44336",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">⚡ Optimization · ML</div>
      <h1>LR Scheduling: The Slowing Pace</h1>
      <p>Why sprint at the finish line? In the beginning, you want <strong>Big Steps</strong> to explore the mountain. But as you get closer to the **Resort (The Minimum)**, those big steps become <strong>Dangerous</strong>. You'll keep "Overshooting" the door and bouncing between the walls of the valley. <strong>Learning Rate Scheduling</strong> is the art of slowing down so you can <strong>Land Softly</strong> on the truth.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Annealing</a>
      <a href="#decay">Step Decay: The Ladder Descent</a>
      <a href="#cosine">Cosine Annealing: The Smooth Slide</a>
      <a href="#warmup">Warmup: The Gentle Start</a>
      <a href="#analogy">The "Finish Line" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Annealing</h2>
    <p>Annealing is a concept from <strong>Metallurgy</strong>. If you want a metal to be perfect, you <strong>Heat it up</strong> (High LR) so the atoms can move freely, and then <strong>Cool it down</strong> (Low LR) very slowly so they settle into the <strong>Lowest Energy State</strong>. If you cool it too fast, it becomes <strong>Brittle (Suboptimal)</strong>.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Narrowing the Focus."</strong> 
        Start <strong>Wide</strong> to find the right <strong>Neighborhood</strong>. 
        End <strong>Narrow</strong> to find the <strong>Specific House</strong>. 
        If you never slow down, you'll just <strong>Circle the house</strong> forever, never going in. 
      </div>
    </div>

    <h2 id="decay">Step Decay</h2>
    <p><strong>The Strategy:</strong> Reduce the learning rate by a fixed factor \(\gamma\) every \(N\) epochs. (e.g., Divide by 10 every 30 epochs). 
    **The Visual:** It looks like a <strong>Staircase</strong>. The model learns in bursts, then stabilizes, then bursts again.</p>

    <h2 id="cosine">Cosine Annealing</h2>
    <p><strong>The Strategy:</strong> Use a <strong>Cosine Wave</strong> to smoothly reduce the learning rate from the initial value to <strong>Zero</strong>. 
    **Why use it?** It is <strong>Continuous</strong> and requires fewer "Step" hyper-parameters. It's often the <strong>State-of-the-art</strong> choice for training Vision Transformers and LLMs.</p>

    <h2 id="warmup">Learning Rate Warmup</h2>
    <p><strong>The Gotcha:</strong> At the very first iteration, the model is **Randomly Initialized**. If the learning rate is too high, the gradients will be <strong>Explosive</strong> and destroy the model's structure. 
    **Warmup** starts with a <strong>Tiny</strong> learning rate and increases it linearly for 1,000 steps before the real training begins.</p>

    <h2 id="analogy">The "Finish Line" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Professional Runner** finishing an <strong>Ultra-Marathon</strong>. 
        * **1st Hour:** He <strong>Sprints</strong> to get ahead. (High LR). 
        * **Last Mile:** He <strong>Slows to a Jog</strong>. 
        * **Final 10 Feet:** He <strong>Slowly Walks</strong> and touches the finish line with his finger. (Tiny LR). 
        If he tried to <strong>Sprint</strong> the final 10 feet, he'd <strong>Crash</strong> into the wall and hurt himself. 
        **Scheduling is that controlled slowdown. It guarantees a perfect landing.** 
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the iterative descent. Now, let's look at how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
