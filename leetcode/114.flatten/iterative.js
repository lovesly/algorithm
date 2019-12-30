var flatten = function (root) {
    if (!root) return;
    const stack = [root];
    let pre;
    while (stack.length) {
        const cur = stack.pop();
        if (pre) {
            pre.left = null;
            pre.right = cur;
        }
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
        pre = cur;
    }
};