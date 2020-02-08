/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* 
我记得有个用分治法的线性时间选择算法。但是忘了细节了。
最蠢的，排序，但是这样包含了大量无用功
最大堆？
线性时间选择算法。
*/
var findKthLargest = function(nums, k) {
  // 建堆，有别的办法吗？如果往堆里添加一个值呢？
  // 那就先加在末尾，然后如果比他爹大，交换，然后递归就好。easy
  let res;
  const buildHeap = () => {
      const start = ~~((nums.length - 1)/2);
      for (let i = start; i >= 0; i--) {
          maxheapify(nums, nums.length, i);
      }
  };
  // maxheapify
  const maxheapify = (arr, length, i) => {
      let left = 2 * i + 1, right = 2 * i + 2, largest = i;
      if (left < length && arr[left] > arr[i]) largest = left;
      if (right < length && arr[right] > arr[largest]) largest = right;
      if (largest !== i) {
          swap(arr, i, largest);
          maxheapify(arr, length, largest);
      }
  };
  buildHeap();
  // 排序
  while (k-- > 0) {
      // 取数
      res = nums[0];
      swap(nums, 0, nums.length-1);
      nums.length -= 1;
      maxheapify(nums, nums.length, 0);
  }
  return res;
};

const swap = (arr, i, j) => {
  if (i !== j) {
      arr[i] = arr[i] + arr[j];
      arr[j] = arr[i] - arr[j];
      arr[i] = arr[i] - arr[j];
  }
};