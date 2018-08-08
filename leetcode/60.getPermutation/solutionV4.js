var getPermutation = function(n, k) {
    var ans = [1, 1];
    var arr = [];
    
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    function getAns(n) {
        if (n === 1) {
            return 1;
        }
        var a = getAns(n - 1) * n;
        ans[n] = a;
        return a;
    }
    
    if (n > 1){
        getAns(n - 1);      
    }
        
    var left = k - 1;
    var str = '';
    
    for (var i = ans.length - 1; i >= 1; i--) {
        var t = Math.floor(left / ans[i]);
        left = left % ans[i];
        
        str += arr[t];
        arr.splice(t, 1);
    }
    
    if (arr.length) {
        str += arr[0];
    }    
    return str;
};