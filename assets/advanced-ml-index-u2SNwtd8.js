const e={id:"ensemble-intro",title:"Ensemble Learning Theory",description:"The mathematical foundation for combining multiple 'weak' learners to create a single high-performance 'strong' learner.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Architecture</div>
      <h1>Ensemble Learning: The Wisdom of the Crowd</h1>
      <p>Why use one model when you can use 1,000? <strong>Ensemble Learning</strong> is based on one powerful truth: <strong>The collective opinion of a diverse group is often more accurate than any single expert.</strong> By combining models that make different kinds of mistakes, we can "Average out" the errors and find the signal in the noise.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Error Decomposition</a>
      <a href="#diversity">The Importance of Diversity</a>
      <a href="#types">3 Core Strategies: Bagging, Boosting, Stacking</a>
      <a href="#why">Why it Works: The Averaging Effect</a>
      <a href="#analogy">The "Wisdom of the Crowd" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Error Decomposition</h2>
    <p>Total error can be broken down into <strong>Bias</strong>, <strong>Variance</strong>, and <strong>Irreducible Noise</strong>. Ensemble methods focus on reducing one of these two:</p>
    <ul>
      <li><strong>Bagging:</strong> Reduces <strong>Variance</strong>. (Stop the model from being "Jumpy").</li>
      <li><strong>Boosting:</strong> Reduces <strong>Bias</strong>. (Stop the model from being "Stupid").</li>
    </ul>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Correction through Collaboration."</strong> 
        If Model A thinks a 'Dog' is a 'Cat', but Model B, C, and D all think it's a 'Dog', the majority wins. The ensemble effectively <strong>Filters</strong> individual mistakes.
      </div>
    </div>

    <h2 id="diversity">The Importance of Diversity</h2>
    <p>For an ensemble to work, the models <strong>MUST be different</strong>. If you have 1,000 models that are exactly the same, they will all make the same mistake at the same time. The "Magic" happens when Model A is good at seeing edges, and Model B is good at seeing textures.</p>

    <h2 id="types">The 3 Core Strategies</h2>
    <h2 id="algorithm">The Ensemble Algorithm</h2>
    <div class="example-box">
      <h4>Ensemble Logic</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Member Selection:</strong> Create a diverse set of "Weak Learners" (e.g., small trees, linear models).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Training:</strong> Train each member independently (Bagging) on parallel subsets of data or sequentially (Boosting).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Prediction:</strong> Pass the same input to every member and collect their individual guesses.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Aggregation:</strong> Combine the guesses using a fixed rule (Average/Majority) or a learned rule (Meta-model).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Output:</strong> The final "Strong" prediction is more robust than any individual guess.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Council of Wise Men</h2>
    <p>Imagine a <strong>King</strong> making a decision about the kingdom's budget. He doesn't rely on just one advisor.</p>
    <ul>
      <li><strong>Advisor A (Economic Expert):</strong> Focuses purely on GDP and inflation.</li>
      <li><strong>Advisor B (Military Expert):</strong> Focuses on defense and borders.</li>
      <li><strong>Advisor C (Social Liaison):</strong> Focuses on education and health.</li>
    </ul>
    <p>Each advisor is "Correct" in their own way but biased by their specialty. By listening to the <strong>Concensus</strong> of the whole Council, the King makes a balanced, high-quality decision. <strong>Ensemble learning is that Council.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
import numpy as np

# 1. Diversity: Three different types of models
clf1 = LogisticRegression()
clf2 = DecisionTreeClassifier()
clf3 = SVC(probability=True)

# 2. Train the Ensemble (The 'Council')
eclf = VotingClassifier(
    estimators=[('lr', clf1), ('dt', clf2), ('svc', clf3)],
    voting='soft'
)

# 3. Simulate Data and Fit
X = np.random.rand(10, 2)
y = np.array([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
eclf.fit(X, y)

print(f"Ensemble Accuracy usually beats individual models: {eclf.score(X, y)}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's see how many people voting in parallel can reduce variance. Explore <strong><a href="#/machine-learning/advanced-ml/bagging">Bagging</a></strong>.
    </div>
  `},t={id:"bagging",title:"Bagging (Bootstrap Aggregating)",description:"A method to reduce variance by training multiple models independently on different random subsets (with replacement) of the training data and averaging their predictions.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Parallel</div>
      <h1>Bagging: The Democratic Election</h1>
      <p>How do you stop a model from being "Over-Sensitive"? You let it be part of a <strong>Democratic Election</strong>. <strong>Bagging</strong> (Bootstrap Aggregating) creates many versions of the same model, each trained on a slightly different "Slice" of the world. By <strong>Voting (Parallel processing)</strong>, the errors of any single model are canceled out by the others.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Variance Reduction</a>
      <a href="#bootstrap">Bootstrapping: Sampling with Replacement</a>
      <a href="#averaging">Aggregating: The Final Vote</a>
      <a href="#forest">The Connection: Random Forest</a>
      <a href="#analogy">The "Democratic Election" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Variance Reduction</h2>
    <p>Variance is the error caused by a model being too sensitive to <strong>Small Fluctuations</strong> in the training data. If you change 3 points in your dataset and your model's predictions change completely, you have high variance. Bagging averages these fluctuations away.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Taking Multiple Looks."</strong> 
        If you look at a crime scene once, you might miss a clue. 
        If 100 detectives look at the scene from different angles, and we combine their reports, the final summary will be <strong>much more stable</strong>. 
      </div>
    </div>

    <h2 id="bootstrap">Bootstrapping: The "Bag" of Samples</h2>
    <p>How do we make the models "Different"? We use <strong>Sampling with Replacement</strong>. From a dataset of $N$ points, we pull $N$ points randomly, allowing the same point to be picked twice. Each model gets its own "Bag" of data. On average, each bag contains about **63% of the unique samples**.</p>

    <h2 id="averaging">Aggregating: The Vote</h2>
    <ul>
      <li><strong>Regression:</strong> Take the <strong>Average</strong> of all model outputs.</li>
      <li><strong>Classification:</strong> Take the <strong>Majority Vote</strong> (Mode) of the classes.</li>
    </ul>

    <h2 id="forest">Random Forest: Bagging's Champion</h2>
    <p>A <strong>Random Forest</strong> is just a collection of <strong>Decision Trees</strong> that use Bagging. By combining many high-variance trees, we create a single low-variance, incredibly powerful model.</p>

    <h2 id="analogy">The "Democratic Election" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a **Presidential Election**. 
        If only **One Person** decided the president (Single Model), the choice would be highly volatile and depend on that one person's mood. 
        **Bagging** is the election. We have 100,000,000 people (Models). Each person sees a slightly different part of reality (Bootstrapping). 
        When they all **Vote (Aggregating)**, the final result is <strong>Stable</strong>. The "Crazy" guesses of one individual are drowned out by the collective wisdom of the majority.
      </div>
    </div>

    <h2 id="algorithm">The Bagging Algorithm</h2>
    <div class="example-box">
      <h4>Parallel Diversity Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Bootstrapping:</strong> Create $B$ random subsets of the training data with replacement.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Parallel Training:</strong> Train $B$ identical models (e.g., all Decision Trees) independently on their unique subset.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Prediction:</strong> Pass the same input to all $B$ models.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Aggregating:</strong> Total the results. For classification, use <strong>Majority Vote</strong>; for regression, use <strong>Average</strong>.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Output:</strong> Return the aggregated result, which has significantly lower variance than any individual model.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Random Sample Jury</h2>
    <p>Imagine a high-profile court case. Instead of one Jury, we assemble <strong>100 Juries</strong>.</p>
    <ul>
      <li><strong>The Variation:</strong> Every Jury looks at the same evidence, but some hear more from the Witness, and some hear more from the Fingerprint Expert (Bootstrapping).</li>
      <li><strong>The Stability:</strong> If one Jury is biased or makes a mistake, they only represent 1% of the total vote. </li>
    </ul>
    <p>The final verdict (The Ensemble) is extremely stable and fair because it "Averages away" the individual biases of any single Jury. <strong>Bagging is that multi-jury system.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Base Model: One small, high-variance Tree
base_tree = DecisionTreeClassifier()

# 2. Train the 'Bag' of 50 trees
model = BaggingClassifier(
    estimator=base_tree,
    n_estimators=50,
    random_state=42
)

# 3. Predict on mock data
X = np.random.rand(10, 2)
y = np.array([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
model.fit(X, y)

print(f"Bagging Result: {model.predict(X[[0]])}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Voting works for stability. But what if we want to learn from our mistakes sequentially? Explore <strong><a href="#/machine-learning/advanced-ml/boosting">Boosting</a></strong>.
    </div>
  `},o={id:"boosting",title:"Boosting",description:"A method to reduce bias by training models sequentially, where each new model focuses on the samples that were misclassified or yielded high errors in the previous models.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Sequential</div>
      <h1>Boosting: The Hardcore Tutor</h1>
      <p>If Bagging is a democratic election (Parallel), <strong>Boosting</strong> is a <strong>Intense Tutoring Session</strong> (Sequential). We don't train all models at once. Instead, we train one, look at its <strong>Mistakes</strong>, and then train the next model to <strong>Specifically Fix those Mistakes</strong>. We turn a "Weak Learner" into an "Unstoppable Expert."</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Bias Reduction</a>
      <a href="#process">The Sequential Loop</a>
      <a href="#weighting">Sample Weighting: Focusing on Errors</a>
      <a href="#algorithms">AdaBoost vs. Gradient Boosting</a>
      <a href="#analogy">The "Hardcore Tutor" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Bias Reduction</h2>
    <p>Bias is the error caused by a model being too <strong>Simple</strong>. If your model thinks 2+2=5, it is biased. Boosting forces the model to <strong>Get Smarter</strong> by iteratively pointing out where it was stupid.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Adaptive Learning."</strong> 
        In school, you don't spend time studying what you already know. You focus on the **Hard Problems**. 
        Boosting does the same. It "Gives more weight" to the <strong>Difficult Samples</strong> so the next model is forced to solve them.
      </div>
    </div>

    <h2 id="algorithm">The Boosting Algorithm (AdaBoost)</h2>
    <div class="example-box">
      <h4>The Error Focus Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Equal Starts:</strong> Give every data point an equal weight (importance).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Weak Learning:</strong> Train a very simple model (like a 1-split "Stump") on the weighted data.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Error Check:</strong> See which points the model missed. Calculate the model's "Say" (importance) in the final vote.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Up-Weighting:</strong> Increase the weights of the missed points so they become "Huge" in the eyes of the next model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Completion:</strong> Repeat $M$ times. The final answer is a weighted vote of all your tutors.
        </div>
      </div>
    </div>

    <h2 id="algorithms">Core Algorithms</h2>
    <ul>
      <li><strong>AdaBoost:</strong> The original. It tweaks sample weights.</li>
      <li><strong>Gradient Boosting (XGBoost):</strong> The modern king. Instead of weights, it trains the next model to predict the <strong>Residuals</strong> (the leftover error) of the previous model.</li>
    </ul>

    <h2 id="analogy">The "Hardcore Tutor" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>Student preparing for the SAT</strong>. 
        * **1st Round:** You take a practice test. You get the math questions right but miss all the <strong>Grammar</strong> questions. 
        * **2nd Round:** You hire a **Grammar Tutor**. You focus 100% on grammar and learn the rules. 
        * **3rd Round:** You take another test. Now you know grammar, but you miss the <strong>Vocabulary</strong> questions. 
        * **4th Round:** You hire a **Vocabulary Tutor**. 
        **By the end of the semester, you have an "Ensemble" of 3 different skillsets that cover every weakness. Boosting is that relentless focus on what you don't yet understand.** 
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Relentless SAT Tutor</h2>
    <p>Imagine you are a <strong>Student preparing for the SAT</strong>. You have a series of tutors.</p>
    <ul>
      <li><strong>Tutor 1:</strong> He teaches you everything. You're good at Math but fail the <strong>Grammar</strong> section. </li>
      <li><strong>Tutor 2:</strong> He ignores your Math skills and forces you to <strong>Only solve Grammar problems</strong> until you're an expert. </li>
      <li><strong>The Final Exam:</strong> You combine your Math knowledge from Tutor 1 with your Grammar mastery from Tutor 2. </li>
    </ul>
    <p>Because each tutor focused <strong>Only on what was previously wrong</strong>, you have no weak spots left. <strong>Boosting is that relentless improvement cycle.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# 1. Base Model: An extremely 'Weak' tree (Max depth 1)
weak_stump = DecisionTreeClassifier(max_depth=1)

# 2. Train with 50 stages of Boosting
model = AdaBoostClassifier(
    estimator=weak_stump,
    n_estimators=50,
    learning_rate=1.0
)

# 3. Fit on complex non-linear data
X = np.random.rand(100, 2)
y = (X[:, 0] + X[:, 1] > 1).astype(int)
model.fit(X, y)

print(f"Model precision: {model.score(X, y)}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Voting (Bagging) and Tutoring (Boosting) are great. But what if we train a model how to combine other models? Explore <strong><a href="#/machine-learning/advanced-ml/stacking">Stacking</a></strong>.
    </div>
  `},s={id:"stacking",title:"Stacking (Stacked Generalization)",description:"An ensemble learning technique that trains multiple base models and a meta-model that learns to combine the base models' predictions into a single final output.",color:"#FF9800",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧠 Advanced ML · Meta</div>
      <h1>Stacking: The Council of Experts</h1>
      <p>How do you know whether to trust an <strong>SVM</strong> or a <strong>Random Forest</strong> for a specific data point? You don't just vote (Bagging). You train <strong>Another Model</strong> to learn! <strong>Stacking</strong> uses a "Meta-Learner" that looks at the guesses of other models and learns their <strong>Strengths and Weaknesses</strong>.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Meta-Learning</a>
      <a href="#architecture">The 2-Level Architecture</a>
      <a href="#crossval">Avoiding Leakage (CV Stacking)</a>
      <a href="#diversity">Heterogeneous Ensembles</a>
      <a href="#analogy">The "Council of Experts" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Meta-Learning</h2>
    <p>Stacking is about **Higher-Order Integration**. Instead of using simple rules like "Average the scores," we treat the <strong>Outputs</strong> of our base models as <strong>Features</strong> for our final model.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Learning who to trust."</strong> 
        The Meta-Learner says: "I've noticed that whenever the SVM says 'Spam', it's usually wrong, but when the Random Forest says 'Spam', it's 99% right. So, I will listen to the Forest." 
        It learns the **Error Profile** of every sub-model.
      </div>
    </div>

    <h2 id="architecture">The 2-Level Architecture</h2>
    <ul>
      <li><strong>Level 0 (Base Models):</strong> A diverse set of models (e.g., KNN, Logistic Regression, CNN). They all see the raw input and make a prediction.</li>
      <li><strong>Level 1 (Meta-Learner):</strong> Usually a simple model (like Logistic Regression or a shallow Tree). It takes the predictions from Level 0 as its input and makes the final call.</li>
    </ul>

    <h2 id="crossval">The Training Secret: Cross-Validation</h2>
    <p><strong>The Gotcha:</strong> You cannot train the Meta-Learner on the same data the Base Models saw! If you do, the Base Models will be "Too Confident," and the Meta-Learner will learn to trust them too much. We use <strong>Out-of-fold</strong> predictions to train the Meta-Learner, ensuring it sees "Honest" guesses.</p>

    <h2 id="analogy">The "Council of Experts" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are a <strong>CEO (Meta-Learner)</strong> in a meeting. 
        You have three experts:
        * **Expert A (Statistician):** He's great at data but misses emotional nuances. 
        * **Expert B (Marketing Guru):** He's great at emotions but bad at math. 
        * **Expert C (Technician):** He's only good at the raw hardware facts. 
        They each give you their recommendation. 
        **You don't just "Average" their advice. You know from 10 years of experience that Expert A is usually right about the budget, while Expert B is right about the customer reaction. You combine their specific strengths to make the perfect decision.** 
      </div>
    </div>

    <h2 id="algorithm">The Stacking Algorithm</h2>
    <div class="example-box">
      <h4>The Meta-Learning Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Base Training:</strong> Select a set of diverse "Base Models" (e.g., SVM, RNN, Random Forest).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>OOF Predictions:</strong> Use <strong>Out-of-Fold</strong> cross-validation to get predictions from each base model.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Feature Creation:</strong> Combine these predictions to create a new "Meta-Feature" matrix. (The input to the next level).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Meta-Training:</strong> Train a <strong>Meta-Learner</strong> (usually a simple Logistic Regression) to map these meta-features to the true labels.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Inference:</strong> For a new case, get base predictions first, then pass them through the Meta-Learner for the final result.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Orchestra Conductor</h2>
    <p>Imagine an **Orchestra**. You have world-class musicians: a Violinist, a Cellist, and a Flutist.</p>
    <ul>
      <li><strong>The Base Models:</strong> Each musician plays the music (Predicts the output) in their own style. </li>
      <li><strong>The Meta-Learner:</strong> Is the <strong>Conductor</strong>. He doesn't play an instrument himself. Instead, he listens to the musicians and decides when the Flute should be louder or when the Cello is making a mistake. </li>
    </ul>
    <p>The final music is better than any solo because the Conductor knows <strong>exactly how to blend</strong> the individual talents. <strong>Stacking is that Conductor.</strong></p>

    <h2 id="python">Python Implementation</h2>
    <div class="code-block">
      <pre><code class="language-python">
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# 1. Diverse Base Models (Level 0)
base_models = [
    ('rf', RandomForestClassifier()),
    ('svc', SVC(probability=True))
]

# 2. Meta-Learner (Level 1)
meta_learner = LogisticRegression()

# 3. Create the Stack
stack = StackingClassifier(
    estimators=base_models,
    final_estimator=meta_learner,
    cv=5 # Use 5-fold cross-validation for OOF predictions
)

# 4. Fit on mock data
X = np.random.rand(100, 5)
y = (X[:, 0] > 0.5).astype(int)
stack.fit(X, y)

print(f"Stacking Score: {stack.score(X, y)}")
      </code></pre>
    </div>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have reached the pinnacle of ensemble theory. Now, let's learn how to prep and "Clean" your raw datasets for these complex systems in <strong><a href="#/machine-learning/data-preprocessing">Data Preprocessing</a></strong>.
    </div>
  `},a={id:"advanced-ml",title:"Advanced ML Topics",description:"Beyond individual algorithms—exploring the synergy of multiple models through Bagging, Boosting, and Stacking.",keyConcepts:[{title:"Bias-Variance Control",description:"Systematically reducing error by targeting different components of model failure."},{title:"Parallel vs. Sequential",description:"Independent voting (Bagging) vs. Iterative correction (Boosting)."},{title:"Meta-Learning",description:"Training models to intelligently combine the opinions of other models (Stacking)."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Advanced ML: <span class="text-accent italic">The Synergy of Many</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          In Machine Learning, <strong>1 + 1 = 3</strong>. By combining multiple "Weak Learners"—models that are only slightly better than random guessing—we can create "Strong Learners" that are nearly perfect. This is the <strong>Mathematics of Cooperation</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category dives into the three pillars of ensemble theory: the parallel safety of Bagging, the sequential intensity of Boosting, and the meta-intelligence of Stacking.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The best way to get a reliable answer is to ask a hundred experts and let them battle it out."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Kaggle Winner's Handbook</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Start building your council of experts.</p>
        <a 
          href="/#/machine-learning/advanced-ml/ensemble-intro" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Ensemble Theory
        </a>
      </div>

    </div>
  `,sections:[e,t,o,s]};export{a as ADVANCED_ML_DATA};
