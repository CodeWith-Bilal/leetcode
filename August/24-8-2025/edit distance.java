class Solution {
    public int minDistance(String word1, String word2) {
        int n = word1.length(), m = word2.length();
        if (n == 0) return m;
        if (m == 0) return n;

        int[] dp = new int[m + 1];
        for (int j = 0; j <= m; j++) dp[j] = j;

        for (int i = 1; i <= n; i++) {
            int prev = dp[0]; 
            dp[0] = i;        
            for (int j = 1; j <= m; j++) {
                int temp = dp[j];
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[j] = prev; 
                    } else {
                    dp[j] = 1 + Math.min(Math.min(prev, dp[j - 1]), temp);
                }
                prev = temp;
            }
        }
        return dp[m];
    }
}