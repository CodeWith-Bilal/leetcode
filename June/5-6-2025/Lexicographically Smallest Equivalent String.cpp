// leet code daily challange
// Problem: 1061. Lexicographically Smallest Equivalent String
// Difficulty: Medium
// Tags: Union Find
// You are given two strings of the same length s1 and s2 and a string baseStr.

// We say s1[i] and s2[i] are equivalent characters.

// For example, if s1 = "abc" and s2 = "cde", then we have 'a' == 'c', 'b' == 'd', and 'c' == 'e'.
// Equivalent characters follow the usual rules of any equivalence relation:

// Reflexivity: 'a' == 'a'.
// Symmetry: 'a' == 'b' implies 'b' == 'a'.
// Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'.
// For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab" are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.

// Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.

#include <string>
#include <vector>
#include <functional>

 class Solution {
public:
    std::string smallestEquivalentString(std::string s1, std::string s2, std::string baseStr) {
        std::vector<int> parent(26);
        
        for (int i = 0; i < 26; ++i) {
            parent[i] = i;
        }
        
        std::function<int(int)> find = [&](int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        };
        
        auto unite = [&](int x, int y) {
            int px = find(x);
            int py = find(y);
            if (px == py) return;
            if (px < py) {
                parent[py] = px;
            } else {
                parent[px] = py;
            }
        };
        
        for (int i = 0; i < s1.length(); ++i) {
            unite(s1[i] - 'a', s2[i] - 'a');
        }
        
        std::string result;
        for (char ch : baseStr) {
            result += (char)(find(ch - 'a') + 'a');
        }
        
        return result;
    }
};
