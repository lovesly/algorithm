/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // very interesting, !! trick is not fast here
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    
    const dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;
    while (l1 != null || l2 != null || carry > 0) {
        let val1 = l1 != null ? l1.val : 0;
        let val2 = l2 != null ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = ~~(sum/10);
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    return dummyHead.next;
};