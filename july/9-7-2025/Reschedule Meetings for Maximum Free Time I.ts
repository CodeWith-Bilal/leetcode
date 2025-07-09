//leetcod daily challange
function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
    const n = startTime.length;
    const durations = startTime.map((s, i) => endTime[i] - s);

    function canAchieve(x: number): boolean {
        let reschedules = 0;
        let currTime = 0;
        let maxGap = 0;

        for (let i = 0; i < n; i++) {
            const duration = durations[i];
            const originalStart = startTime[i];
            const earliestStart = currTime;
            const latestStart = eventTime - duration;

            if (earliestStart > latestStart) return false;

            const scheduledStart = earliestStart;
            const scheduledEnd = scheduledStart + duration;

            if (scheduledStart !== originalStart) {
                reschedules++;
            }

            if (i === 0) {
                maxGap = Math.max(maxGap, scheduledStart - 0);
            } else {
                maxGap = Math.max(maxGap, scheduledStart - currTime);
            }

            currTime = scheduledEnd;

            if (reschedules > k) return false;
        }

        maxGap = Math.max(maxGap, eventTime - currTime);

        return maxGap >= x;
    }

    let left = 0, right = eventTime, answer = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canAchieve(mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}
