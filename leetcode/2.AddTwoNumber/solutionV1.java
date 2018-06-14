/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode prev = dummyHead;
        int i = 0, cur = 0;
        int val1 = 0, val2 = 0;
        while (l1 != null || l2 != null || i > 0) {
            val1 = l1 == null ? 0 : l1.val;
            val2 = l2 == null ? 0 : l2.val;
            cur = (val1 + val2 + i) % 10;
            i = (val1 + val2 + i) / 10;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
            prev.next = new ListNode(cur);
            prev = prev.next;
        }
        return dummyHead.next;
    }
}