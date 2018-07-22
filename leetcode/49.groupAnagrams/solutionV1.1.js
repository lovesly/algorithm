/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs || strs.length == 0) return strs;
    const res = [];
    const resMap = [];
    for (let i = 0, len = strs.length; i < len; i++) {
        let cur = strs[i];
        let found = false;
        // problem, will for...of keep the order?
        for (let i = 0, len = res.length; i < len; i++) {
            let group = res[i];
            if (group.length > 0 && isAnagrams(group[0], cur, resMap[i])) {
                group.push(cur);
                found = true;
                break;
            }
        }
        if (!found) {
            res.push([cur]);
            // build the map
            let myMap = new Map();
            for (let i = 0, len = cur.length; i < len; i++) {
                if (myMap.has(cur[i])) {
                    myMap.set(cur[i], myMap.get(cur[i]) + 1);
                } else {
                    myMap.set(cur[i], 1);
                }
            }
            resMap.push(myMap);
        }
    }
    return res;
};

function isAnagrams(a, b, resMap) {
    // too slow
    if (a.length != b.length) return false;
    if (a === b) return true;
    let myMap = new Map(resMap);
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
// 100/101
// 超出时限
// 太傻比了， 好蠢。 
// 研究一下为什么