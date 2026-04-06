import { TopicSection } from '../../src/data/types';

export const combinatoricsSection: TopicSection = {
  id: "combinatorics",
  title: "Combinatorics",
  description: "The art of counting in algorithm analysis and search space determination for AI and Machine Learning.",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🔢 Discrete Math · Counting</div>
      <h1>Combinatorics: The Art of Counting</h1>
      <p>In computer science and algorithm analysis, <strong>Combinatorics</strong> is the art of counting. In the AI/ML world, this is how we determine the size of a "search space" and the complexity of our models.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#counting-principle">1. Fundamental Counting Principle</a>
      <a href="#permutations">2. Permutations (Order Matters)</a>
      <a href="#combinations">3. Combinations (Order Doesn't Matter)</a>
      <a href="#comparison">Comparison for Algorithm Analysis</a>
      <a href="#ml-career">Why this matters for your AI/ML Career</a>
    </div>

    <h2 id="counting-principle">1. The Fundamental Counting Principle</h2>
    <p>If there are $n$ ways to do one thing and $m$ ways to do another, there are $n \times m$ ways to do both.</p>
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
    <div class="callout info">
      <div class="callout-icon">🧪</div>
      <div class="callout-body">
        <strong>Data Context:</strong> Selecting a subset of 5 features from 20 to train a model.
      </div>
    </div>

    <h2 id="comparison">Comparison for Algorithm Analysis</h2>
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
      <strong>Next Step:</strong> Counting arrangements is key. Now let's explore <strong>Graph Theory</strong> to see how entities and their relationships (like neurons in a network) are modeled.
    </div>
  `
};
