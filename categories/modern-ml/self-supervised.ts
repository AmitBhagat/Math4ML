import { TopicSection } from '../../src/data/types';

export const selfSupervisedSection: TopicSection = {
  id: "self-supervised",
  title: "Self-Supervised Learning",
  description: "A learning paradigm where the model creates its own labels from the input data itself, allowing it to learn from massive datasets without human intervention.",
  color: "#E91E63",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚀 Modern ML · Paradigms</div>
      <h1>Self-Supervised: Learning from Existence</h1>
      <p>Supervised learning is <strong>Expensive</strong>. It requires humans to label millions of images. <strong>Self-Supervised Learning (SSL)</strong> is the "Self-Taught" version of AI. It looks at the world and creates its own puzzles to solve. By solving these "Pretext Tasks," it learns the <strong>Structure of Reality</strong> for free.</p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>Supervised learning is <strong>Expensive</strong>. It requires an army of humans to label millions of images, which is slow and prone to error. <strong>Self-Supervised Learning (SSL)</strong> is the "Self-Taught" version of AI. Instead of waiting for a teacher to provide answers, the model looks at the world and creates its own puzzles—or "Pretext Tasks"—to solve. By trying to predict a hidden part of an image or the next word in a sentence, the model is forced to learn the underlying <strong>Structure of Reality</strong> for free. It is the tactical decision to leverage the infinite supply of unlabeled data to build a core "General Intelligence" before ever being asked to perform a specific task.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: The Pretext Task & Surrogate Optimization</div>
      <p>Self-Supervised Learning is the "DIY" of Machine Learning. It provides a way to extract value from raw existence without a single human-provided label.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">1. The Geometric Setup</h3>
      <p>Imagine you are trying to learn how to juggle by watching yourself in a mirror. You don't have a coach telling you what's right; you only know if the ball falls to the floor. Geometrically, <strong>Self-Supervised Learning (SSL)</strong> is the process of generating <strong>Internal Supervision</strong> from the data itself. We take a piece of data (like an image), hide or distort a part of it—the "Pretext Task"—and challenge the model to guess the missing piece. This creates a <strong>Gradient Flow</strong> from the "Truth" of the original data back to the model’s "Guess." The goal is to build an internal map of the world where the hidden parts are geometrically and semantically consistent with the visible ones.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">2. The Algebraic Derivation</h3>
      <p>SSL transforms an unsupervised dataset $\mathcal{D} = \{ \mathbf{x}_i \}$ into a supervised one by creating "Pseudo-labels."</p>
      <ol class="mt-2 mb-4 list-decimal pl-5 space-y-1">
        <li><strong>Corruption</strong>: For an input $\mathbf{x}$, we apply a transformation $t$ to create a corrupted version $\tilde{\mathbf{x}} = t(\mathbf{x})$. This might mean rotating the image, masking words, or scrambling pixels.</li>
        <li><strong>Surrogate Objective</strong>: We train the model $f_\theta$ to minimize a "Pretext Loss" that measures its ability to reverse the corruption:
          $$\min_\theta \mathbb{E}_{\mathbf{x} \sim \mathcal{D}} [ \mathcal{L}(f_\theta(\tilde{\mathbf{x}}), \mathbf{y}_{\text{pseudo}}) ]$$
        </li>
      </ol>
      <p>In <strong>Masked Autoencoding (MAE)</strong>, the pseudo-label $\mathbf{y}_{\text{pseudo}}$ is the original pixel values of the hidden parts. By forcing the model to "Fill in the Blanks," we force it to learn about "Shapes," "Textures," and "Logic"—all for free.</p>

      <h3 class="text-lg font-bold mt-4 mb-2">3. The Final Criteria</h3>
      <p>In Modern ML, SSL is the <strong>Knowledge Foundation</strong>: </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Pre-training Power</strong>: The features learned during a pretext task (like "Guess the next word") are almost always useful for more difficult "Downstream" tasks (like "Analyze the sentiment of this book").</li>
        <li><strong>The Scale Factor</strong>: Because SSL doesn't need humans, we can train on the entire internet. The model's "IQ" scales directly with the amount of raw data we throw at it.</li>
      </ul>
      <p class="mt-4 italic text-sm">Gotcha: Shortcut Learning. If your pretext task is too easy, the model will find a "Cheat Code." For example, if you hide the middle of an image, the model might just copy the pixels from the edges instead of actually learning what the object looks like. You must design tasks that are difficult enough to force true understanding.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Self-Supervised Learning as <strong>"Learning to Read by Context"</strong> or <strong>"The Master Jigsaw Solver."</strong> 
        Imagine a child playing with 1,000 blank jigsaw puzzles. No one tells them "This is a dog" or "This is a tree." But to make the pieces fit, the child <strong>accidentally</strong> learns that edges match edges and colors flow into each other. By the time they finish, they don't know the <strong>Names</strong> of things, but they <strong>Understand Concepts</strong> like eyes, wheels, and grass perfectly. 
        In SSL, we "break" the data (scramble it, hide parts, or rotate it) and tell the model to "Fix it." In the process of fixing the puzzle, the model develops a deep, intuitive understanding of what the data represents.
      </div>
    </div>

    <h2 id="masking" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> s of Pretext Tasks</h2>
    <ul>
      <li><strong>NLP (Masked LM):</strong> "The [MASK] sat on the mat." -> Model learns "Cat".</li>
      <li><strong>Computer Vision (Jigsaw):</strong> Scramble an image into 9 tiles. Model learns to <strong>Reassemble</strong> them. To do this, it must recognize arms, legs, and backgrounds.</li>
      <li><strong>Rotation Prediction:</strong> Rotate an image by 90 degrees. Ask the model "Which way is up?"</li>
    </ul>

    <h2 id="downstream">Pre-training to Downstream</h2>
    <p>Once the model is "Pre-trained" on SSL, it has a <strong>General Intelligence</strong> about the data. We then perform a tiny bit of <strong>Fine-tuning</strong> on a small labeled dataset to make it an expert in a specific field (like medical diagnosis).</p>

    <h2 id="analogy">The "Jigsaw Puzzle" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Toddler</strong> playing with <strong>Jigsaw Puzzles</strong>. 
        No one is telling him "This is a dog" or "This is a tree." 
        But to put the pieces together, he has to learn that <strong>Edges</strong> match edges and <strong>Colors</strong> flow into each other. 
        By the time he finishes 1,000 puzzles, he doesn't know the <strong>Names</strong> of things, but he <strong>Understand Concepts</strong> like eyes, wheels, and grass perfectly. 
        <strong>Self-Supervised learning is that Toddler. The Jigsaw entries are the Pretext Tasks.</strong>
      </div>
    </div>

    <h2 id="algorithm">The Self-Supervised Algorithm</h2>
    
      <h4>The Pretext Optimization Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Data Perturbation:</strong> Take unlabeled data and "Break" it (e.g., rotate it, hide parts, or scramble it).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Task Creation:</strong> Define a task where the model must "Fix" the break (e.g., "Guess the Rotation" or "Fill in the Blank").
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Feature Extraction:</strong> Pass the broken data through a Neural Network to produce a latent representation.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Self-Training:</strong> Train the network to minimize the error in its "Fix" (Self-generated labels).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Transfer:</strong> Use the learned weights (which now "understand" the data) for any downstream task.
        </div>
      </div>
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Master Jigsaw Solver</h2>
    
      <h4>Scenario: Training a Child with 1,000 Blank Jigsaws</h4>
      <p>Imagine you have 1,000 jigsaw puzzles, but you don't show the child the "Final Picture" on the box (No Labels).</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Pretext Task:</strong> You scramble the pieces and tell the child: "Just make them fit."</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Discovery:</strong> To fit the pieces, the child accidentally learns that <strong>Blue bits go with Blue bits</strong> and <strong>Curvy edges go with Curvy edges</strong>. They learn to recognize "Sky," "Water," and "Grass" textures without knowing their names.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Transfer:</strong> One day, you show the child a picture of a "Dog." Because they already understand "Eyes," "Fur," and "Edges," they learn what a "Dog" is in 2 seconds.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          SSL is how humans learn. We don't need a parent to point at every single object in the world and say its name. We observe patterns (the pretext) and then "fine-tune" our categories later. This is why SSL is the future of Foundation Models like GPT.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code runnable="false" static-output="[Action] Generating Pretext Viewpoints...\n[View A] RandomCrop(224) + ColorJitter (Slightly gray, cropped top-left)\n[View B] RandomCrop(224) + GaussianBlur (Blurry, cropped bottom-right)\n[Status] Calculating Cosine Similarity between Latent Signatures...\n[Result] Similarity: 0.942 (Model recognizes these as the same source image).\n[Insight] Feature invariance achieved across color and focus distortions.">
import torchvision.transforms as T
from PIL import Image

# 1. Take one unlabeled image
img = Image.open("urban_scene.jpg") 

# 2. Create 'Self-Generated' Puzzles
# We break the image in two different ways.
# The model must learn they are the SAME underlying object.
view_A = T.Compose([
    T.RandomResizedCrop(224),
    T.ColorJitter(0.8, 0.8, 0.8),
    T.RandomGrayscale(p=0.2)
])(img)

view_B = T.Compose([
    T.RandomResizedCrop(224),
    T.RandomHorizontalFlip(),
    T.GaussianBlur(kernel_size=23)
])(img)

# 3. Contrastive Objective
# minimize_distance(Representation(view_A), Representation(view_B))
print("Views created. Model will now learn if these came from the SAME image.")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Self-Supervised Learning is the "Autodidact" of AI. It allows models to learn from the infinite supply of raw, unlabeled data by creating their own internal puzzles, building a core "General Intelligence" for free.</p>
    <ul>
      <li><strong>Natural Language Model Pre-training (BERT/GPT)</strong>: When you train a model on the entire internet, you can't have humans label every sentence. Instead, the model uses SSL by "Masking"—hiding 15% of the words in a sentence and forcing itself to guess what they are. By millions of these small guesses, the model accidentally learns the grammar, facts, and reasoning required to understand human language.</li>
      <li><strong>Contrastive Image Feature Learning</strong>: Before a self-driving car model knows what a "Pedestrian" is, it can learn the structure of the world through SSL. By taking two different crops of the same video frame and challenging itself to recognize that they belong to the same "Scene," the model learns to identify objects, edges, and depth without ever seeing a single human-provided label.</li>
    </ul>
    <p>Teacher's Final Word: You don't need a teacher to learn; you just need curiosity and a way to test your own guesses. SSL is the bridge that allows our machines to move past the bottleneck of human labeling and reach the scale of true, planetary-level intelligence.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have a model that understands the world, how do we "Gift" that knowledge to another task? Explore <strong><a href="#/machine-learning/modern-ml/transfer-learning">Transfer Learning</a></strong>.
    </div>
  `
};


