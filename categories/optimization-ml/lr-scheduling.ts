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

    <h2 id="example">Illustrated Example: The Controlled Descent</h2>
    <div class="example-box">
      <h4>Scenario: Landing a Plane on a High-Altitude Runway</h4>
      <p>Imagine you are a pilot. You can't land at 500 mph (High LR). You also can't fly at 10 mph for the whole trip (Low LR). You need a **Systematic Decrease** in speed.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Cruising Altitude (High LR):</strong> You fly at maximum speed to cover the vast distance across the valley (Loss function) quickly. Accuracy doesn't matter yet; <strong>Progress</strong> does.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Descent (Step Decay):</strong> As you approach the city, you drop your altitude and speed in clear "Chunks" (Stages). This lets the model stabilize after the chaotic cruising phase.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Final Approach (Cosine Annealing):</strong> You smoothly curve your speed down as you approach the concrete. This prevents the "Bouncing" effect where the model oscillates over the minimum without sticking the landing.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Touchdown (Convergence):</strong> You stop exactly at the gate. Zero speed, zero error. The landing is perfect.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Teacher's Hint:</strong> LR Scheduling is your <strong>Braking System</strong>. Without it, your model will keep jumping back and forth across a narrow valley, unable to ever reach the very bottom. A good schedule is often the difference between a 95% and a 99% accuracy model.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation: Visualizing Schedules</h2>
    <python-code runnable="false" static-output="[Schedule] Initial LR detected: 0.1\n[Stage 1] Step Decay: Dropping by factor 0.1 at Epoch 50.\n[Stage 2] Cosine: Smoothly curving toward 0.0.\n\nEpoch 0:   Step-LR=0.1000 | Cosine-LR=0.1000\nEpoch 25:  Step-LR=0.1000 | Cosine-LR=0.0854\nEpoch 50:  Step-LR=0.0100 | Cosine-LR=0.0500\nEpoch 75:  Step-LR=0.0100 | Cosine-LR=0.0146\nEpoch 100: Step-LR=0.0010 | Cosine-LR=0.0000\n\n[Verdict] Cosine Annealing leads to a smoother 'Flight Path' than Step Decay.">
import numpy as np

# 1. Base Numbers
initial_lr = 0.1
max_epochs = 100

# 2. Step Decay (The Staircase)
def get_step_lr(epoch):
    return initial_lr * (0.1 ** (epoch // 50))

# 3. Cosine Annealing (The Slide)
def get_cosine_lr(epoch):
    return 0.5 * initial_lr * (1 + np.cos(np.pi * epoch / max_epochs))

# 4. Compare their paths
for e in [0, 25, 50, 75, 100]:
    s_lr = get_step_lr(e)
    c_lr = get_cosine_lr(e)
    print(f"Epoch {e:3}: Step={s_lr:.4f} | Cosine={c_lr:.4f}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> You have mastered the iterative descent. Now, let's look at how to prep and "Clean" your raw datasets in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `
};
