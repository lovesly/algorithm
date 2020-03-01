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
// beat 8%，shit solution
var postorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const st = [root];
    while (st.length) {
        const cur = st.pop();
        if (cur.visited) res.push(cur.val);
        else {
            cur.visited = true;
            st.push(cur);
            if (cur.right) st.push(cur.right);
            if (cur.left) st.push(cur.left);
        }
    }
    return res;
};

// 改进版，对于访问过的节点，不用再重复出入栈
// 20ms faster，beat 65%
var postorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const st = [root];
    while (st.length) {
        const cur = st[st.length-1];
        if (cur.visited) {
            res.push(cur.val);
            st.pop();
        } else {
            cur.visited = true;
            if (cur.right) st.push(cur.right);
            if (cur.left) st.push(cur.left);
        }
    }
    return res;
};