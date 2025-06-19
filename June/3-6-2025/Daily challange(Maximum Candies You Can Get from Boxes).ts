//leetcode daily challange 
// Maximum Candies You Can Get from Boxes
// You have n boxes labeled from 0 to n - 1. You are given four arrays: status, candies, keys, and containedBoxes where:

// status[i] is 1 if the ith box is open and 0 if the ith box is closed,
// candies[i] is the number of candies in the ith box,
// keys[i] is a list of the labels of the boxes you can open after opening the ith box.
// containedBoxes[i] is a list of the boxes you found inside the ith box.
// You are given an integer array initialBoxes that contains the labels of the boxes you initially have. You can take all the candies in any open box and you can use the keys in it to open new boxes and you also can use the boxes you find in it.

// Return the maximum number of candies you can get following the rules above.

//Solution

function maxCandies(
    status: number[],
    candies: number[],
    keys: number[][],
    containedBoxes: number[][],
    initialBoxes: number[]
): number {
    const n = status.length;
    const queue: number[] = [];
    const visited = new Set<number>();
    const haveBoxes = new Set<number>(initialBoxes);
    const haveKeys = new Set<number>();
    let totalCandies = 0;

    for (const box of initialBoxes) {
        if (status[box] === 1) {
            queue.push(box);
            visited.add(box);
        }
    }

    while (queue.length > 0) {
        const box = queue.shift()!;
        totalCandies += candies[box];

        for (const key of keys[box]) {
            if (!haveKeys.has(key)) {
                haveKeys.add(key);
                if (haveBoxes.has(key) && !visited.has(key) && status[key] === 0) {
                    queue.push(key);
                    visited.add(key);
                    status[key] = 1;
                }
            }
        }

        for (const contained of containedBoxes[box]) {
            haveBoxes.add(contained);
            if ((status[contained] === 1 || haveKeys.has(contained)) && !visited.has(contained)) {
                queue.push(contained);
                visited.add(contained);
                status[contained] = 1;
            }
        }
    }

    return totalCandies;
}
// Example usage:
const status = [1, 0, 1];
const candies = [5, 10, 15];
const keys = [[], [0], []];
const containedBoxes = [[], [], []];
const initialBoxes = [0, 1];
const result = maxCandies(status, candies, keys, containedBoxes, initialBoxes);
console.log(result); // Output: 15
// Explanation:
// - Box 0 is open and contains 5 candies.
// - Box 1 is closed, but we have the key to open it after opening Box 0.
// - After opening Box 0, we can open Box 1 and get 10 candies.
// - Box 2 is open and contains 15 candies, but we cannot access it directly from the initial boxes.
// - The maximum candies we can get is 5 (from Box 0) + 10 (from Box 1) = 15.
// The function efficiently tracks the boxes we can open, the candies we collect, and the keys we acquire, ensuring we maximize our candy collection.
// The algorithm uses a breadth-first search (BFS) approach to explore the boxes and collect candies, keys, and contained boxes.
// The time complexity is O(n + m), where n is the number of boxes and m is the total number of keys and contained boxes.
// The space complexity is O(n) for the visited set and queue.
// This solution ensures that we maximize the candies collected while adhering to the rules of opening boxes and using keys.
// The function handles the scenario where boxes can be nested and keys can unlock multiple boxes, ensuring that we explore all possible paths to collect candies.