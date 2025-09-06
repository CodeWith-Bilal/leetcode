#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
    long minOperations(vector<vector<int>>& queries) {
        long totalOperations = 0;

        for (const auto& query : queries) {
            int l = query[0], r = query[1];
            long operations = 0;

            for (int num = l; num <= r; ++num) {
                int current = num;
                while (current > 0) {
                    current = floor(current / 4);
                    ++operations;
                }
            }

            totalOperations += operations;
        }

        return totalOperations;
    }
};