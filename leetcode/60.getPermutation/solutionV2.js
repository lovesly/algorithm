// second thought
// say n = 4, k = 9, there are (n - 1)! permutations start with each number
// so the first number should be ~~(9/(n - 1)!) + 1 = 2
// then we can find the 9 % (n - 1)! = 3rd permutation of [1, 3, 4]
// we can keep doing this for n times(once per digit)
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
    const data = [], fac = [1]; 
    let res = "";
    for (let i = 0; i < n; i++) {
        data.push(i + 1);
    }
    for (let i = 1; i < n; i++) fac[i] = i * fac[i-1];
    k--;
    for (let i = 0; i < n; i++) {
        // each digit
        let permutates = fac[n - i - 1];
        let cur = ~~(k/ permutates);
        k = k % permutates;
        res += data[cur];
        data.splice(cur, 1);
    }
    return res;
};

// much better 84 ms
// we could cache the factorial.