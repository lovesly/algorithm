/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    var leftPoint = 0,   // 左侧指针
    rightPoint = arr.length -1, // 右侧指针
    leftMax = arr[leftPoint],   // 左侧最大值
    rightMax = arr[rightPoint], // 右侧最大值
    res = 0              // 雨水量

while (leftPoint < rightPoint) {
    // 在左侧指针和右侧指针相碰之前，一直进行下面的步骤
    if (leftMax < rightMax) { // 如果左侧最大值小于右侧最大值
        leftPoint++           // 左指针向右移一步
        if(leftMax <= arr[leftPoint]) {  // 此时，如果左侧最大值小于左指针所在的值，说明指针所在的值为左侧最大值，所以更新最大值，
            leftMax = arr[leftPoint]
        } else {                        // 如果左侧最大值大于左指针所在的值，那就把左指针所在的柱和左侧最大值的差值算作雨水量加入到res中
            res += leftMax - arr[leftPoint];
        }
    } else {   // 右侧同理
        rightPoint --
        if (rightMax <= arr[rightPoint]) {
            rightMax = arr[rightPoint]
        } else {
            res += rightMax - arr[rightPoint];
        }
    }
}
return res;
};

// My solution is to add each valid row.
// this solution is to add each valid col. 
// I have to admit it's better, shit. Much more concise. 