function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";

    const need: Map<string, number> = new Map();
    const window: Map<string, number> = new Map();

    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let minLen = Infinity, minStart = 0;
    let valid = 0;

    while (right < s.length) {
        let charRight = s[right];
        right++;

        if (need.has(charRight)) {
            window.set(charRight, (window.get(charRight) || 0) + 1);
            if (window.get(charRight) === need.get(charRight)) {
                valid++;
            }
        }

        while (valid === need.size) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }

            let charLeft = s[left];
            left++;

            if (need.has(charLeft)) {
                if (window.get(charLeft) === need.get(charLeft)) {
                    valid--;
                }
                window.set(charLeft, (window.get(charLeft) || 0) - 1);
            }
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

