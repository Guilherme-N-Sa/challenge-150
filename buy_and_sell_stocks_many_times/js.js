/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let my_profit = 0;
  for (let sell of prices) {
    if (buy < sell) {
      my_profit += sell - buy;
    }
    buy = sell;
  }
  return my_profit;
};
