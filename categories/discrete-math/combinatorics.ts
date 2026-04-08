import { TopicSection } from '../../src/data/types';

export const combinatoricsSection: TopicSection = {
  id: "combinatorics",
  title: "Combinatorics",
  description: "The art of counting in algorithm analysis and search space determination for AI and Machine Learning.",
  color: "#9FA8DA",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Discrete Math · Counting</div>
      <h1>Combinatorics: The Art of Counting</h1>
      <p>In computer science and algorithm analysis, <strong>Combinatorics</strong> is the art of counting. In the AI/ML world, this is how we determine the size of a "search space" and the complexity of our models.</p>
    </div>

    <h2 id="counting-principle">1. The Fundamental Counting Principle</h2>
    <p>If there are $n$ ways to do one thing and $m$ ways to do another, there are $n \times m$ ways to do both.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> The <strong>Fundamental Principle</strong> is the "Options per Slot" intuition. If you're building a 3-layer neural network and each layer has 5 possible sizes, you have $5 \times 5 \times 5 = 125$ possible architectures. This is the simple math behind <strong>Grid Search</strong>.
      </div>
    </div>
    <div class="callout tip">
      <div class="callout-icon">⚙️</div>
      <div class="callout-body">
        <strong>Data Context:</strong> If you have 3 different hyperparameters, each with 10 values, you have $10 \times 10 \times 10 = 1000$ total configurations (Grid Search).
      </div>
    </div>

    <h2 id="permutations">2. Permutations (Order Matters)</h2>
    <p>A <strong>Permutation</strong> is an arrangement of items where the <strong>sequence</strong> is important.</p>
    <div class="math-block">
      $$P(n, r) = \frac{n!}{(n-r)!}$$
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Permutations</strong> are for when <strong>Sequence is King</strong>. Think of a password: "1-2-3" is completely different from "3-2-1." In ML, we use this to calculate the complexity of <strong>Traveling Salesman</strong> problems or optimal routing for delivery robots.
      </div>
    </div>
    <div class="callout info">
      <div class="callout-icon">📋</div>
      <div class="callout-body">
        <strong>Scenario:</strong> Assigning 3 tasks to a specific priority sequence from a pool of 10.
      </div>
    </div>

    <h2 id="combinations">3. Combinations (Order Doesn't Matter)</h2>
    <p>A <strong>Combination</strong> is a selection of items where the sequence is <strong>irrelevant</strong>.</p>
    <div class="math-block">
      $$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Combinations</strong> are the "Handful of Items" intuition. Order doesn't matter. If you pick a handful of 3 features from a pool of 10, it doesn't matter which one you grabbed first. This is why <strong>Feature Selection</strong> is a combination problem, not a permutation one.
      </div>
    </div>
    <div class="callout info">
      <div class="callout-icon">🧪</div>
      <div class="callout-body">
        <strong>Data Context:</strong> Selecting a subset of 5 features from 20 to train a model.
      </div>
    </div>

    <h2 id="examples" class="mb-8">Illustrative <span class="text-green-premium font-bold">Case Study:</span> s</h2>

    
      <h4>Problem: Hyperparameter Layer Ordering (Permutations)</h4>
      <p>A deep learning researcher wants to test 3 distinct layers: <strong>Conv2D (C)</strong>, <strong>MaxPooling (M)</strong>, and <strong>Dropout (D)</strong>. How many ways can they be ordered in a block?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Constraints:</strong> The order matters (CMD is different from DCM). All 3 layers are used ($n=3, r=3$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Apply Formula:</strong> $P(3, 3) = 3! = 3 \times 2 \times 1 = 6$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>List Outcomes:</strong> {CMD, CDM, MCD, MDC, DCM, DMC}.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>ML Tip:</strong> While permutations give you the search space, <strong>Neural Architecture Search (NAS)</strong> uses algorithms to find the <em>best</em> permutation without testing all $n!$ combinations.
        </div>
      </div>
    

    
      <h4>Problem: Feature Subset Selection (Combinations)</h4>
      <p>A data scientist has 10 potential features for a linear model but wants to select exactly 3 to avoid overfitting. How many unique subsets of 3 features can be formed?</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Constraints:</strong> The order of features in the model doesn't matter ($n=10, r=3$).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Apply Formula:</strong> $\binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1}$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Solve:</strong> $\frac{720}{6} = 120$ possible subsets.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Complexity Note:</strong> As $n$ grows, the number of combinations explodes (this is the <strong>Combinatorial Explosion</strong>). This is why we use <strong>Recursive Feature Elimination (RFE)</strong> instead of exhaustive search.
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> <strong>Combinatorial Explosion</strong> is the "Scaling Nightmare." If you have 100 features, there are more combinations of those features than there are atoms in the universe. This is why <strong>Brute Force</strong> is forbidden in AI; we always need clever shortcuts like <strong>Heuristics</strong> or <strong>Gradients</strong>.
        </div>
      </div>
    
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Concept</th><th>Order Matters?</th><th>Common Use Case</th><th>Complexity Impact</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Permutation</strong></td><td>Yes</td><td>Scheduling, Routing</td><td>Often leads to $O(n!)$ complexity.</td></tr>
          <tr><td><strong>Combination</strong></td><td>No</td><td>Feature Selection</td><td>Often leads to $O(2^n)$ complexity.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="ml-career">Why this matters for your AI/ML Career</h2>
    
    <h3>A. Analyzing Complexity ($O$)</h3>
    <p>Counting operations is the essence of Big O analysis. Comparing every pair in a list is a <strong>Combination</strong> problem ($\binom{n}{2}$), resulting in $O(n^2)$.</p>

    <h3>B. Probability and Machine Learning</h3>
    <p>Probability is often the ratio of favorable outcomes to the total "Sample Space" calculated via combinatorics.</p>
    <div class="math-block">
      $$\text{Probability} = \frac{\text{Favorable Outcomes}}{\text{Total Sample Space}}$$
    </div>

    <h3>C. Neural Network Architecture</h3>
    <p>Calculating the total connections between layers ($n \times m$) uses the fundamental principle.</p>

    <python-code>
import math
import itertools

# Calculate combinations and permutations
n, k = 10, 3
print(f"Permutations P({n},{k}): {math.perm(n, k)}")
print(f"Combinations C({n},{k}): {math.comb(n, k)}")

# Itertools for actual arrangements
items = ['A', 'B', 'C']
perms = list(itertools.permutations(items))
combs = list(itertools.combinations(items, 2))
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Counting arrangements is key. Now let's explore <strong><a href="#/mathematics/discrete-math/graph-theory">Graph Theory</a></strong> to see how entities and their relationships (like neurons in a network) are modeled.
    </div>
  `
};
