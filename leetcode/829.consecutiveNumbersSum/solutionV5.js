
/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    var num = 0, loop = .5 + Math.sqrt(N * 2 + .25);
    for(var i = 1; i < loop; i++){
        var a = N / i - (i - 1) / 2;
        if(a === Math.floor(a)) num++;
    } 
    return num;
};

// bad ass.