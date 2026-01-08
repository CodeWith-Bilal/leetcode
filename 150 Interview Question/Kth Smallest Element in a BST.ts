function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = -1;

    function inorder(node: TreeNode | null): void {
        if (!node || count >= k) return;

        inorder(node.left);
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        inorder(node.right);
    }

    inorder(root);
    return result;
}
