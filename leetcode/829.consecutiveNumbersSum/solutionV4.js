/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    var n = Math.sqrt(N * 2);
    var ans = 0;
    for (var i = 2; i <= n; i += 2) {
        if (N / i % 1 == 0.5){
            ans++;
        }
    }
    for (var i = 1; i <= n; i += 2) {
        if (N / i % 1 == 0){
            ans++;
        }
    }
    return ans;
};

// wow
// 一元二次方程。。。我丢