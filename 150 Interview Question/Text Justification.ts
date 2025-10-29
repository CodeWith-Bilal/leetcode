function fullJustify(words: string[], maxWidth: number): string[] {
    let res: string[] = [];
    let lineWords: string[] = [];
    let currentWidth = 0;

    for (let word of words) {
        if (currentWidth + word.length + lineWords.length > maxWidth) {
            res.push(justify(lineWords, maxWidth, false));
            lineWords = [];
            currentWidth = 0;
        }
        lineWords.push(word);
        currentWidth += word.length;
    }
    
    res.push(justify(lineWords, maxWidth, true));
    return res;
}

function justify(words: string[], maxWidth: number, isLastLine: boolean): string {
    if (words.length === 1 || isLastLine) {
        return words.join(" ") + " ".repeat(maxWidth - words.join(" ").length);
    }

    let totalSpaces = maxWidth - words.reduce((sum, word) => sum + word.length, 0);
    let gaps = words.length - 1;
    let spacePerGap = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;

    let justifiedText = "";
    for (let i = 0; i < words.length; i++) {
        justifiedText += words[i];
        if (i < gaps) {
            justifiedText += " ".repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
        }
    }
    return justifiedText;
}
