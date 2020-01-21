// 暴力
/**
 * @param {string} s
 * @return {number}
 */
// 由于时间复杂度太高，无法通过 227/230 测试用例
var longestValidParentheses = function(s) {
  // 暴力法，检测每个偶数字符串
  let max = 0;
  if (!s) return max;
  for (let i = 0; i < s.length; i++) {
      // 稍微优化一点
      if (max > s.length - i) break;
      for (let j = i + 1; j < s.length; j += 2) {
          const str = s.slice(i, j+1);
          const len = j + 1 - i;
          if (isValid(str) && len > max) {
              max = len;
          }
      }
  }
  return max;
};

const isValid = (s) => {
  const st = [];
  let res = true;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          st.push(1);
      } else {
          if (st.length === 0) {
              res = false;
              break;
          } else {
              st.pop();
          }
      }
  }
  return res && st.length === 0;
};