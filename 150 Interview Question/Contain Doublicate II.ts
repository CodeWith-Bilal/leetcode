function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i]) && i - numMap.get(nums[i])! <= k) {
            return true;
        }
        numMap.set(nums[i], i);
    }
    
    return false;
}
