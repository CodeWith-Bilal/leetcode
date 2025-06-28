//leetcode daily challenge
// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
function maxSubsequence(nums: number[], k: number): number[] {
    // Pair each number with its index
    const indexedNums = nums.map((num, idx) => ({ num, idx }));

    // Sort by number in descending order
    indexedNums.sort((a, b) => b.num - a.num);

    // Take the top k elements
    const topK = indexedNums.slice(0, k);

    // Sort the selected elements by their original index to maintain order
    topK.sort((a, b) => a.idx - b.idx);

    // Extract the values
    return topK.map(item => item.num);
}
// Example usage:
console.log(maxSubsequence([3, 4, 3, 2, 4, 1], 3)); // Output: [4, 4, 3]
console.log(maxSubsequence([-1, -2, 3, 4], 3)); // Output: [-1, 3, 4]
console.log(maxSubsequence([2, 1, 3], 2)); // Output