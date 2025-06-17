#leetcode daily challenge
# # Given a 0-indexed integer array nums of size n and an integer k, return the number of subarrays of nums that contain exactly k matching adjacent elements.
# You are given three integers n, m, k. A good array arr of size n is defined as follows:

# Each element in arr is in the inclusive range [1, m].
# Exactly k indices i (where 1 <= i < n) satisfy the condition arr[i - 1] == arr[i].
# Return the number of good arrays that can be formed.

# Since the answer may be very large, return it modulo 109 + 7.
MOD = 10**9 + 7

class Solution(object):
    def countGoodArrays(self, n, m, k):
        """
        :type n: int
        :type m: int
        :type k: int
        :rtype: int
        """
        def modinv(a):
            return pow(a, MOD - 2, MOD)

        def comb(n, k):
            if k < 0 or k > n:
                return 0
            return fact[n] * invfact[k] % MOD * invfact[n - k] % MOD

        fact = [1] * (n + 1)
        invfact = [1] * (n + 1)
        for i in range(1, n + 1):
            fact[i] = fact[i - 1] * i % MOD
        invfact[n] = modinv(fact[n])
        for i in range(n - 1, -1, -1):
            invfact[i] = invfact[i + 1] * (i + 1) % MOD

        return m * comb(n - 1, k) % MOD * pow(m - 1, n - 1 - k, MOD) % MOD
# Example usage:
# n = 3, m = 2, k = 1