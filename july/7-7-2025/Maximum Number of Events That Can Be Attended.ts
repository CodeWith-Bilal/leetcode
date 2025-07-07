//leetcode daily challange
function maxEvents(events: number[][]): number {
    events.sort((a, b) => a[0] - b[0]); // Sort events by start day

    const minHeap: number[] = [];
    let day = 0;
    let i = 0;
    let count = 0;

    const heapifyUp = () => {
        let idx = minHeap.length - 1;
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (minHeap[parent] > minHeap[idx]) {
                [minHeap[parent], minHeap[idx]] = [minHeap[idx], minHeap[parent]];
                idx = parent;
            } else break;
        }
    };

    const heapifyDown = () => {
        let idx = 0;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < minHeap.length && minHeap[left] < minHeap[smallest]) smallest = left;
            if (right < minHeap.length && minHeap[right] < minHeap[smallest]) smallest = right;

            if (smallest !== idx) {
                [minHeap[smallest], minHeap[idx]] = [minHeap[idx], minHeap[smallest]];
                idx = smallest;
            } else break;
        }
    };

    const push = (val: number) => {
        minHeap.push(val);
        heapifyUp();
    };

    const pop = (): number => {
        const val = minHeap[0];
        const last = minHeap.pop()!;
        if (minHeap.length) {
            minHeap[0] = last;
            heapifyDown();
        }
        return val;
    };

    const top = (): number => minHeap[0];

    const n = events.length;
    let maxDay = 0;
    for (let [_, end] of events) maxDay = Math.max(maxDay, end);

    for (day = 1; day <= maxDay; day++) {
        // Add all events starting today
        while (i < n && events[i][0] === day) {
            push(events[i][1]);
            i++;
        }

        // Remove expired events
        while (minHeap.length > 0 && top() < day) {
            pop();
        }

        // Attend event that ends earliest
        if (minHeap.length > 0) {
            pop();
            count++;
        }
    }

    return count;
}
// Example usage:
const events = [[1, 2], [2, 3], [3, 4], [1, 2]];
console.log(maxEvents(events)); // Output: 4 (attend all events)