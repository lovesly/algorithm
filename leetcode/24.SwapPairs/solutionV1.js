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
var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let cur = dummy;
    let tmp;
    while (cur !== null && cur.next !== null) {
        tmp = cur.next.next;
        if (!tmp) break;
        cur.next.next = tmp.next;
        tmp.next = cur.next;
        cur.next = tmp;
        cur = tmp.next;
    }
    return dummy.next;
};