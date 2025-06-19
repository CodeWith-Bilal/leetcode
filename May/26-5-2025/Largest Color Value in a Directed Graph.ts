//leetcode daily challenge 26-5-2025
// // 2369. Largest Color Value in a Directed Graph
// There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.

// You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.

// A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.

// Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

//solution:
function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length;
    const graph: number[][] = Array.from({ length: n }, () => []);
    const indegree: number[] = Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    const dp: number[][] = Array.from({ length: n }, () => Array(26).fill(0));
    const queue: number[] = [];

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let visited = 0;
    let maxColorValue = 0;

    while (queue.length > 0) {
        const u = queue.shift()!;
        const colorIndex = colors.charCodeAt(u) - 97;
        dp[u][colorIndex]++;
        maxColorValue = Math.max(maxColorValue, dp[u][colorIndex]);
        visited++;

        for (const v of graph[u]) {
            for (let c = 0; c < 26; c++) {
                dp[v][c] = Math.max(dp[v][c], dp[u][c]);
            }
            indegree[v]--;
            if (indegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    return visited === n ? maxColorValue : -1; 
}
// Example usage:
console.log(largestPathValue("abaca", [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4]])); // Output: 3
console.log(largestPathValue("a", [[0, 0]])); // Output: -1
console.log(largestPathValue("a", [[0, 1], [1, 2], [2, 0]])); // Output: -1
// Example usage with more complex graph
console.log(largestPathValue("abc", [[0, 1], [1, 2], [2, 0]])); // Output: -1
console.log(largestPathValue("aabbcc", [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]])); // Output: 2
// Example usage with disconnected graph
console.log(largestPathValue("abc", [[0, 1], [2, 3]])); // Output: 1
// Example usage with no edges

console.log(largestPathValue("abc", [])); // Output: 1
// Example usage with single node
console.log(largestPathValue("a", [])); // Output: 1
// Example usage with multiple edges to the same node
console.log(largestPathValue("a", [[0, 0], [0, 0]])); // Output: 1
