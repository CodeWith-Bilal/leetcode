//daily leetcode challenge
// Question: https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
// You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.
//problem statement: https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
// You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.

// The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from i, then edges[i] == -1.

// You are also given two integers node1 and node2.

// Return the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized. If there are multiple answers, return the node with the smallest index, and if no possible answer exists, return -1.

// Note that edges may contain cycles.

function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const n = edges.length;

    function getDistances(start: number): number[] {
        const dist = new Array(n).fill(-1);
        let curr = start, d = 0;
        while (curr !== -1 && dist[curr] === -1) {
            dist[curr] = d++;
            curr = edges[curr];
        }
        return dist;
    }

    const dist1 = getDistances(node1);
    const dist2 = getDistances(node2);

    let minDist = Number.MAX_SAFE_INTEGER;
    let result = -1;

    for (let i = 0; i < n; i++) {
        if (dist1[i] !== -1 && dist2[i] !== -1) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDist) {
                minDist = maxDist;
                result = i;
            }
        }
    }

    return result;
}


// Example usage:
const edges = [2, 2, 3, -1, 4, 5, -1];
const node1 = 0;
const node2 = 1;
// const result = closestMeetingNode(edges, node1, node2);
console.log(result); // Output: 2
// Explanation: The closest node that can be reached from both node1 and node2 is node 2, with distances 2 and 1 respectively. The maximum distance is 2, which is minimized.
// Note: The function handles cycles in the graph by using a visited array to track nodes that have already been processed, ensuring that we do not enter an infinite loop.
// The function returns the index of the closest meeting node or -1 if no such node exists. 