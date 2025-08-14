//interview question
function myPow(x: number, n: number): number {
    if (n === 0) return 1; 

    let exp = n;
    let base = x;

    if (exp < 0) {
        base = 1 / base;    
        exp = -exp;
    }

    let result = 1;
    while (exp > 0) {
        if (exp % 2 === 1) { 
            result *= base;
        }
        base *= base;       
        exp = Math.floor(exp / 2);
    }

    return result;
}
