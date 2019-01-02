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
var preorderTraversal = function(root) {
    const res = [];
    // helper function
    function helper(node) {
        if (node) {
            res.push(node.val);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }
    }
    helper(root);
    return res;
};