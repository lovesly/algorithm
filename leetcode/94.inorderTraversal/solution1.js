/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];
  const helper = (root) => {
      if (root.left) helper(root.left);
      res.push(root.val);
      if (root.right) helper(root.right);
  };
  if (root) helper(root);
  return res;
};