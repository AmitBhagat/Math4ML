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
  `
};
