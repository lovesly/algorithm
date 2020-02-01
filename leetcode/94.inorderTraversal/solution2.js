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
// good boy
// 遍历方式是从最小左子树节点开始，路径上的节点都存入 left，然后打印当前节点 cur，如果当前节点有右
// 子树，右子树一定先于 cur.parent (也就是 left 里下一个要 pop 出来的节点) 遍历，所以呢只要 full
// 不为空，都要先处理完 full 里的节点，才去继续处理 left 的节点。

// 但是呢，使用了两个栈，代码也不够美观。
var inorderTraversal = function(root) {
  const res = [];
  if (!root) return res;
  // left 里存储的是已经处理过左子树的节点。
  const left = [];
  // full 里放置的是全新节点。
  const full = [root];
  while (left.length || full.length) {
      // 优先处理 full
      if (full.length) {
          let cur = full.pop();
          while (cur.left) {
              left.push(cur);
              cur = cur.left;
          }
          res.push(cur.val);
          // 这里有问题
          if (cur.right) full.push(cur.right);
      } else {
          let cur = left.pop();
          res.push(cur.val);
          if (cur.right) full.push(cur.right);
      }
  }
  return res;
};