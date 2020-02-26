const arr = [3, 2, 1, 5, 6, 4];
const buildHeap = (arr) => {
    const start = ~~(arr.length/2) - 1;
    for (let i = start; i >= 0; i--) {
        maxHeapify(arr, arr.length, i);
    }
};

const maxHeapify = (arr, length, i) => {
    let left = 2 * i + 1, right = 2 * i + 2, largest = i;
    if (left < length && arr[left] > arr[i]) largest = left;
    if (right < length && arr[right] > arr[i]) largest = right;
    if (largest !== i) {
        swap(arr, i, largest);
        maxHeapify(arr, length, largest);
    }
};

buildHeap(arr);

let res = undefined, k = 2;
// sort or find largest k number
while (k--) {
    res = arr[0];
    swap(arr, 0, arr.length-1);
    arr.length = arr.length - 1;
    maxHeapify(arr, arr.length, 0);
}
return res;

const swap = (arr, i, j) => {
    if (i !== j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
    }
};