import { TopicSection } from '../../src/data/types';

export const graphTheorySection: TopicSection = {
  id: "graph-theory",
  title: "Graph Theory",
  description: "The study of relationships and connections. Explore Nodes, Edges, Adjacency Matrices, and their applications in GNNs and Knowledge Graphs.",
  color: "#C5CAE9",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🕸️ Discrete Math · Graphs</div>
      <h1>Graph Theory: The Science of Relationships</h1>
      <p>In AI and Data Science, <strong>Graph Theory</strong> is the study of relationships. While standard datasets look like rows and columns, many real-world problems—like social networks and molecule structures—are better represented as a web of connected points.</p>
    </div>

    <h2 id="components">1. The Core Components</h2>
    <p>Every graph $G$ is defined by two sets: $G = (V, E)$.</p>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Nodes (Vertices, $V$):</strong> The individual entities (e.g., "Python", "Machine Learning").</li>
        <li><strong>Edges (Links, $E$):</strong> The relationships between nodes (e.g., "is used for").</li>
      </ul>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Nodes & Edges</strong> are the "Entities & Relationships" intuition. In a standard database, you have isolated rows. In a <strong>Graph Database</strong>, you focus on the lines <em>between</em> the rows. This is how Google understands that "Paris" is the "Capital Of" "France."
      </div>
    </div>

    <h2 id="types">2. Types of Graphs</h2>
    <ul>
      <li><strong>Undirected Graphs:</strong> Mutual relationships (e.g., LinkedIn connections).</li>
      <li><strong>Directed Graphs (Digraphs):</strong> Specific directions (e.g., Twitter "Follows").</li>
      <li><strong>Weighted Graphs:</strong> Edges have values (e.g., distances between cities in a map).</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Directed vs. Undirected</strong> is the "One-Way vs. Two-Way" intuition. <strong>Twitter</strong> is Directed (I can follow you without you following me). <strong>LinkedIn</strong> is Undirected (we must both agree to be connections). In ML, <strong>Causal Models</strong> are always Directed because time and logic only flow one way.
      </div>
    </div>

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
        <strong>Core Theory:</strong> <strong>Adjacency Matrix</strong> is the "Machine Translation" intuition. Computers can't "see" circles and lines. The matrix turns a web of connections into a grid of 0s and 1s that a <strong>GPU</strong> can process. This is the bridge between <strong>Discrete Math</strong> and <strong>Linear Algebra</strong>.
      </div>
    </div>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Symmetry:</strong> In <strong>Undirected Graphs</strong>, the matrix is symmetric ($M_{ij} = M_{ji}$). In <strong>Directed Graphs</strong>, it is often asymmetric.
      </div>
    </div>

    <h2 id="examples" class="mb-8">Illustrative <span class="text-green-premium font-bold">Case Study:</span> s</h2>

    
      <h4>Problem: Building an Adjacency Matrix</h4>
      <p>Represent a simple <strong>Social Network</strong> of 4 users ($A, B, C, D$) where:
      <ul>
        <li>$A$ is friends with $B$ and $C$</li>
        <li>$B$ is friends with $A$ and $D$</li>
        <li>$C$ is friends with $A$</li>
        <li>$D$ is friends with $B$</li>
      </ul>
      </p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify Edges:</strong> $E = \{(A,B), (A,C), (B,D)\}$. Since friendship is mutual, this is an <strong>Undirected Graph</strong>.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Construct Matrix:</strong> Create a $4 \times 4$ matrix. $M_{ij}=1$ if a friendship exists.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Resulting Matrix:</strong>
            <div class="math-block">$$M = \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{bmatrix}$$</div>
          </div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Graph Insight:</strong> Notice the <strong>Symmetry</strong> along the diagonal. For friend $A$ (Row 1), we see connections at Column 2 ($B$) and Column 3 ($C$).
        </div>
      </div>
    

    
      <h4>Problem: Calculating Degree Centrality</h4>
      <p>Identify the most influential node in the previous graph by calculating "Degree Centrality"—the number of direct edges connected to a node.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Sum Rows/Columns:</strong> $deg(A) = 2$, $deg(B) = 2$, $deg(C) = 1$, $deg(D) = 1$.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Identify Maximum:</strong> Nodes $A$ and $B$ are equally the most connected.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>ML Usage:</strong> In GNNs, these degree counts are used for <strong>Normalization</strong> within Message Passing layers to prevent highly connected nodes from overwhelming the feature signals.
        </div>
      </div>
    
    <ul>
      <li><strong>Knowledge Graphs:</strong> Powering search engines and LLMs by linking facts with semantic meanings.</li>
      <li><strong>Graph Neural Networks (GNNs):</strong> Predicting things like "Will these users become friends?" or "Is this molecule toxic?" using adjacency matrices and node features.</li>
      <li><strong>Recommendation Systems:</strong> Identifying "communities" or "clusters" to suggest products based on connectivity.</li>
    </ul>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Graph Neural Networks (GNNs)</strong> use the "Neighbor Talk" intuition. In a GNN, each node "talks" to its neighbors to learn about its environment. If your neighbors are all "Data Scientists," a GNN will likely predict that you are also a "Data Scientist."
      </div>
    </div>

    <h2 id="implementation">Implementation</h2>
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
  `
};
