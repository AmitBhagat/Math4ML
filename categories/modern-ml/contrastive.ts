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

    <h2 id="theory">Theoretical Core: Contrastive Divergence</h2>
    <p>We want to learn an embedding function \(f_{\theta}\) such that the distance between similar items (\(x, x^+\)) is minimized, and the distance between different items (\(x, x^-\)) is maximized.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of it as <strong>"Social Distancing in Vector Space."</strong> 
        The "Loss Function" acts like a spring. 
        It <strong>Pulls</strong> similar ideas together until they overlap. 
        It <strong>Pushes</strong> dissimilar ideas apart until they never touch. 
        Because it only cares about <strong>Relative</strong> distances, it doesn't need to know the 'Categories'. 
      </div>
    </div>

    <h2 id="augmentation">Creating "Friends" with Augmentation</h2>
    <p>In <strong>Self-Supervised Contrastive Learning</strong> (like SimCLR), we create our own positive pairs. We take one image and create two versions: one cropped, one flipped. 
    <strong>The Logic:</strong> Even though they look different to a computer (different pixels), they are the <strong>Same Object</strong>. We force the model to acknowledge this "Similarity."</p>

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
        <strong>Analogy:</strong> Imagine you are at a <strong>Crowded Party</strong>. 
        * <strong>Contrastive Learning:</strong> You want to be <strong>Right next</strong> to your Best Friend (Positive Pair). 
        * But you also want to be <strong>As far as possible</strong> from your Ex-Rival (Negative Pair). 
        As you move through the room, you are constantly checking these two distances. 
        <strong>By the end of the night, if everyone does this, the room will be 'Clustered' into groups of friends. The model learns these groups without anyone telling it the 'Social Hierarchy.'</strong> 
      </div>
    </div>

    <h2 id="algorithm">The Contrastive Algorithm (SimCLR Style)</h2>
    
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
    

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Twin Study</h2>
    
      <h4>Scenario: Matching 100 sets of Identical Twins</h4>
      <p>Imagine you have a group of 200 people (100 sets of identical twins) in a dark room. You don't know anyone's name. Your only goal is to organize them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Pull (Positives):</strong> When you find two people who look the same (the twins), you make them sit at the same table. You are "Pulling" their representations together.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The Push (Negatives):</strong> If two people look different, you force them to sit at opposite ends of the room. You are "Pushing" their representations away.</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Result:</strong> By the end of the night, the room is perfectly organized by <strong>Face Structure</strong>. You didn't need a name tag (Label) to do it; you just needed to know who was a "mismatch."</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          Contrastive learning is about <strong>Relative Understanding</strong>. It doesn't care that a point is at exactly (0.5, 0.5). It only cares that (0.5, 0.5) is *closer* to its twin than it is to anything else. This makes it incredibly robust for finding patterns in massive, messy datasets.
        </div>
      </div>
    

    <h2 id="python">Implementation</h2>
    <python-code runnable="false" static-output="[Scan] Input: Batch of 128 Image Pairs\n[Action] Extracting 512-dim features using ResNet-18...\n[Loss] Similarity(Twins) = 0.98 (High)\n[Loss] Similarity(Strangers) = 0.05 (Low)\n\n[Status] Gradient Step: Pulling twins closer, pushing strangers away.\n[Insight] The latent space is beginning to cluster 'Architecture' vs 'Nature'.">
import torch
import torch.nn.functional as F

# 1. Mock Feature Vectors (Embeddings)
# Positive Pair: Two views of the SAME cat
v_anchor = torch.tensor([0.1, 0.9, 0.2])
v_positive = torch.tensor([0.15, 0.85, 0.25]) # Very similar

# Negative: A picture of a truck
v_negative = torch.tensor([0.9, 0.1, -0.8])  # Very different

# 2. Measure 'Closeness' (Cosine Similarity)
def similarity(a, b):
    return F.cosine_similarity(a.unsqueeze(0), b.unsqueeze(0)).item()

print(f"Similarity (Anchor vs Positive): {similarity(v_anchor, v_positive):.3f}")
print(f"Similarity (Anchor vs Negative): {similarity(v_anchor, v_negative):.3f}")

# 3. Decision
# We want Positive Sim -> 1.0 and Negative Sim -> 0.0
    </python-code>

    <div class="linking-rule">
      <strong>Congratulations!</strong> You have reached the edge of modern research. You now understand the paradigms powering the world's most advanced AI systems.
    </div>
  `
};
