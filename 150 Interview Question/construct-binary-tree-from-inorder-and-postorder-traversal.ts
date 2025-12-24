function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const inorderIndexMap = new Map<number, number>();
    inorder.forEach((val, idx) => inorderIndexMap.set(val, idx));

    let postIdx = postorder.length - 1;

    function helper(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const rootVal = postorder[postIdx--];
        const root = new TreeNode(rootVal);

        const idx = inorderIndexMap.get(rootVal)!;

        root.right = helper(idx + 1, right);  
        root.left = helper(left, idx - 1);    

        return root;
    }

    return helper(0, inorder.length - 1);
}