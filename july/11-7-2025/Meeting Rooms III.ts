// LeetCode 2451. Meeting Rooms III
// https://leetcode.com/problems/meeting-rooms-iii/
/**
 * @param {number} n - number of meeting rooms
 * @param {number[][]} meetings - array of meetings where each meeting is [start, end]
 * @return {number} - the room that has the most meetings
 */

function mostBooked(n: number, meetings: number[][]): number {
    // Sort meetings by start time
    meetings.sort((a, b) => a[0] - b[0]);

    // Min-heap for available rooms (room number)
    const available: number[] = [];
    for (let i = 0; i < n; i++) available.push(i);

    // Min-heap for ongoing meetings: [endTime, room]
    const ongoing: [number, number][] = [];

    // Count of meetings per room
    const count = new Array(n).fill(0);

    // Use a pointer to iterate meetings
    for (const [start, end] of meetings) {
        // Free up rooms whose meetings have ended before current meeting starts
        while (ongoing.length && ongoing[0][0] <= start) {
            // Pop the earliest ending meeting
            const [_, room] = ongoing.shift()!;
            // Insert room back to available heap
            available.push(room);
            available.sort((a, b) => a - b); // Keep available rooms sorted
        }

        if (available.length) {
            // Assign to lowest available room
            const room = available.shift()!;
            count[room]++;
            // Add to ongoing meetings
            insertOngoing([end, room], ongoing);
        } else {
            // No room available, delay meeting
            // Pop the earliest ending meeting
            const [endTime, room] = ongoing.shift()!;
            // Meeting starts when room is free
            const duration = end - start;
            const newEnd = endTime + duration;
            count[room]++;
            insertOngoing([newEnd, room], ongoing);
        }
    }

    // Find room with max meetings
    let max = -1, res = 0;
    for (let i = 0; i < n; i++) {
        if (count[i] > max) {
            max = count[i];
            res = i;
        }
    }
    return res;

    // Helper: insert into ongoing heap sorted by endTime, room
    function insertOngoing(meeting: [number, number], heap: [number, number][]) {
        heap.push(meeting);
        heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    }
}
// Example usage:
console.log(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4], [5, 8]])); // Output: 0
console.log(mostBooked(3, [[0, 10], [1, 5], [2, 7], [3, 4], [5, 8], [6, 9]])); // Output: 0
console.log(mostBooked(1, [[0, 10], [5, 15], [10, 20]])); // Output: 0
console.log(mostBooked(2, [[0, 5], [1, 3], [2, 4], [3, 6], [4, 8]])); // Output: 0
console.log(mostBooked(3, [[0, 5], [1, 3], [2, 4], [3, 6], [4, 8], [5, 10]])); // Output: 0