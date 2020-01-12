/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    // 构建 map
    let map = Array(26).fill(0);
    for (let i = 0; i < tasks.length; i++) {
        const cur = tasks[i].charCodeAt(0);
        map[cur - 65]++;
    }
    // 其实不关心 3A 2B 还是 2A 3B，只需要计算时间，两者等价。
    // 优先使用数量多的。。。
    map = map.filter(val => val > 0).sort((a, b) => b - a);
    // 计算，被转化成了数学问题，题解3
    let max = 1;
    for (let i = 1; i < map.length; i++) {
        if (map[i] === map[i - 1]) max++;
        else break;
    }
    const val = max + (map[0] - 1) * (n + 1);
    return Math.max(val, tasks.length);
};