// 这个解法有点像之前一道题的 莫里斯遍历
var flatten = function (root) {
    let cur = root;
    while (cur) {
        const right = cur.right;
        // find the position to inject right
        let pos = cur.left;
        while (pos && pos.right) {
            pos = pos.right;
        }
        if (pos) {
            pos.right = right;
            cur.right = cur.left;
        }
        cur.left = null;
        cur = cur.right;
    }
};