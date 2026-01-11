function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    if (m === 0 || n === 0) return;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(r: number, c: number): void {
        if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
        board[r][c] = '#'; 
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O'; 
            }
        }
    }
}
