function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const result: number[] = [];

    for (const spell of spells) {
        const minPotion = Math.ceil(success / spell);
        let left = 0, right = m - 1, idx = m;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] >= minPotion) {
                idx = mid;a
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(m - idx);
    }

    return result;
}
