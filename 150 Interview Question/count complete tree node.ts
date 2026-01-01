function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    const leftHeight = getHeight(root, true);
    const rightHeight = getHeight(root, false);

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
}

function getHeight(node: TreeNode | null, left: boolean): number {
    let height = 0;
    while (node) {
        height++;
        node = left ? node.left : node.right;
    }
    return height;
}
