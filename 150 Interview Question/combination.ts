function combine(n: number, k: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, current: number[]) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);              
            backtrack(i + 1, current);    
            current.pop();               
        }
    }

    backtrack(1, []);
    return result;
}
