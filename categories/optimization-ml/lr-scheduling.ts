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
      <p>Why sprint at the finish line? In the beginning, you want <strong>Big Steps</strong> to explore the mountain. But as you get closer to the <strong>Resort (The Minimum)</strong>, those big steps become <strong>Dangerous</strong>. You'll keep "Overshooting" the door and bouncing between the walls of the valley. <strong>Learning Rate Scheduling</strong> is the art of slowing down so you can <strong>Land Softly</strong> on the truth.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In the beginning of training, you want to sprint—taking <strong>Big Steps</strong> to explore the mountainous loss landscape and move away from random initialization as quickly as possible. But as you get closer to the <strong>Global Minimum</strong>, those big steps become reckless. If you don't slow down, you'll "Overshoot" the target and bounce frantically between the walls of the valley, never quite landing in the center. <strong>Learning Rate Scheduling</strong> (or Annealing) is the tactical decision to systematically reduce your step size as training progresses. It is the difference between a high-speed cruise across the country and a precision landing on a narrow runway. Start wide to find the right neighborhood; end narrow to find the specific house. Without a good schedule, even the most powerful optimizer will circle the truth forever, unable to ever truly arrive.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Temporal Step Function</div>
      <p>A **Learning Rate Schedule** is a function $f: t \to \eta_t$ that adjusts the optimizer's step size as a function of training progress $t$. This refinement is essential for navigating the multi-scale curvature of high-dimensional loss surfaces:</p>
      <div class="math-block">
        $$\eta_t = f(t, \eta_{initial})$$
      </div>
      <p>Common scheduling paradigms used in state-of-the-art architectures include:</p>
      <ul class="text-xs opacity-80 mt-2 space-y-1">
        <li><strong>Step/Exponential Decay</strong>: $\eta_{t+1} = \eta_t \cdot \gamma$. This creates a "Staircase" effect, allowing the model to stabilize and refine at discrete intervals.</li>
        <li><strong>Cosine Annealing</strong>: $\eta_t = \eta_{min} + \frac{1}{2}(\eta_{max} - \eta_{min})(1 + \cos(\frac{T_{cur}}{T_{max}}\pi))$. This provides a smooth, continuous transition that is highly effective for Deep Learning.</li>
        <li><strong>Warmup Phase</strong>: A linear increase in $\eta$ during the first $K$ steps to prevent gradient explosion caused by random weight initialization.</li>
        <li><strong>Cyclic Scheduling</strong>: Oscillating between a range of values to "restart" the search and prevent entrapment in sub-optimal basins.</li>
      </ul>
      <p class="text-xs opacity-70 mt-2">Proper scheduling is often the difference between a model that merely "learns" and one that achieves state-of-the-art generalization.</p>
    </div>
    
    <div class="callout tip">

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Controlled Descent</h2>
    
      <h4>Scenario: Landing a Plane on a High-Altitude Runway</h4>
      <p>Imagine you are a pilot. You can't land at 500 mph (High LR). You also can't fly at 10 mph for the whole trip (Low LR). You need a <strong>Systematic Decrease</strong> in speed.</p>
      
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
          LR Scheduling is your <strong>Braking System</strong>. Without it, your model will keep jumping back and forth across a narrow valley, unable to ever reach the very bottom. A good schedule is often the difference between a 95% and a 99% accuracy model.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
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

