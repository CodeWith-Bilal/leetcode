//leetcode daily challenge
// question: https://leetcode.com/problems/distribute-candies-among-children-ii/description/?envType=study-plan-v2&envId=top-interview-150
// You are given two positive integers n and limit.

// Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies
function distributeCandies(n: number, limit: number): number {
    let count = 0;

    for (let x = 0; x <= Math.min(n, limit); x++) {
        let remaining = n - x;

        const minY = Math.max(0, remaining - limit);
        const maxY = Math.min(limit, remaining);

        if (minY <= maxY) {
            count += (maxY - minY + 1);
        }
    }

    return count;
}

// Example usage:
const n = 5;
const limit = 2;
const ways = distributeCandies(n, limit);