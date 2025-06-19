//leetcode daily challange
// Given an array of integers nums, return the maximum difference between the frequency of even and odd numbers in the array.
// ou are given a string s consisting of lowercase English letters.

// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.

 import java.util.*;

class Solution {
    public int maxDifference(String s) {
        int[] freq = new int[26];

        for (char c : s.toCharArray()) {
            freq[c - 'a']++;
        }

        List<Integer> oddFreqs = new ArrayList<>();
        List<Integer> evenFreqs = new ArrayList<>();

        for (int f : freq) {
            if (f > 0) {
                if (f % 2 == 1) {
                    oddFreqs.add(f);
                } else {
                    evenFreqs.add(f);
                }
            }
        }

        int maxDiff = Integer.MIN_VALUE;

        for (int odd : oddFreqs) {
            for (int even : evenFreqs) {
                maxDiff = Math.max(maxDiff, odd - even);
            }
        }

        return maxDiff;
    }
}
// Example usage:
// public class Main {
//     public static void main(String[] args) {
//         Solution solution = new Solution();
