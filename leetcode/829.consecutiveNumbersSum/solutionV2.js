var consecutiveNumbersSum = function(N) {
    // special case for 1?
    if (N <= 2) return 1;
    let res = 1;
    let start = 1, end = 2;
    let sum = start + end;
    const stop = ~~(N/2) + 1;
    while (start < stop) {
        if (sum === N) {
            res++;
        }
        while (sum < N) {
            end++;
            sum += end;
            if (sum === N) {
                res++;
            }
        }
        sum -= start;
        start++;
    }
    return res;
};

// 我靠， 159、170， 超时。 