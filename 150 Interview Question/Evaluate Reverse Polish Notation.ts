function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (let token of tokens) {
        if (["+", "-", "*", "/"].includes(token)) {
            const num1 = stack.pop()!;
            const num2 = stack.pop()!;
            let result = 0;

            switch (token) {
                case "+":
                    result = num2 + num1;
                    break;
                case "-":
                    result = num2 - num1;
                    break;
                case "*":
                    result = num2 * num1;
                    break;
                case "/":
                    result = Math.trunc(num2 / num1); // truncate towards zero
                    break;
            }

            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop()!;
}
