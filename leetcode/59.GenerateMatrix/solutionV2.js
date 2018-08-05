/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // interesting, ... will solve the problem mentioned in solutionV1.js
    // ... will assign the undefined value, not empty, so you could use map method
    let result = [...Array(n)].map(() => Array(n).fill(0));
    let t = 1; // top
    let r = n - 1; // right
    let b = n - 1; // bottom
    let l = 0; // left
    let x = 0;
    let y = 0;
    let mode = 'r';
    let i = 1;
  
    while (i <= n * n) {
      result[x][y] = i;
      i++;
      if (mode === 'r') {
        if (y < r) {
          y++;
        } else {
          x++;
          r--;
          mode = 'b';
        }
      } else if (mode === 'b') {
        if (x < b) {
          x++;
        } else {
          y--;
          b--;
          mode = 'l';
        }
      } else if (mode === 'l') {
        if (y > l) {
          y--;
        } else {
          x--;
          l++;
          mode = 't';
        }
      } else if (mode === 't') {
        if (x > t) {
          x--;
        } else {
          y++;
          t++;
          mode = 'r';
        }
      }
    }
    return result;
  };