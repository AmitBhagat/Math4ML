const e={id:"unsupervised-learning",title:"Unsupervised Learning",description:"Extracting patterns and structures from unlabeled data. Essential for discovery and dimensionality reduction.",keyConcepts:[{title:"Clustering",description:"Grouping similar data points."},{title:"D-Reduction",description:"Reducing features while preserving variance."}],sections:[{id:"clustering",title:"Clustering Algorithms",description:"Grouping data points based on proximity or density in feature space.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🧩 ML · Unsupervised</div>
          <h1>Clustering Analysis</h1>
          <p>Clustering is about finding the "hidden tribes" in your data. Since we don't have labels, we rely on the geometry of the data itself to tell us what belongs together.</p>
        </div>

        <h2 id="kmeans">1. K-Means Clustering</h2>
        <p>Imagine you have a room full of people and you want to group them into $K$ teams. K-Means does this by iteratively moving the "center" of each team to the average location of its members.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> K-Means is a <strong>Partitioning Optimizer</strong>. It aims to minimize the <strong>Within-Cluster Sum of Squares (WCSS)</strong>, also known as <strong>Inertia</strong>:
            <div class="math-block">$$J = \sum_{j=1}^K \sum_{x \in C_j} ||x - \mu_j||^2$$</div>
            Where $\mu_j$ is the centroid of cluster $C_j$. The algorithm alternates between <strong>Assignment</strong> (finding the closest $\mu$) and <strong>Update</strong> (calculating the mean of the assigned points).
          </div>
        </div>

        <h2 id="density">2. Density-Based Clustering (DBSCAN)</h2>
        <p>What if your data isn't in nice round circles? K-Means fails on complex shapes. DBSCAN looks for "crowds" (high-density regions) separated by "empty space" (low-density noise).</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> DBSCAN defines a point as a **Core Point** if it has at least <code>MinPts</code> neighbors within a radius $\epsilon$. It builds clusters by linking points that are <strong>Density-Reachable</strong> from each other. This allows it to find clusters of <strong>Arbitrary Shape</strong> and identify outliers automatically.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Clustering helps group data, but how do we simplify data with thousands of features? Move to <strong><a href="#/machine-learning/unsupervised-learning/dimensionality-reduction">Dimensionality Reduction</a></strong>.
        </div>
      `,tags:["K-Means","DBSCAN","Hierarchical"],color:"#bc8cff"},{id:"dimensionality-reduction",title:"Dimensionality Reduction",description:"Condensing high-dimensional data into lower-dimensional representations while preserving information.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">📉 ML · Unsupervised</div>
          <h1>Dimensionality Reduction</h1>
          <p>The "Curse of Dimensionality" tells us that data becomes sparse and unpredictable in high dimensions. We need to "squash" our data while keeping the most important signals.</p>
        </div>

        <h2 id="pca">1. Principal Component Analysis (PCA)</h2>
        <p>Think of PCA as finding the best angle to take a 2D photograph of a 3D object so that you keep as much detail (variance) as possible.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> PCA is conceptually the <strong>Eigen-decomposition</strong> of the data's <strong>Covariance Matrix</strong>. If $\mathbf{\Sigma}$ is the covariance matrix of our features, we solve:
            <div class="math-block">$$\mathbf{\Sigma} \mathbf{v}_i = \lambda_i \mathbf{v}_i$$</div>
            The <strong>Eigenvectors</strong> ($\mathbf{v}_i$) are the "Principal Components" (the directions of the data), and the <strong>Eigenvalues</strong> ($\lambda_i$) tell us exactly how much <strong>Variance</strong> is explained by each direction.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> We've found patterns and reduced dimensions. Now, let's learn how to process the raw data that feeds these models in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
        </div>
      `,tags:["PCA","t-SNE","UMAP"],color:"#bc8cff"}]};export{e as UNSUPERVISED_LEARNING_DATA};
