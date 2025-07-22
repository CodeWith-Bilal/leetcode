function maximumUniqueSubarray(nums: number[]): number {
    const seen = new Set<number>();
    let left = 0;
    let currentSum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        currentSum += nums[right];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
