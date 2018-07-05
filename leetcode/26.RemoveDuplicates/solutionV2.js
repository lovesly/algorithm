/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
	for(let i = 0,len = nums.length; i < len; i++){
		if(nums[i] !== nums[index]) {
			nums[++index] = nums[i];
		}
	}
	return ++index;
};