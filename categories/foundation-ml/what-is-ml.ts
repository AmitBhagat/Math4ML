import { TopicSection } from '../../src/data/types';

export const whatIsMLSection: TopicSection = {
  id: "what-is-ml",
  title: "What is Machine Learning?",
  description: "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed.",
  color: "#4A90E2",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🤖 Foundations · Intro</div>
      <h1>What is Machine Learning?</h1>
      <p>At its simplest, <strong>Machine Learning (ML)</strong> is the shift from "Giving Rules" to "Showing Examples." Instead of telling a computer exactly how to solve a problem, we give it a massive amount of data and let it figure out the patterns for itself.</p>
    </div>

    <div class="toc">
      <div class="toc-title">Table of Contents</div>
      <a href="#theory">Core Theory: Rules vs. Patterns</a>
      <a href="#analogy">The "Hidden Recipe" Analogy</a>
      <a href="#why">Why Use ML?</a>
      <a href="#workflow">The ML Workflow</a>
    </div>

    <h2 id="theory">Core Theory: Rules vs. Patterns</h2>
    <p>In traditional software engineering, a human writes <strong>Rules</strong> (Logic) and provides <strong>Data</strong> to get an <strong>Answer</strong>. In Machine Learning, we provide the <strong>Data</strong> and the <strong>Answers</strong> (Labels), and the computer produces the <strong>Rules</strong> (The Model).</p>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <strong>Teacher's Intuition:</strong> 
        Traditional coding is like writing a very rigid cookbook. 
        Machine Learning is like taking a world-class chef to a 100-course dinner and asking them to <strong>guess the ingredients</strong> just by tasting the food. We don't tell them how to cook; we show them the finished product and let their "palate" (the algorithm) figure out the recipe.
      </div>
    </div>

    <h2 id="analogy">The "Hidden Recipe" Analogy</h2>
    <div class="example-box">
      <h4>Scenario: Predicting House Prices</h4>
      <p>Imagine you have a list of houses, their sizes, locations, and what they sold for. You want a program that predicts the price of a new house.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Manual Way:</strong> You sit down and write: "If size > 2000 and city = 'NY', then price = size * 500." This is hard because there are too many variables (schools, age, crime rate, etc.).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The ML Way:</strong> You dump 50,000 house records into an algorithm. It notices that "Age of the roof" correlates with price in a way you never thought of. It finds the <strong>Hidden Recipe</strong> automatically.</div>
        </div>
      </div>

      <div class="callout success">
        <div class="callout-icon">✓</div>
        <div class="callout-body">
          <strong>Key Takeaway:</strong> ML is used when the problem is too complex for a human to write down all the rules manually.
        </div>
      </div>
    </div>

    <h2 id="why">Why Use ML?</h2>
    <ul>
      <li><strong>Scale</strong>: Humans can't look at 1 billion images, but machines can.</li>
      <li><strong>Complexity</strong>: Recognizing a face involves millions of pixels; there is no simple "IF" statement for a smile.</li>
      <li><strong>Adaptability</strong>: Models can learn from new data without a programmer rewriting the code.</li>
    </ul>

    <h2 id="workflow">The ML Workflow</h2>
    <div class="algorithm-steps">
      <div class="algorithm-step">
        <span class="step-badge">1</span>
        <div><strong>Data Collection</strong>: Gathering the raw material.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">2</span>
        <div><strong>Data Cleaning</strong>: Removing the noise and outliers.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">3</span>
        <div><strong>Model Selection</strong>: Picking the right "brain" (Algorithm) for the task.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">4</span>
        <div><strong>Training</strong>: The computer finds the patterns.</div>
      </div>
      <div class="algorithm-step">
        <span class="step-badge">5</span>
        <div><strong>Evaluation</strong>: Testing if the machine actually learned or just memorized.</div>
      </div>
    </div>

    <div class="linking-rule">
      <strong>Next Step:</strong> Not all learning is the same. How does the machine actually "learn"? Explore <strong><a href="#/machine-learning/foundation-ml/types-of-ml">Types of Machine Learning</a></strong>.
    </div>
  `
};
