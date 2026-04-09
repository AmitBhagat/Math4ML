import { TopicSection } from '../../src/data/types';

export const setTheorySection: TopicSection = {
  id: "set-theory",
  title: "Set Theory",
  description: "The foundation for data manipulation, joins, and filtering in data science and AI.",
  color: "#5C6BC0",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">📦 Discrete Math · Sets</div>
      <h1>Set Theory in Data Science</h1>
      <p>Set theory is the branch of mathematical logic that studies collections of objects. In machine learning, sets define the sample spaces, hypothesis classes, and feature domains.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>In the digital world, data never arrives as a single, clean block; it is scattered across different tables, logs, and databases. <strong>Set Theory</strong> is the foundation of how we manipulate these fragments, providing the mathematical logic for joining, filtering, and deduplicating information. Think of each <strong>set</strong> as a "Box of Unique Items" where duplicates are forbidden and boundaries are absolute. In Data Science, set theory isn't just a theoretical curiosity—it is the direct parent of SQL Joins and Pandas filtering. Understanding how sets overlap, merge, and differ is the key to transforming raw, chaotic data into a structured signal that an ML model can actually understand. It is the tactical framework for "Data Wrangling."</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Axiomatic Collections & Inclusion</div>
      <p>Set Theory is the "Domain of Existence." It defines the boundaries of truth for every piece of data in your system.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are a bouncer at a club called "The Integer Club." To get in, you must satisfy a rigid rule: you must be an integer. Everyone inside the club forms a <strong>Set</strong>. Geometrically, this is a <strong>Venn Diagram</strong>—a precise boundary drawn in a high-dimensional space that includes some points and excludes everything else. <strong>Set Theory</strong> is the foundational language of the universe. It is how we define a "Sample Space" in probability, a "Cluster" in unsupervised learning, and the "Training Domain" of a neural network. It is the art of drawing a line in the sand and saying: "These items belong together."</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>A set $S$ is a collection of distinct objects. We define the interaction between these collections using three primary operators:</p>
      <ul class="mt-2 mb-4 space-y-2">
        <li><strong>Union ($A \cup B$)</strong>: $\{x \mid x \in A \lor x \in B\}$. The "Relational Merge." Combines all unique elements, discarding duplicates.</li>
        <li><strong>Intersection ($A \cap B$)</strong>: $\{x \mid x \in A \land x \in B\}$. The "Common Ground." Only the elements found in both collections survive.</li>
        <li><strong>Complement ($A^c$)</strong>: The "Inverse Filter." Elements in the universal set $\mathcal{U}$ that are specifically NOT in $A$.</li>
      </ul>
      <p>A critical concept for AI is the <strong>Power Set</strong> $\mathcal{P}(S)$, which is the set of all possible subsets of $S$. If a set has $n$ elements, its power set has $|\mathcal{P}(S)| = 2^n$ elements. This exponential explosion is why <strong>Feature Selection</strong> is such a nightmare—if you have 100 features, there are more possible groups of features to test ($2^{100}$) than there are atoms in the observable universe.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Data Science, Set Theory is the <strong>Relational Anchor</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Membership ($\in$)</strong>: The atomic logic of data—either an item is in the set or it isn't. No half-measures.</li>
        <li><strong>Subset ($\subseteq$)</strong>: $A \subseteq B$ means every property of $A$ is accounted for in $B$. This is the basis of all data filtering.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Cardinality. Don't confuse the "Size" of a set with the "Values" within it. In categorical encoding, high-cardinality sets (like unique IDs) can blow up your model's memory and cause overfitting because the model learns the noise of individuals rather than the signal of the group.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Set Theory as <strong>"The Digital Library Catalog"</strong> or <strong>"The Sorting Room."</strong> 
        Imagine you have two boxes of Legos. A <strong>Union</strong> is pouring them both into a single pile, but tossing out any exact duplicates. An <strong>Intersection</strong> is finding only the specific bricks that appear in both boxes. 
        In Python, this is exactly what the <code>set()</code> object does. It translates raw lists into distinct collections where the math of "AND," "OR," and "NOT" can be applied with perfect precision. It is the bedrock of <strong>Data Integrity</strong>: ensuring that every vote or feature you count is a unique, valid piece of the truth.
      </div>
    </div>
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

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Cardinality $|A|$</strong> is the "Census" of your set. It's just a fancy way of saying <code>len(data)</code>. In ML, if the cardinality of your feature set is too high (like "Unique User IDs"), it can actually hurt your model's ability to generalize.
      </div>
    </div>

    <hr class="premium-hr">

    <h2 id="union">2. Union ($\cup$)</h2>
    <p>The <strong>union</strong> of two sets includes all unique elements from both sets.</p>
    <div class="callout tip">
      <div class="callout-icon">🤝</div>
      <div class="callout-body">
        <strong>Data Context:</strong> This is used when you are <strong>merging</strong> two datasets with the same structure. In SQL, this is the <code>UNION</code> command.
      </div>
    </div>
    <p><strong>Logic:</strong> "Give me everything from Set A OR Set B."<br>
    <strong>Notation:</strong> $A \cup B$</p>

    <hr class="premium-hr">

    <h2 id="intersection">3. Intersection ($\cap$)</h2>
    <p>The <strong>intersection</strong> includes only the elements that appear in <em>both</em> sets.</p>
    <div class="callout info">
      <div class="callout-icon">📍</div>
      <div class="callout-body">
        <strong>Data Context:</strong> This is used for <strong>Inner Joins</strong>. If you have "Email Subscribers" and "Buyers," the intersection tells you who did both.
      </div>
    </div>
    <p><strong>Logic:</strong> "Give me only what is in Set A AND Set B."<br>
    <strong>Notation:</strong> $A \cap B$</p>

    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Core Theory:</strong> <strong>Complement $A^c$</strong> is the "Everything Else" intuition. If $A$ is the set of "Spam Emails" and the Universal Set $\mathcal{U}$ is your entire Inbox, then $A^c$ is your "Legit Mail." This is the core of <strong>Inverse Filtering</strong> in Data Engineering.
      </div>
    </div>

    <hr class="premium-hr">

    <h2 id="examples" class="mb-8">Illustrative <span class="text-green-premium font-bold">Case Study:</span> s</h2>

    
      <h4>Problem: Reconciling Customer Lists</h4>
      <p>A marketing team has two lists of user IDs. List $A = \{101, 102, 103\}$ and List $B = \{103, 104, 105\}$. Find the common and total unique customers.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Common Customers (Intersection):</strong> $A \cap B = \{103\}$. Only user 103 appears in both lists.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Total Unique Customers (Union):</strong> $A \cup B = \{101, 102, 103, 104, 105\}$. Note that 103 is only counted once.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Data Insight:</strong> Intersection is the foundation of <strong>Inner Joins</strong>, while Union represents a <strong>Full Outer Join</strong> without duplicates.
        </div>
      </div>
    

    
      <h4>Problem: Identifying Discrepancies (Symmetric Difference)</h4>
      <p>Identify which users are *only* in one of the two lists $A$ or $B$ (e.g., to find platform-specific users).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Set Difference $(A - B)$:</strong> $\{101, 102\}$ (Users in A but not B).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Set Difference $(B - A)$:</strong> $\{104, 105\}$ (Users in B but not A).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Symmetric Difference:</strong> $(A - B) \cup (B - A) = \{101, 102, 104, 105\}$.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>ML Usage:</strong> This is a powerful technique for <strong>Data Auditing</strong>—quickly finding rows that exist in your local slice but are missing from the production database.
        </div>
      </div>
    

    <hr class="premium-hr">

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
      <strong>Next Step:</strong> Set theory defines the collections of data. Now, explore <strong><a href="#/mathematics/discrete-math/logic">Mathematical Logic</a></strong> to see how we build complex rules.
    </div>
  `
};

