
/**
 * @param {number} n
 * @return {number}
 */ 
var countDigitOne = function(n) {
    if(n<1)
        return 0;
    let count = 0;
    let base = 1;
    let round = n;
    while(round>0){
        let weight = round%10;
        round = parseInt(round/10);
        count += round*base;
        if(weight==1)
            count+=(n%base)+1;
        else if(weight>1)
            count+=base;
        base*=10;
    }
    return count;
};

// 可恶， 如此简洁。
// idea is same with v1, but loop through right to left, use number operation only
