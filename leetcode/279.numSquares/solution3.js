// bfs？
// 很巧妙，将问题转化为图？树。那么每一次从 n 中减去一个平方数，都会得到一个新节点
// 这样每遍历一轮 平方数，都会得到一个新的层级。当某一层级，第一个 0 出现的时候，这就是最短的路径
// 也就是最少的平方个数。

var numSquares = function(n) {

    const queue = [];
    const cache = [];

    queue.push([n, 1]);

    while (queue.length) {
        const [val, level] = queue.shift();
        for (let i = 1, k; k = val - i * i, k >= 0; i++) {
            if (k === 0) return level;
            if (!cache[k]) {
                queue.push([k, level+1]);
                cache[k] = true;
            }
        }
    }   
    return -1;
};

// 修改，不存数组了。cache 里只放数字。
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    const queue = [];
    const cache = [];

    queue.push(n);
    // 双缓冲来记录层级？
    let lastSize = 1, cur = 0;
    let res = 1;
    while (queue.length) {
        const remain = queue.shift();
        for (let i = 1, k; k = remain - i * i, k >= 0; i++) {
            if (k === 0) return res;
            if (!cache[k]) {
                queue.push(k);
                cache[k] = true;
                cur++;
            }
        }
        // 上层级遍历完，就该加了
        if (--lastSize === 0) {
            // new level
            res++;
            lastSize = cur;
            cur = 0;
        }
    }   
    return -1;
};

// 用双数组来缓存当前和上一个层级？不需要，一个 size 就行。
// 不过引申一下，假如我们需要一个 长度为 n 的数组，是声明一个数组好呢
// 还是声明 两个 n/2 的数组好？
var numSquares = function(n) {

    const queue = [];
    const cache = [];

    queue.push(n);
    let res = 0;
    while (size = queue.length) {
        res++;
        while (size-- > 0) {
            const remain = queue.shift();
            for (let i = 1, k; k = remain - i * i, k >= 0; i++) {
                if (k === 0) return res;
                if (!cache[k]) {
                    queue.push(k);
                    cache[k] = true;
                }
            }
        }
    }   
    return -1;
};