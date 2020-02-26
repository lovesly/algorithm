// 小兔的棋盘，什么鬼
const getPath = (n) => {
    const dp = Array(n+2).fill(0).map(item => Array(n+2).fill(0));
    // init 
    dp[1][0] = 1;
    for (let i = 1; i <= n+1; i++) {
        for (let j = i; j <= n+1; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
        }
    }
    return 2 * dp[n+1][n+1];
};

getPath(3);
getPath(12);