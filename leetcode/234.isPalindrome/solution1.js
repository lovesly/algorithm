/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * O(n) 时间复杂度和 O(1) 空间复杂度
 * 很直观的想法就是遍历一遍，找到中点从中切断
 * 再遍历一遍将第二个链表翻转
 * 再遍历第一个链表对比，或者在步骤2里直接对比就好
 * 唯一的特例就是奇偶的问题。
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  // 快慢指针找中点
  let fast = head, slow = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  // 处理奇偶问题。
  if (fast) slow = slow.next;
  // 从 slow 开始，翻转链表
  const dummy = new ListNode();
  while (slow) {
      const tmp = dummy.next;
      dummy.next = slow;
      slow = slow.next;
      dummy.next.next = tmp;
  }
  // 翻转完毕，对比
  while (dummy.next) {
      if (dummy.next.val !== head.val) return false;
      dummy.next = dummy.next.next;
      head = head.next;
  }
  return true;
};