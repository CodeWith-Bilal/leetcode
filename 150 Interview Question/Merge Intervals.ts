function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (current[1] >= start) {
            current[1] = Math.max(current[1], end);
        } else {
            merged.push(current);
            current = intervals[i];
        }
    }

    merged.push(current);

    return merged;
}

