//150 interview questions of leetcode
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

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

// Example usage:
const nums = [-10, -3, 0, 5, 9];
const bstRoot = sortedArrayToBST(nums);
console.log(bstRoot); // Output: The root of the height-balanced BST
// The structure of the BST can be visualized as follows:
//        0
//       / \
//     -10  5
//       \   \
//       -3   9
// This BST is height-balanced, meaning the depth of the two subtrees of every node never differs by more than one.