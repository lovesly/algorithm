/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || !matrix.length) return 0;
    // 以当前点为右下角的正方形长度
    // 虽然做出来了，但是有点蠢啊，还很慢，妈蛋。
    // 优化？其实就是遍历一遍，只是每个1都新声明一个数组来记录
    let max = 0;
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 1) {
                // trick
                let left = 0, up = 0, cor = 0;
                // left side
                if (j !== 0 && matrix[i][j-1] !== '0') {
                    left = matrix[i][j-1];
                }
                // up side
                if (i !== 0 && matrix[i-1][j] !== '0') {
                    up = matrix[i-1][j];
                }
                // corner
                if (i !== 0 && j !== 0 && matrix[i-1][j-1] !== '0') {
                    cor = matrix[i-1][j-1];
                }
                // 我只要在知道左上方位的最大 正方形 的边长，再检测左侧和上方延伸到距离就可以了
                let l = 1, u = 1, c = cor ? cor[2] + 1 : 1;
                if (left) l = 1 + left[0];
                if (up) u = 1 + up[1];
                // need to modify
                const r = Math.min(l, u, c);
                max = Math.max(max, r * r);
                matrix[i][j] = [l, u, r];
            }
        }
    }
    return max;
};