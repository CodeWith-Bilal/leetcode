//leet code daily challenge
// You are given a string s. It may contain any number of '*' characters. Your task is to remove all '*' characters.

// While there is a '*', do the following operation:

// Delete the leftmost '*' and the smallest non-'*' character to its left. If there are several smallest characters, you can delete any of them.
// Return the lexicographically smallest resulting string after removing all '*' characters.
//SOLUTION
import java.util.*;

class Solution {
    public String clearStars(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char c : s.toCharArray()) {
            if (c != '*') {
                stack.addLast(c); // push character
            } else {
                if (!stack.isEmpty()) {
                    int indexToRemove = -1;
                    char minChar = 'z' + 1;
                    int i = 0;
                    for (char ch : stack) {
                        if (ch < minChar) {
                            minChar = ch;
                            indexToRemove = i;
                        }
                        i++;
                    }

                    Deque<Character> newStack = new ArrayDeque<>();
                    i = 0;
                    for (char ch : stack) {
                        if (i != indexToRemove) {
                            newStack.addLast(ch);
                        }
                        i++;
                    }
                    stack = newStack;
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for (char c : stack) {
            sb.append(c);
        }
        return sb.toString();
    }
}
public class LexicographicallyMinimumStringAfterRemovingStars {
    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "ab*c*d";
        System.out.println(solution.clearStars(s)); // Output: "ad"
    }
}