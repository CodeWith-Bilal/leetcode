function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const countMap = new Map<string, number>();

    for (const char of s) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!countMap.has(char)) return false;
        countMap.set(char, countMap.get(char)! - 1);
        if (countMap.get(char) === 0) {
            countMap.delete(char);
        }
    }

    return countMap.size === 0;
}
