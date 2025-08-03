//leetcode daily challange 
// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums
function countHillValley(nums: number[]): number {
    const clean: number[] = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            clean.push(nums[i]);
        }
    }

    let count = 0;
    for (let i = 1; i < clean.length - 1; i++) {
        if (clean[i] > clean[i - 1] && clean[i] > clean[i + 1]) {
            count++; 
        } else if (clean[i] < clean[i - 1] && clean[i] < clean[i + 1]) {
            count++; 
        }
    }

    return count;
}
