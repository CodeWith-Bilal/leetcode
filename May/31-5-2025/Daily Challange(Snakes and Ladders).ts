//leetcode daily challenge: https://leetcode.com/problems/snakes-and-ladders/
// Question: https://leetcode.com/problems/snakes-and-ladders/
//problem: Given an n x n board where the cells are labeled from 1 to n^2 in a Boustrophedon style, find the minimum number of moves required to reach the last cell (n^2) from the first cell (1). You can move either by rolling a die or by using ladders or snakes that are present on the board.
// You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.

// You start on square 1 of the board. In each move, starting from square curr, do the following:

// Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
// This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
// If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
// The game ends when you reach the square n2.
// A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 are not the starting points of any snake or ladder.

// Note that you only take a snake or ladder at most once per dice roll. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

// For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
// Return the least number of dice rolls required to reach the square n2. If it is not possible to reach the square, return -1.

//solution:
function snakesAndLadders(board: number[][]): number {
    const n = board.length;

    const flattenBoard = new Array(n * n).fill(-1);
    let i = n - 1, j = 0, index = 0;
    let isLeftToRight = true;

    while (index < n * n) {
        flattenBoard[index] = board[i][j];
        index++;

        if (isLeftToRight) {
            j++;
            if (j === n) {
                j = n - 1;
                i--;
                isLeftToRight = false;
            }
        } else {
            j--;
            if (j === -1) {
                j = 0;
                i--;
                isLeftToRight = true;
            }
        }
    }

    const visited = new Array(n * n).fill(false);
    const queue: [number, number][] = [[0, 0]]; 
    visited[0] = true;

    while (queue.length) {
        const [curr, moves] = queue.shift()!;
        for (let roll = 1; roll <= 6; roll++) {
            let next = curr + roll;
            if (next >= n * n) break;

            if (flattenBoard[next] !== -1) {
                next = flattenBoard[next] - 1;
            }

            if (next === n * n - 1) return moves + 1;

            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, moves + 1]);
            }
        }
    }

    return -1; 
}
// Example usage:
const board = [ [-1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1],  ]
const result = snakesAndLadders(board);
console.log(result); // Output: -1 (or the minimum number of moves if reachable)