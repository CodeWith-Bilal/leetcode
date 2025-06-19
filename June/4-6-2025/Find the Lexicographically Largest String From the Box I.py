# //daily leetcode challenge
# // You are given a string word, and an integer numFriends.

# // Alice is organizing a game for her numFriends friends. There are multiple rounds in the game, where in each round:

# // word is split into numFriends non-empty strings, such that no previous round has had the exact same split.
# // All the split words are put into a box.
# // Find the lexicographically largest string from the box after all the rounds are finished.

from itertools import combinations

class Solution(object):
    def answerString(self, word, numFriends):
        """
        :type word: str
        :type numFriends: int
        :rtype: str
        """
        n = len(word)
        if numFriends > n:
            return "" 
        
        max_word = ""
        for cuts in combinations(range(1, n), numFriends - 1):
            prev = 0
            for cut in cuts:
                max_word = max(max_word, word[prev:cut])  
                prev = cut
            max_word = max(max_word, word[prev:])
        return max_word
