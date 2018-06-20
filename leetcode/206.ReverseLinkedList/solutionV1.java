/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode dummyHead = new ListNode(0);
        ListNode next = head;
        
        while (next != null) {
            next = head.next;
            head.next = dummyHead.next;
            dummyHead.next = head;
            head = next;
        }
        
        return dummyHead.next;
    }
}

// need an extra ListNode; 