var flatten = function (root) {
    if (!root) return;
    flatten(root.left);
    flatten(root.right);
    // find the end of left tree
    let end = root.left;
    while (end && end.right) end = end.right;
    if (end) {
        end.right = root.right;
        root.right = root.left;
        root.left = null;
    }
};