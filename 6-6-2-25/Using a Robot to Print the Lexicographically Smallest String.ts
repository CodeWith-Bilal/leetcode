//leetcode daily challange 
// You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

// Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
// Remove the last character of a string t and give it to the robot. The robot will write this character on paper.
// Return the lexicographically smallest string that can be written on the paper.
function robotWithString(s: string): string {
    const n = s.length;
    const minChar: string[] = Array(n);
    
    minChar[n - 1] = s[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        minChar[i] = s[i] < minChar[i + 1] ? s[i] : minChar[i + 1];
    }

    const stack: string[] = [];
    let result = "";
    let i = 0;

    while (i < n || stack.length) {
        while (i < n && (stack.length === 0 || stack[stack.length - 1] > minChar[i])) {
            stack.push(s[i]);
            i++;
        }

        result += stack.pop();
    }

    return result;
}
// Example usage:
console.log(robotWithString("zza")); // Output: "azz"