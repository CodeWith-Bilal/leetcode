//Daily leet code challenge
//Maximize the Number of Target Nodes After Connecting Trees I
// There exist two undirected trees with n and m nodes, with distinct labels in ranges [0, n - 1] and [0, m - 1], respectively.

// You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, respectively, where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the first tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the second tree. You are also given an integer k.

// Node u is target to node v if the number of edges on the path from u to v is less than or equal to k. Note that a node is always target to itself.

// Return an array of n integers answer, where answer[i] is the maximum possible number of nodes target to node i of the first tree if you have to connect one node from the first tree to another node in the second tree.

// Note that queries are independent from each other. That is, for every query you will remove the added edge before proceeding to the next query.

 //solution:

 function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    function buildAdj(n: number, edges: number[][]): Map<number, number[]> {
        const adj = new Map<number, number[]>();
        for (let i = 0; i < n; i++) adj.set(i, []);
        for (const [u, v] of edges) {
            adj.get(u)!.push(v);
            adj.get(v)!.push(u);
        }
        return adj;
    }

    function bfsCountWithinK(start: number, adj: Map<number, number[]>, k: number): number[] {
        const dist = Array(adj.size).fill(Infinity);
        const count = Array(k + 1).fill(0); // count[d] = #nodes at distance d
        const queue: [number, number][] = [[start, 0]];
        dist[start] = 0;
        count[0] = 1;

        while (queue.length > 0) {
            const [u, d] = queue.shift()!;
            if (d === k) continue;
            for (const v of adj.get(u)!) {
                if (dist[v] > d + 1) {
                    dist[v] = d + 1;
                    count[d + 1]++;
                    queue.push([v, d + 1]);
                }
            }
        }

        const prefixSum = Array(k + 1).fill(0);
        prefixSum[0] = count[0];
        for (let i = 1; i <= k; i++) {
            prefixSum[i] = prefixSum[i - 1] + count[i];
        }
        return prefixSum;
    }

    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const adj1 = buildAdj(n, edges1);
    const adj2 = buildAdj(m, edges2);

    const reach2 = Array.from({ length: m }, (_, i) => bfsCountWithinK(i, adj2, k));

    const answer: number[] = [];

    for (let i = 0; i < n; i++) {
        const reach1 = bfsCountWithinK(i, adj1, k); 
        let maxReach = 0;
        for (let j = 0; j < m; j++) {
            let total = 0;
            for (let d1 = 0; d1 <= k; d1++) {
                const d2 = k - d1 - 1; 
                if (d2 < 0) continue;
                const r1 = reach1[d1];
                const r2 = d2 >= 0 ? reach2[j][Math.min(d2, k)] : 0;
                total = r1 + r2;
                maxReach = Math.max(maxReach, total);
            }
        }
        answer.push(maxReach);
    }

    return answer;
}
