/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let arr1 = [],
        arr2 = [];
    let result = [];
    while(l1!=null){
    	arr1.push(l1.val);
    	l1 = l1.next;
    }
    while(l2!=null){
    	arr2.push(l2.val);
    	l2 = l2.next;
    }
    while(arr1.length && arr2.length){
    	if(arr1[0] <= arr2[0]) {
    		result.push(arr1.shift());
    	}
    	else {
    		result.push(arr2.shift());
    	}
    	
    }
    result = result.concat(arr1,arr2)
    return result
};

// interesting solution.