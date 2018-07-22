/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length == 0) return strs;
    const res = [];
    for (let i = 0, len = strs.length; i < len; i++) {
        let found = false;
        for (let group of res) {
            if (group.length > 0 && isAnagrams(group[0], strs[i])) {
                group.push(strs[i]);
                found = true;
                break;
            }
        }
        if (!found) res.push([strs[i]]);
    }
    return res;
};

function isAnagrams(a, b) {
    // too slow
    if (a.length != b.length) return false;
    if (a === b) return true;
    // to char array, sort, join, compare
    // build a map
    let myMap = new Map();
    for (let i = 0, len = a.length; i < len; i++) {
        if (myMap.has(a[i])) {
            myMap.set(a[i], myMap.get(a[i]) + 1);
        } else {
            myMap.set(a[i], 1);
        }
    }
    for (let i = 0, len = b.length; i < len; i++) {
        if (!myMap.has(b[i])) return false;
        else {
            let val = myMap.get(b[i]);
            if (val > 1) {
                myMap.set(b[i], val - 1);
            } else {
                myMap.delete(b[i]);
            }
        }
    }
    return true;
}

// so fucking slow, you suck.