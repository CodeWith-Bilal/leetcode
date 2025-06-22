//leetcode daily challenge
// You are given a string s and an integer k.
// A string s can be partitioned into groups of size k using the following procedure:

// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each element can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = [];

    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);

        if (group.length < k) {
            group += fill.repeat(k - group.length);
        }

        result.push(group);
    }

    return result;
}
// Example usage:
console.log(divideString("abcdefghi", 3, "x")); // Output: ["abc", "def", "ghi", "xxx"]
console.log(divideString("abcdefgh", 4, "z")); // Output: ["abcd