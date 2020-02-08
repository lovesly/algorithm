/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路简单，写得有点啰嗦
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let _a = headA, _b = headB;
    let lenA = 0, lenB = 0;
    while (_a) {
        lenA++;
        _a = _a.next;
    }
    while (_b) {
        lenB++;
        _b = _b.next;
    }
    _a = headA;
    _b = headB;
    // 谁长谁先走
    let diff = Math.abs(lenA - lenB);
    if (lenA >= lenB) {
        while (diff-- > 0) _a = _a.next;
    } else {
        while (diff-- > 0) _b = _b.next;
    }
    while (_a) {
        if (_a === _b) return _a;
        _a = _a.next;
        _b = _b.next;
    }
    return null;
};