
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        const tmp = b
        b += a
        a = tmp
    }

    return b
}

// more concise