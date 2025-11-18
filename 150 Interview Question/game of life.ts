function gameOfLife(board: number[][]): void {
    const m = board.length;
    const n = board[0].length;

    const directions = [
        [-1, -1], [-1, 0], [-1, 1], 
        [0, -1],         [0, 1], 
        [1, -1], [1, 0], [1, 1]   
    ];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = 0;

            for (const [dx, dy] of directions) {
                const x = i + dx, y = j + dy;
                if (x >= 0 && x < m && y >= 0 && y < n && (board[x][y] === 1 || board[x][y] === 2)) {
                    liveNeighbors++;
                }
            }

            if (board[i][j] === 1) { 
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 2; 
                }
            } else if (board[i][j] === 0) {
                if (liveNeighbors === 3) {
                    board[i][j] = 3; 
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 2) board[i][j] = 0;
            if (board[i][j] === 3) board[i][j] = 1;
        }
    }
}
