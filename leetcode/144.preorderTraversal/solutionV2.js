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
    // loop
    const queue = [];
    queue.push(root);
    let cur;
    while (cur = queue.pop()) {
        res.push(cur.val);
        if (cur.right) queue.push(cur.right);
        if (cur.left) queue.push(cur.left);
    }
    return res;
};