const e={id:"self-supervised",title:"Self-Supervised Learning",description:"A learning paradigm where the model creates its own labels from the input data itself, allowing it to learn from massive datasets without human intervention.",color:"#E91E63",html:String.raw`
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
  `},t={id:"transfer-learning",title:"Transfer Learning",description:"A machine learning technique where a model developed for a task is reused as the starting point for a model on a second, related task.",color:"#E91E63",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚀 Modern ML · Efficiency</div>
      <h1>Transfer Learning: The Gift of Experience</h1>
      <p>Why start from scratch? In the old days, every model was born "Stupid" and had to learn the alphabet. <strong>Transfer Learning</strong> allows a model to be born with <strong>10 years of experience</strong> from another field. It's the secret sauce behind modern Large Language Models and medical AI.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Knowledge Extraction</a>
      <a href="#process">The 3 Pillars: Pre-train, Freeze, Fine-tune</a>
      <a href="#domain">Domain Adaptation & Shift</a>
      <a href="#benefits">The 'Sample Efficiency' Advantage</a>
      <a href="#analogy">The "Kung Fu" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Hierarchical Knowledge</h2>
    <p>Neural networks learn <strong>Hierarchical Features</strong>. The first layers see <strong>Edges</strong>, the middle layers see <strong>Shapes</strong>, and only the final layers see <strong>Specific Objects</strong>. Transfer Learning keeps the "Edges" and "Shapes" knowledge and only replaces the "Specific Object" part.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Academic Credit."</strong> 
        If you have a PhD in Physics, you don't need to retake High School Math to learn Chemistry. You <strong>Transfer</strong> your understanding of math and logic. 
        In ML, a model that saw 100 million generic internet photos already knows what <strong>Shadows</strong> and <strong>Textures</strong> look like. We just teach it to use that knowledge for <strong>MRI Scans</strong>.
      </div>
    </div>

    <h2 id="process">The Modern Workflow</h2>
    <ul>
      <li><strong>Pre-training:</strong> Train on a massive, generic dataset (ImageNet, CommonCrawl) for weeks.</li>
      <li><strong>Freezing:</strong> Lock the weights of the early layers so they don't change. They are your "Universal Feature Extractors."</li>
      <li><strong>Fine-tuning:</strong> Train only the final layer (The Head) on your specific, tiny dataset (e.g., "Types of Rare Ants").</li>
    </ul>

    <h2 id="benefits">Why it Matters</h2>
    <p>Transfer learning is <strong>The Great Equalizer</strong>. It allows a small startup with only 100 data points to achieve <strong>State-of-the-Art</strong> performance by downloading a model that was pre-trained by Google or OpenAI on billions of points.</p>

    <h2 id="analogy">The "Kung Fu Master" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Kung Fu Master</strong> who has spent 30 years mastering <strong>Body Mechanics</strong>, balance, and speed. 
        One day, he decides he wants to learn <strong>Tennis</strong>. 
        Does he start like a toddler? No. He already has the footwork, the reflexes, and the discipline. 
        He only needs to learn the <strong>Racket Grip</strong> and the **Rules of the Court**. 
        **Transfer learning is that Master. The 30 years of Kung Fu is the Pre-training. The Tennis lessons are the Fine-tuning.**
      </div>
    </div>

    <h2 id="algorithm">The Transfer Learning Algorithm</h2>
    <div class="example-box">
      <h4>The Knowledge Grafting Loop</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Base Selection:</strong> Pick a high-performance model (e.g., ResNet, BERT) pre-trained on a massive dataset (ImageNet).
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Layer Freezing:</strong> "Lock" the weights of the early layers (the feature extractors) so they don't change during training.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Head Replacement:</strong> Remove the final classification layer and replace it with a new "Head" suited for your specific task.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Calibration:</strong> Train only the new "Head" on your small dataset while keeping the base frozen.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Unfreezing (Optional):</strong> Gradually unfreeze the later base layers and train with a tiny learning rate to "Fine-tune" the results.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: From Kung Fu to Tennis</h2>
    <p>Imagine a <strong>Kung Fu Master</strong> with 30 years of training in balance, speed, and focus. He decides to learn <strong>Tennis</strong>.</p>
    <ul>
      <li><strong>Pre-training:</strong> 30 years of martial arts (Learning the "Edges and Shapes" of body movement). </li>
      <li><strong>Small Dataset:</strong> He only has 2 hours of coaching on how to hold a racket. </li>
      <li><strong>The Transfer:</strong> He doesn't start like a baby. He uses his existing balance and speed (Frozen layers) and just learns the <strong>Grip and Swing</strong> (New Head). </li>
    </ul>
    <p>Because he has "Transferred" his physical intelligence, he plays like a pro in 1 day. <strong>Transfer Learning is that Master.</strong></p>

    <h2 id="python">Python Implementation (PyTorch)</h2>
    <python-code>
import torch.nn as nn
from torchvision import models

# 1. Load a pre-trained ResNet-18 (The 'Master')
model = models.resnet18(pretrained=True)

# 2. Freeze all feature layers
for param in model.parameters():
    param.requires_grad = False

# 3. Replace the final 'Head' for a 2-class task (e.g. 'Rare Ant' classifier)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 2)

# 4. Now, we only train 'model.fc'!
print("Ready for fine-tuning on our small, specialized dataset.")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> What exactly is the model "Gifting"? It's the way it simplifies data. Explore <strong><a href="#/machine-learning/modern-ml/representation">Representation Learning</a></strong>.
    </div>
  `},a={id:"representation",title:"Representation Learning",description:"The field of machine learning dedicated to learning meaningful, low-dimensional representations of data that reveal its underlying structure and features.",color:"#E91E63",html:String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🚀 Modern ML · Structure</div>
      <h1>Representation: The Art of Simplification</h1>
      <p>A 4K image has 8 million pixels. That is <strong>Too Much Information</strong>. To understand the image, you don't need the exact color of every pixel; you need the <strong>Identity</strong> of the object. <strong>Representation Learning</strong> (Feature Learning) is the process of compressing raw data into a set of <strong>Meaningful Numbers</strong> (Vectors) that capture the "Soul" of the information.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Theoretical Core: Latent Space</a>
      <a href="#disentanglement">Disentanglement: Separating Features</a>
      <a href="#manifold">The Manifold Hypothesis</a>
      <a href="#vectors">Embeddings: The Currency of AI</a>
      <a href="#analogy">The "Sketch Artist" Analogy</a>
    </div>

    <h2 id="theory">Theoretical Core: Latent Space</h2>
    <p>A <strong>Representation</strong> is just a point in a "Latent Space." If you take a picture of a <strong>Dog</strong> and a picture of a <strong>Wolf</strong>, their pixel values might be totally different. But in the model's <strong>Latent Space</strong>, they will be very close to each other. Representation learning is about finding the <strong>Mapping</strong> (\(f: X \to Z\)) that honors the semantic truth.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as <strong>"Lossy but Smart Compression."</strong> 
        If I tell you to describe your best friend, you don't list 10,000 skin cells. You say "Tall, blue eyes, wears a hat." 
        Those 3 attributes are the **Representations**. They are much easier to work with than the raw 10,000-cell data, and they contain <strong>99% of the important information</strong>.
      </div>
    </div>

    <h2 id="disentanglement">Disentanglement</h2>
    <p>The "Holy Grail" of this field. We want every dimension in our latent space to represent <strong>One thing</strong>. 
    * Dimension 1: <strong>Color</strong>.
    * Dimension 2: <strong>Rotation</strong>.
    * Dimension 3: <strong>Size</strong>.
    If we change only Dimension 1, only the color should change. This is "Disentangled Representation."</p>

    <h2 id="manifold">The Manifold Hypothesis</h2>
    <p>This is the <strong>Reason SSL works</strong>. High-dimensional data (like images) actually lies on a much lower-dimensional, curvy "Surface" called a <strong>Manifold</strong>. Modern models try to "Unroll" this manifold so that everything becomes linear and logical.</p>

    <h2 id="analogy">The "Police Sketch Artist" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Witness</strong> describing a criminal to a <strong>Police Sketch Artist</strong>. 
        The Witness has the raw video in their head (Raw Data). 
        The Artist doesn't draw the video. He asks: 
        "Eyes? Round." 
        "Nose? Pointy." 
        "Hair? Short." 
        Those <strong>Words</strong> are the **Representations**. They are a low-dimensional summary of the person's identity. 
        **Representation learning is the Artist. He is finding the few 'Features' that allow us to reconstruct the truth without all the noise.** 
      </div>
    </div>

    <h2 id="algorithm">The Representation Algorithm</h2>
    <div class="example-box">
      <h4>The Feature Extraction Pipeline</h4>
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <strong>Observation:</strong> Pass high-dimensional raw input (pixels, text tokens) into a deep neural network.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <strong>Mapping:</strong> Projected the data through layers with decreasing width to force a "Bottleneck."
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <strong>Encoding:</strong> Produce a fixed-length vector (e.g., 512 dimensions) that represents the input.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <strong>Distance Learning:</strong> Ensure that similar signatures (two different photos of cats) move closer together in this new vector space.
        </div>
        <div class="algorithm-step">
          <span class="step-badge">5</span>
          <strong>Downstream Use:</strong> Use these learned vectors as the "Input" for other models, making them 10x more efficient.
        </div>
      </div>
    </div>

    <h2 id="example">Illustrated Example: The Chef's Taste Profile</h2>
    <p>Imagine you take a <strong>5-course French Dinner</strong> and want to describe it to a friend.</p>
    <ul>
      <li><strong>Raw Data:</strong> The exact chemical composition of every sauce and the weight of every vegetable. (Millions of data points).</li>
      <li><strong>The Representation:</strong> You summarize it using 5 features: <strong>Sweet, Sour, Salty, Bitter, and Umami</strong>. </li>
    </ul>
    <p>By mapping a complex meal into these 5 numbers, you've "Learned a Representation" of flavor. Now, you can compare any two meals in the world just by looking at their 5-number profile. <strong>Representation Learning is that palate.</strong></p>

    <h2 id="python">Python Implementation (Keras)</h2>
    <python-code>
from tensorflow.keras import layers, models
import numpy as np

# 1. Create a simple 'Encoder' to learn representations
input_shape = (28, 28, 1) # e.g. MNIST image
latent_dim = 2 # Squeeze it into 2 numbers for visualization

encoder = models.Sequential([
    layers.Flatten(input_shape=input_shape),
    layers.Dense(128, activation='relu'),
    layers.Dense(latent_dim) # The 'Representation' layer
])

# 2. Simulate an image and get its 'Code'
mock_image = np.random.rand(1, 28, 28, 1)
representation = encoder.predict(mock_image)

print(f"Original Pixels: 784 -> Learned Representation: {representation[0]}")
    </python-code>

    <div class="linking-rule">
      <strong>Next Step:</strong> How do we force the model to find these good representations? By comparing similar things! Explore <strong><a href="#/machine-learning/modern-ml/contrastive">Contrastive Learning</a></strong>.
    </div>
  `},s={id:"contrastive",title:"Contrastive Learning",description:"A technique that learns representations by contrasting positive pairs (similar data points) against negative pairs (dissimilar data points) in a latent space.",color:"#E91E63",html:String.raw`
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
  `},n={id:"modern-ml",title:"Modern ML Topics",description:"Beyond traditional architectures—exploring the paradigms of Self-Supervised, Transfer, and Contrastive learning.",keyConcepts:[{title:"Self-Supervision",description:"Learning without human labels by solving innovative 'pretext' puzzles."},{title:"Knowledge Transfer",description:"Repurposing pre-trained global intelligence for specific downstream expertise."},{title:"Latent Embeddings",description:"The art of compressing high-dimensional reality into meaningful semantic vectors."}],introHtml:String.raw`
    <div class="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
      
      <!-- Intro Section -->
      <div class="space-y-8">
        <h2 class="text-4xl md:text-5xl font-headline font-semibold text-text-premium leading-tight">
          Modern ML: <span class="text-accent italic">The New Learning Paradigms</span>
        </h2>
        
        <p class="text-lg md:text-xl text-text-premium font-normal leading-relaxed opacity-90">
          The era of labeling millions of images is ending. Modern AI learns from <strong>Existence</strong>. It solves puzzles, transfers its experience across domains, and organizes ideas in high-dimensional <strong>Latent Spaces</strong>.
        </p>
      </div>

      <hr class="border-border-premium/50" />

      <!-- What to Expect -->
      <div class="space-y-10 pb-12">
        <p class="text-lg text-text-premium font-normal leading-relaxed">
          This category covers the state-of-the-art techniques that power foundation models, from self-teaching through pretext tasks to the "jealous rivalry" of contrastive distancing.
        </p>

        <div class="relative p-10 bg-bg-tertiary border border-border-premium rounded-2xl my-12">
          <div class="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-4xl font-serif">"</div>
          <p class="text-xl md:text-2xl text-text-premium italic leading-relaxed font-light">
            "We don't need a teacher to learn to see. We need a way to find the structure that was already there. That is the essence of modern representation learning."
          </p>
          <div class="mt-6 flex items-center gap-4">
            <div class="w-8 h-[1px] bg-accent/30"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-accent/60">— The Modern Research Log</span>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="pt-12 text-center border-t border-border-premium/50">
        <p class="text-2xl font-headline font-semibold text-text-premium mb-10">Explore the frontiers of artificial intelligence.</p>
        <a 
          href="/#/machine-learning/modern-ml/self-supervised" 
          class="inline-flex items-center gap-4 bg-accent text-white px-12 py-5 rounded-2xl font-bold text-lg tracking-wide hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 hover:scale-[1.05] active:scale-95 group"
        >
          Begin with Self-Supervised Learning
        </a>
      </div>

    </div>
  `,sections:[e,t,a,s]};export{n as MODERN_ML_DATA};
