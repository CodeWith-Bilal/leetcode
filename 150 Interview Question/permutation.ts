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
