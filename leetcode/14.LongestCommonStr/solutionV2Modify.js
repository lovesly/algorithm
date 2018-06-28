/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || !strs[0]) return '';
    let index = 0, min = strs[0].length, len;
    // find the minLen
    for (k = 1, len = strs.length; k < len; k++) {
        if (strs[k].length < min) {
            min = strs[k].length;
            index = k;
        }
    }
    
    let res = "";
    for(let j = 0; j < min; j++){
        let i = 0;
        while(i < strs.length){
            // if (i === index) continue;
            let t = strs[index][j];
            if(strs[i][j] == t){
                i++;
            }else{
                return res;
            }
        }
        res += strs[index][j];
    }   
    return res;
};