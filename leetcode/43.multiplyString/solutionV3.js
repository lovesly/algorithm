/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
        return '0';
    }
    let pos = new Array(num1.length + num2.length).fill(0);
    for(let i = num1.length - 1; i >= 0; i --) {
        let n = parseInt(num1[i]);
        for (let j = num2.length - 1; j >= 0; j --) {
            let m = parseInt(num2[j]);
            let mul = m * n;
            let p1 = i + j;
            let p2 = i + j + 1;
            let sum = mul + pos[p2];
            pos[p1] += Math.floor(sum / 10);
            pos[p2] = (sum) % 10;
        }
    }
    let res = pos.join('');
    return res[0] === '0' ? res.slice(1) : res
};