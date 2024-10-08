from typing import List

class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort(reverse=True)
        count = 0
        for num in citations:
            count += 1
            if num == count:
                return count
            elif num < count:
                return count - 1
        return len(citations)
