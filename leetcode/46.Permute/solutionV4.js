/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    let res = []
    if(!nums.length) return res
    let generatePermutation = function(nums,p){
        if(nums.length === 0){
            res.push(p.slice(0))
            return
        }
        for(let i=0;i<nums.length;i++){
            let node = nums.splice(i,1)[0]
            p.push(node)
            generatePermutation(nums,p)
            nums.splice(i,0,node)
            p.pop()
        }
    }
    generatePermutation(nums,[])
    return res
};

// same idea, only difference is he use p.splice(0) to push a copy. use it like a stack
// this way, you don't have to create a cur instance, you only have one instance.