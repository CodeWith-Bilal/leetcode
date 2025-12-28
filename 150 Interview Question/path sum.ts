function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    const newTarget = targetSum - root.val;

    return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}
