// // 150 interview questions Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters

//Solution:
function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const digitToLetters: Record<string, string[]> = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    const result: string[] = [];

    const backtrack = (index: number, path: string) => {
        if (path.length === digits.length) {
            result.push(path);
            return;
        }

        const letters = digitToLetters[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };

    backtrack(0, "");
    return result;
}
