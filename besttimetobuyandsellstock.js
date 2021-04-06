/* I: array of prices (each is price of of stock on ith day), you wanna 
   maximize gain by choosing 1 day to buy, 1 future day to sell
   -> O: maximum profit, if not possible, zero */

// 1: badbadnotgood
const bruteMaxProfit = (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; i < prices.length; j++) {
      let diff = prices[j] - prices[i];
      max = diff > max ? diff : max;
    }
  }
  return max;
};

// 2: better approach
const maxProfit = (prices) => {
  let minValue = Number.MAX_VALUE;
  let max = 0;
  for (const [i, value] of prices.entries()) {
    if (value < minValue) {
      minValue = value;
    } else if (value - minValue > max) {
      max = value - minValue;
    }
  }
  return value;
};
