var sortColors = function(nums) {
	let i = 0;
	let j = 0;
	for(let k = 0; k < nums.length; k++) {
		let temp = nums[k];
		nums[k] = 2;
		if(temp < 2) {
			nums[j++] = 1;
		}

		if(temp == 0) {
			nums[i++] = 0;
		}
	}
};

// interesting solution...