
// 总是差一点，看人家写得多简洁
var isValidBST = function(root) {
    // 比我想到还好一些，我以为每一轮都会增加新的上下界
    const helper = (node, lower, upper) => {
        if (!node) return true;
        if ((lower !== null && node.val <= lower) || 
            (upper !== null && node.val >= upper)) return false;
        if (!helper(node.right, node.val, upper)) return false;
        if (!helper(node.left, lower, node.val)) return false;
        return true;
    };

    return helper(root, null, null);
};