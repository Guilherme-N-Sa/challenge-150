import math

class Solution:
    def intToRoman(self, num: int) -> str:
        symbol_list = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"],
        ]

        resp = ""
        for symbol in symbol_list:
            if num >= symbol[0]:
                s_num = math.floor(num / symbol[0])
                resp += symbol[1] * s_num
                num = num % symbol[0]

        return resp
