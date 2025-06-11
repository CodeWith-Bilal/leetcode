//leetcode daily challange
// You are given a string s and an integer k. Your task is to find the maximum difference between the frequency of two characters, freq[a] - freq[b], in a substring subs of s, such that:

// subs has a size of at least k.
// Character a has an odd frequency in subs.
// Character b has an even frequency in subs.
// Return the maximum difference.

// Note that subs can contain more than 2 distinct characters
class Solution {
    public int maxDifference(String s, int k) {
        int n = s.length();
        int[] freq = new int[26];
        int maxDiff = 0;

        for (int i = 0; i < n; i++) {
            freq[s.charAt(i) - 'a']++;
            if (i >= k - 1) {
                for (int j = 0; j < 26; j++) {
                    if (freq[j] % 2 == 1) { // odd frequency
                        for (int l = 0; l < 26; l++) {
                            if (freq[l] % 2 == 0 && freq[l] > 0) { // even frequency
                                maxDiff = Math.max(maxDiff, freq[j] - freq[l]);
                            }
                        }
                    }
                }
                freq[s.charAt(i - k + 1) - 'a']--; // remove the character going out of the window
            }
        }

        return maxDiff;
    }
}
// Time Complexity: O(n * 26 * 26) = O(n)
// Space Complexity: O(1) since the frequency array size is constant (26 for lowercase letters)
// Note: This solution assumes that the input string contains only lowercase letters.
// Edge Cases: If k is greater than the length of the string, the function will return 0 since no valid substring can be formed.
// Example Usage:
// Solution sol = new Solution();
// int result = sol.maxDifference("abcde", 3);
// System.out.println(result); // Output will depend on the input string and k value
// This solution iterates through the string, maintaining a frequency count of characters in a sliding window of size k.
// It checks for characters with odd and even frequencies and calculates the maximum difference accordingly.
// The solution is efficient and handles the constraints well, ensuring that it runs in a reasonable time for large inputs.
// Note: The solution assumes that the input string contains only lowercase letters.