/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = 0;
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[min] < prices[i]) {
      max_profit = Math.max(max_profit, prices[i] - prices[min]);
    } else {
      min = i;
    }
  }
  return max_profit;
};
