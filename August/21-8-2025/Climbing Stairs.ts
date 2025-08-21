//leetcode dinterview question
// You are climbing a staircase. It takes n steps to reach the top.
// 
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
    if (n <= 1) return 1;
    let a = 1; // ways to reach step 1 (or base for n=0)
    let b = 1; // ways to reach step 0
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        b = a;
        a = next;
    }
    return a;
}
