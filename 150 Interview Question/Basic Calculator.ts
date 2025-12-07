// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

function calculate(s: string): number {
    let index = 0;

    function helper(): number {
        const stack: number[] = [];
        let num = 0;
        let sign = 1;

        while (index < s.length) {
            const char = s[index];

            if (char === ' ') {
                index++;
            } else if (isDigit(char)) {
                num = 0;
                while (index < s.length && isDigit(s[index])) {
                    num = num * 10 + parseInt(s[index]);
                    index++;
                }
                stack.push(sign * num);
            } else if (char === '+') {
                sign = 1;
                index++;
            } else if (char === '-') {
                sign = -1;
                index++;
            } else if (char === '(') {
                index++;
                stack.push(sign * helper());
            } else if (char === ')') {
                index++; 
                break;
            }
        }

        return stack.reduce((sum, val) => sum + val, 0);
    }

    function isDigit(char: string): boolean {
        return /\d/.test(char);
    }

    return helper();
}
