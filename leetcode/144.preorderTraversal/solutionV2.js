/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 妈的变蠢了啊
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

// 2020/2/1 wanning/hainan
var preorderTraversal = function(root) {
    const res = [];
    if (root) {
        const st = [root];
        while (st.length) {
            const cur = st.pop();
            res.push(cur.val);
            if (cur.right) st.push(cur.right);
            if (cur.left) st.push(cur.left);
        }
    }
    return res;
};