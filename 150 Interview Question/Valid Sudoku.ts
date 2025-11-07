function isValidSudoku(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue; 

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
}
