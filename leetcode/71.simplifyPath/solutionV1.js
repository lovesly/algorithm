/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (!path) return null;
    const tmp = path.split('/').filter((el) => { return el != '.' && el != '/' && el != '' });
    const res = [];
    // what if "/a/../../../c" ? or invalid input?
    for (let i = 0, cur; i < tmp.length; i++) {
        cur = tmp[i];
        if (cur === '..') {
            res.pop();
        } else {
            res.push(cur);
        }
    }
    return '/' + res.join('/');
};