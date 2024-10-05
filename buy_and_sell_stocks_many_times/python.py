from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = prices[0]
        my_profit = 0

        for sell in prices:
            if buy < sell:
                my_profit += sell - buy

            buy = sell

        return my_profit
