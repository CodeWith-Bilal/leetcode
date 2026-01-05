function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];  

    let result: number[][] = [];
    let queue: TreeNode[] = [root];

    while (queue.length > 0) {
        let levelSize = queue.length; 
        let levelValues: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()!; 
            levelValues.push(node.val);  

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelValues);  
    }

    return result;
}
