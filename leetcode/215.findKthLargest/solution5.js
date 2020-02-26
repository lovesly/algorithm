// 快速选择，优化版？比我的快。
/**
 * 看样子是 
 * 1 随机选择 pivot，对于一些特殊构造的测试数据会快一些。
 * 2 这个有意思，用绝对的index，而不是我的相对的第几小元素。？？这个并没有去划分
 * 2 而是通过双指针逼近，有意思。
 * 3 迭代代替了递归
 */ 
var findKthLargest = function(nums, k) {
  const len = nums.length
  const target = len - k
  let left = 0
  let right = len - 1
  while (true) {
    const index = partition(nums, left, right)
    if (index === target) {
      return nums[index]
    } else if (index < target) {
      left = index + 1
    } else {
      right = index - 1
    }
  }
};

// 我还真没见过这种 partition 方式？
// interesting
function partition(nums, left, right) {
  if (right > left) {
    swap(nums, left, Math.round(Math.random() * (right - left)) + left)
  }
  const pivot = nums[left]
  
  let lt = left + 1
  let rt = right
  while (true) {
    while(lt <= rt && nums[lt] < pivot) {
      lt++
    }
    while (lt <= rt && nums[rt] > pivot) {
      rt--
    }
    if (lt > rt) {
      break
    }
    swap(nums, lt, rt)
    lt++
    rt--
  }
  swap(nums, left, rt)
  return rt
}

function swap(nums, i, j) {
  const temp = nums[j]
  nums[j] = nums[i]
  nums[i] = temp
}