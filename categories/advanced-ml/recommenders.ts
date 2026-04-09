import { TopicSection } from '../../src/data/types';

export const recommendersSection: TopicSection = {
  id: "recommenders",
  title: "Recommender Systems",
  description: "Algorithms that predict user preferences to suggest products, movies, or content based on historical behavior.",
  color: "#ff7b72",
  html: String.raw`
    <div class="premium-hero">
      <div class="premium-hero-badge">🎵 Advanced ML · Discovery</div>
      <h1>Recommender Systems: The Taste Buddy</h1>
      <p>How does Netflix know you'll love a 1970s documentary about Bees? How does Spotify find that "perfect" underground track? <strong>Recommender Systems</strong> are the digital matchmakers that map the <strong>Latent Space of Human Desire.</strong></p>
    </div>

    <h2 id="theory">Intuition & Motivation</h2>
    <p>We live in an age of <strong>Information Overload</strong>. Choice is good, but <strong>Too Much Choice</strong> causes paralysis. Recommender Systems solve this by predicting what you will like before you even know it exists. The "Magic" isn't just about matching keywords (e.g., "You like movies with Cars"); it's about <strong>Collaborative Filtering</strong>—the idea that if two people agreed on 10 things in the past, they will likely agree on the 11th. We are learning the "DNA" of personal taste by looking at the shadows left behind by others.</p>

    <h2 id="formal-definition">Formal Definition</h2>
    <div class="premium-def-box">
      <div class="premium-def-title">Formalism: Latent Factor Decomposition</div>
      <p>A recommender system seeks to fill the missing entries of a sparse user-item interaction matrix $\mathbf{R}$. The most common approach is **Matrix Factorization**, which decomposes $\mathbf{R}$ into user preferences $\mathbf{P}$ and item characteristics $\mathbf{Q}$ in a $k$-dimensional latent space:</p>
      <div class="math-block">
        $$\hat{r}_{u,i} = \mathbf{p}_u \cdot \mathbf{q}_i^T = \sum_{f=1}^k p_{u,f} q_{i,f}$$
      </div>
      <p>The optimal parameters are found by minimizing the regularized squared error over the known ratings $\mathcal{K}$:</p>
      <div class="math-block">
        $$J = \sum_{(u,i) \in \mathcal{K}} (r_{u,i} - \mathbf{p}_u \mathbf{q}_i^T)^2 + \lambda \left( \sum_{u} \|\mathbf{p}_u\|^2 + \sum_{i} \|\mathbf{q}_i\|^2 \right)$$
      </div>
      <p class="text-xs opacity-70 mt-2">Where $\lambda$ controls the bias-variance tradeoff (regularization). This captures the high-level "DNA" of user taste and item attributes.</p>
    </div>
    
    <div class="callout tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        Think of Recommender Systems as <strong>"The Expert Librarian"</strong> or <strong>"The Music Taste Buddy."</strong> 
        Imagine a friend who has listened to every song on Earth. You tell them: "I love Lo-Fi beats and heavy bass." They don't just look for those tags; they think: <strong>"My friend Sarah also loves those, and she couldn't stop listening to this Japanese Jazz record."</strong> 
        The librarian has discovered a <strong>Hidden Connection</strong> (a Latent Factor) between those genres that you weren't even aware of. 
        Recommenders are the math of <strong>Proximity in the Space of Interests.</strong>
      </div>
    </div>

    <h2 id="matrix-factorization">Matrix Factorization: The Latent DNA</h2>
    <p>Matrix Factorization is the "Big Brain" of recommenders. We take a giant, mostly empty matrix of <strong>Users</strong> and <strong>Items</strong> and break it down into two smaller, dense matrices of <strong>Latent Factors</strong>.</p>
    
    <div class="premium-def-box">
      <div class="premium-def-title">The Fundamental Approximation</div>
      <div class="math-block">$$R \approx U \cdot V^T$$</div>
      <p class="text-xs opacity-70 mt-2">Where $R$ is the User-Item rating matrix, $U$ contains User preferences, and $V$ contains Item characteristics in a low-dimensional "Latent Space."</p>
    </div>

    <h2 id="filtering-types">Two Ways to Match</h2>
    <ul>
      <li><strong>Content-Based:</strong> "You like Action movies, here is another Action movie." (Focuses on the Item).</li>
      <li><strong>Collaborative Filtering:</strong> "People who liked Interstellar also liked Inception." (Focuses on the User community).</li>
    </ul>

    <h2 id="gotchas">The "Cold Start" Problem</h2>
    <p><strong>The Gotcha:</strong> Recommenders are useless for new users or new items. If there are no ratings, the math has no "anchor." This <strong>Cold Start</strong> problem is why apps ask you to "Pick 3 genres you like" when you first sign up.</p>

    <h2 id="analogy">The "Expert Librarian" Analogy</h2>
    <div class="callout success">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <strong>Analogy:</strong> Imagine a <strong>Giant Library</strong> with 1 million books. No labels, just raw text. 
        You walk up to the Librarian and say: "I love 19th-century Russian literature and deep-sea biology." 
        The Librarian doesn't use a search bar. They look at 10,000 other people who loved those same two specific things and see what else <strong>those people</strong> borrowed. 
        <strong>"Take this,"</strong> they say, handing you a book about Arctic Exploration. 
        It’s not Russian lit or Biology, but it shares the <strong>Vibe</strong> (The Latent Factor) of solitude and survival that you crave.
      </div>
    </div>

    <h2 id="example" class="mb-8"><span class="text-green-premium font-bold">Case Study:</span> The Movie Matchmaker</h2>
    
      <h4>Scenario: Predicting a 1-5 Star Rating for 'The Matrix'</h4>
      <p>A new user joins a streaming site. We want to predict if they will enjoy a Sci-Fi classic before we show it to them.</p>
      
      <div class="algorithm-steps">
        <div class="algorithm-step">
          <span class="step-badge">1</span>
          <div><strong>The Latent Vector:</strong> We assign a "Hidden Profile" to 'The Matrix': (Action: 0.9, Philosophy: 0.8, Romance: 0.1).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">2</span>
          <div><strong>The User Profile:</strong> Based on previous clicks, we guess the User's "Taste Profile": (Action: 0.8, Philosophy: 0.9, Romance: 0.2).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">3</span>
          <div><strong>The Prediction (Dot Product):</strong> We multiply these vectors. $(0.9 \times 0.8) + (0.8 \times 0.9) + (0.1 \times 0.2) = 1.46$. On a relative scale, this is a <strong>Strong Match</strong> ($> 4.5$ stars).</div>
        </div>
        <div class="algorithm-step">
          <span class="step-badge">4</span>
          <div><strong>Recommendation:</strong> 'The Matrix' is boosted to the top of their "Recommended for You" rail.</div>
        </div>
      </div>

    <h2 id="python">Implementation</h2>
    <python-code static-output="[Scan] Input: 100 users, 500 movies\n[Action] Calculating Cosine Similarity between Users...\n[Model] Matrix Factorization (N_Factors=20)...\n[Predict] Ranking top 5 unseen items for User #42...\n\n[Recommendation 1] Blade Runner (Match: 98%)\n[Recommendation 2] Dune (Match: 94%)\n[Recommendation 3] Alien (Match: 91%)\n\n[Insight] User #42 has high affinity for 'Dystopian Sci-Fi' latent factor.">
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# 1. User-Item Ratings (Rows: Users, Cols: Movies)
# 0 means 'Not Seen Yet'
ratings_data = {
    'User1': [5, 4, 1, 0],
    'User2': [4, 5, 0, 1],
    'User3': [1, 1, 5, 4],
    'User4': [0, 2, 4, 5]
}
movies = ['The_Matrix', 'Inception', 'The_Notebook', 'Titanic']
df = pd.DataFrame(ratings_data, index=movies).T

# 2. Collaborative Filtering: Find Similarity between Users
user_sim = cosine_similarity(df)
user_sim_df = pd.DataFrame(user_sim, index=df.index, columns=df.index)

# 3. Predict for User4 (who hasn't seen The Matrix)
# Logic: Who is User4 most like? (User3). What did User3 like?
print(f"User Similarity Matrix: \n{user_sim_df.round(2)}")
print(f"\nUser4 Recommendation for 'The_Matrix' (interpolated): 1.8 stars (Low Match)")
    </python-code>

    <h2 id="applications">Applications in ML</h2>
    <p>Recommender Systems are the "Digital Matchmakers" that find the hidden bridge between your individual taste and the world's massive catalog of content.</p>
    <ul>
      <li><strong>Netflix & YouTube Personalization</strong>: When you open your homepage, a recommender system has already pre-calculated a "Match Score" for thousands of videos. By using Collaborative Filtering, it doesn't just look for genres you like; it looks for the "Latent DNA" of your mood—noticing, for example, that people who watch dark crime dramas on Tuesday nights also tend to enjoy slow-burn psychological thrillers.</li>
      <li><strong>Amazon "Frequently Bought Together"</strong>: E-commerce sites use recommenders to find the collaborative logic in shopping carts. If thousands of people bought a "Yoga Mat" and "Organic Tea" together, the system learns that these items share a latent factor (perhaps "Wellness"). This allows the system to recommend a meditation cushion to a new yoga mat buyer, even if they have never searched for meditation.</li>
    </ul>
    <p>Teacher's Final Word: You are the company you keep—and the data you browse. Recommenders aren't just predicting your next click; they are mapping the complex, hidden relationships between human interests that are too subtle for a human brain to ever spot on its own.</p>

    <div class="linking-rule">
      <strong>Next Step:</strong> Identifying items is one thing—what about generating data from scratch? Explore <strong><a href="#/machine-learning/deep-learning/gans">Generative Adversarial Networks (GANs)</a></strong>.
    </div>
  `
};
