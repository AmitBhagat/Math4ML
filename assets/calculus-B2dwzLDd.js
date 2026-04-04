const e={id:"calculus",title:"Calculus",description:"Calculus helps optimize machine learning models by adjusting parameters to minimize prediction error. It enables gradient-based learning.",keyConcepts:[{title:"Derivatives",description:"Measuring changes in parameters"},{title:"Gradient Descent",description:"Core optimization algorithm for ML"},{title:"Chain Rule",description:"Powers backpropagation in neural networks"},{title:"Jacobian & Hessian",description:"Second-order optimization"}],sections:[{id:"Differentiation",title:"Differentiation",description:"Differentiation computes the rate of change of a function with respect to its input. It is the mathematical foundation of all gradient-based ML optimization.",formula:"f'(x) = lim(hâ†’0) [f(x+h) - f(x)] / h",details:["The derivative measures instantaneous rate of change â€” the slope of the tangent line.","In ML, it tells how the loss changes when parameters are adjusted."],contentSections:[{heading:"What is Differentiation?",paragraphs:["Differentiation is the process of finding the derivative of a function. The derivative f'(x) measures how the function's output changes in response to a small change in its input.","Geometrically, f'(x) is the slope of the tangent line to the curve y = f(x) at point x.","Formally: f'(x) = lim(h â†’ 0) [f(x+h) - f(x)] / h"]},{heading:"Key Derivative Rules",paragraphs:["Power Rule: d/dx[xâ¿] = nÂ·xâ¿â»Â¹. Example: d/dx[xÂ³] = 3xÂ²","Exponential: d/dx[eË£] = eË£ â€” unique property of e.","Logarithm: d/dx[ln(x)] = 1/x","Product Rule: d/dx[fÂ·g] = f'g + fg'","Quotient Rule: d/dx[f/g] = (f'g - fg') / gÂ²","Chain Rule: d/dx[f(g(x))] = f'(g(x)) Â· g'(x)"]},{heading:"Numerical Differentiation in Python",paragraphs:[],code:`import numpy as np

def f(x):
    return x**2

def numerical_derivative(f, x, h=1e-7):
    return (f(x + h) - f(x)) / h

print("f'(3) =", numerical_derivative(f, 3))  # ~6.0
print("f'(5) =", numerical_derivative(f, 5))  # ~10.0`,output:`f'(3) = 6.000000059604645
f'(5) = 10.000000116860974`},{heading:"Why Differentiation Matters for ML",paragraphs:["In ML model training, we want to minimize a loss function L(w) by finding the optimal weights w.","Differentiation tells us the gradient of the loss â€” the direction in which the loss increases. We then move in the opposite direction to minimize it.","Every optimizer (SGD, Adam, RMSProp) relies on computing derivatives of the loss function."]}],tags:["Derivatives","Slopes","Rate of Change","Power Rule","Tangent"],level:"Beginner"},{id:"PartialDerivatives",title:"Partial Derivatives",description:"When a function has multiple inputs (like a neural network with many weights), partial derivatives measure the effect of changing one variable while keeping others constant.",formula:"âˆ‚f/âˆ‚xáµ¢",details:["âˆ‚f/âˆ‚x: differentiate f with respect to x, treating all other variables as constants.","Essential for training models with thousands of parameters simultaneously."],contentSections:[{heading:"What is a Partial Derivative?",paragraphs:["A partial derivative measures how a function changes with respect to one variable while all other variables are held constant.","For a function f(x, y), the partial derivative with respect to x is written âˆ‚f/âˆ‚x and treats y as a constant.","This is essential in ML because loss functions depend on many parameters (weights) simultaneously â€” we need the derivative with respect to each one."]},{heading:"Computing Partial Derivatives",paragraphs:["For f(x, y) = xÂ²y + 3y:","âˆ‚f/âˆ‚x = 2xy  (differentiate with respect to x, y is constant)","âˆ‚f/âˆ‚y = xÂ² + 3  (differentiate with respect to y, x is constant)"],code:`# f(x, y) = x^2*y + 3*y
# Partial derivatives at (x=2, y=3)
x, y = 2, 3

df_dx = 2 * x * y  # 2*2*3 = 12
df_dy = x**2 + 3   # 4 + 3 = 7

print(f'âˆ‚f/âˆ‚x at (2,3) = {df_dx}')
print(f'âˆ‚f/âˆ‚y at (2,3) = {df_dy}')`,output:`âˆ‚f/âˆ‚x at (2,3) = 12
âˆ‚f/âˆ‚y at (2,3) = 7`},{heading:"Symmetry of Mixed Partials",paragraphs:["For well-behaved functions (Clairaut's Theorem), the order of differentiation doesn't matter:","âˆ‚Â²f / (âˆ‚x âˆ‚y) = âˆ‚Â²f / (âˆ‚y âˆ‚x)","This property is used when constructing the Hessian matrix."]},{heading:"Role in Neural Network Training",paragraphs:["A neural network with n weights requires n partial derivatives per data point to update all weights simultaneously.","Computing all partial derivatives efficiently â€” using the chain rule across layers â€” is what backpropagation does.","Frameworks like PyTorch and TensorFlow compute partial derivatives automatically using automatic differentiation (autograd)."]}],tags:["Multi-variable","Parameters","Neural Networks","Autograd"],level:"Intermediate"},{id:"Gradient",title:"Gradient",description:"The gradient is a vector of all partial derivatives of a function. It points in the direction of steepest ascent and is the key input to gradient-based optimization.",formula:"âˆ‡f = [âˆ‚f/âˆ‚xâ‚, âˆ‚f/âˆ‚xâ‚‚, ..., âˆ‚f/âˆ‚xâ‚™]",details:["âˆ‡f points in the direction of steepest ascent.","In ML, we move opposite to âˆ‡L (the loss gradient) to minimize the loss."],contentSections:[{heading:"What is the Gradient?",paragraphs:["The gradient âˆ‡f (nabla f) is a vector-valued function that collects all the partial derivatives of a scalar function:","âˆ‡f(x) = [âˆ‚f/âˆ‚xâ‚, âˆ‚f/âˆ‚xâ‚‚, ..., âˆ‚f/âˆ‚xâ‚™]","The gradient points in the direction of the steepest increase of f at that point.","Its magnitude ||âˆ‡f|| tells us how steep the slope is â€” a larger magnitude means the function is changing more rapidly."]},{heading:"Example: Gradient of a 2D Function",paragraphs:["For f(x, y) = xÂ² + yÂ²:","âˆ‚f/âˆ‚x = 2x,  âˆ‚f/âˆ‚y = 2y","âˆ‡f(x, y) = [2x, 2y]","At point (3, 4): âˆ‡f = [6, 8] â€” pointing away from the origin (the minimum)."],code:`import numpy as np

def gradient(x, y):
    return np.array([2*x, 2*y])

g = gradient(3, 4)
print('Gradient at (3,4):', g)
print('Magnitude:', np.linalg.norm(g))`,output:`Gradient at (3,4): [6 8]
Magnitude: 10.0`},{heading:"The Gradient in Machine Learning",paragraphs:["The loss function L(w) takes the model weights w as input and outputs a scalar (the loss).","The gradient âˆ‡L tells us in which direction to change w to increase the loss most quickly.","To minimize the loss, we move in the opposite direction: w_new = w - Î± Ã— âˆ‡L(w)","This is the fundamental update rule for all gradient descent optimizers."]}],tags:["Direction","Steepest Ascent","Loss Surface","Optimization"],level:"Intermediate"},{id:"GradientDescent",title:"Gradient Descent",description:"The core optimization algorithm for training ML models. Iteratively adjusts parameters in the direction opposite to the gradient to minimize the cost function.",formula:"Î¸_new = Î¸_old - Î± Â· âˆ‡f(Î¸)",details:["Moves opposite to the gradient to find the minimum.","Learning rate Î± controls step size â€” critical for convergence."],contentSections:[{heading:"How Gradient Descent Works",paragraphs:["Gradient Descent is an iterative optimization algorithm that:","1. Computes the gradient of the loss âˆ‡L(w) at current weights.","2. Updates weights in the opposite direction: w = w - Î± Ã— âˆ‡L(w)","3. Repeats until convergence (gradient â‰ˆ 0 or loss stops improving).","The learning rate Î± controls how large each step is."]},{heading:"The Learning Rate Problem",paragraphs:["Too large Î±: the algorithm overshoots the minimum and may diverge.","Too small Î±: convergence is extremely slow â€” takes many more iterations.","Just right Î±: smooth, efficient convergence to the minimum.","Modern practice: use learning rate schedulers (decay over time) or adaptive optimizers like Adam."]},{heading:"Variants of Gradient Descent",paragraphs:["Batch Gradient Descent: computes the gradient using the full training dataset each step. Slow but accurate.","Stochastic Gradient Descent (SGD): uses a single random sample each step. Fast but noisy â€” can escape local minima.","Mini-Batch Gradient Descent: uses a small batch (e.g., 32, 64 samples). Best of both worlds â€” most commonly used in deep learning."]},{heading:"Gradient Descent Implementation",paragraphs:[],code:`import numpy as np

# Minimize f(x) = x^2 using gradient descent
x = 10.0
lr = 0.1
losses = []

for i in range(50):
    grad = 2 * x     # f'(x) = 2x
    x = x - lr * grad
    losses.append(x**2)

print(f'Minimum found at x = {x:.6f}')
print(f'f(x) = {x**2:.10f}')`,output:`Minimum found at x = 0.000001
f(x) = 0.0000000000`}],tags:["Optimization","Learning Rate","SGD","Mini-batch","Convergence"],level:"Intermediate"},{id:"ChainRule",title:"Chain Rule",description:"The chain rule computes the derivative of a composite function. It powers backpropagation â€” the algorithm that trains neural networks.",formula:"dz/dx = (dz/dy) Â· (dy/dx)",details:["For z = f(g(x)): dz/dx = f'(g(x)) Â· g'(x).","Backpropagation applies the chain rule recursively through each neural network layer."],contentSections:[{heading:"What is the Chain Rule?",paragraphs:["The Chain Rule computes the derivative of a composite function. If z = f(y) and y = g(x), then:","dz/dx = (dz/dy) Ã— (dy/dx) = f'(g(x)) Ã— g'(x)","In other words: to differentiate a nested function, multiply the derivatives of each 'layer' together."]},{heading:"Example",paragraphs:["Find d/dx[sin(xÂ²)]:","Let y = g(x) = xÂ² â†’ dy/dx = 2x","Let z = f(y) = sin(y) â†’ dz/dy = cos(y)","By chain rule: dz/dx = cos(xÂ²) Ã— 2x"],code:`import numpy as np

x = 1.0

# Analytical chain rule: d/dx[sin(x^2)] = cos(x^2) * 2x
df = np.cos(x**2) * 2 * x
print('Analytical derivative:', df)

# Numerical verification
h = 1e-7
df_numerical = (np.sin((x+h)**2) - np.sin(x**2)) / h
print('Numerical derivative:', df_numerical)`,output:`Analytical derivative: 1.0806046117362795
Numerical derivative: 1.0806045895040525`},{heading:"Chain Rule in Backpropagation",paragraphs:["A neural network is a composition of many functions: Loss = L(aâ‚™(aâ‚™â‚‹â‚(...aâ‚(x)...)))","To train the network, we need âˆ‚L/âˆ‚wáµ¢ for every weight wáµ¢ in every layer.","Backpropagation applies the chain rule systematically from the output layer backward:","âˆ‚L/âˆ‚wâ‚ = (âˆ‚L/âˆ‚aâ‚™) Ã— (âˆ‚aâ‚™/âˆ‚aâ‚™â‚‹â‚) Ã— ... Ã— (âˆ‚aâ‚‚/âˆ‚aâ‚) Ã— (âˆ‚aâ‚/âˆ‚wâ‚)","Each gradient is computed once and reused â€” making backpropagation computationally efficient."]}],tags:["Backpropagation","Composite Functions","Deep Learning","Neural Networks"],level:"Advanced"},{id:"JacobianHessian",title:"Jacobian & Hessian Matrices",description:"The Jacobian generalizes the gradient to vector-valued functions. The Hessian captures second-order curvature information â€” enabling faster, more powerful optimization.",formula:"Háµ¢â±¼ = âˆ‚Â²f / âˆ‚xáµ¢âˆ‚xâ±¼",details:["Jacobian: matrix of all first-order partial derivatives for vector-valued functions.","Hessian: matrix of all second-order partial derivatives for scalar functions."],contentSections:[{heading:"The Jacobian Matrix",paragraphs:["For a vector-valued function f: Râ¿ â†’ Ráµ, the Jacobian J is an mÃ—n matrix of partial derivatives:","Jáµ¢â±¼ = âˆ‚fáµ¢ / âˆ‚xâ±¼","The Jacobian generalizes the concept of gradient to vector outputs.","Used in backpropagation for layers that output vectors (e.g., softmax layer in multi-class classification)."]},{heading:"The Hessian Matrix",paragraphs:["For a scalar function f: Râ¿ â†’ R, the Hessian H is an nÃ—n matrix of all second-order partial derivatives:","Háµ¢â±¼ = âˆ‚Â²f / (âˆ‚xáµ¢ âˆ‚xâ±¼)","The Hessian describes the curvature of the loss surface at a point:","Positive definite Hessian â†’ local minimum.","Negative definite Hessian â†’ local maximum.","Indefinite Hessian â†’ saddle point (common in deep learning loss surfaces)."],code:`import numpy as np

# f(x, y) = x^2 + xy + y^2
# âˆ‚Â²f/âˆ‚xÂ² = 2,  âˆ‚Â²f/âˆ‚xâˆ‚y = 1
# âˆ‚Â²f/âˆ‚yâˆ‚x = 1, âˆ‚Â²f/âˆ‚yÂ² = 2
H = np.array([[2, 1],
              [1, 2]])

print('Hessian:\\n', H)
print('Eigenvalues:', np.linalg.eigvals(H))
print('Positive definite:', all(np.linalg.eigvals(H) > 0))`,output:`Hessian:
 [[2 1]
  [1 2]]
Eigenvalues: [3. 1.]
Positive definite: True`},{heading:"Newton's Method",paragraphs:["Newton's method uses the Hessian for second-order optimization â€” it achieves much faster convergence than gradient descent by accounting for curvature:","w_new = w - Hâ»Â¹ Â· âˆ‡f(w)","Advantage: converges in far fewer iterations than gradient descent.","Disadvantage: computing and inverting H is O(nÂ³) â€” infeasible for large models (millions of parameters).","Quasi-Newton methods (L-BFGS, BFGS) approximate the Hessian inverse efficiently."]}],tags:["Second-Order","Curvature","Newton's Method","Saddle Point"],level:"Advanced"},{id:"AreaUnderCurve",title:"Area Under the Curve",description:"Integration accumulates quantities over continuous ranges. In ML, the AUC-ROC is a key integration-based metric for classifier evaluation.",formula:"âˆ«â‚áµ‡ f(x) dx",details:["The definite integral gives the signed area between f(x) and the x-axis from a to b.","AUC-ROC: area under the ROC curve â€” higher AUC means better classifier performance."],contentSections:[{heading:"What is Integration?",paragraphs:["Integration is the reverse of differentiation. The definite integral âˆ«â‚áµ‡ f(x)dx computes the accumulated area under the curve f(x) between x = a and x = b.","Geometrically: it's the sum of infinitely many infinitely thin rectangles under the curve.","Fundamental Theorem of Calculus: âˆ«â‚áµ‡ f(x)dx = F(b) - F(a) where F is the antiderivative of f (F' = f)."]},{heading:"Computing Integrals in Python",paragraphs:[],code:`from scipy.integrate import quad
import numpy as np

# Area under f(x) = x^2 from 0 to 3
# Analytical: [x^3/3] from 0 to 3 = 27/3 = 9
result, error = quad(lambda x: x**2, 0, 3)
print(f'âˆ«xÂ² dx from 0 to 3 = {result}')  # 9.0

# Area under standard normal curve from -âˆž to âˆž
result2, _ = quad(lambda x: np.exp(-x**2/2)/np.sqrt(2*np.pi), -np.inf, np.inf)
print(f'Area under N(0,1) = {result2:.6f}')  # Should be 1.0`,output:`âˆ«xÂ² dx from 0 to 3 = 9.0
Area under N(0,1) = 1.000000`},{heading:"AUC-ROC: Integration in ML Evaluation",paragraphs:["The ROC (Receiver Operating Characteristic) curve plots the True Positive Rate vs False Positive Rate at different classification thresholds.","AUC (Area Under the ROC Curve) is literally the integral of the ROC curve â€” computed as the area under this curve.","AUC = 1.0: perfect classifier.","AUC = 0.5: random classifier (no discrimination ability).","AUC > 0.8: generally considered a good model.","AUC is threshold-independent â€” it evaluates the model across all possible classification thresholds at once."]},{heading:"Integration in Probability",paragraphs:["The integral of a probability density function (PDF) over its entire range equals 1:","âˆ«â‚‹âˆž^âˆž f(x) dx = 1","This is why all valid PDFs must integrate to 1 â€” it ensures the total probability of all outcomes is 100%.","The CDF (Cumulative Distribution Function) F(x) = âˆ«â‚‹âˆžË£ f(t) dt gives P(X â‰¤ x)."]}],tags:["Integration","AUC-ROC","Accumulation","Fundamental Theorem","PDF"],level:"Beginner"}]};export{e as CALCULUS_DATA};
