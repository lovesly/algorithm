// 有点意思，峰谷法？以及简化版
var maxProfit = function(prices) {
    let res = 0;
    let low = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i+1] && prices[i+1] > prices[i]) continue;
        else {
            res += (prices[i] - prices[low]);
            low = i+1;
        }
    }
    return res;
};

// 2
var maxProfit = function(prices) {
    let res = 0;
    let high = null;
    let low = 0;
    let i = 0;
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i+1] <= prices[i]) {
            i++;
        }
        low = prices[i];
        while (i < prices.length - 1 && prices[i+1] >= prices[i]) {
            i++;
        }
        high = prices[i];
        if (low !== undefined && high !== undefined) {
            res += (high - low);
        }
    }
    return res;
};


// 3
var maxProfit = function(prices) {
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            res += (prices[i] - prices[i-1]);
        }
    }
    return res;
}