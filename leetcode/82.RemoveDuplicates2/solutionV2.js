/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null){
        return null;
    }
    if(head.next !== null && head.val === head.next.val){
        while(head.next !== null && head.val === head.next.val){
            head = head.next;
        }
        return deleteDuplicates(head.next);
    }else{
        head.next = deleteDuplicates(head.next)
    }
    return head;
};

// 有点意思， 递归。