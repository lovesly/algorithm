
// solution2, 迭代版
// 为什么，迭代有时候会比　递归慢呢？
// 这是很本质的东西，衡量的因素是什么？在这里为了迭代，深度其实和递归一样，用了额外的数组？
// 但是我的方法１也是用了对象结构，可方法二一样快。
// 这是 leetcode 坑爹的地方，时间不准。
var isValidBST = function(root) {
    // 边界条件！！！
    if (!root) return true;
    const st = [];
    st.push([root, null, null]);
    let cur;
    while (cur = st.pop()) {
        // validate 
        const [node, lower, upper] = cur;
        if ((lower !== null && node.val <= lower) || 
            (upper !== null && node.val >= upper)) return false;
        if (node.left) st.push([node.left, lower, node.val]);
        if (node.right) st.push([node.right, node.val, upper]);
    }
    return true;
};