// 牛顿迭代法
// 变蠢了，要能推导，才好意思说自己是3系的，我是垃圾。。
// https://www.zhihu.com/question/20690553
var mySqrt = function(x) {
    if (x < 2) return x;
    let x0 = x;
    let x1 = (x0 + x/x0)/2;

    while (Math.abs(x0 - x1) >= 1) {
        x0 = x1;
        x1 = (x0 + x/x0)/2;
    }

    return ~~x1;
};