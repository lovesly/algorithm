// a 180ms example
// same idea, but they didn't write another function
/**
 * @param {number[]} nums
 * @return {number[][]}
 [-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0]
 */
var threeSum = function(nums) {
  nums = nums.sort(function(x,  y){
      return x - y;
  });
  var len = nums.length;
  var left, right;
  var passed = [];
  var tar;
  var he;
  var ans = [];
  var str = [];
  for(let i = 0; i < len; i ++){
    if(nums[i] > 0) break;
    if(i > 0 && nums[i] == nums[i - 1]) continue;
      tar = -1 * nums[i];
      left = i + 1;
      right = len - 1;
      while(left < right){
        if(left != i + 1 && nums[left] == nums[left - 1]){
          left ++;
          continue;
        }
        if(right != len - 1 && nums[right] == nums[right + 1]) {
          right --;
          continue;
        }
        he = nums[left] + nums[right];
        if(he > tar) right --;
        else if(he < tar) left ++;
        else if(he == tar){
          ans.push([nums[i], nums[left], nums[right]]);
          right --;
          left ++;
        }
      }
  }
  return ans;
};