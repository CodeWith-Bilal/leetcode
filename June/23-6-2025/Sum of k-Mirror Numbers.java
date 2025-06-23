//link: https://leetcode.com/problems/sum-of-k-mirror-numbers/

import java.util.*;

class Solution {
    public long kMirror(int k, int n) {
        long sum = 0;
        int count = 0;
        int length = 1;

        while (count < n) {
            for (long base10Palindrome : generatePalindromes(length)) {
                String baseK = toBaseK(base10Palindrome, k);
                if (isPalindrome(baseK)) {
                    sum += base10Palindrome;
                    count++;
                    if (count == n) break;
                }
            }
            length++;
        }

        return sum;
    }

    private List<Long> generatePalindromes(int length) {
        List<Long> result = new ArrayList<>();
        int half = (length + 1) / 2;
        long start = (long) Math.pow(10, half - 1);
        long end = (long) Math.pow(10, half);

        for (long i = start; i < end; i++) {
            String firstHalf = Long.toString(i);
            String secondHalf = new StringBuilder(firstHalf.substring(0, length % 2 == 0 ? firstHalf.length() : firstHalf.length() - 1)).reverse().toString();
            result.add(Long.parseLong(firstHalf + secondHalf));
        }

        return result;
    }

    private String toBaseK(long num, int k) {
        StringBuilder sb = new StringBuilder();
        while (num > 0) {
            sb.append(num % k);
            num /= k;
        }
        return sb.reverse().toString();
    }

    private boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right)
            if (s.charAt(left++) != s.charAt(right--))
                return false;
        return true;
    }
}
