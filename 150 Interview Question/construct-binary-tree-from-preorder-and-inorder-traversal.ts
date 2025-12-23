function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;

    const inorderIndexMap = new Map<number, number>();
    inorder.forEach((val, idx) => inorderIndexMap.set(val, idx));

    let preIndex = 0;

    function helper(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        const index = inorderIndexMap.get(rootVal)!;

        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
}
