/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // maybe check typeof head? 
    if (!head || head.next === null || k === 0) return head;
    
    let length = 1;
    let p = head;
    while (p.next !== null) {
        p = p.next;
        length++;
    }
    p.next = head;
    k = length - k % length;
    while (--k > 0) {
        head = head.next;
    }
    p = head.next;
    head.next = null;
    return p;
};

// modified version, just need one more node.