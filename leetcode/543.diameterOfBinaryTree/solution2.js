/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归，迭代？变蠢了。。。应该是自底向上来处理
// 挽回一丝颜面，仍然是递归，但是避免了重复计算。
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  // 最长路径 = 左右子树高度相加 + 1 与 max 的最大值。
  return helper(root)[1];
};

// 会有大量的重复计算
const helper = (node) => {
  if (!node) return [0, 0];
  const [leftH, leftD] = helper(node.left);
  const [rightH, rightD] = helper(node.right);
  const height = Math.max(leftH, rightH) + 1;
  const res = Math.max(leftH + rightH, leftD, rightD);
  return [height, res];
};