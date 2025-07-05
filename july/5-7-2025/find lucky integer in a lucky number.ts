//leetcode daily question
function findLucky(arr: number[]): number {
    const freq: Record<number, number> = {};

    // Count frequencies
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let result = -1;

    // Check for lucky numbers
    for (const num in freq) {
        const value = parseInt(num);
        if (value === freq[value]) {
            result = Math.max(result, value);
        }
    }

    return result;
}
