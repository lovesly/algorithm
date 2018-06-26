/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    // should use a map or a obj
    const sheet = {
        "M": 1000, 
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    // invalid value? like "S"
    for (let i = s.length - 1; i >= 0; i--) {
        let cur = s[i];
        if (cur in sheet) {
            let val = sheet[cur];
            if (i != s.length - 1 && val < sheet[s[i+1]]) {
                res -= val;                                        
            } else {
                res += val;    
            }
        }
    }
    return res;
};