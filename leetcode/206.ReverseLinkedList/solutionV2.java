/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode backHead = head;
        ListNode cur = head.next;
        head.next = null;
        ListNode tmp = head;
        while(cur != null) {
            tmp = cur;
            cur = cur.next;
            tmp.next = backHead;
            backHead = tmp;
        }
        
        return backHead;
    }
}

// saves a ListNode.