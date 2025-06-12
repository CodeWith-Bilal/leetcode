//leetcode 150 interview questions
// Problem: Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
class Solution {
    public int maxSubArray(int[] nums) {
        return helper(nums, 0, nums.length - 1);
    }
    
    private int helper(int[] nums, int left, int right) {
        if (left == right) return nums[left];

        int mid = (left + right) / 2;

        int leftMax = helper(nums, left, mid);
        int rightMax = helper(nums, mid + 1, right);
        int crossMax = crossSum(nums, left, mid, right);

        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private int crossSum(int[] nums, int left, int mid, int right) {
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }

        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }

        return leftSum + rightSum;
    }
}
