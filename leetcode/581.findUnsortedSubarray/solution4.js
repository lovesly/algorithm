/**
 * @param {number[]} nums
 * @return {number}
 */
// stack
var findUnsortedSubarray = function(nums) {
  if (!nums) return 0;
  const st = [];
  let l = nums.length - 1, r = 0;
  // 先遍历一遍找左边界
  for (let i = 0; i < nums.length; i++) {
      while (st.length !== 0 && nums[st[st.length-1]] > nums[i]) {
          const cur = st.pop();
          l = Math.min(l, cur);
      }
      st.push(i);
  }
  st.length = 0;
  // 反向来一遍?
  for (let i = nums.length-1; i >= 0; i--) {
      while (st.length !== 0 && nums[st[st.length-1]] < nums[i]) {
          const cur = st.pop();
          r = Math.max(r, cur);
      }
      st.push(i);
  }
  return r - l <= 0 ? 0 : r - l + 1;
};