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
    const cur = new TreeNode(preorder[0]);
    const index = inorder.indexOf(preorder[0]);
    cur.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    cur.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return cur;
};