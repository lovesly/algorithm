/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    const helper = (node) => {
        if (node.left) helper(node.left);
        if (node.right) helper(node.right);
        res.push(node.val);
    };
    if (root) helper(root);
    return res;
};