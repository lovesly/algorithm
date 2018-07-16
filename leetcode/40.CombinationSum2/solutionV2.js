/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort(function(a,b){
        return a-b;
    })
    if(!candidates || !candidates.length){
        return [];
    }
    var results=[];
    var subcombin = function(start,newtarget,resultlist){
        for(var i=start;i<candidates.length;i++){
            if (i != start && candidates[i] == candidates[i-1]) continue;
            if(candidates[i]==newtarget){
                results.push(resultlist.concat(candidates[i]));
            }else if(candidates[i]<newtarget){
                subcombin(i+1,newtarget-candidates[i],resultlist.concat(candidates[i]));
            }
        }
    }
    subcombin(0,target,[]);
    return results;
};