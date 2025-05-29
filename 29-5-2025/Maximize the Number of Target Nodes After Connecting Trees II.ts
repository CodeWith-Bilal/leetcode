//daily leetcode challenge
// 29-5-2025
//  Maximize the Number of Target Nodes After Connecting Trees II
// There exist two undirected trees with n and m nodes, labeled from [0, n - 1] and [0, m - 1], respectively.

// You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, respectively, where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the first tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the second tree.

// Node u is target to node v if the number of edges on the path from u to v is even. Note that a node is always target to itself.

// Return an array of n integers answer, where answer[i] is the maximum possible number of nodes that are target to node i of the first tree if you had to connect one node from the first tree to another node in the second tree.

// Note that queries are independent from each other. That is, for every query you will remove the added edge before proceeding to the next query.

function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
    function getDepths(n: number, edges: number[][]): [number[], number, number] {
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const depth = Array(n).fill(-1);
        const queue: number[] = [0];
        depth[0] = 0;
        let even = 1, odd = 0;

        while (queue.length) {
            const node = queue.shift()!;
            for (const nei of adj[node]) {
                if (depth[nei] === -1) {
                    depth[nei] = depth[node] + 1;
                    if (depth[nei] % 2 === 0) even++;
                    else odd++;
                    queue.push(nei);
                }
            }
        }

        return [depth, even, odd];
    }

    const n = edges1.length + 1;
    const m = edges2.length + 1;

    const [depth1, even1, odd1] = getDepths(n, edges1);
    const [depth2, even2, odd2] = getDepths(m, edges2);

    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        if (depth1[i] % 2 === 0) {
            const opt1 = even1 + even2; 
            const opt2 = odd1 + odd2;  
            result.push(Math.max(opt1, opt2));
        } else {
            const opt1 = odd1 + even2;  
            const opt2 = even1 + odd2;  
            result.push(Math.max(opt1, opt2));
        }
    }

    return result;
}
