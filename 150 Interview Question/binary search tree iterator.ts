class BSTIterator {
    private stack: TreeNode[] = [];

    constructor(root: TreeNode | null) {
        this._pushLeft(root);
    }

    private _pushLeft(node: TreeNode | null) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next(): number {
        const node = this.stack.pop()!;
        if (node.right) {
            this._pushLeft(node.right);
        }
        return node.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
}
