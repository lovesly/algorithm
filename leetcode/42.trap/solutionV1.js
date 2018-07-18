/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let res = 0;
    for (let i= 0, len = height.length; i < len; i++) {
        if (i != 0 && height[i] < height[i - 1]) {
            stack.push(i - 1);
        } else if (height[i] > height[i - 1]) {
            let prev = height[i - 1];
            while (stack.length) {
                let index = stack.pop();
                let curLeft = height[index];                
                let bar = Math.min(height[i], curLeft);
                res += ((bar - prev) * (i - index - 1));
                prev = bar;             
                if (height[i] <= curLeft) {
                    if (height[i] != curLeft) stack.push(index);
                    break;
                } 
            }
        }
    }
    return res;
};

const data = [2, 1, 0, 2];
console.log(trap(data));

// 屌爆。 Good for you. 