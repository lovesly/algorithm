// 分治法，快排？
// 看样子有地方可以优化，参考 solution5， 快10ms
var findKthLargest = function(nums, k) {
  // 从小到大排列，所以第 k 大，就是第 nums.length - k 小。。。妈蛋
  return quickSelect(nums, 0, nums.length-1, nums.length - k + 1);
};
const quickSelect = (arr, s, e, k) => {
  // 有 pivot - s 个元素在 pivot 左边。所以当 less = 3 的时候，其实是第 3 + 1 个。
  const pivotIndex = partition(arr, s, e);
  const less = pivotIndex - s + 1;
  if (less === k) {
    return arr[pivotIndex];
  } else if (less > k) {
    // 在左边
    return quickSelect(arr, s, pivotIndex-1, k);
  } else {
    // 在右侧
    return quickSelect(arr, pivotIndex+1, e, k - less);
  }
};

const partition = (arr, s, e) => {
  // 简化版，pivot 选择最后一个数字
  const pivot = e;
  let j = s;
  // 妈的果然变蠢了。。
  for (let i = s; i < e; i++) {
    if (arr[i] < arr[pivot]) {
      if (i !== j) swap(arr, i, j);
      j++;
    }
  }
  swap(arr, j, pivot);
  // return pivot?
  return j;
};

const swap = (arr, i, j) => {
  if (i !== j) {
      arr[i] = arr[i] + arr[j];
      arr[j] = arr[i] - arr[j];
      arr[i] = arr[i] - arr[j];
  }
};
