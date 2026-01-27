function totalNQueens(n: number): number {
    let count = 0;

    const cols = new Set<number>();
    const diag1 = new Set<number>(); 
    const diag2 = new Set<number>(); 

    function backtrack(row: number) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col;
            const d2 = row + col;

            if (!cols.has(col) && !diag1.has(d1) && !diag2.has(d2)) {
                cols.add(col);
                diag1.add(d1);
                diag2.add(d2);

                backtrack(row + 1);

                cols.delete(col);
                diag1.delete(d1);
                diag2.delete(d2);
            }
        }
    }

    backtrack(0);
    return count;
}
