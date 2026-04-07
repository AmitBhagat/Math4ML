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
      <p>In the context of data science and AI, Set Theory is the foundation for how we manipulate datasets, join tables, and filter information. Think of each <strong>set</strong> as a collection of unique data points.</p>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Core Theory:</strong> A <strong>Set</strong> is a <strong>"Box of Unique Items."</strong> In Python, this is exactly what the <code>set()</code> object does—it forces everything inside to be unique. If you try to add a duplicate, the set just ignores it. This is the bedrock of <strong>Data Deduplication</strong>.
        </div>
      </div>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#subsets">1. Subsets ($\subseteq$)</a>
      <a href="#union">2. Union ($\cup$)</a>
      <a href="#intersection">3. Intersection ($\cap$)</a>
      <a href="#examples">Illustrative Examples</a>
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

    <h2 id="examples">Illustrative Examples</h2>

    <div class="example-box">
      <h4>Problem: Reconciling Customer Lists</h4>
      <p>A marketing team has two lists of user IDs. List $A = \{101, 102, 103\}$ and List $B = \{103, 104, 105\}$. Find the common and total unique customers.</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Common Customers (Intersection):</strong> $A \cap B = \{103\}$. Only user 103 appears in both lists.</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Total Unique Customers (Union):</strong> $A \cup B = \{101, 102, 103, 104, 105\}$. Note that 103 is only counted once.</div></div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Data Insight:</strong> Intersection is the foundation of <strong>Inner Joins</strong>, while Union represents a <strong>Full Outer Join</strong> without duplicates.
        </div>
      </div>
    </div>

    <div class="example-box">
      <h4>Problem: Identifying Discrepancies (Symmetric Difference)</h4>
      <p>Identify which users are *only* in one of the two lists $A$ or $B$ (e.g., to find platform-specific users).</p>
      
      <div class="step-box"><span class="step-num">1</span><div><strong>Set Difference $(A - B)$:</strong> $\{101, 102\}$ (Users in A but not B).</div></div>
      <div class="step-box"><span class="step-num">2</span><div><strong>Set Difference $(B - A)$:</strong> $\{104, 105\}$ (Users in B but not A).</div></div>
      <div class="step-box"><span class="step-num">3</span><div><strong>Symmetric Difference:</strong> $(A - B) \cup (B - A) = \{101, 102, 104, 105\}$.</div></div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>ML Usage:</strong> This is a powerful technique for <strong>Data Auditing</strong>—quickly finding rows that exist in your local slice but are missing from the production database.
        </div>
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
