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
    let detectNode = head;
    let dummyHead = head;
    // get length
    while (detectNode.next !== null) {
        detectNode = detectNode.next;
        length++;
    }
    detectNode = dummyHead;
    k = k % length;
    while (k-- > 0) {
        detectNode = detectNode.next;
    }
    while (detectNode.next !== null) {
        detectNode = detectNode.next;
        dummyHead = dummyHead.next;
    }
    detectNode.next = head;
    head = dummyHead.next;
    dummyHead.next = null;
    return head;
};

// first try. passed.
// not elegent