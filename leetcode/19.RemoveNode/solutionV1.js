/** Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/
var removeNthFromEnd = function(head, n) {
   let real = head;
   let fake = head;
   while (n > 0) {
       fake = fake.next;
       n--;
   }
   if (fake === null) return head.next;
   while (fake && fake.next != null) {
       real = real.next;
       fake = fake.next;
   }
   real.next = real.next.next;
   return head;
};