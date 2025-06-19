// LeetCode Problem: https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
// Problem Statement:
// You are given an array of strings words. Each element of words consists of two lowercase English letters.

// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

// A palindrome is a string that reads the same forward and backward.

//Solution:

function longestPalindrome(words: string[]): number {
    const map = new Map<string, number>();
    let length = 0;
    let hasCenter = false;

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    for (const [word, count] of map) {
        const reversed = word[1] + word[0];

        if (word[0] === word[1]) {
            const pairs = Math.floor(count / 2);
            length += pairs * 4; 
            if (count % 2 === 1) hasCenter = true;
        } else if (map.has(reversed)) {
            const pairCount = Math.min(count, map.get(reversed)!);
            length += pairCount * 4;
            map.set(word, 0);
            map.set(reversed, 0);
        }
    }

    if (hasCenter) length += 2; 

    return length;
}



// Example 1:

// Input: words = ["lc","cl","gg"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.
// Example 2:

// Input: words = ["ab","ty","yt","lc","cl","ab"]
// Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// Note that "lcyttycl" is another longest palindrome that can be created.
// Example 3:

// Input: words = ["cc","ll","xx"]
// Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// Note that "ll" is another longest palindrome that can be created, and so is "xx".
 

// Constraints:

// 1 <= words.length <= 105
// words[i].length == 2
// words[i] consists of lowercase English letters.

 