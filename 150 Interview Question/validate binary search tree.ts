function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return validate(node.left, min, node.val) &&
               validate(node.right, node.val, max);
    }

    return validate(root, -Infinity, Infinity);
}
