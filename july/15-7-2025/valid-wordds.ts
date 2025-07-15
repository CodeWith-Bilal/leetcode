//leetcode dailychallenge
// Question: https://leetcode.com/problems/valid-word-abbreviation/
// Given a string word and an abbreviation abbr, return whether the string matches with the given
function isValid(word: string): boolean {
    if (word.length < 3) return false;

    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let hasVowel = false;
    let hasConsonant = false;

    for (let char of word) {
        if (!/[a-zA-Z0-9]/.test(char)) return false;

        const lowerChar = char.toLowerCase();
        if (/[a-z]/i.test(char)) {
            if (vowelSet.has(lowerChar)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
}
// abbreviation. An abbreviation is a string that can be formed by replacing some characters in the word with digits.
// The abbreviation must follow these rules:
// 1. The abbreviation must not be empty.
// 2. The abbreviation must not contain any digits.
// 3. The abbreviation must not contain any characters that are not present in the word.
// 4. The abbreviation must not contain any characters that are not present in the word in the same order.
// 5. The abbreviation must not contain any characters that are not present in the word in
//    the same case.
// 6. The abbreviation must not contain any characters that are not present in the word in the same position.
// 7. The abbreviation must not contain any characters that are not present in the word in the same position in the same case.
// 8. The abbreviation must not contain any characters that are not present in the word in