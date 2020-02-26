/**
 * @param {number} num
 * @return {number[]}
 */
// dp solution
// 靠，真是个找规律的题
// 这个是逆推 x&x-1 移出最右侧的0
var countBits = function(num) {
    // 这个和普通数组，有啥区别呢？快了很多
    // 总之，与普通数组相比，TypedArray数组的最大优点就是可以直接操作内存，不需要数据类型转换，所以速度快得多
    let dp = new Uint8Array(num + 1);
    for (let i = 1; i <= num; i++) {
        dp[i] = dp[i&(i-1)] + 1;
    }
    return dp;
};