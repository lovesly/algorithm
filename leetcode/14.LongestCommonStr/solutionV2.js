var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || !strs[0]) return '';
    let r = [];
    for(let j = 0; j < strs[0].length; j++){
        let i = 1;
        while(i < strs.length){
            let t = strs[0][j];
            if(strs[i][j] == t){
                i++;
            }else{
                return r.join('');
            }
        }
        r.push(strs[0][j]);
    }   
    return r.join('');
};

// wow 