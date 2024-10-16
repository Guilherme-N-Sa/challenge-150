class Solution:
    def isPalindrome(self, s: str) -> bool:

        def verify_alphanumeric(c):
            if ord(c) >= ord("a") and ord(c) <= ord("z"):
                return True
            if ord(c) >= ord("0") and ord(c) <= ord("9"):
                return True
            return False

        s = s.lower()

        left = 0
        right = len(s) - 1

        while left < right:
            if not verify_alphanumeric(s[left]):
                left += 1
                continue
            if not verify_alphanumeric(s[right]):
                right -= 1
                continue

            if s[left] != s[right]:
                return False
            left += 1
            right -= 1

        return True
