const i={id:"supervised-learning",title:"Supervised Learning",description:"Learning from labeled datasets to map inputs to discrete or continuous outputs. The foundation of predictive modeling.",keyConcepts:[{title:"Regression",description:"Predicting continuous values."},{title:"Classification",description:"Mapping inputs to discrete categories."}],sections:[{id:"regression",title:"Regression Analysis",description:"Predicting continuous values using linear and non-linear relationships.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🤖 ML · Supervised</div>
          <h1>Regression Analysis</h1>
          <p>The goal of regression is simple: finding a function $f(x)$ that maps input features to a <strong>continuous</strong> numerical output. In ML, this is our most common way of answering "How Much?" questions.</p>
        </div>

        <div class="toc">
          <div class="toc-title">Table of Contents</div>
          <a href="#ols">1. Ordinary Least Squares (OLS)</a>
          <a href="#mse">2. Cost Functions (MSE)</a>
          <a href="#multivariate">3. Multiple Linear Regression</a>
          <a href="#practical">ML Insights</a>
        </div>

        <h2 id="ols">1. Ordinary Least Squares (OLS)</h2>
        <p>In the simplest case, we assume a linear relationship where $y = wx + b$. Our job as learners is to find the "best" weight $w$ and bias $b$ that fit the data.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The <strong>Ordinary Least Squares (OLS)</strong> framework seeks to minimize the discrepancy between our model's predictions and the ground truth. Formally, for a dataset of $n$ points $(x_i, y_i)$, we calculate the slope as:
            <div class="math-block">$$w = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}$$</div>
            This isn't just a guess; it's the unique point where the sum of squared distances reaches its <strong>global minimum</strong>.
          </div>
        </div>

        <h2 id="mse">2. Cost Functions: Mean Squared Error</h2>
        <p>In modern machine learning, we don't just use formulas; we use <strong>Loss Functions</strong>. The most common for regression is Mean Squared Error (MSE).</p>

        <div class="premium-def-box">
          <div class="premium-def-title">MSE Formalism</div>
          <div class="math-block">$$J(w, b) = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2$$</div>
          <p style="margin-top:10px">Where $\hat{y}_i = wx_i + b$ is our prediction.</p>
        </div>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> Why do we square the error? Squaring ensures two things: (1) we treat positive and negative errors the same, and (2) we penalize <strong>outliers</strong>. A point that is $2\times$ farther away contributes $4\times$ the "pain" to the loss function, forcing the model to stay honest.
          </div>
        </div>

        <h2 id="practical">ML Insights: The Bias-Variance Tradeoff</h2>
        <p>When we move from simple lines to complex curves (Polynomial Regression), we risk <strong>Overfitting</strong>.</p>
        
        <ul>
          <li><strong>High Bias:</strong> The model is too simple (underfitting). Like trying to describe a curve with a flat line.</li>
          <li><strong>High Variance:</strong> The model is way too complex (overfitting). It memorizes the "noise" in your training data but fails on real-world tests.</li>
        </ul>

        <div class="linking-rule">
          <strong>Next Step:</strong> Regression is great for numbers, but how do we handle categories? Dive into <strong><a href="#/machine-learning/supervised-learning/classification">Classification Theory</a></strong>.
        </div>
      `,tags:["Linear Regression","MSE","OLS"],color:"#58a6ff"},{id:"classification",title:"Classification Theory",description:"Mapping inputs to discrete categories using Logistic Regression and Probabilistic modeling.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🎯 ML · Supervised</div>
          <h1>Classification Theory</h1>
          <p>Classification is the art of drawing boundaries. Whether it's telling a cat from a dog or spam from a real email, we are trying to predict a <strong>discrete label</strong>.</p>
        </div>

        <h2 id="logistic">1. Logistic Regression</h2>
        <p>Wait, if it's classification, why is it called "Regression"? Because we start by predicting a continuous number (the log-odds) and then squash it into a probability between 0 and 1.</p>

        <div class="premium-def-box">
          <div class="premium-def-title">The Sigmoid Function</div>
          <div class="math-block">$$\sigma(z) = \frac{1}{1 + e^{-z}}$$</div>
          <p style="margin-top:10px">Where $z = wx + b$. This function ensures our output $\hat{y}$ is always a valid probability.</p>
        </div>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> In classification, we don't use MSE. Why? Because the Sigmoid function makes the MSE loss surface "bumpy" (non-convex), making it hard to optimize. Instead, we use <strong>Binary Cross-Entropy (Log Loss)</strong>:
            <div class="math-block">$$J(w) = -\frac{1}{n} \sum_{i=1}^n [y_i \log(\hat{y}_i) + (1-y_i) \log(1-\hat{y}_i)]$$</div>
            This loss function comes from <strong>Information Theory</strong>. It penalizes the model heavily when it is "confident but wrong."
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Lines and sigmoid curves are great, but what if the data is complex and non-linear? Explore <strong><a href="#/machine-learning/supervised-learning/svm-trees">SVM & Decision Trees</a></strong>.
        </div>
      `,tags:["Logistics","Sigmoid","Log-Loss"],color:"#58a6ff"},{id:"svm-trees",title:"SVM & Decision Trees",description:"Advanced non-linear boundaries using Max-Margin Hyperplanes and Information Gain.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🌲 ML · Supervised</div>
          <h1>SVM & Decision Trees</h1>
          <p>When patterns aren't easily separable by a simple line, we need smarter ways to split our feature space. Support Vector Machines use geometry, while Trees use logic.</p>
        </div>

        <h2 id="svm">1. Support Vector Machines (SVM)</h2>
        <p>The intuition behind SVM is simple: don't just split the data; split it with the <strong>widest possible road</strong> (the margin).</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> SVM looks for the <strong>Optimal Hyperplane</strong> defined by $w^T x + b = 0$. It maximizes the distance (margin) to the nearest points, called <strong>Support Vectors</strong>. Mathematically, we minimize $|w|^2$ subject to the constraint that every point is on the correct side of the margin:
            <div class="math-block">$$y_i (w^T x_i + b) \ge 1$$</div>
            This is a <strong>Constrained Optimization</strong> problem that ensures maximum robustness.
          </div>
        </div>

        <h2 id="trees">2. Decision Trees</h2>
        <p>Trees are essentially a series of If-Then questions. But how do we know which question to ask first? We ask the one that reduces "chaos" the most.</p>

        <div class="premium-def-box">
          <div class="premium-def-title">Information Gain</div>
          <div class="math-block">$$IG(D, A) = Entropy(D) - \sum_{v \in Values(A)} \frac{|D_v|}{|D|} Entropy(D_v)$$</div>
          <p style="margin-top:10px">We select the feature $A$ that maximizes this gain, effectively "filtering" the data into pure piles.</p>
        </div>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> <strong>Entropy</strong> is our measure of impurity. If a pile of data is 50/50 mix, entropy is 1 (maximal chaos). If it's 100% one class, entropy is 0 (pure). By splitting a node, we are trying to reach a state of <strong>Zero Entropy</strong> as quickly as possible.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Now that we've mastered learning from labels, what happens when we don't have any? Move to <strong><a href="#/machine-learning/unsupervised-learning/">Unsupervised Learning</a></strong>.
        </div>
      `,tags:["SVM","Kernel","Entropy","Gini"],color:"#58a6ff"}]};export{i as SUPERVISED_LEARNING_DATA};
