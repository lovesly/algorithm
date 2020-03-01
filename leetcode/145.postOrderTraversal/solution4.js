// 转换问题
// 左，右，中
// 中右左，倒过来就是我们想要的。
// really smart
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
    if (!root) return res;
    const st = [root];
    while (st.length) {
        const cur = st.pop();
        res.unshift(cur.val);
        if (cur.left) st.push(cur.left);
        if (cur.right) st.push(cur.right);
    }
    return res;
}