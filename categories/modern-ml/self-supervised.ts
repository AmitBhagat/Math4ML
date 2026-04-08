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
        **Self-Supervised learning is that Toddler. The Jigsaw entries are the Pretext Tasks.**
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
    <p>Imagine you have a toddler and 1,000 blank **Jigsaw Puzzles**. You don't tell the toddler what the picture is (No Labels).</p>
    <ul>
      <li><strong>The Task:</strong> You scramble the pieces. The toddler's only goal is to make them fit together. </li>
      <li><strong>The Insight:</strong> To fit the pieces, the toddler accidentally learns that <strong>Blue bits go with Blue bits</strong> and <strong>Curvy edges go with Curvy edges</strong>. </li>
    </ul>
    <p>By the time the puzzles are done, the toddler understands the **Structure of Images** perfectly, even without knowing the names of the objects. <strong>SSL is that toddler.</strong></p>

    <h2 id="python">Python Implementation (PyTorch)</h2>
    <python-code>
import torch
import torchvision.transforms as T
from PIL import Image

# 1. Self-supervised Preprocessing:
# We 'scramble' an unlabeled image to create a pretext puzzle.
image = Image.new('RGB', (224, 224), color='red') # Mock image

# Common 'breaks' for SSL pre-training
pretext_transform = T.Compose([
    T.RandomResizedCrop(224),
    T.RandomHorizontalFlip(),
    T.ColorJitter(brightness=0.5), # Change the lighting
    T.RandomRotation(90)           # Rotate the 'puzzle'
])

# Generate a pretext pair
scrambled_v1 = pretext_transform(image)
scrambled_v2 = pretext_transform(image)

print("Pretext samples created. Model will now learn if these came from the SAME image.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> Now that we have a model that understands the world, how do we "Gift" that knowledge to another task? Explore <strong><a href="#/machine-learning/modern-ml/transfer-learning">Transfer Learning</a></strong>.
    </div>
  `
};
