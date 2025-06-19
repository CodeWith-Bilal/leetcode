//150 interview questions of leetcode
//question:https://leetcode.com/problems/generate-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
//problem statement:
//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//solution:
function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(current: string, open: number, close: number): void {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}
// Example usage:
const n = 3;
const parenthesesCombinations = generateParenthesis(n);
console.log(parenthesesCombinations); // Output: ["((()))","(()())","(())()","()(())","()()()"]
// Explanation: For n = 3, the function generates all combinations of well-formed parentheses.
// Constraints:
// 1 <= n <= 8
// The number of valid combinations grows exponentially with n, but the function efficiently generates them using backtracking.
// The time complexity is O(4^n / sqrt(n)), and the space complexity is O(4^n / sqrt(n)) due to the recursion stack and storage of results.
// Note: The function uses backtracking to explore all possible combinations of parentheses, ensuring that at any point, the number of closing parentheses does not exceed the number of opening parentheses. This guarantees that all generated combinations are valid.
// The `backtrack` function recursively builds the current string of parentheses, adding an opening parenthesis if the count of open parentheses is less than n, and a closing parenthesis if the count of close parentheses is less than the count of open parentheses. When the length of the current string reaches 2 * n, it adds the valid combination to the result array.