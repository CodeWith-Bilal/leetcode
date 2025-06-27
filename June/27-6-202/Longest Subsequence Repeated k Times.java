// //leetcode daily challenge
// You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.

// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

// A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

// For example, "bba" is repeated 2 times in the string "bababcba", because the string "bbabba", constructed by concatenating "bba" 2 times, is a subsequence of the string "bababcba".
// Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.
class Solution {
    public String longestSubsequenceRepeatedK(String s, int k) {
        int[] freq = new int[26];
        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        List<Character> candidateChars = new ArrayList<>();
        for (int i = 25; i >= 0; i--) { 
            if (freq[i] >= k) {
                candidateChars.add((char) ('a' + i));
            }
        }

        String res = "";
        Queue<String> queue = new LinkedList<>();
        queue.offer("");

        while (!queue.isEmpty()) {
            String cur = queue.poll();
            for (char c : candidateChars) {
                String next = cur + c;
                if (isValid(next, s, k)) {
                    if (next.length() > res.length() || (next.length() == res.length() && next.compareTo(res) > 0)) {
                        res = next;
                    }
                    queue.offer(next);
                }
            }
        }

        return res;
    }

    private boolean isValid(String sub, String s, int k) {
        String target = sub.repeat(k);
        int i = 0;
        for (char c : s.toCharArray()) {
            if (c == target.charAt(i)) {
                i++;
                if (i == target.length()) return true;
            }
        }
        return false;
    }
}
// This code defines a solution to the problem of finding the longest subsequence in a string `s` that can be repeated `k` times.
// The `longestSubsequenceRepeatedK` method first counts the frequency of each character in the string. It then constructs a list of characters that can be used to form subsequences, starting from the lexicographically largest character.