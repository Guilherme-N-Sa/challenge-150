from typing import List
import math

class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        def justifyLine(words, maxWidth, lenWords, lastLine=False):
            number_of_words = len(words)
            spaces_slot = number_of_words - 1
            spaces_to_distribute = maxWidth - lenWords
            if spaces_slot < 1 or lastLine:
                return (
                    " ".join(words) + (spaces_to_distribute - number_of_words + 1) * " "
                )
            spaces = math.floor(spaces_to_distribute / spaces_slot)
            extra_space = spaces_to_distribute % spaces_slot
            ret = ""
            for i in range(len(words)):
                if i == 0:
                    ret = words[i]
                elif i <= extra_space:
                    ret = ret + " " * spaces + " " + words[i]
                else:
                    ret = ret + " " * spaces + words[i]
            return ret

        lenWords = 0
        j = 0
        resp = []
        for i in range(len(words)):
            if lenWords + len(words[i]) + i - j > maxWidth:
                resp.append(justifyLine(words[j:i], maxWidth, lenWords))
                j = i
                lenWords = 0

            lenWords += len(words[i])
        resp.append(justifyLine(words[j:], maxWidth, lenWords, True))

        return resp
