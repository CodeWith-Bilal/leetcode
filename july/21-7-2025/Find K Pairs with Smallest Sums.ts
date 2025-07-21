//leetcode 150 inteerview
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const result: number[][] = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

    const minHeap: [number, number, number][] = [];

    let i = 0;
    while (i < nums1.length && i < k) {
        minHeap.push([nums1[i] + nums2[0], i, 0] as [number, number, number]);
        i++;
    }

    // Heapify
    minHeap.sort((a, b) => a[0] - b[0]);

    let count = 0;
    while (count < k && minHeap.length > 0) {
        const [_, i, j] = minHeap.shift()!;
        result.push([nums1[i], nums2[j]]);
        count++;

        if (j + 1 < nums2.length) {
            const newPair = [nums1[i] + nums2[j + 1], i, j + 1] as [number, number, number];

            let left = 0, right = minHeap.length;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (minHeap[mid][0] < newPair[0]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            minHeap.splice(left, 0, newPair);
        }
    }

    return result;
}
// Example usage:
// const nums1 = [1, 7, 11];