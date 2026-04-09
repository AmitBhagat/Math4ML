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
      <p>In the field of AI, Logic is the mathematical framework that allows a machine to "reason" with absolute certainty.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In the field of AI, <strong>Logic</strong> is the mathematical framework that allows a machine to "reason" with absolute certainty. While modern Machine Learning is often probabilistic and "fuzzy," logic is the backbone of symbolic AI, expert systems, and the high-level planning modules used in robotics. It is the tactical way we formalize human knowledge into a series of "If-Then" rules that a computer can execute without error. Understanding logic is the key to building systems that don't just guess patterns, but actually follow a rigorous chain of thought. It is the original language of Artificial Intelligence, providing the "Sanity Check" for complex decision-making processes.</p>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Boolean Algebra & Propositional Calculus</div>
      <p>Mathematical Logic is the "Deterministic Engine." it provides the unyielding rules that allow a machine to transform raw data into a rigorous chain of thought.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are building a high-security vault. To open it, two people must turn their keys simultaneously (AND), or a master override must be active (OR), and the silent alarm must NOT be triggered (NOT). <strong>Logic</strong> is the blueprint for this vault. Geometrically, it is a <strong>Boolean Space</strong>—a universe with no gradients or grey areas, only vertices at $0$ (False) and $1$ (True). While neural networks thrive on "Fuzzy" probabilities, Logic is the raw, binary absolute that computers use to navigate every <code>if-else</code> branch in their code.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>We define truth values in a binary set $\mathcal{B} = \{0, 1\}$. The core operators govern how these values interact:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>Conjunction ($P \land Q$)</strong>: True only if both $P=1$ and $Q=1$.</li>
        <li><strong>Disjunction ($P \lor Q$)</strong>: True if at least one of $P$ or $Q$ is $1$.</li>
        <li><strong>Implication ($P \implies Q$)</strong>: The rule of "Causality." It is algebraically equivalent to $\neg P \lor Q$. It only breaks (returns $0$) if the premise $P$ is true but the consequence $Q$ is false.</li>
      </ul>
      <p>To simplify complex conditions, we use <strong>De Morgan’s Laws</strong>, which describe how negation flips the logic of a system:</p>
      <div class="math-block">
        $$\neg(P \land Q) \equiv \neg P \lor \neg Q$$
        $$\neg(P \lor Q) \equiv \neg P \land \neg Q$$
      </div>
      <p>For more complex reasoning, we use <strong>First-Order Logic (FOL)</strong>, introducing <strong>Quantifiers</strong>: $\forall$ (Universal - "For all") and $\exists$ (Existential - "There exists"). This allows us to move from simple statements like "The sun is hot" to universal rules like "Every star produces heat."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Computer Science, Logic is the <strong>Sanity Check</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Consistency</strong>: A logical system is consistent if it never leads to a contradiction ($P \land \neg P$). AI systems (like expert systems) must be consistent to be reliable.</li>
        <li><strong>Completeness</strong>: A system is complete if every true statement within it can be proven using its own rules. </li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Edge Cases. Logic is zero-tolerance. If your code's logical check misses a single edge case (e.g., forgetting a null check), the entire system crashes. Logic doesn't "guess"—it either succeeds perfectly or fails catastrophically.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Mathematical Logic as <strong>"The Legal Contract"</strong> or <strong>"The Light Switch Circuit."</strong> 
        Propositional Logic is the simplest form—everything is either <strong>True (ON)</strong> or <strong>False (OFF)</strong>. First-Order Logic is more like a sophisticated "Object-Oriented" language that can describe not just states, but the properties and relationships of every entity in your system. Whether you are building a medical diagnosis system or a complex SQL query, you are essentially writing a logical proof that the computer must satisfy. It is the science of making sure your "If" statements actually cover every possible "Then."
      </div>
    </div>
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
        <span class="text-green-premium font-bold">Case Study:</span> $Symptoms(x, Fever) \land Symptoms(x, Cough) \to HasFlu(x)$
      </div>
    </div>

    <h3>B. AI Planning</h3>
    <p>Logic is used to reach a "Goal State" from an "Initial State" by evaluating <strong>Preconditions</strong> and <strong>Effects</strong>.</p>

    <h3>C. Knowledge Representation</h3>
    <p>In <strong>Knowledge Graphs</strong>, logic helps infer new facts through transitivity and other logical properties.</p>

    <h2 id="examples" class="mb-8">Illustrative <span class="text-green-premium font-bold">Case Study:</span> s</h2>

    
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

