// 这是优美的代码，solution2 用两个栈区分了重复处理左子树的情况，不止记录了路径，还想记录处理结果
// 但是实际上，只要把 st 里弹出来的值处理了，就可以丢弃了。直接继续让 cur = cur.right 就好
// 很妙啊。cur 为 null 就是处理过了，不为null都是新节点，st 里弹出来的都是遍历过左子树，只需要处理右边子树的。

var inorderTraversal = function(root) {
  const res = [], st = [];
  let cur = root;
  while (cur || st.length) {
      while(cur) {
          st.push(cur);
          cur = cur.left;
      }        
      const tmp = st.pop();
      res.push(tmp.val);
      if (tmp.right) cur = tmp.right;
  }
  return res;
};

var inorderTraversal = function(root) {
  const res = [], left = [];
  let next = root;

  while (left.length || next) {
      // in this way, you already reset next to null.
      while (next) {
          left.push(next);
          next = next.left;
      }
      const tmp = left.pop();
      res.push(tmp.val);
      if (tmp.right) {
          next = tmp.right;
      }
  }
  return res;
};

// 还是要多想，多写。
// 前中后序遍历的迭代方法
// bfs，dfs，dp，二分，几种排序
// 堆