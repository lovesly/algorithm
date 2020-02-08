// dp
var countSubstrings = function(s) {
  let res = 0, len = s.length;
  const dp = Array(len).fill(0).map(item => []);
  for (let j = 0; j < len; j++) {
    for (let i = j; i >= 0; i--) {
      if (s[i] === s[j] && ( j - i < 2 || dp[i+1][j-1])) {
        dp[i][j] = true;
        res++;
      }
    }
  }
  return res;
}