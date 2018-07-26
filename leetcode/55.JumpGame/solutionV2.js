/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(arry) {
    if(!arry || arry.length<=1) return true;
	var localMax=arry[0], globalMax=arry[0];
	for(var i=1; i<arry.length && i<=globalMax; ++i) {
		localMax = i+arry[i];
		globalMax = Math.max(localMax, globalMax);
	}
	return globalMax>=arry.length-1;
};

// interesting, the idea is update the termination condition of the for loop
