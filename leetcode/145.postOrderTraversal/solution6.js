// a weird solution
var postorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const st = [root, root];
    while (st.length) {
        const cur = st.pop();
        if (cur === st[st.length-1]) {
            if (cur.right) {
                st.push(cur.right);
                st.push(cur.right);
            }
            if (cur.left) {
                st.push(cur.left);
                st.push(cur.left);
            }
        } else {
            res.push(cur.val);
        }
    }
    return res;
}