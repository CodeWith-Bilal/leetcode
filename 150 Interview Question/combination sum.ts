function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, current: number[], total: number) {
        if (total === target) {
            result.push([...current]);
            return;
        }
        if (total > target) return;

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, total + candidates[i]); 
            current.pop();  
        }
    }

    backtrack(0, [], 0);
    return result;
}
