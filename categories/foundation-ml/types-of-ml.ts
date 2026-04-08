import { TopicSection } from '../../src/data/types';

export const typesOfMLSection: TopicSection = {
  id: "types-of-ml",
  title: "Types of Machine Learning",
  description: "Machine Learning is categorized into different types based on the presence of labels and the nature of the learning feedback Loop.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Paradigms</div>
      <h1>The Learning Paradigms</h1>
      <p>Not all learning is equal. How a machine learns depends entirely on the <strong>Feedback</strong> it receives. Do we have the correct answers labeled? Do we have no answers at all? Or do we reward the machine for good behavior? These categories define the "Flavors" of ML.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#supervised">Supervised: The Teacher</a>
      <a href="#unsupervised">Unsupervised: The Explorer</a>
      <a href="#semi-supervised">Semi-Supervised: The Hybrid</a>
      <a href="#reinforcement">Reinforcement: The Dog Trainer</a>
    </div>

    <h2 id="supervised">Supervised Learning: The Teacher</h2>
    <p>A <strong>Supervised</strong> model is trained on "Labeled Data." Every input example comes with a corresponding target answer. The model learns to map inputs to outputs by correcting its mistakes.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> Think of it as a <strong>Classroom Teacher</strong>. 
        You give the student a practice test with the answers on the back. The student tries to guess, flips the page, sees they're wrong, and adjusts their brain. Eventually, they learn enough to take the <strong>Final Exam</strong> (New Data) where the answers aren't provided.
      </div>
    </div>

    <h2 id="unsupervised">Unsupervised Learning: The Explorer</h2>
    <p>In <strong>Unsupervised</strong> learning, the data has no labels. The machine's job is to find <strong>Hidden Structure</strong> or patterns in the "Uncooked" data. It doesn't know what it's looking for; it just looks for things that are similar.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine you are an <strong>Alien looking at Earth's clouds</strong>. 
        No one tells you what "Cumulus" or "Stratus" means. But after looking at 1,000 clouds, you notice that "Flat gray ones" usually appear together and "Fluffy white ones" appear together. You've <strong>Clustered</strong> them into groups without knowing their names.
      </div>
    </div>

    <h2 id="semi-supervised">Semi-Supervised Learning: The Hybrid</h2>
    <p>In the real world, labels are expensive (humans have to write them). <strong>Semi-supervised</strong> learning uses a tiny amount of labeled data to "Guide" the grouping of a massive amount of unlabeled data.</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> It's like having a <strong>Few Labeled Flashcards</strong>. 
        You have 10,000 photos. You (the human) label 100 as "Dogs" and 100 as "Cats." The machine takes that small "Seed of Knowledge" and applies it to the other 9,800 photos by finding things that look like your seeds.
      </div>
    </div>

    <h2 id="reinforcement">Reinforcement Learning: The Dog Trainer</h2>
    <p>This is learning through <strong>Trial and Error</strong>. The machine (the Agent) interacts with an environment and receives <strong>Rewards</strong> or <strong>Penalties</strong>. It learns to maximize its long-term reward.</p>
    
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Think of it as <strong>Dog Training</strong>. 
        You don't tell the dog "How" to sit (no rules). You don't show the dog pictures of sitting dogs (no labels). 
        You just say "Sit." If the dog sits, it gets a treat (Reward). If it jumps, it gets nothing (No Reward). Eventually, the dog learns the "Policy" that leads to the most treats.
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Let's deep-dive into the most popular paradigm. Explore <strong><a href="#/machine-learning/foundation-ml/supervised">Supervised Learning</a></strong>.
    </div>
  `
};
