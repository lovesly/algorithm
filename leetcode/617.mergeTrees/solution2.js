/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// 迭代？
var mergeTrees = function (t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;
    const stack = [[t1, t2]];
    while (stack.length) {
        const next = stack.pop();
        const left = next[0], right = next[1];
        // cur 必须有值?
        left.val = left.val + right.val;
        // 不过这里的 cur 和 left 是否为一个值呢？
        // left
        if (left.left && right.left) {
            stack.push([left.left, right.left]);
        } else if (right.left) {
            left.left = right.left;
        }
        // right
        if (left.right && right.right) {
            stack.push([left.right, right.right]);
        } else if (right.right) {
            left.right = right.right;
        }
    }
    return t1;
};