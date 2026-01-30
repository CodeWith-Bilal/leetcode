function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;

    function buildBST(start: number, end: number): TreeNode | null {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = buildBST(start, mid - 1);
        node.right = buildBST(mid + 1, end);

        return node;
    }

    return buildBST(0, nums.length - 1);
}
