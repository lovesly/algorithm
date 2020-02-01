// 妈的，比一个月以前进步了。一个月以前想出来个更丑陋的办法。。。
// 写出来丑，不过思想也有点意思，是插入到相应 index
var inorderTraversal = function(root) {
  if (!root) return [];
  const map = [{
      node: root,
      index: 0
  }];
  const res = [root.val];
  // 0 is the current position
  let cur;
  // 迭代写得太丑陋了，来一发再找灵感。
  // 我们需要记住的是 栈里的 node，和 node 在 res 中的index
  while (map.length) {
      cur = map.pop();
      let { node, index } = cur;
      if (node.left) {
          map.push({
              node: node.left,
              index: index,
          });
          res.splice(index, 0, node.left.val);
          index++;
      }
      if (node.right) {
          map.push({
              node: node.right,
              index: index+1,
          });
          res.splice(index+1, 0, node.right.val);
      }
  }
  return res;
};