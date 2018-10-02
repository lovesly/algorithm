// inplace
function quickSort(arr) {
    function swap(arr, i, j) {
        if (i === j) return;
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
    }

    function partition(arr, left, right) {
        let cur = left;
        const pivot = arr[right];
        for (let i = left; i < right; i++) {
            if (arr[i] < pivot) {
                swap(arr, i, cur);
                cur++;
            }
        }   
        swap(arr, right, cur);
        return cur;
    }

    function sort(arr, left, right) {
        // what about =
        if (left >= right) {
            return;
        }
        const nPivot = partition(arr, left, right);
        sort(arr, left, nPivot - 1);
        sort(arr, nPivot + 1, right);
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}
const arr = [12, 4, 8, 10, 15, 8, 21, 1];
console.log(quickSort(arr));
