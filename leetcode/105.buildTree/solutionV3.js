/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || preorder.length === 0 
        || inorder.length === 0 || preorder.length !== inorder.length)
        return null;
    // helper function
    function helper(preS, preE, inS, inE) {
        if (preS > preE || inS > inE) return null;
        const node = new TreeNode(preorder[preS]);
        const index = inorder.indexOf(preorder[preS]);
        node.left = helper(preS+1, preS + (index - inS), inS, index - 1);
        node.right = helper(preS + (index - inS) + 1, preE, index + 1, inE);
        return node;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};