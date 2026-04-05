import { TopicSection } from '../../src/data/types';

export const probabilityEventsSection: TopicSection = {
  id: "probability-events",
  title: "Events: The Taxonomy and Classification of Luck",
  description: "A theoretical investigation into the structural properties of events—from simple outcomes to mutually exclusive and independent phenomena.",
  formula: "E \\subseteq S",
  details: [
    "Definition of an Event as a Subset of Sample Space",
    "Elementary vs. Compound Events",
    "Set Operations in Probability: Union, Intersection, and Complement",
    "Mutual Exclusivity: The Sum Rule Prerequisite",
    "Statistical Independence vs. Causal Correlation",
    "Impossible vs. Certain Events ($P=0$ vs. $P=1$)"
  ],
  html: String.raw`
    <div class="premium-toc">
      <div class="premium-toc-title">Event Roadmap</div>
      <a href="#relations">I. Set Operations & Event Relations</a>
      <a href="#categories">II. Critical Event Categories</a>
    </div>

    <!-- SECTION 1 -->
    <h2 id="relations" class="premium-h2">I. Set Operations and Event Relations</h2>
    <p>In probability theory, an <strong>Event</strong> is not just an occurrence but a mathematically defined subset of the sample space $S$. Set theory provides the logical operators to describe how these outcomes interact.</p>

    <div class="premium-table-wrap">
      <table class="premium-table">
        <thead>
          <tr><th>Operation</th><th>Notation</th><th>Logical Meaning</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Union</strong></td><td>$A \cup B$</td><td>Event A <strong>OR</strong> event B occurs.</td></tr>
          <tr><td><strong>Intersection</strong></td><td>$A \cap B$</td><td>Event A <strong>AND</strong> event B occur simultaneously.</td></tr>
          <tr><td><strong>Complement</strong></td><td>$A^c$</td><td>Event A <strong>DOES NOT</strong> occur.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="premium-callout info">
      <div class="premium-callout-icon">🏗️</div>
      <div class="premium-callout-body">
        <strong>Compound Events:</strong> Most real-world ML problems involve compound events (intersections of many features). Calculating the probability of these intersections is the core of joint probability modeling.
      </div>
    </div>

    <!-- SECTION 2 -->
    <h2 id="categories" class="premium-h2">II. Critical Event Categories</h2>
    <p>Understanding the structural relationship between events allows us to simplify complex probabilistic expressions.</p>

    <div class="premium-def-box">
      <div class="premium-def-title">Mutually Exclusive (Disjoint) Events</div>
      <p style="margin:0">Events that cannot happen at the same time. Their intersection is the empty set ($\emptyset$).</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        A \cap B = \emptyset \implies P(A \cap B) = 0
      </div>
    </div>

    <div class="premium-def-box">
      <div class="premium-def-title">Independent Events</div>
      <p style="margin:0">Events where the occurrence of one provides zero information about the other. This is the fundamental assumption of <strong>Naive Bayes</strong> classifiers.</p>
      <div class="premium-math-block" style="margin-top:15px; margin-bottom:0; background:transparent; border:none; padding:0;">
        P(A | B) = P(A) \iff P(A \cap B) = P(A)P(B)
      </div>
    </div>

    <div class="premium-callout warn">
      <div class="premium-callout-icon">⚠️</div>
      <div class="premium-callout-body">
        <strong>Independence vs. Exclusivity:</strong> These are often confused. Mutually exclusive events are actually <em>highly dependent</em>—if you know one happened, you know for certain the other didn't!
      </div>
    </div>
  `
};
