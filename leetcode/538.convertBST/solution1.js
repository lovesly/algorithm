/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  if (!root) return root;
  // 反着中序遍历一遍，然后记录累加值
  let cur = 0;
  const add = (node) => {
      const tmp = node.val;
      node.val += cur;
      cur += tmp;
  }
  // 反中序遍历
  const helper = (node) => {
      if (node.right) helper(node.right);
      add(node);
      if (node.left) helper(node.left);
  };
  helper(root);
  return root;
};