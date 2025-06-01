//150 interview questions of leetcode
//Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(r: number, c: number, i: number): boolean {
        if (i === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) {
            return false;
        }

        const temp = board[r][c];
        board[r][c] = "#"; // mark as visited

        const found = dfs(r + 1, c, i + 1) ||
                      dfs(r - 1, c, i + 1) ||
                      dfs(r, c + 1, i + 1) ||
                      dfs(r, c - 1, i + 1);

        board[r][c] = temp; // backtrack

        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example usage:
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
 