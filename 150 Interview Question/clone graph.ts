function cloneGraph(node: _Node | null): _Node | null {
    if (!node) return null;

    const visited = new Map<_Node, _Node>();

    function dfs(curr: _Node): _Node {
        if (visited.has(curr)) {
            return visited.get(curr)!;
        }

        const clone = new _Node(curr.val);
        visited.set(curr, clone);

        for (const neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
}
