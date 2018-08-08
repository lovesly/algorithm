/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var ns=[];
    var res=[];
    var pos=k-1;

    for (var i=1;i<=n;++i) {
        ns.push(i);
    }

    var nfac=1;
    for(var i=2;i<=n;i++){
        nfac*=i;
    }

    if (k<1||k>nfac) {
        return "invalid K";
    }

    for (var j=n;j>=1;--j) {
        nfac/=j;
        res.push(ns.splice(parseInt(pos/nfac),1)[0]);
        pos%=nfac;
    }

    return res.join("");
};

// same idea, but it's faster, hmmm...