var consecutiveNumbersSum = function(N) {
    // special case for 1?
    if (N <= 2) return 1;
    let res = 0;
    for (let i = 1; i < N; i++) {
        let s = i * (i + 1) / 2;
        if (s > N) {
            break;
        } else if (s === N) {
            res++;
        } else {
            if ((N - s)%i === 0) {
                res++;    
            }
        }
    }
    return res;
};

// really smart;