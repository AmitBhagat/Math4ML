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
      <a href="#examples">Illustrative Examples</a>
      <a href="#comparison">Comparison Summary</a>
      <a href="#ml-context">Logic in Data Science</a>
    </div>

    <h2 id="propositional">1. Propositional Logic</h2>
    <p>This is the simplest form of logic. It deals with <strong>propositions</strong>—statements that are either <strong>True</strong> or <strong>False</strong>.</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Propositional Logic</strong> is the "Light Switch" intuition. Everything is either ON ($T$) or OFF ($F$). It is the foundation of <strong>Digital Electronics</strong> and every <code>if/else</code> statement you've ever written in Python.
      </div>
    </div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Implication ($P \to Q$)</strong> is the "Contract" intuition. Think of it as a promise: "If you pay me ($P$), I will give you a car ($Q$)." The only way to break the contract is if you pay me ($P=T$), but I don't give you the car ($Q=F$). If you don't pay me ($P=F$), the contract isn't broken regardless of what I do.
      </div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>First-Order Logic (FOL)</strong> is the "Object-Oriented" intuition. Propositional logic is too limited; it can't say "Every car is red." FOL lets you define <strong>Objects</strong> (Cars) and <strong>Properties</strong> (Red), making it the language of choice for <strong>Knowledge Graphs</strong> and <strong>Semantic Search</strong>.
      </div>
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

    <h2 id="examples">Illustrative Examples</h2>

    <div class="example-box">
      <h4>Problem: Evaluating a Medical Expert System Rule</h4>
      <p>A diagnostic rule states: <strong>"If a patient has a Fever ($P$) AND a Persistent Cough ($Q$), then they might have the Flu ($R$)."</strong> Construct a truth table segment to find when the rule is invalidated.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify the Proposition:</strong> The logical form is $(P \land Q) \to R$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Analyze False Condition:</strong> An implication $A \to B$ is <strong>only false</strong> when $A$ is True and $B$ is False.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Specific Case:</strong> If the patient has a Fever and Cough ($P \land Q = T$) but does NOT have the Flu ($R = F$), the rule is triggered but the outcome is false.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Logic Insight:</strong> In expert systems, finding "False" cases helps debug the knowledge base; it indicates the rule is either too broad or missing a condition.
        </div>
      </div>
    </div>

    <div class="example-box">
      <h4>Problem: Simplifying Code with De Morgan's Laws</h4>
      <p>A developer wrote: <code>if not (is_admin or has_permission):</code>. Use logic to simplify this for better readability.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Apply De Morgan's:</strong> $\neg(A \lor B) \equiv (\neg A \land \neg B)$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Translate to Code:</strong> <code>if not is_admin and not has_permission:</code>.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Why it matters:</strong> Simplified logic reduces cognitive load for other developers and can prevent "nesting hell" in complex control flows.
        </div>
      </div>
    </div>
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
