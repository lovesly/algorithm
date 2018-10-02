
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = ~~(arr.length/2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...left, pivot, ...right];
}

console.log(quickSort([12, 4, 8, 10, 15, 8, 2]));
// 这他妈明显不行啊， 谁的呆逼算法？