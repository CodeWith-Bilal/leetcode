//daily leetcode question
class FindSumPairs {
    private nums1: number[];
    private nums2: number[];
    private map2: Map<number, number>;

    constructor(nums1: number[], nums2: number[]) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.map2 = new Map();

        for (const num of nums2) {
            this.map2.set(num, (this.map2.get(num) || 0) + 1);
        }
    }

    add(index: number, val: number): void {
        const oldVal = this.nums2[index];
        const newVal = oldVal + val;

        // Update map2 frequencies
        this.map2.set(oldVal, this.map2.get(oldVal)! - 1);
        if (this.map2.get(oldVal) === 0) {
            this.map2.delete(oldVal);
        }

        this.map2.set(newVal, (this.map2.get(newVal) || 0) + 1);

        // Update nums2 value
        this.nums2[index] = newVal;
    }

    count(tot: number): number {
        let result = 0;

        for (const num1 of this.nums1) {
            const target = tot - num1;
            result += this.map2.get(target) || 0;
        }

        return result;
    }
}
// Example usage:
const findSumPairs = new FindSumPairs([1, 2, 3], [4, 5, 6]);
console.log(findSumPairs.count(7)); // Output: 3 (1+6, 2+5, 3+4)
findSumPairs.add(1, 1); // nums2 becomes [4, 6, 6]
console.log(findSumPairs.count(7)); // Output: 2 (1+6, 3+4)
findSumPairs.add(2, 2); // nums2 becomes [4, 6, 8]