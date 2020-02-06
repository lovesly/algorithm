// 简洁版？
// 土鳖算法，灵感源于大学语文课，老师一横一竖精准定位同学起来回答问题
// 挺接近最优解
// 值得探究，我是从左下和右上同时缩减
// 最优解是只从一个点，原理是一样的，但为什么这么慢呢
// 我他吗去掉一个 for 循环，还更快了，可能是有重复计算的？见鬼了。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  const row = matrix.length;
  const col = matrix[0].length;
  let jS = 0, iE = row - 1;

  // 最简洁的，连 for 循环都省了。相当于 每轮 while 循环，js，iE 更新其中一个。
  // 不过我还是觉得，两个点一起搜，至少不会更慢。只是多了些变量。。复杂度是一样的
  while (0 <= iE && jS < col) {
      // 从左下开始
      for (let j = jS; j < col; j++) {
          const cur = matrix[iE][j];
          if (cur === target) return true;
          else if (cur < target) jS++; // 这一列都比 target 小，可以舍弃
          else {
              // 后面都比 target 大，这一行也废了
              iE--;
              break;
          }; 
      }
  }
  return false;
};