/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
	let ans = '';
    const num = [];
    let fact = 1;

    for (var i = 1; i <= n; i++) {
        fact *= i;
        num.push(i);
    }
    
    for (var i = 0, l = k - 1; i < n; i++) {
        fact = Math.floor(fact / (n - i));
        const index = Math.floor(l / fact);
        ans += num.splice(index, 1);
        l -= index * fact;
    }
    
    return ans;
};

// same idea