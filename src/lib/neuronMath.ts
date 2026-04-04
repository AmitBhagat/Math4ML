export const ActivationFunctions = {
  ReLU: (x: number) => Math.max(0, x),
  Sigmoid: (x: number) => 1 / (1 + Math.exp(-x)),
  Tanh: (x: number) => Math.tanh(x),
  Linear: (x: number) => x,
  LeakyReLU: (x: number) => (x > 0 ? x : 0.01 * x),
};

export type ActivationType = keyof typeof ActivationFunctions;

export const calculateWeightedSum = (inputs: number[], weights: number[], bias: number) => {
  return inputs.reduce((sum, x, i) => sum + x * (weights[i] || 0), 0) + bias;
};

export const generateChartData = (activation: ActivationType, currentSum: number) => {
  const data = [];
  for (let x = -6; x <= 6; x += 0.1) {
    data.push({
      x: parseFloat(x.toFixed(1)),
      y: ActivationFunctions[activation](x),
    });
  }
  return data;
};
