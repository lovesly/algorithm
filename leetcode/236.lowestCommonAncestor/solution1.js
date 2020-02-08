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
// 蠢办法，记录两个节点的路径，然后遍历路径。都是 O(n)复杂度。肯定有更好的办法？
// 还没写完也觉得蠢。。。
// 我好蠢，妈的，连 backtracking 也不会写
// 到底他吗的哪里错了啊？case 有问题？本地跑没问题, p, q 是他吗的 TreeNode
// 这递归是真他吗的慢啊ß
// toDO，打印 二叉树 路径
var lowestCommonAncestor = function(root, p, q) {
  let path = [];
  const helper = (start, target) => {
      // start 不为 null
      path.push(start);
      if (start.val === target.val) {
          return true;
      } else {
          if (start.left && helper(start.left, target)) return true;
          if (start.right && helper(start.right, target)) return true;
      }
      path.pop();
      return false;
  };
  helper(root, p);
  const path1 = [...path];
  path = [];
  helper(root, q);
  const path2 = [...path];
  const len = Math.min(path1.length, path2.length);
  // 遍历
  for (let i = 0; i < len; i++) {
      if (path1[i].val !== path2[i].val) {
          return path1[i-1];
      }
      if (i === len-1) return path1[i];
  }
  // 唯一的例外，就是有一个是 root
  return root;
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null; 
}

// 马勒戈壁没法测
const node = new TreeNode(3);
node.left = new TreeNode(5);
node.right = new TreeNode(1);
node.right.left = new TreeNode(0);
node.right.right = new TreeNode(8);
node.left.left = new TreeNode(6);
node.left.right = new TreeNode(2);
node.left.right.left = new TreeNode(7);
node.left.right.right = new TreeNode(4);
lowestCommonAncestor(node, 5, 4);