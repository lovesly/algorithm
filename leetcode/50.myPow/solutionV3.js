/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n==0){
        return 1;
    }
    else if(n==1){
        return x;
    }
    else if (n==-1) {
        return 1/x;
    }
    else if (n%2==0){
        var m=myPow(x,n/2);
        return m*m;
    }
    else {
        return x*myPow(x,n-1);
    }
};

// 很好， 这才是正经的解法。