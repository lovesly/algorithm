/**
 * @param {string} s
 * @return {number}
 */
// 妈的，好蠢。。。
var longestValidParentheses = function(s) {
  if (!s) return 0;
  const len = s.length;
  let max = 0;
  // 这个是 base 坐标，如果中间有非法的括号，那么就从非法括号处开始计算。
  const st = [-1];
  for (let i = 0; i < len; i++) {
      if (s[i] === '(') {
          st.push(i);
      } else {
          st.pop();
          // ? 啥意思，先 pop，再 push？
          // 如果中间有非法的括号，那么就从非法括号处开始计算。
          if (st.length === 0) {
              st.push(i);
          } else {
              max = Math.max(max, i - st[st.length-1]);
          }
      }
  }
  return max;
};