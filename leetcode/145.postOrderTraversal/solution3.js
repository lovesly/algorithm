// 虽然想法也可以，但是太绕了，合并了很多条件。不好理解
var postorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    const st = [];
    const set = new Set();
    let cur = root;
    while (cur || st.length) {
        while (cur && !set.has(cur)) {
            st.push(cur);
            cur = cur.left;
        }
        cur = st[st.length-1];
        if (cur.right == null || set.has(cur)) {
            res.push(cur.val);
            set.add(cur);
            st.pop();
            if (st.length == 0) return res;
            cur = st[st.length-1];
            cur = cur.right;
        } else {
            set.add(cur);
            cur = cur.right;
        }
    }
    return res;
};

// 改进, cache the last visited node, so if last node is cur.right
// it indicates that right node is already visited, you can push cur.val
// and move on
var postorderTraversal = function(root) {
    const res = [];
    const st = [];
    let cur = root;
    let last = null;
    while (cur || st.length) {
        if (cur) {
            st.push(cur);
            cur = cur.left;
        } else {
            let temp = st[st.length-1];
            if (temp.right && temp.right !== last) {
                cur = temp.right;
            } else {
                res.push(temp.val);
                last = temp;
                st.pop();
            }
        }
    }
    return res;
};