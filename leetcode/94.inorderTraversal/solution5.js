// 马的，过几天就是一个变种
var inorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    const st = [root];
    const left = [];
    let cur;

    // shouldn't be that complicated
    while (st.length || cur) {
        if (!cur) {
            cur = st.pop();
            while (cur.left) {
                left.push(cur);
                cur = cur.left;
            }
        }
        res.push(cur.val);
        if (cur.right) {
            st.push(cur.right);
            // reset cur, next time we want to take a node from st[]
            cur = null;
        } else {
            cur = left.pop();
        }
    }
    return res;
};