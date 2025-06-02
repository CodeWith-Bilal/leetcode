//leetcode daily problem
// // 2-6-2025
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children
function candy(ratings: number[]): number {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const ratings = [1, 0, 2];
console.log(candy(ratings)); // Output: 5
// Explanation: The distribution of candies would be [2, 1, 2] which sums to 5.
// Another example:
const ratings2 = [1, 2, 2];
console.log(candy(ratings2)); // Output: 4
// Explanation: The distribution of candies would be [1, 2, 1] which sums to 4.
// Another example:
const ratings3 = [1, 3, 2, 2, 1];
console.log(candy(ratings3)); // Output: 9
// Explanation: The distribution of candies would be [1, 2, 1, 1, 1] which sums to 7.
// Another example:
const ratings4 = [1, 2, 3, 4, 5];
console.log(candy(ratings4)); // Output: 15
// Explanation: The distribution of candies would be [1, 2, 3, 4, 5] which sums to 15.
// Another example:
const ratings5 = [5, 4, 3, 2, 1];
console.log(candy(ratings5)); // Output: 15