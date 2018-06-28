var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let res = strs[0];
    for (let i = 1, len = strs.length; i < len; i++) {
        // compare with res
        let tmpLen = Math.min(res.length, strs[i].length);
        for (let j = 0; j < tmpLen; j++) {
            if (res.charAt(j) !== strs[i].charAt(j)) {
                tmpLen = j;
                break;
            }
        }
        res = res.slice(0, tmpLen);
    }
    return res;
};

//test
console.log(longestCommonPrefix(["flower","flow","flight"]));