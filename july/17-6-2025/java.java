import java.util.*;

class Solution {
    public int maximumLength(int[] nums, int k) {
        int n = nums.length;
        int[][] dp = new int[n][k]; // dp[i][mod] = longest valid subsequence ending at i with (nums[j]+nums[i])%k == mod
        int maxLen = 1;

        for (int i = 0; i < n; i++) {
            // Every single element can be a valid subsequence of length 1
            for (int j = 0; j < i; j++) {
                int mod = (nums[j] + nums[i]) % k;
                dp[i][mod] = Math.max(dp[i][mod], dp[j][mod] + 1);
                maxLen = Math.max(maxLen, dp[i][mod]);
            }
            // Initialize with 1 if it wasn't extended
            for (int mod = 0; mod < k; mod++) {
                dp[i][mod] = Math.max(dp[i][mod], 1);
            }
        }

        return maxLen;
    }
}

