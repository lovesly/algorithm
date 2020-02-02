// 跪了，这个很牛逼啊，比我的快速选择快一倍。
// 靠，他吗的计数排序。。。难怪速度快了但是占用内存多了不少
var findKthLargest = function(nums, k) {
  var a = []
  if (k == 0) return -1;
  
  nums.forEach(n =>{
      if(a[n])
          a[n]++
    else
      a[n] = 1;
  })
  
  let count = 0;
  for (let i = a.length -1; i >= 0; i--){
      if(a[i] === undefined)
          continue
      
      count = count + a[i]
      if(count >= k)
          return i
  }
  return -1
};