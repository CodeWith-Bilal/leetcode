function flatten(root: TreeNode | null): void {
    if (!root) return;

    let stack: TreeNode[] = [root];
    let prev: TreeNode | null = null;

    while (stack.length > 0) {
        const curr = stack.pop()!;

        if (prev) {
            prev.left = null;  
            prev.right = curr; 
        }

        
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);

        prev = curr;
    }
}
