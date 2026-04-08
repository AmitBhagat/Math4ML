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

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Pretext Tasks</a>
      <a href="#masking">Masked Modeling: The BERT Strategy</a>
      <a href="#contrastive">Contrastive SSL: Similarity as Label</a>
      <a href="#downstream">Pre-training vs. Downstream Tasks</a>
      <a href="#analogy">The "Jigsaw Puzzle" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Pretext Tasks</h2>
    <p>In SSL, we hide a part of the data and ask the model to <strong>Predict the Missing Part</strong>. This "Fake" objective is called a <strong>Pretext Task</strong>. The goal isn't to be good at the puzzle—it's to learn the <strong>Representations</strong> required to solve it.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Learning to Read by Context."</strong> 
        If I give you a sentence with a missing [MASK] word, you use the surrounding words to guess it. 
        To guess correctly, you must understand <strong>Grammar, Logic, and Facts</strong>. You learned English without me giving you a dictionary of "Word Categories." 
      </div>
    </div>

    <h2 id="masking">Examples of Pretext Tasks</h2>
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
    <div class="example-box">
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
    </div>

    <h2 id="example">Illustrated Example: The Master Jigsaw Solver</h2>
    <div class="example-box">
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
          <strong>Teacher's Hint:</strong> SSL is how humans learn. We don't need a parent to point at every single object in the world and say its name. We observe patterns (the pretext) and then "fine-tune" our categories later. This is why SSL is the future of Foundation Models like GPT.
        </div>
      </div>
    </div>

    <h2 id="python">Python Implementation (SimCLR Concept)</h2>
    <python-code runnable="false" static-output="[Scan] Raw Input: 'Street_View.jpg'\n[SSL Action] Creating View A: Crop(224) + Blur(0.5) + Grayscale\n[SSL Action] Creating View B: Flip() + ColorJitter(1.2) + Rotation(45)\n\n[Model Task] 'ConvNet, are these both the SAME image?'\n[Training] Matching representations of A and B while pushing away other images.\n[Status] Pre-training complete. Model now 'understands' urban architecture.">
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

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have a model that understands the world, how do we "Gift" that knowledge to another task? Explore <strong><a href="#/machine-learning/modern-ml/transfer-learning">Transfer Learning</a></strong>.
    </div>
  `
};
