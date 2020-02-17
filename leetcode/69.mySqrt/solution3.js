
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 1, h = x;
    while (l <= h) {
        const mid = l + ~~((h - l)/2);
        sqr = mid * mid;
        if (sqr > x) h = mid - 1;
        else l = mid + 1; 
    }
    return l-1;
};

// 二傻子一样测出来的，感觉现在对于变形的 binary search，有点拿不准边界情况。