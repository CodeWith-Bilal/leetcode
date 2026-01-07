function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let minDiff = Infinity;

    function inOrder(node: TreeNode | null): void {
        if (!node) return;

        inOrder(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }
        prev = node.val;

        inOrder(node.right);
    }

    inOrder(root);
    return minDiff;
}
