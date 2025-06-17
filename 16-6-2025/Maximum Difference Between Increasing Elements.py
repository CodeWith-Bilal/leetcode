#leetcode daily challenge
# Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].

# Return the maximum difference. If no such i and j exists, return -1.
class Solution(object):
    def maximumDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        min_val = nums[0]
        max_diff = -1

        for j in range(1, len(nums)):
            if nums[j] > min_val:
                max_diff = max(max_diff, nums[j] - min_val)
            else:
                min_val = nums[j]
        
        return max_diff
# Example usage:
# nums = [7, 1, 5, 4] https://x.com/gay_pro26135
