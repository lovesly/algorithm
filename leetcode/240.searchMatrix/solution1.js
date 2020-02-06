// 土鳖算法，灵感源于大学语文课，老师一横一竖精准定位同学起来回答问题
// 挺接近最优解
// 值得探究，我是从左下和右上同时缩减
// 最优解是只从一个点，原理是一样的，但为什么这么慢呢
// 我他吗去掉一个 for 循环，还更快了，可能是有重复计算的？
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  const row = matrix.length;
  const col = matrix[0].length;
  let iS = 0, jS = 0, iE = row - 1, jE = col - 1;
  while (iS <= iE && jS <= jE) {
      // 从最后一行，和最后一列开始
      for (let j = jS; j <= jE; j++) {
          const cur = matrix[iE][j];
          if (cur === target) return true;
          else if (cur < target) jS++; // 这一列都比 target 小，可以舍弃
          else {
              // 后面都比 target 大，这一行也废了
              iE--;
              break;
          }; 
      }
      if (jS > jE) break;
      for (let i = iS; i <= iE; i++) {
          const cur = matrix[i][jE];
          if (cur === target) return true;
          else if (cur < target) iS++;
          else {
              jE--;
              break;
          };
      }
  }
  return false;
};

const arr = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
searchMatrix(arr, 5);