// 中心扩展
// 我的也是中心扩展，但是有点蠢

var countSubstrings = function(s) {
  let res = 0, len = s.length;
  for (let center = 0; center < 2 * len - 1; center++) {
    // 这其实是合并了我的方法的奇数偶数情况，但是似乎并没有本质区别
    let left = ~~(center/2);
    let right = left + center%2;
    while (left >= 0 && right < len && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }
  return res;
}
