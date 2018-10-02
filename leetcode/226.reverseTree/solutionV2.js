var invertTree = function(root) {
    if(!root)  {
        return null;
    }
    const queue = [root];
    let cur;
    while (queue.length) {
        cur = queue.shift();
        reverse(cur);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
    }
    function reverse(node) {
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
    return root;
};