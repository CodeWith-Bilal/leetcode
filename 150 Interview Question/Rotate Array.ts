// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;

    function reverse(start: number, end: number): void {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);   
    reverse(k, n - 1);   
}
