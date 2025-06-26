//leetcode daily challenge
class Solution {
    public int longestSubsequence(String s, int k) {
        int n = s.length();
        int count = 0;
        int power = 0;
        long value = 0;

        for (int i = n - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if (c == '0') {
                count++;
            } else {
                if (power < 32) { 
                    long add = 1L << power;
                    if (value + add <= k) {
                        value += add;
                        count++;
                    }
                }
            }
            power++;
        }

        return count;
    }
}
// This code defines a solution to the problem of finding the longest binary subsequence of a string `s` that is less than or equal to a given integer `k`.
// The `longestSubsequence` method iterates through the string in reverse order, counting the number of '0's and checking if adding a '1' at the current power of two would keep the total value less than or equal to `k`.