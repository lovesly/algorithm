/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums != null){
           var sum = nums[0];
           var maxSum = nums[0];

           for(var i=1;i<nums.length;i++){
               sum = Math.max(nums[i], sum+=nums[i]);
               maxSum = Math.max(sum,maxSum);
           }

           return maxSum;
       }
  };