// 这个节真是越过越蠢，赶紧运动，减肥，跳槽，买椅子。
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
// 妈的我有这么蠢吗，简单题 击败 20% 草
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  // 最长路径 = 左右子树高度相加 + 1 与 max 的最大值。
  const left = getHeight(root.left);
  const right = getHeight(root.right);
  return Math.max(left + right, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
};

// 会有大量的重复计算
const getHeight = (node) => {
  if (!node) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};