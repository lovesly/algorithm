/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let j = 0; j < parseInt(matrix.length / 2); j++) {
      let tempArray = matrix[j];
      matrix[j] = matrix[matrix.length - j - 1];
      matrix[matrix.length - j - 1] = tempArray;
    }
    for (let i = 0; i < matrix.length; i++) {
      let element = matrix[i];
      for (let j = 0; j < element.length; j++) {
        if (i > j) {
          continue;
        }
        let temp = element[j];
        element[j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  };

// 这个有点牛逼， 我是没发现这个规律， reverse matrix 以后沿对角线 swap。。。