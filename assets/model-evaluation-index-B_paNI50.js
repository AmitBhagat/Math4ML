const e={id:"model-evaluation",title:"Model Evaluation",description:"Rigorous metrics and validation strategies to assess model performance and ensure generalization to new data.",keyConcepts:[{title:"Metrics",description:"Quantifying success via Precision, Recall, and AUC."},{title:"Validation",description:"Cross-validation and statistical significance."}],sections:[{id:"metrics",title:"Performance Metrics",description:"Probabilistic and categorical measures of predictive success beyond simple accuracy.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">📊 ML · Evaluation</div>
          <h1>Performance Metrics</h1>
          <p>Accuracy is often a lie. If 99% of your emails are not spam, a model that predicts "Not Spam" for every single email is 99% accurate—but it's also 100% useless. We need better metrics.</p>
        </div>

        <h2 id="precision-recall">1. Precision, Recall, and F1-Score</h2>
        <p>Think of <strong>Precision</strong> as "how many of my 'yes' predictions were actually 'yes'." Think of <strong>Recall</strong> as "how many of the actual 'yes' cases did I manage to find."</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> To balance these two, we use the <strong>F1-Score</strong>, which is the <strong>Harmonic Mean</strong> of Precision ($P$) and Recall ($R$):
            <div class="math-block">$$F_1 = 2 \cdot \frac{P \cdot R}{P + R}$$</div>
            Why the harmonic mean? Because it penalizes extreme values. If your recall is 0, your F1-Score will be 0, no matter how high your precision is.
          </div>
        </div>

        <h2 id="bias-variance">2. The Bias-Variance Tradeoff</h2>
        <p>This is the fundamental struggle of every ML practitioner. You want a model that is complex enough to learn the pattern, but simple enough to ignore the noise.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The expected prediction error of a model can be decomposed into three components:
            <div class="math-block">$$Err(x) = \text{Bias}^2 + \text{Variance} + \sigma^2$$</div>
            Where <strong>Bias</strong> is the error from erroneous assumptions in the learning algorithm, <strong>Variance</strong> is the error from sensitivity to small fluctuations in the training set, and $\sigma^2$ is the <strong>Irreducible Error</strong> (noise).
          </div>
        </div>

        <div class="linking-rule">
          <strong>Next Step:</strong> Metrics tell us how the model did on a specific set of data. But how do we ensure it will work on <em>tomorrow's</em> data? Explore <strong><a href="#/machine-learning/model-evaluation/validation">Validation Strategies</a></strong>.
        </div>
      `,tags:["F1-Score","AUC-ROC","RMSE"],color:"#58a6ff"},{id:"validation",title:"Validation Strategies",description:"Holdout sets and K-Fold rotation to ensure the model generalizes to unseen data.",html:String.raw`
        <div class="premium-hero">
          <div class="premium-hero-badge">🔄 ML · Evaluation</div>
          <h1>Validation Strategies</h1>
          <p>Training a model is easy. Proving it works on data it has never seen before is the real challenge. This is the science of <strong>Generalization</strong>.</p>
        </div>

        <h2 id="crossval">1. K-Fold Cross-Validation</h2>
        <p>Don't just trust one split. In K-Fold, we split the data into $K$ pieces, train on $K-1$, and test on the last one. We repeat this $K$ times until every piece has been a test set.</p>

        <div class="callout tip">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <strong>Core Theory:</strong> The key goal of validation is to estimate the <strong>Generalization Error</strong>. By averaging performance across different folds, we reduce the variance of our evaluation, giving us a much more honest picture of how the model will perform in production.
          </div>
        </div>

        <div class="linking-rule">
          <strong>Congratulations!</strong> You have completed the core curriculum of Math for Machine Learning. You now have the mathematical foundation to master any ML architecture.
        </div>
      `,tags:["Cross-Val","K-Fold","Holdout"],color:"#58a6ff"}]};export{e as MODEL_EVALUATION_DATA};
