import { TopicSection } from '../../src/data/types';

export const contrastiveSection: TopicSection = {
  id: "contrastive",
  title: "Contrastive Learning",
  description: "A technique that learns representations by contrasting positive pairs (similar data points) against negative pairs (dissimilar data points) in a latent space.",
  color: "#E91E63",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚀 Modern ML · Similarity</div>
      <h1>Contrastive: Spot the Difference</h1>
      <p>How do you learn what a "Face" is if you don't have labels? You learn by <strong>Comparison</strong>. If I show you two photos of the same person, you know they should look similar in your head. If I show you a person and a car, you know they should look different. <strong>Contrastive Learning</strong> is the art of <strong>Pulling Friends Close</strong> and <strong>Pushing Enemies Away</strong> in latent space.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: InfoNCE Loss</a>
      <a href="#pairs">Pairs: Positives vs. Negatives</a>
      <a href="#augmentation">Augmentations: Creating Positives</a>
      <a href="#triplet">Triplet Loss Mechanics</a>
      <a href="#analogy">The "Jealous Rival" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Contrastive Divergence</h2>
    <p>We want to learn an embedding function \(f_{\theta}\) such that the distance between similar items (\(x, x^+\)) is minimized, and the distance between different items (\(x, x^-\)) is maximized.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Social Distancing in Vector Space."</strong> 
        The "Loss Function" acts like a spring. 
        It <strong>Pulls</strong> similar ideas together until they overlap. 
        It <strong>Pushes</strong> dissimilar ideas apart until they never touch. 
        Because it only cares about <strong>Relative</strong> distances, it doesn't need to know the 'Categories'. 
      </div>
    </div>

    <h2 id="augmentation">Creating "Friends" with Augmentation</h2>
    <p>In <strong>Self-Supervised Contrastive Learning</strong> (like SimCLR), we create our own positive pairs. We take one image and create two versions: one cropped, one flipped. 
    **The Logic:** Even though they look different to a computer (different pixels), they are the <strong>Same Object</strong>. We force the model to acknowledge this "Similarity."</p>

    <h2 id="triplet">The Triplet Loss</h2>
    <div class="math-block">$$\mathcal{L} = \max(0, d(a, p) - d(a, n) + \alpha)$$</div>
    <ul>
      <li><strong>\(a\):</strong> Anchor (The reference point).</li>
      <li><strong>\(p\):</strong> Positive (Similar to anchor).</li>
      <li><strong>\(n\):</strong> Negative (Different from anchor).</li>
      <li><strong>\(\alpha\):</strong> Margin (The "Safety zone" we want between them).</li>
    </ul>

    <h2 id="analogy">The "Jealous Rival" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are at a **Crowded Party**. 
        * **Contrastive Learning:** You want to be <strong>Right next</strong> to your Best Friend (Positive Pair). 
        * But you also want to be <strong>As far as possible</strong> from your Ex-Rival (Negative Pair). 
        As you move through the room, you are constantly checking these two distances. 
        **By the end of the night, if everyone does this, the room will be 'Clustered' into groups of friends. The model learns these groups without anyone telling it the 'Social Hierarchy.'** 
      </div>
    </div>

    <h2 id="algorithm">The Contrastive Algorithm (SimCLR Style)</h2>
    <div class="example-box">
      <h4>The Pull-Push Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Augmentation:</strong> Create two different "Views" (e.g., Crop vs. Grayscale) of the same unlabeled image.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Encoding:</strong> Pass both views through a shared Neural Network to get their feature vectors.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Projection:</strong> Map the vectors to a lower-dimensional space where similarity can be easily measured.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Contrastive Loss:</strong> Maximize the similarity between the two views of the same image (The Positive Pair).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Discrimination:</strong> Simultaneously minimize the similarity between these views and <strong>Every other image</strong> in the batch (The Negatives).
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Twin Study</h2>
    <p>Imagine you have a group of 100 people. You take two photos of every person (The Twins).</p>
    <ul>
      <li><strong>The Requirement:</strong> You don't know anyone's name. But you know that the two photos of "Person A" represent the same human. </li>
      <li><strong>The Pull:</strong> You move the two Photo A's closer together on the table. </li>
      <li><strong>The Push:</strong> You make sure that the Photo B's are <strong>as far away</strong> as possible from the Photo A's. </li>
    </ul>
    <p>By doing this for everyone, you've learned to identify people's <strong>Faces</strong> without ever needing a name tag. <strong>Contrastive Learning is that twin matching game.</strong></p>

    <h2 id="python">Python Implementation (PyTorch)</h2>
    <python-code>
import torch
import torch.nn.functional as F

# 1. Siamese similarity logic
# z1 and z2 are features of the SAME image (two views)
def contrastive_loss(z1, z2, temperature=0.5):
    # Normalize the vectors
    z1 = F.normalize(z1, dim=1)
    z2 = F.normalize(z2, dim=1)
    
    # Calculate similarity (Cosine)
    sim_matrix = torch.matmul(z1, z2.T) / temperature
    
    # The 'Target' is for the diagonal (matching indices) to be high
    labels = torch.arange(z1.size(0))
    loss = F.cross_entropy(sim_matrix, labels)
    return loss

print("Loss function ready to Pull 'Friends' and Push 'Enemies'.")
    </python-code>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have reached the edge of modern research. You now understand the paradigms powering the world's most advanced AI systems.
    </div>
  `
};
