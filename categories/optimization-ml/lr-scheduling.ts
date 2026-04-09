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
      <div class="premium-def-title">Formalism: Robbins-Monro Convergence & Temporal Step Decay</div>
      <p>Scheduling is "Dynamic Precision." It is the science of knowing when to stop sprinting and start tiptoeing.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine a skier approaching a narrow gate at the bottom of a massive valley. At the top, speed (High $\eta$) is your friend—it gets you through the flat plateaus and boring terrain quickly. But as you enter the final approach, that same speed becomes your enemy. If your momentum is too high, the "Curvature" of the valley will bounce you back and forth across the finish line, never letting you stop. Geometrically, Scheduling is the process of shrinking the <strong>Radius of the Update</strong> so that it fits inside the increasingly narrow basin of the minimum. It is the transition from "Exploration" to "Exploitation."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>To guarantee that Stochastic Gradient Descent reaches the global minimum, the learning rates must satisfy the <strong>Robbins-Monro conditions</strong>:</p>
      <div class="math-block">
        $$\text{1. } \sum_{t=1}^\infty \eta_t = \infty \quad \text{2. } \sum_{t=1}^\infty \eta_t^2 < \infty$$
      </div>
      <p>Condition (1) ensures the model can actually cover enough distance to reach the goal from any starting point. Condition (2) ensures that the "Step Energy" eventually dissipates so the model doesn't vibrate forever due to random sampling noise. We implement this through decay functions:</p>
      <div class="math-block">
        $$\eta_t = \eta_0 \cdot \gamma^{\lfloor t/s \rfloor} \quad (\text{Step Decay})$$
        $$\eta_t = \frac{\eta_0}{1 + kt} \quad (\text{Inverse Time Decay})$$
      </div>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Machine Learning, your schedule dictates your <strong>Stability</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Linear Warmup</strong>: We often start with an *increasing* learning rate for the first few hundred steps. Why? Because random weights produce massive gradients that can "shatter" the model early on. Warmup lets the model find its footing before the real descent begins.</li>
        <li><strong>Cosine Annealing</strong>: This is the gold standard for modern Deep Learning. It smoothly reduces the learning rate to near-zero, allowing the model to perform "surgery" on the weights at the end of training for maximum accuracy.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: If you decay your learning rate too fast, you might get trapped in a mediocre local minimum (or a flat plateau) simply because you "Ran out of gas" to keep moving. If you decay too slow, you’ll never see a stable loss curve.</p>
    </div>
    
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
    <python-code runnable="false">
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

    <h2 id="applications">Applications in ML</h2>
    <p>Learning Rate Scheduling is the "Braking System" of training. It allows us to explore the vast space of possibilities at high speed in the beginning, while ensuring we possess the precision to stop exactly at the optimal solution in the end.</p>
    <ul>
      <li><strong>Training Large Language Models (LLMs)</strong>: When training models like Llama or GPT, the initial gradients can be extremely unstable due to random weight initialization. Engineers use a "Warmup" schedule—starting with a tiny learning rate and gradually increasing it—to prevent the model from "exploding" (infinite loss) in the first 1,000 steps, before transitioning to a decay schedule for long-term refinement.</li>
      <li><strong>Transfer Learning Fine-tuning</strong>: If you take a pre-trained model (like ResNet for images) and want to adapt it to a specific task (like identifying rare plants), you already have a "Smart" model. Use a very small, decaying learning rate schedule here. This ensures that you don't destroy the high-level features the model already knows while allowing it to carefully "Tweak" its weights for your specific data.</li>
    </ul>
    <p>Teacher's Final Word: If you never slow down, you'll never stop at the truth; you'll just zoom right past it. Learning rate scheduling is the difference between a model that merely "learns" and one that achieves state-of-the-art generalization by sticking the landing on the global minimum.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve mastered the iterative descent. Now, learn how to combine many models into a single "Strong Learner" in <strong><a href="#/machine-learning/advanced-ml/ensemble-intro">Advanced ML Topics</a></strong>.
    </div>
  `
};



