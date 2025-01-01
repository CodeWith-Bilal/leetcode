//leetcode interview question
//Given an integer array nums, return the length of the longest strictly increasing subsequence.

class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n, 1); 
        int lis = 1;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = max(dp[i], dp[j] + 1);
                }
            }
            lis = max(lis, dp[i]);
        }
        return lis;
    }
};
