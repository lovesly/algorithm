// 明白了，大同小异，通过一个 max 不停更新，相当于在求 树高，顺便算直径。
var diameterOfBinaryTree = function (root) {
  if(!root) return 0
  let max = 0
  function helper(root) {
    if (!root) return 0
    let left = helper(root.left)
    let right = helper(root.right)
    max = Math.max(left + right + 1,max)
    return Math.max(left, right) + 1
  }
  let m=helper(root)

  max = Math.max(m, max)
  return max-1
};