/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    if (!n || !k || n <= 0 || k <= 0) return res;
    const map = new Array(n).fill(0).map((item, index) => index + 1);
    if (k >= n) return [map];
    function helper(cur, index) {
        if (cur.length === k) {
            res.push(cur.slice());
            return;
        }
        for (let i = index; i < n; i++) {
            cur.push(map[i]);
            helper(cur, i+1);
            cur.pop();
        }
    }
    helper([], 0);
    return res;
};