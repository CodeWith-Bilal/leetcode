//leetcode 150 interview questions Letter Combinations of a Phone Number
//problem link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

 //Solution:
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
// Example usage:
console.log(combine(4, 2)); // Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(3, 3)); // Output: [[1,2,3]]
console.log(combine(5, 3)); // Output: [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
// console.log(combine(1, 1)); // Output: [[1]]
// console.log(combine(0, 0)); // Output: []
// console.log(combine(5, 0)); // Output: [[]]
// console.log(combine(5, 6)); // Output: []    
