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
