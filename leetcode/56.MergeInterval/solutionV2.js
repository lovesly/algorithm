var merge = function(intervals) {
    var result = []
    if (intervals.length < 2) return intervals
    intervals.sort((a, b) => { 
        if (a.start - b.start === 0) {
            return a.end - b.end
        } else {
            return a.start - b.start
        }
    })
    var interval = intervals[0]
    for (var i = 1; i < intervals.length; i++) {
        var cur = intervals[i]
        if (interval.end < cur.start) {
            result.push(interval)
            interval = cur
        } else if (interval.end < cur.end) {
            interval.end = cur.end
        }
    }
    result.push(interval)
    return result
};