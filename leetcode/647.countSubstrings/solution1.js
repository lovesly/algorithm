/**
 * @param {string} s
 * @return {number}
 */
// 妈的，改良版，击败了 24%，你个垃圾
var countSubstrings = function(s) {
  let res = 0;
  const cache = new Set();
  const isPalindrome = (str, offset) => {
      if (cache.has(str)) return true;
      // 检测
      let len = str.length;
      let mid = ~~(len/2);
      for (let i = mid-offset; i >= 0; i--) {
          if (str[i] !== str[len-i-1]) return false;
      }
      cache.add(str);
      return true;
  };
  const len = s.length;
  const validRange = (l, h) => {
      return l >= 0 && h < len;
  };
  // 以 i，或 i-i+1 为中心检测
  // 有重复计算，str 部分计算了多次。
  for (let i = 0; i < s.length; i++) {
      // 奇数
      for (let j = 0, l, h; l = i - j, h = i+j, validRange(l, h); j++) {
          const str = s.slice(l, h+1);
          if (isPalindrome(str, j)) res++;
          else break;
      }
      // 偶数
      for (let j = 0, l, h; l = i - j, h = i+1 + j,validRange(l, h); j++) {
          const str = s.slice(l, h+1);
          if (isPalindrome(str, j)) res++;
          else break;
      }
  }
  return res;
};