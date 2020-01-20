/**
 * @param {string} s
 * @return {number}
 */
// 妈的，好蠢。。。
var longestValidParentheses = function(s) {
  if (!s) return 0;
  const len = s.length;
  let max = 0;
  const st = [-1];
  for (let i = 0; i < len; i++) {
      if (s[i] === '(') {
          st.push(i);
      } else {
          st.pop();
          // ? 啥意思，先 pop，再 push？
          if (st.length === 0) {
              st.push(i);
          } else {
              max = Math.max(max, i - st[st.length-1]);
          }
      }
  }
  return max;
};