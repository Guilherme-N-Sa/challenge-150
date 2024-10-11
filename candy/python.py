from typing import List

class Solution:
    def candy(self, ratings: List[int]) -> int:
        candy = [1 for _ in ratings]
        current = 1

        for i in range(len(ratings) - 1):
            if ratings[i + 1] > ratings[i]:
                current += 1
                candy[i + 1] = current
            else:
                current = candy[i + 1]

        for i in range(len(ratings) - 1, 0, -1):
            if ratings[i - 1] > ratings[i]:
                current += 1
                candy[i - 1] = max(current, candy[i - 1])
            else:
                current = candy[i - 1]
        return sum(candy)
