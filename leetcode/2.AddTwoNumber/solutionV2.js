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
    if (l1===null) return l2;
    if (l2===null) return l1;

    var l3 = new ListNode(0);
    var cur = l3;
    var r = 0;
    while (l1 !== null || l2 !== null || r > 0) {
        cur.next = new ListNode(0);
        cur = cur.next;
        if (l1 !== null) {
            r += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            r += l2.val;
            l2 = l2.next;
        }
        cur.val = r%10;
        r = parseInt(r/10);
    }
    return l3.next;
};