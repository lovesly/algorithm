// 迭代
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
  // 反中序遍历，迭代
  const st = [];
  let node = root;
  // 其实就是中序遍历，妈蛋。看看明早还记不记得。
  while (node || st.length) {
      while (node) {
          st.push(node);
          node = node.right;
      }
      const tmp = st.pop();
      add(tmp);
      if (tmp.left) node = tmp.left;
  }
  return root;
};