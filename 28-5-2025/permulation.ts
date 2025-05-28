//150 interview questions leetcode
// Topics
// premium lock icon
// Companies
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(current: number[], used: Set<number>) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let num of nums) {
            if (used.has(num)) continue;

            current.push(num);
            used.add(num);

            backtrack(current, used);

            current.pop();
            used.delete(num);
        }
    }

    backtrack([], new Set());
    return result;
}
