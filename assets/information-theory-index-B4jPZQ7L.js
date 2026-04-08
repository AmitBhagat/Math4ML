const t={id:"entropy",title:"Entropy",description:"Entropy is a measure of the average 'Surprise' or 'Uncertainty' in a random variable. It is the fundamental limit of data compression.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Entropy</div>
      <h1>Entropy: The Measure of Surprise</h1>
      <p><strong>Entropy</strong> (\(H\)) is the mathematical way we measure <strong>Uncertainty</strong>. It tells us how much "New Information" we receive, on average, from an outcome. If an event is 100% predictable, its entropy is zero—it contains no news.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Probability Distributions</strong>: Logarithms and PMFs.</li>
        <li><strong>Binary Units (Bits)</strong>: Information measured in base-2.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Imagine you live in a desert where it never rains. If someone says, <em>"It's sunny today,"</em> you have learned <strong>Zero Information</strong>. You already knew that. But if they say, <em>"It's snowing,"</em> you have received a massive amount of information. <strong>Entropy</strong> is the weighted average of this "Surprise" across all possible outcomes.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Entropy as <strong>"How many Yes/No questions do I need to ask?"</strong> 
        If a variable has high entropy, it is unpredictable, and you need many questions to figure it out. 
        If it has low entropy, it's a "sure thing." 
        In ML, we want our models to move from high-entropy (guessing) to low-entropy (confident predictions).
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For a discrete random variable \(X\) with values \(x_i\) and probabilities \(P(x_i)\), Entropy is:</p>
    <div class="math-block">$$H(X) = -\sum_{i} P(x_i) \log_2 P(x_i)$$</div>
    <p>The unit is <strong>Bits</strong> if using base-2, or <strong>Nats</strong> if using natural log (\(e\)).</p>

    <h2 id="example-coin" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Fair vs. Biased Coin</h2>
    
      <h4>Problem: Comparing Uncertainty Levels</h4>
      <p>Compare the entropy of a fair coin (\(p=0.5\)) vs. a heavily biased coin (\(p=0.9\)).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Fair Coin:</strong> \(H = -(0.5 \log_2 0.5 + 0.5 \log_2 0.5) = -(0.5(-1) + 0.5(-1)) = 1 \text{ bit}\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Biased Coin:</strong> \(H = -(0.9 \log_2 0.9 + 0.1 \log_2 0.1) \approx 0.47 \text{ bits}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> The fair coin has <strong>Maximum Entropy</strong> (1 bit). The biased coin is more predictable, so it carries less information (~0.47 bits). Prediction is easier when entropy is lower!
        </div>
      </div>
    

    <h2 id="example-surprise" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Surprise of Rare Events</h2>
    
      <h4>Problem: Information in Weather Warnings</h4>
      <p>Outcomes: [Sunny (90%), Rain (9%), Snow (1%)]. Calculate total entropy.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> "Sunny" has low surprise; "Snow" has massive surprise.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Weighted Sum:</strong> Snow contributes \(0.01 \times \log_2(100) \approx 0.06\) bits. Sunny contributes \(0.9 \times \log_2(1.1) \approx 0.13\) bits.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sum:</strong> Total H \(\approx 0.5\) bits.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> Even though the "Snow" event is tiny, its <strong>Information Content</strong> is huge. Entropy balances the impact of a rare event against its low frequency.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def calculate_entropy(probabilities):
    # Filter out zero probabilities to avoid log(0)
    probs = probabilities[probabilities > 0]
    return -np.sum(probs * np.log2(probs))

fair_coin = np.array([0.5, 0.5])
biased_coin = np.array([0.9, 0.1])

print(f"Fair Coin Entropy: {calculate_entropy(fair_coin):.2f} bits")
print(f"Biased Coin Entropy: {calculate_entropy(biased_coin):.2f} bits")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Decision Trees</strong>: Algorithms like ID3 use <strong>Information Gain</strong> (reduction in entropy) to decide which feature to split on.</li>
      <li><strong>Model Confidence</strong>: We check the entropy of a Softmax output; if it's high, the model is "confused" between many classes.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Entropy measures one distribution. But how do we measure the "Distance" between what our model predicts and the truth? Explore <strong><a href="#/mathematics/information-theory/cross-entropy">Cross-Entropy</a></strong>.
    </div>
  `},e={id:"cross-entropy",title:"Cross-Entropy",description:"Cross-Entropy measures the distance between two probability distributions. It is the most common loss function for training classification models.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Loss</div>
      <h1>Cross-Entropy: The Price of Disbelief</h1>
      <p><strong>Cross-Entropy</strong> (\(H(P, Q)\)) is the measure of how well a predicted distribution \(Q\) matches the target distribution \(P\). In Machine Learning, we minimize cross-entropy to bridge the gap between our model's guesses and the ground truth.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Entropy</strong>: Measuring self-uncertainty.</li>
        <li><strong>Softmax</strong>: Converting model scores into probabilities.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Entropy tells you how much information is in the truth. <strong>Cross-Entropy</strong> tells you how many bits of information you *think* are there because of your model. If your model is wrong, you pay a "penalty" in extra bits. By minimizing this penalty, you force the model's "beliefs" to align with reality.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Cross-Entropy as <strong>"The Wrong Map Penalty."</strong> 
        The terrain is \(P\) (reality), but you're using map \(Q\) (your model). 
        If your map says "Go Left" but the terrain says "Go Right," you pay a price in wasted time (Entropy). 
        Cross-Entropy is the total cost of using your map. Training a model is just <strong>drawing a better map.</strong>
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>For a true distribution \(P\) and predicted distribution \(Q\):</p>
    <div class="math-block">$$H(P, Q) = -\sum_{i} P(x_i) \log Q(x_i)$$</div>
    <p>In binary classification (Cat vs. Not Cat), this simplifies to the famous Binary Cross-Entropy (BCE) loss:</p>
    <div class="math-block">$$L = -[y \log(\hat{y}) + (1-y) \log(1-\hat{y})]$$</div>

    <h2 id="example-target" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Prediction vs. Target</h2>
    
      <h4>Problem: Measuring the Gap</h4>
      <p>Target: [1, 0] (It is a Cat). Model Guess: [0.8, 0.2]. Calculate Cross-Entropy.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P = [1, 0], Q = [0.8, 0.2]\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Log Guess:</strong> \(\log(0.8) \approx -0.22, \log(0.2) = -1.60\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>Sum:</strong> \(H = -(1 \times -0.22 + 0 \times -1.60) = 0.22 \text{ nats}\).</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> 0.22 nats. If the guess was better [0.99, 0.01], the loss would drop to 0.01. If it was worse [0.1, 0.9], the loss would explode to 2.30!
        </div>
      </div>
    

    <h2 id="example-cat" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Training a Dog Classifier</h2>
    
      <h4>Problem: Exploding Loss on Confident Errors</h4>
      <p>A model is 99% sure an image is a "Dog," but the true label is "Cat."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> Target \(P(\text{Cat})=1\). Model \(Q(\text{Cat})=0.01\).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Calculation:</strong> \(H = -1 \log(0.01) \approx 4.6\).</div>
        </div>
      </div>

      <div class="callout error">
        <div class="callout-icon">✕</div>
        <div class="callout-body">
          <strong>Result:</strong> 4.6. This is a very high loss! The model is penalized heavily for being <strong>"Confidently Wrong."</strong> This sends a massive signal during backpropagation for the model to fix its weights immediately.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def cross_entropy(y_true, y_pred):
    # Clip predictions to avoid log(0)
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
    return -np.sum(y_true * np.log(y_pred))

# Prediction: 80% confident it's class 0
target = np.array([1, 0, 0])
guess = np.array([0.8, 0.1, 0.1])

print(f"Cross-Entropy Loss: {cross_entropy(target, guess):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>Classification Loss</strong>: Logistic Regression and Neural Networks use Cross-Entropy because it has a smooth gradient that is easy to optimize.</li>
      <li><strong>Softmax Outputs</strong>: We apply cross-entropy to the output of Softmax layers to train multi-class classifiers.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> Cross-entropy is the total information cost. What if we just want to know the <strong>pure difference</strong> between two distributions? Explore <strong><a href="#/mathematics/information-theory/kl-divergence">KL Divergence</a></strong>.
    </div>
  `},i={id:"kl-divergence",title:"KL Divergence",description:"KL Divergence measures the 'Information Loss' or 'Gap' between two probability distributions. It is an asymmetric measure of distance.",color:"#9C27B0",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🧬 Info Theory · Distance</div>
      <h1>KL Divergence: The Distribution Gap</h1>
      <p><strong>Kullback-Leibler (KL) Divergence</strong> (\(D_{KL}(P || Q)\)) measures how much information is lost when we use a "Surrogate" distribution \(Q\) to approximate the true distribution \(P\). In Machine Learning, it's the "Compass" that tells us how far our model's predictions are from reality.</p>
    </div>

    <h2 id="prerequisites">Foundational Requirements</h2>
    <div class="def-box">
      <ul style="margin:0">
        <li><strong>Entropy</strong>: Measuring self-uncertainty.</li>
        <li><strong>Cross-Entropy</strong>: Measuring total information cost.</li>
      </ul>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Cross-Entropy is the <strong>Total Cost</strong> of using a model. But some of that cost is fixed (the Entropy of the truth itself). <strong>KL Divergence</strong> is the <strong>Extra Cost</strong>—the pure inefficiency of your model. If KL \(= 0\), your model is a perfect copy of the truth. If KL is high, your model is a poor approximation.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of KL Divergence as <strong>"The Surprise Penalty."</strong> 
        You expect results to follow pattern \(Q\), but they actually follow \(P\). 
        KL Divergence is the measure of how <strong>surprised</strong> you are on average. 
        Note that it is <strong>Asymmetric</strong>: \(D_{KL}(P || Q) \neq D_{KL}(Q || P)\). 
        Being surprised that a rare event is common is not the same as being surprised that a common event is rare!
      </div>
    </div>

    <h2 id="derivation">Formal Definition</h2>
    <p>KL Divergence is defined as the difference between Cross-Entropy and Entropy:</p>
    <div class="math-block">$$D_{KL}(P || Q) = H(P, Q) - H(P)$$</div>
    <p>Explicitly:</p>
    <div class="math-block">$$D_{KL}(P || Q) = \sum_{i} P(x_i) \log \frac{P(x_i)}{Q(x_i)}$$</div>
    <p><strong>Note:</strong> KL Divergence is always \(\ge 0\). (Gibbs' Inequality).</p>

    <h2 id="example-gap" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Normal vs. Uniform</h2>
    
      <h4>Problem: Comparing Two Global Shapes</h4>
      <p>True distribution \(P\) is centralized (Normal). Proxy \(Q\) is flat (Uniform). Calculate the "Gap."</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> For points where \(P(x)\) is high but \(Q(x)\) is low, \(\log(P/Q)\) is a large positive number.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Interpret:</strong> The KL Divergence will be high because the "Flat" proxy is a bad guess for the "Peaked" reality.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Result:</strong> KL Divergence provides a single number that summarizes the <strong>Structural Difference</strong> between these two shapes.
        </div>
      </div>
    

    <h2 id="example-compress" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> Information Loss in Compression</h2>
    
      <h4>Problem: Downsampling High-Res Predictions</h4>
      <p>You have a 100-class Softmax layer, but you compress it into 10 buckets for efficiency.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>Identify:</strong> \(P\) is the original 100-class distribution. \(Q\) is the 10-bucket approximation.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>Measure:</strong> The KL Divergence tells the engineer exactly how much "Information Resolution" they lost during compression.</div>
        </div>
      </div>

      <div class="callout tip">
        <div class="callout-icon">💡</div>
        <div class="callout-body">
          <strong>Intuition:</strong> This is a key metric in <strong>Model Distillation</strong>. We try to force a small "Student" model's output to have a low KL Divergence with a large "Teacher" model's output.
        </div>
      </div>
    

    <h2 id="implementation">Implementation</h2>
    <python-code>
import numpy as np

def calculate_kl(p, q):
    # p = True, q = Approximation
    # Filter out zeros to avoid log(0) or division by zero
    mask = (p > 0) & (q > 0)
    return np.sum(p[mask] * np.log(p[mask] / q[mask]))

p = np.array([0.4, 0.6]) # Reality
q = np.array([0.1, 0.9]) # Bad approximation

print(f"KL Divergence: {calculate_kl(p, q):.4f}")
print(f"Asymmetry check: {calculate_kl(q, p):.4f}")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <ul>
      <li><strong>VAE (Variational Autoencoders)</strong>: Loss = Reconstruction + <strong>KL Divergence</strong>. The KL term forces the model to stay close to a "Normal" latent space.</li>
      <li><strong>Knowledge Distillation</strong>: Training smaller models to mimic the "Soft" probabilities of larger models.</li>
      <li><strong>T-SNE Visualization</strong>: Uses KL Divergence to match the high-dimensional neighborhood of data to a 2D map.</li>
    </ul>

    <div class="linking-rule">
      <strong>Next Step:</strong> You’ve completed the core mathematics sequence of <strong>Linear Algebra, Calculus, Probabilty, Statistics, & Information Theory</strong>. Ready to move into <strong>Machine Learning Architectures</strong>? Explore <strong><a href="#/supervised/basics">Supervised Learning</a></strong>.
    </div>
  `},s={id:"information-theory",title:"Information Theory",description:"Information Theory provides the mathematical foundation for quantifying uncertainty, measuring information flow, and designing optimal loss functions for Machine Learning models.",keyConcepts:[{title:"Entropy",description:"The fundamental measure of uncertainty or 'average surprise' in a system."},{title:"Cross-Entropy",description:"Measuring the distance between target and predicted distributions; the standard ML loss."},{title:"KL Divergence",description:"Information Loss: quantifying the structural gap between two probability models."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Information Theory: <span class="text-accent italic">The Physics of Data</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          At its core, every machine learning problem is a communication problem. <strong>Information Theory</strong> provides the fundamental limits on how much data can be compressed, how much "surprise" is contained in a prediction, and how we measure the distance between what a model thinks and what is true.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This curriculum is broken into <strong>3 high-density topics</strong>, focusing on the core measures used to train and evaluate modern neural architectures.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— Claude Shannon</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Ready to measure surprise?</p>
        <a 
          href="/#/mathematics/information-theory/entropy" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Entropy
        </a>
      </div>

    </div>
  `,sections:[t,e,i]};export{s as INFORMATION_THEORY_DATA};
