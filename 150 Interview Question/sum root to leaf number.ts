function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, currentSum: number): number {
        if (!node) return 0;

        currentSum = currentSum * 10 + node.val;

        if (!node.left && !node.right) {
            return currentSum;
        }

        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    }

    return dfs(root, 0);
}
