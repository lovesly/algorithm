/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 人家写 15行，你要30行。真行。
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  const helper = (node) => {
      if (!node) return false;
      const left = helper(node.left) ? 1 : 0;
      const right = helper(node.right) ? 1 : 0;
      const mid = (node.val === p.val || node.val === q.val) ? 1 : 0;
      if (left + right + mid >= 2) ans = node;
      // 有点意思
      return left + right + mid > 0;
  };
  helper(root, p, q);
  return ans;
};