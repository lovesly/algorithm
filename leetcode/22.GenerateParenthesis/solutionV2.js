var generateParenthesis = function(n) {
    let res = [];
    
    const perm = (L, R, str) => {
        if (!L && !R) {
            res.push(str);
            return;
        }
        if (L > R) return;
        if (L) perm(L - 1, R, str + '(');
        if (R) perm(L, R - 1, str + ')');
    }
    perm(n, n, '');
    return res;
};

// beautiful code