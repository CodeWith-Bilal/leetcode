//daily leetcode challenge
// LeetCode Daily Challenge
// Problem: Maximum Difference Between Adjacent Elements in a Circular Array
// Given a circular array nums, find the maximum absolute difference between adjacent elements.

// Note: In a circular array, the first and last elements are adjacent.

 //solution
 class Solution {
    public int maxAdjacentDistance(int[] nums) {
        int maxDiff = 0;
        int n = nums.length;
        
        for (int i = 0; i < n; i++) {
            int next = (i + 1) % n;
            int diff = Math.abs(nums[i] - nums[next]);
            maxDiff = Math.max(maxDiff, diff);
        }

        return maxDiff;
    }
}
// Time Complexity: O(n) where n is the number of elements in the array.
// Space Complexity: O(1) since we are using a constant amount of extra space.
// This solution iterates through the array once, calculating the absolute difference between each element and its adjacent element in a circular manner.
// The maximum difference is updated accordingly, ensuring an efficient solution.
// Example Usage:
// Solution sol = new Solution();
// int[] nums = {1, 3, 2, 5, 4};
// int result = sol.maxAdjacentDistance(nums);
// System.out.println(result); // Output will be the maximum absolute difference between adjacent elements in the circular array