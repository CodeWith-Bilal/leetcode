//solution

//leetcode interview question
// Given an integer array nums, in which exactly one element appears once and all the other elements appear exactly three times, return the element that appears once. You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber(nums: number[]): number {
    let ones = 0, twos = 0;
    for (let num of nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    return ones;
}
