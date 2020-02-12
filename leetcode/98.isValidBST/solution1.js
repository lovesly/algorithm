/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 挺快的，但是用了很多 memory。迭代？
var isValidBST = function(root) {
    // return largest value || null, if it's valid
    // otherwise, return '$';
    // 1. 验证 node 是不是二叉搜索树，同时返回最大或最小值
    const helper = (node) => {
        if (!node) return null;
        const left = helper(node.left);
        const right = helper(node.right);
        if (left === '$' || right === '$') return '$';
        // validate left, right
        if ((left !== null && left.max >= node.val) || (right !== null && right.min <= node.val)) return '$';
        // return max, min
        const res = {};
        res.min = left !== null ? left.min : node.val;
        res.max = right !== null ? right.max : node.val;
        return res;
    };

    return helper(root) !== '$';
};