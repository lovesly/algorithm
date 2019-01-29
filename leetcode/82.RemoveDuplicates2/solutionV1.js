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
    if (!head) return null;
    // need a reference to previous valid node
    const dummyHead = new ListNode('bang');
    let prev = dummyHead;
    // ugly
    let marked = false;
    while (head) {
        if (head.next) {
            if (head.val === head.next.val) {
                marked = true;
            } else {
                if (!marked) {
                    prev.next = new ListNode(head.val);
                    prev = prev.next;
                }
                marked = false;
            }
        } else if (!marked) {
            prev.next = head;
        }
        head = head.next;
    }    
    return dummyHead.next;
};

// ugly, don't tell anyone that you've learned algorithms.