/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums) return null;
    var res =[];
    exchange(0);
    function exchange(n){
      if(n==nums.length-1){
        var tmp = [];
        for(var i=0;i<nums.length;i++){
          tmp.push(nums[i]);
        }
        res.push(tmp);
        return;
      }
      for(var i=n;i<nums.length;i++){
        swap(nums,n,i);
        exchange(n+1);
        swap(nums,n,i);
      }
    }
    function swap(nums,a,b){
      var tmp = nums[a];
      nums[a] = nums[b];
      nums[b] = tmp;
    }
    return res;
};

// smart, not working.
// stupid.
// test 
const data = [1, 2];
permute(data);