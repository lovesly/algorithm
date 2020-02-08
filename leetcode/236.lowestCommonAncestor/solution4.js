// 父指针迭代，思想和我的差不多，都是记录路径
// 聪明反被聪明误，以为只存 val 会省空间，忘了最后返回的不是val而是 node
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  // 存储所有父指针的 map
  const parent = new Map();
  const set = new Set();
  let st = [root];

  // 遍历，一次遍历，还挺聪明的哈
  while (!parent.has(p) || !parent.has(q)) {
    const node = st.pop();
    if (node.left) {
      parent.set(node.left, node);
      st.push(node.left);
    }
    if (node.right) {
      parent.set(node.right, node);
      st.push(node.right);
    }
  }
  // 用 set 还是挺妙的。
  while (p) {
    set.add(p);
    p = parent.get(p);
  }
  while(!set.has(q)) {
    q = parent.get(q);
  }
  return q;
};