import { TopicSection } from '../../src/data/types';

export const jointDistributionsSection: TopicSection = {
  id: "joint-distributions",
  title: "Joint Distributions",
  description: "A Joint Distribution allows us to model a multi-dimensional random variable. It tells us the probability of two or more events occurring together.",
  color: "#FF6F00",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎲 Probability · Joint</div>
      <h1>Joint Distributions: Modeling Multiple Variables</h1>
      <p>A <strong>Joint Distribution</strong> (\(P(X, Y)\)) is a mathematical function that models the probability of two or more random variables occurring at the same time. In Machine Learning, we don't just care about one feature; we care about the <strong>Interaction</strong> between all our features.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Scalar PMFs and PDFs.</li>
        <li><strong>Set Intersection</strong>: Understanding \(P(A \cap B)\).</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>A single distribution for "House Price" or "Number of Bedrooms" is helpful, but in the real world, these things don't live in isolation. They are linked. High bedrooms usually lead to a high price—they interact. <strong>Joint Distributions</strong> allow us to track this multi-dimensional relationship. If we know the joint distribution of our data, we have the "God's Eye View" of the entire dataset. We can see not just the individual traits, but the underlying <strong>Coupling</strong> between variables. In AI, this is the difference between looking at individual pixel colors and seeing an actual object formed by those pixels moving together.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Multi-Dimensional PDF</div>
      <p>For two random variables $X$ and $Y$, the **Joint Distribution** specifies the probability that $X$ and $Y$ fall within any specified range or set of values simultaneously. It is defined by the Joint Cumulative Distribution Function:</p>
      <div class="math-block">
        $$F_{X,Y}(x, y) = P(X \le x, Y \le y)$$
      </div>
      <p>The joint behavior is expressed through two primary functional forms depending on the variable types:</p>
      <ul class="mt-2 space-y-1">
        <li><strong>Joint PMF</strong>: For discrete variables, $p(x, y) = P(X=x, Y=y)$, satisfying $\sum_x \sum_y p(x, y) = 1$.</li>
        <li><strong>Joint PDF</strong>: For continuous variables, $f(x, y)$ is the surface such that the volume under it over a region $A$ is $P((X, Y) \in A) = \iint_A f(x, y) dx dy$.</li>
        <li><strong>Marginalization</strong>: The distribution of a single variable $X$ is obtained by "summing out" the other variable: $f_X(x) = \int_{-\infty}^\infty f(x, y) dy$.</li>
      </ul>
      <p class="mt-2">Correlation and independence are fundamental properties of the joint distribution: $X \perp Y$ iff $f(x, y) = f_X(x)f_Y(y)$.</p>
    </div>
    
    <h2 id="example-scatter" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Scatter of Binary Features</h2>
    
      <h4>Problem: Tracking Clicks and Purchases</h4>
      <p>Let \(X=1\) be a customer who clicked a link, and \(Y=1\) be a customer who made a purchase. The joint probabilities are:</p>
      <table>
        <tr><th></th><th>Y=0 (No)</th><th>Y=1 (Yes)</th></tr>
        <tr><th>X=0 (No Click)</th><td>0.6</td><td>0.1</td></tr>
        <tr><th>X=1 (Click)</th><td>0.05</td><td>0.25</td></tr>
      </table>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Find the probability that a customer clicks <strong>and</strong> purchases. \(P(1, 1) = 0.25\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Summing:</strong> The total must be 1: \(0.6 + 0.1 + 0.05 + 0.25 = 1.0\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> Most customers don't click and don't buy (0.6). But knowing the click (\(X=1\)) significantly shifts our expectation that they might buy.
        </div>
      </div>
    

    <h2 id="example-marginal" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Marginalizing Out a Variable</h2>
    
      <h4>Problem: Finding the Overall Click-Rate</h4>
      <p>Given the table above, what is the probability that a customer clicks, regardless of whether they buy?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Formula:</strong> \(P(X=1) = P(1, 0) + P(1, 1)\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculate:</strong> \(0.05 + 0.25 = 0.30\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 30% of our customers click. By "Marginalizing" out the purchase variable, we simplified a 2D problem back down to a 1D problem.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

# A joint probability table (2x2)
# Rows: Income (Low, High)
# Cols: Default (No, Yes)
joint_table = np.array([
    [0.7, 0.1],  # Low income
    [0.15, 0.05] # High income
])

# Marginalizing to find "Overall Default Rate" (Sum over rows)
marginal_default = joint_table.sum(axis=0)

print(f"Overall Default Rate: {marginal_default[1]*100}%")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>A Joint Distribution is the "God's Eye View" of your data. It doesn't just look at variables in isolation; it captures the invisible threads that tie them together into a coherent reality.</p>
    <ul>
      <li><strong>Realistic Image Synthesis (GANs & Diffusion)</strong>: When an AI generates a picture of a face, it isn't just picking a random color for each pixel. It is sampling from a massive **Joint Distribution** of millions of pixels. The probability of pixel (100, 100) being "Skin Tone" is extremely high **and** it is jointly linked to the probability that the neighboring pixel (101, 100) is also "Skin Tone." If the pixels weren't jointly distributed, the AI would just generate a screen of colorful static. Understanding the joint links is what creates structure out of chaos.</li>
      <li><strong>Multi-Modal AI (CLIP / GPT-4V)</strong>: The most advanced AI models today work by finding a **Joint Embedding Space** between images and text. They don't just "see" a dog and "read" the word dog separately. They learn the joint probability that a specific pattern of pixels (an image) and a specific pattern of characters (text) represent the same concept. This joint understanding allows you to search for "A cat on a skateboard" and have the AI find the exact frames in a video that match that multi-variable query.</li>
    </ul>
    <p>Teacher's Final Word: In the real world, nothing happens in a vacuum. High temperatures are linked to high ice cream sales; high training time is linked to low loss. Joint Distributions are the mathematical map of these relationships. If you only look at one variable at a time, you're missing the whole story.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> What if we already <em>know</em> one variable? How does that change the probability of the other? Explore <strong><a href="#/mathematics/probability/conditional-probability">Conditional Probability</a></strong>.
    </div>
  `
};


