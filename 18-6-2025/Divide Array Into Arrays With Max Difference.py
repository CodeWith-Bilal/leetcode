#leetcode daily challenge
# # Given an integer array nums and an integer k, return true if it is possible to divide nums into k non-empty subsets such that the maximum difference between the largest and smallest elements in each subset is at most 1.
# You are given an integer array nums of size n where n is a multiple of 3 and a positive integer k.

# Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:

# The difference between any two elements in one array is less than or equal to k.
# Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.
class Solution(object):
    def divideArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[List[int]]
        """
        nums.sort()
        res = []
        
        for i in range(0, len(nums), 3):
            group = nums[i:i+3]
            if group[-1] - group[0] > k:
                return []
            res.append(group)
        
        return res
# Example usage:
# nums = [1, 2, 3, 4, 5, 6]