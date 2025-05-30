//150 interview questions leetcode
//problem statement: https://leetcode.com/problems/n-queens-ii/
// Question: https://leetcode.com/problems/n-queens-ii/
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

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

// Example usage:
const n = 4;
const result = totalNQueens(n);
console.log(result); // Output: 2
// Explanation: For n = 4, there are two distinct solutions to the n-queens puzzle: 
// 1. [".Q..", "...Q", "Q...", "..Q."]
// 2. ["..Q.", "Q...", "...Q", ".Q.."]
// Note: The function uses backtracking to explore all possible placements of queens on the board, ensuring that no two queens threaten each other by checking columns and diagonals.
// The function returns the total number of distinct solutions found for the given n.
// The function handles the constraints of the n-queens problem efficiently using sets to track occupied columns and diagonals, ensuring that the solution is computed in a reasonable time for larger values of n.
// The time complexity of this solution is O(n!), as it explores all possible placements of queens, and the space complexity is O(n) due to the use of sets for tracking occupied columns and diagonals.
// The solution is efficient and meets the problem's constraints. The backtracking approach ensures that all possible configurations are explored, while the use of sets allows for quick checks of occupied positions, making the solution both effective and elegant.
// The code is well-structured and easy to understand, making it a good solution for the problem.
// The function `totalNQueens` implements the logic to count the number of distinct solutions to the n-queens puzzle using backtracking.
// The `backtrack` function recursively explores each row of the chessboard, attempting to place a queen in each column while checking for conflicts with previously placed queens.
// The function uses sets to track occupied columns and diagonals, ensuring that no two queens threaten each other.
// The base case of the recursion is when all queens have been placed (i.e., when `row` equals `n`), at which point the count of solutions is incremented.
// The function returns the total count of distinct solutions found for the given n.
// The example usage demonstrates how to call the function with a specific value of n and prints the result.