const t={id:"set-theory",title:"Set Theory",description:"The foundation for data manipulation, joins, and filtering in data science and AI.",color:"#5C6BC0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📦 Discrete Math · Sets</div>
      <h1>Set Theory in Data Science</h1>
      <p>In the context of data science and AI, Set Theory is the foundation for how we manipulate datasets, join tables, and filter information. Think of each <strong>set</strong> as a collection of unique data points (like a column of User IDs or a list of features).</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#subsets">1. Subsets ($\subseteq$)</a>
      <a href="#union">2. Union ($\cup$)</a>
      <a href="#intersection">3. Intersection ($\cap$)</a>
      <a href="#comparison">Comparison Table for Data Operations</a>
      <a href="#ml-journey">Why this matters for ML</a>
    </div>

    <h2 id="subsets">1. Subsets ($\subseteq$)</h2>
    <p>A set $A$ is a <strong>subset</strong> of $B$ if every element in $A$ is also in $B$.</p>
    <div class="callout info">
      <div class="callout-icon">🔍</div>
      <div class="callout-body">
        <strong>Data Context:</strong> This is essentially <strong>filtering</strong>. If you have a primary dataset of "All Customers," a subset would be "Customers who bought a car."
      </div>
    </div>
    <p><strong>Notation:</strong> $A \subseteq B$</p>

    <h2 id="union">2. Union ($\cup$)</h2>
    <p>The <strong>union</strong> of two sets includes all unique elements from both sets.</p>
    <div class="callout tip">
      <div class="callout-icon">🤝</div>
      <div class="callout-body">
        <strong>Data Context:</strong> This is used when you are <strong>merging</strong> two datasets with the same structure (e.g., combining sales data from January and February). In SQL, this is the <code>UNION</code> command.
      </div>
    </div>
    <p><strong>Logic:</strong> "Give me everything from Set A OR Set B."<br>
    <strong>Notation:</strong> $A \cup B$</p>

    <h2 id="intersection">3. Intersection ($\cap$)</h2>
    <p>The <strong>intersection</strong> includes only the elements that appear in <em>both</em> sets.</p>
    <div class="callout info">
      <div class="callout-icon">📍</div>
      <div class="callout-body">
        <strong>Data Context:</strong> This is used for <strong>Inner Joins</strong>. If you have a list of "Email Subscribers" and a list of "Recent Buyers," the intersection tells you which subscribers actually bought something.
      </div>
    </div>
    <p><strong>Logic:</strong> "Give me only what is in Set A AND Set B."<br>
    <strong>Notation:</strong> $A \cap B$</p>

    <h2 id="comparison">Comparison Table for Data Operations</h2>
    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Set Operation</th><th>SQL/Pandas Equivalent</th><th>Logic</th><th>Outcome</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Union</strong></td><td><code>UNION</code> / <code>concat()</code></td><td><strong>OR</strong></td><td>Combines all data, removing duplicates.</td></tr>
          <tr><td><strong>Intersection</strong></td><td><code>INNER JOIN</code> / <code>merge()</code></td><td><strong>AND</strong></td><td>Finds common ground between datasets.</td></tr>
          <tr><td><strong>Difference</strong></td><td><code>EXCEPT</code> / <code>LEFT JOIN</code></td><td><strong>NOT</strong></td><td>Finds data in A that is specifically <em>not</em> in B.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="ml-journey">Why this matters for your Python/ML Journey:</h2>
    <p>When you start working with <strong>NumPy</strong> or <strong>Pandas</strong>, you’ll use these operations constantly.</p>
    <python-code>
import numpy as np
import pandas as pd

# NumPy examples
array1 = np.array([1, 2, 3, 4])
array2 = np.array([3, 4, 5, 6])

common = np.intersect1d(array1, array2) # [3, 4]
all_unique = np.union1d(array1, array2) # [1, 2, 3, 4, 5, 6]

# Pandas examples
df = pd.DataFrame({'user_id': [101, 102, 103, 104]})
subset_list = [102, 104]
filtered_df = df[df['user_id'].isin(subset_list)]
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Set theory defines the collections of data. Now, explore <strong><a href="#/mathematics/discrete-math/logic">Mathematical Logic</a></strong> to see how we build complex rules to filter and transform these sets.
    </div>
  `},e={id:"logic",title:"Mathematical Logic",description:"The framework that allows machines to reason. Explore Propositional and First-Order Logic in the context of Symbolic AI and expert systems.",color:"#7986CB",html:String.raw`
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
  `},o={id:"combinatorics",title:"Combinatorics",description:"The art of counting in algorithm analysis and search space determination for AI and Machine Learning.",color:"#9FA8DA",html:String.raw`
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
      <strong>Next Step:</strong> Counting arrangements is key. Now let's explore <strong><a href="#/mathematics/discrete-math/graph-theory">Graph Theory</a></strong> to see how entities and their relationships (like neurons in a network) are modeled.
    </div>
  `},i={id:"graph-theory",title:"Graph Theory",description:"The study of relationships and connections. Explore Nodes, Edges, Adjacency Matrices, and their applications in GNNs and Knowledge Graphs.",color:"#C5CAE9",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🕸️ Discrete Math · Graphs</div>
      <h1>Graph Theory: The Science of Relationships</h1>
      <p>In AI and Data Science, <strong>Graph Theory</strong> is the study of relationships. While standard datasets look like rows and columns, many real-world problems—like social networks and molecule structures—are better represented as a web of connected points.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#components">1. The Core Components</a>
      <a href="#types">2. Types of Graphs</a>
      <a href="#matrices">3. Adjacency Matrices</a>
      <a href="#ai-ml">4. Why this matters for AI/ML</a>
      <a href="#implementation">Python Implementation</a>
    </div>

    <h2 id="components">1. The Core Components</h2>
    <p>Every graph $G$ is defined by two sets: $G = (V, E)$.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Nodes (Vertices, $V$):</strong> The individual entities (e.g., "Python", "Machine Learning").</li>
        <li><strong>Edges (Links, $E$):</strong> The relationships between nodes (e.g., "is used for").</li>
      </ul>
    </div>

    <h2 id="types">2. Types of Graphs</h2>
    <ul>
      <li><strong>Undirected Graphs:</strong> Mutual relationships (e.g., LinkedIn connections).</li>
      <li><strong>Directed Graphs (Digraphs):</strong> Specific directions (e.g., Twitter "Follows").</li>
      <li><strong>Weighted Graphs:</strong> Edges have values (e.g., distances between cities in a map).</li>
    </ul>

    <h2 id="matrices">3. Adjacency Matrices</h2>
    <p>To help a computer understand a graph, we represent it as an <strong>Adjacency Matrix</strong> $M$, a square matrix where:</p>
    <div class="def-box">
      <ul style="margin:0">
        <li>$M_{ij} = 1$ if there is an edge between node $i$ and node $j$.</li>
        <li>$M_{ij} = 0$ if there is no connection.</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Symmetry:</strong> In <strong>Undirected Graphs</strong>, the matrix is symmetric ($M_{ij} = M_{ji}$). In <strong>Directed Graphs</strong>, it is often asymmetric.
      </div>
    </div>

    <h2 id="ai-ml">4. Why this matters for AI/ML</h2>
    <ul>
      <li><strong>Knowledge Graphs:</strong> Powering search engines and LLMs by linking facts with semantic meanings.</li>
      <li><strong>Graph Neural Networks (GNNs):</strong> Predicting things like "Will these users become friends?" or "Is this molecule toxic?" using adjacency matrices and node features.</li>
      <li><strong>Recommendation Systems:</strong> Identifying "communities" or "clusters" to suggest products based on connectivity.</li>
    </ul>

    <h2 id="implementation">Python Implementation (NumPy)</h2>
    <python-code>
import numpy as np

# Representation of a 3-node graph [A, B, C]
# Edges: A <-> B and B -> C
# Using an Adjacency Matrix
adj_matrix = np.array([
    [0, 1, 0], # A to [A, B, C]
    [1, 0, 1], # B to [A, B, C]
    [0, 0, 0]  # C to [A, B, C]
])

print("Adjacency Matrix:")
print(adj_matrix)

# Check if there's a link from B to C
if adj_matrix[1, 2] == 1:
    print("\nNode B is connected to Node C")
    </python-code>

    <div class="linking-rule">
      <strong>Final Step:</strong> You've mastered the Mathematics curriculum! You've explored vectors, probability, and the discrete structures of logic. Now, it's time to put these tools to work in <strong><a href="#/machine-learning">Machine Learning</a></strong>.
    </div>
  `},s={id:"discrete-math",title:"Discrete Mathematics",description:"The study of discrete mathematical structures that form the foundation of computer science, algorithms, and symbolic AI.",keyConcepts:[{title:"Set Theory",description:"Collections of unique data points and their operations (Union, Intersection)."},{title:"Mathematical Logic",description:"Propositional and First-Order logic for automated reasoning."},{title:"Combinatorics",description:"Permutations, Combinations, and the Fundamental Counting Principle."},{title:"Graph Theory",description:"Nodes and Edges representing entities and their relationships."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Discrete Math: <span class="text-accent italic">The Logic of Intelligence</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          While standard neural networks often deal with continuous spaces, much of the world is structured as discrete entities. <strong>Discrete Mathematics</strong> is the language of logic, graphs, and the fundamental structures that govern how data is organized, searched, and connected.
        </p>
        
        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          From the Boolean logic that powers every CPU to the Graph Neural Networks (GNNs) that model social relationships, discrete structures are the bedrock of architectural design in computer science and AI. It provides the tools to move from simple vectors to complex topological networks.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Why It Matters -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Why It Matters</h3>
        </div>
        
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          Intelligence requires structure. Discrete math provides the scaffolding for that structure.
        </p>

        <ul class="space-y-8 list-none pl-0">
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Relational Data</strong>
              <p class="text-muted-premium font-normal"><strong>Graph Theory</strong> allows us to model complex entities (like users, molecules, or pixels) as a network of nodes and edges, enabling the next generation of GNNs.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Symbolic Reasoning</strong>
              <p class="text-muted-premium font-normal">Machine Learning is merging with <strong>Symbolic Logic</strong>. Understanding propositional and first-order logic is key to building systems that can explain *why* they made a decision.</p>
            </div>
          </li>
          <li class="flex items-start gap-6 group">
            <div class="mt-1 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-[10px] font-bold group-hover:scale-110 transition-transform">•</div>
            <div>
              <strong class="text-text-premium block text-lg mb-1 font-semibold">Combinatorial Complexity</strong>
              <p class="text-muted-premium font-normal">Algorithms often face "combinatorial explosions." Use <strong>Combinatorics</strong> to understand exactly how many ways a problem can be solved and how to prune the search space.</p>
            </div>
          </li>
        </ul>
      </div>

      <hr class="border-border-premium/50" />

      <!-- Core Concepts -->
      <div class="space-y-10">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">Core Concepts to Master</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          To build robust architectural logic, we will focus on these discrete pillars:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Set Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The foundation for all data manipulation, joins, and filtering in the ML pipeline.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Mathematical Logic</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Building the rules and constraints that govern complex decision-making systems.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Graph Theory</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Learning to see data as a network of relationships rather than a flat table.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Combinatorics</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">Quantifying the 'possible' to optimize counting and resource allocation in algorithms.</p>
          </div>
          <div class="space-y-2 border-l-2 border-accent/10 pl-6 hover:border-accent transition-colors">
            <h4 class="font-semibold text-text-premium tracking-tight">Boolean Algebra</h4>
            <p class="text-sm text-muted-premium font-normal leading-relaxed">The low-level logic of computation that powers feature engineering and circuit design.</p>
          </div>
        </div>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <div class="flex items-center gap-4">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <h3 class="text-[11px] font-black uppercase tracking-[0.3em] text-accent font-semibold">What to Expect</h3>
        </div>

        <p class="text-lg text-text-premium font-normal leading-relaxed">
          You will learn to see data as a network of relationships, moving from simple vectors to complex topological structures. We focus on the **logic of structure** and the fundamental rules of calculation.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "Discrete Mathematics is the backbone of computer science."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Ken Rosen</span>
          </div>
        </div>

        <p class="text-lg text-muted-premium font-normal leading-relaxed">
          By the end of this module, you will understand how to build systems that don't just calculate, but *reason* about the connections within your data.
        </p>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to build structure?</p>
        <a 
          href="/#/mathematics/discrete-math/set-theory" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Set Theory
        </a>
      </div>

    </div>
  `,sections:[t,e,o,i]};export{s as DISCRETE_MATH_DATA};
