/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    if(!nums.length) return res;
    nums.sort((a, b) => a - b);
    let generatePermutation = function(nums,p){
        if(nums.length === 0){
            res.push(p.slice(0));
            return;
        }
        for(let i=0;i<nums.length;i++){
            if (i != 0 && nums[i] == nums[i-1]) continue;
            let node = nums.splice(i,1)[0];
            p.push(node);
            generatePermutation(nums,p);
            nums.splice(i,0,node);
            p.pop();
        }
    }
    generatePermutation(nums,[])
    return res;
};