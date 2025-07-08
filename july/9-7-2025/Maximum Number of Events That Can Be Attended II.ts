//daily leetcode challange
function maxValue(events: number[][], k: number): number {
    events.sort((a, b) => a[0] - b[0]);

    const n = events.length;
    const memo = new Map<string, number>();

    function findNextIndex(end: number): number {
        let low = 0, high = n;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (events[mid][0] > end) high = mid;
            else low = mid + 1;
        }
        return low;
    }

    function dp(i: number, remaining: number): number {
        if (i === n || remaining === 0) return 0;

        const key = `${i}-${remaining}`;
        if (memo.has(key)) return memo.get(key)!;

        let res = dp(i + 1, remaining);

        const [start, end, value] = events[i];
        const nextIdx = findNextIndex(end);
        res = Math.max(res, value + dp(nextIdx, remaining - 1));

        memo.set(key, res);
        return res;
    }

    return dp(0, k);
}
