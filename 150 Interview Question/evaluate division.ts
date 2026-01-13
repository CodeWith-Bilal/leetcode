function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]
): number[] {
    const graph: Map<string, [string, number][]> = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a)!.push([b, val]);
        graph.get(b)!.push([a, 1 / val]);
    }

    const result: number[] = [];

    for (const [start, end] of queries) {
        if (!graph.has(start) || !graph.has(end)) {
            result.push(-1.0);
        } else if (start === end) {
            result.push(1.0);
        } else {
            const visited = new Set<string>();
            result.push(dfs(start, end, 1, visited, graph));
        }
    }

    return result;
}

function dfs(
    current: string,
    target: string,
    accProduct: number,
    visited: Set<string>,
    graph: Map<string, [string, number][]>
): number {
    if (current === target) return accProduct;
    visited.add(current);

    for (const [neighbor, weight] of graph.get(current)!) {
        if (!visited.has(neighbor)) {
            const result = dfs(neighbor, target, accProduct * weight, visited, graph);
            if (result !== -1.0) return result;
        }
    }

    return -1.0;
}
