import { TopicSection } from '../../src/data/types';

export const logicSection: TopicSection = {
  id: "logic",
  title: "Mathematical Logic",
  description: "The framework that allows machines to reason. Explore Propositional and First-Order Logic in the context of Symbolic AI and expert systems.",
  color: "#7986CB",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Discrete Math · Logic</div>
      <h1>Mathematical Logic in AI</h1>
      <p>In the field of AI, <strong>Logic</strong> is the framework that allows a machine to "reason." While modern Machine Learning is often probabilistic, Logic is the backbone of <strong>Symbolic AI</strong>, expert systems, and the "planning" modules used in robotics.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#propositional">1. Propositional Logic</a>
      <a href="#fol">2. First-Order Logic (FOL)</a>
      <a href="#applications">3. Applications in AI & Software</a>
      <a href="#comparison">Comparison Summary</a>
      <a href="#ml-context">Logic in Data Science</a>
    </div>

    <h2 id="propositional">1. Propositional Logic</h2>
    <p>This is the simplest form of logic. It deals with <strong>propositions</strong>—statements that are either <strong>True</strong> or <strong>False</strong>.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Variables:</strong> Usually represented as $P, Q, R$.</li>
        <li><strong>Connectives:</strong>
          <ul>
            <li><strong>AND ($\land$):</strong> Both must be true.</li>
            <li><strong>OR ($\lor$):</strong> At least one must be true.</li>
            <li><strong>NOT ($\neg$):</strong> Flips the truth value.</li>
            <li><strong>IMPLIES ($\to$):</strong> "If $P$, then $Q$." This is the foundation of <strong>Rule-Based Systems</strong>.</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2 id="fol">2. First-Order Logic (FOL)</h2>
    <p>FOL adds <strong>Quantifiers</strong> and <strong>Predicates</strong> to make logic more powerful, allowing it to describe objects and relationships.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Predicates:</strong> Functions that return true/false based on input (e.g., $IsDeveloper(x)$).</li>
        <li><strong>Quantifiers:</strong>
          <ul>
            <li><strong>Universal ($\forall$):</strong> "For all." (e.g., $\forall x, IsHuman(x) \to Mortal(x)$).</li>
            <li><strong>Existential ($\exists$):</strong> "There exists." (e.g., $\exists x, IsDeveloper(x) \land LikesPython(x)$).</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2 id="applications">3. Applications in AI & Software</h2>
    
    <h3>A. Rule-Based Systems (Expert Systems)</h3>
    <p>These systems use a database of "If-Then" rules (Implications) to solve complex problems.</p>
    <div class="callout info">
      <div class="callout-icon">📋</div>
      <div class="callout-body">
        Example: $Symptoms(x, Fever) \land Symptoms(x, Cough) \to HasFlu(x)$
      </div>
    </div>

    <h3>B. AI Planning</h3>
    <p>Logic is used to reach a "Goal State" from an "Initial State" by evaluating <strong>Preconditions</strong> and <strong>Effects</strong>.</p>

    <h3>C. Knowledge Representation</h3>
    <p>In <strong>Knowledge Graphs</strong>, logic helps infer new facts through transitivity and other logical properties.</p>

    <h2 id="comparison">Comparison Summary</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Feature</th><th>Propositional Logic</th><th>First-Order Logic</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Granularity</strong></td><td>Deals with whole statements.</td><td>Deals with objects and properties.</td></tr>
          <tr><td><strong>Complexity</strong></td><td>Simple, but limited.</td><td>Complex, but highly expressive.</td></tr>
          <tr><td><strong>Inference</strong></td><td>Easy to compute (Truth Tables).</td><td>Harder to compute (Solvers).</td></tr>
          <tr><td><strong>Example</strong></td><td>"It is raining."</td><td>"Every developer loves Java."</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="ml-context">Logic in Data Science</h2>
    <p>In Data Science, you'll see propositional logic most often in <strong>Boolean indexing</strong> when filtering data or writing complex <code>WHERE</code> clauses in SQL.</p>
    <python-code>
# Boolean indexing in Pandas (Propositional Logic)
# (Condition P AND Condition Q)
filtered_data = df[(df['age'] > 25) & (df['city'] == 'New York')]

# NOT Condition
not_nyc = df[~(df['city'] == 'New York')]
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Logic helps us reason. Now let's explore <strong><a href="#/mathematics/discrete-math/combinatorics">Combinatorics</a></strong> to see how we can count and arrange data points in large-scale systems.
    </div>
  `
};
