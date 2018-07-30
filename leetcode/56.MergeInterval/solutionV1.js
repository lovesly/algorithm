

function Interval(start, end) {
    this.start = start;
    this.end = end;
}
 
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length == 0) return intervals;
    const res = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let isOverlap = false;
        let cur = intervals[i];
        for (let j = res.length - 1; j >= 0; j--) {
            if (cur.start <= res[j].end && cur.end >= res[j].start) {
                // update cur, and remove res[j]
                cur = new Interval(Math.min(cur.start, res[j].start), Math.max(cur.end, res[j].end));
                res.splice(j, 1);
            }
        }
        res.push(cur);
    }
    return res;
};

// 注意一点， 要更新cur的值， 因为cur和res[j]合并后的区间， 有可能又和其他有了重合
// Beat 100%.
// then beat 20%. 
// I'm done.

