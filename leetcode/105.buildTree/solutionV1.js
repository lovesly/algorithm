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
    if (preorder.length == 0) return null;
    const root = buildHelper(0, preorder.length - 1, 0, inorder.length - 1);
    function buildHelper(start, end, inStart, inEnd) {
        if (start > end) return null;
        let cur = new TreeNode(preorder[start]);
        // find in inorder
        for (let i = inStart; i <= inEnd; i++) {
            if (inorder[i] == cur.val) {
                cur.left = buildHelper(start + 1, (start + (i - inStart)), inStart, i - 1);
                cur.right = buildHelper(start + i - inStart + 1, start + (inEnd - inStart), i + 1, inEnd);
                break;
            }
        }
        return cur;
    }
    return root;
};

// index part is really tricky.
