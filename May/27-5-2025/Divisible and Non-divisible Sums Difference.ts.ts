// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

function differenceOfSums(n: number, m: number): number {
    let num1 = 0;
    let num2 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            num2 += i; // divisible by m
        } else {
            num1 += i; // not divisible by m
        }
    }

    return num1 - num2;
}
