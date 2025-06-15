# leetcode interview question
# Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

# A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

# A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

class Solution(object):
    def maxSubarraySumCircular(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def kadane(gen):
            max_ending = max_so_far = gen[0]
            for x in gen[1:]:
                max_ending = max(x, max_ending + x)
                max_so_far = max(max_so_far, max_ending)
            return max_so_far
        
        total_sum = sum(nums)
        max_kadane = kadane(nums)
        min_kadane = kadane([-x for x in nums])

        if max_kadane < 0: 
            return max_kadane

        return max(max_kadane, total_sum + min_kadane)  
