/*
* 用概率: c8(2) = 8x7/2 = 28, 总步数 8 中选出2个作为向下走
*/
var uniquePaths = function(m, n) {
    var t = m + n - 2, a=1; b=1;
    for(var i=0; i<m-1; i++){
        a *= (i+1);
        b *= (t-i);
    }
    return b/a;
};

// 果然老子概率差了一点。。。