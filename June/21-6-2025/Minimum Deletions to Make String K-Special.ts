//leetcode daily challenge
// You are given a string word and an integer k.

// We consider word to be k-special if |freq(word[i]) - freq(word[j])| <= k for all indices i and j in the string.

// Here, freq(x) denotes the frequency of the character x in word, and |y| denotes the absolute value of y.

// Return the minimum number of characters you need to delete to make word k-special.
function minimumDeletions(word: string, k: number): number {
    const freqMap: Record<string, number> = {};

    for (const char of word) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    const freqs: number[] = Object.values(freqMap).sort((a, b) => a - b);
    let minDeletions = Infinity;

    for (let i = 0; i < freqs.length; i++) {
        const t = freqs[i];
        const upper = t + k;
        let deletions = 0;

        for (const f of freqs) {
            if (f < t) {
                deletions += f;
            } else if (f > upper) {
                deletions += f - upper; 
            }
        }

        minDeletions = Math.min(minDeletions, deletions);
    }

    return minDeletions;
}
// Example usage:
console.log(minimumDeletions("aaabbbcc", 2)); // Output: 2