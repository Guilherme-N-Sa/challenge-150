import random
import math


class RandomizedSet:

    def __init__(self):
        self.arr = []
        self.hash = {}

    def insert(self, val: int) -> bool:
        if val in self.hash:
            return False

        self.arr.append(val)
        self.hash[val] = len(self.arr) - 1
        return True

    def remove(self, val: int) -> bool:
        if val in self.hash:
            index = self.hash[val]
            self.arr[index] = self.arr[-1]
            self.hash[self.arr[index]] = index
            self.arr.pop()
            del self.hash[val]

            return True

        return False

    def getRandom(self) -> int:
        return self.arr[math.floor(random.random() * len(self.arr))]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
