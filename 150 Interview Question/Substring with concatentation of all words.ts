function findSubstring(s: string, words: string[]): number[] {
    if (!s || words.length === 0) return [];

    const wordLength = words[0].length;
    const numWords = words.length;
    const totalLength = wordLength * numWords;
    const wordCount = new Map<string, number>();
    const result: number[] = [];

    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = new Map<string, number>();
        let j = 0;

        while (j < numWords) {
            const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                if (seen.get(word)! > wordCount.get(word)!) {
                    break;
                }
            } else {
                break;
            }
            j++;
        }

        if (j === numWords) {
            result.push(i);
        }
    }

    return result;
}
