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
// 快慢指针，有环一定会相遇。此时再有一个从起点出发，则会和慢指针在入口相遇。
var detectCycle = function (head) {
    // 判断是否有环
    let s = head, f = head, hasCircle = false, third = head;
    while (f && f.next) {
        s = s.next;
        f = f.next.next;
        if (s === f) {
            hasCircle = true;
            break;
        }
    }
    if (!hasCircle) return null;
    while (third !== s) {
        third = third.next;
        s = s.next;
    }
    return third;
};