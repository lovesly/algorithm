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
// merge sort, 写得有点复杂，想多了吧
// 他吗的有点丑陋啊
var sortList = function(head) {
  if (!head || !head.next) return head;
  let len = 0, h = head;
  while (h) {
      len++;
      h = h.next;
  }
  // break and merge
  return init(head, len);
};

const init = (head, len) => {
  if (len <= 1) return head;
  // break point
  const mid = ~~(len/2);
  let a = head, b = head, s = 0;
  while (s < mid-1) {
      s++;
      b = b.next;
  }
  // break the list into 2 sub list
  const tmp = b.next;
  b.next = null;
  b = tmp;
  // merge
  a = init(a, mid);
  b = init(b, len - mid);
  return merge(a, b);
};

// merge 有序列表
const merge = (A, B) => {
  let H, dummyH;
  if (A.val <= B.val) {
      dummyH = H = A;
      A = A.next;
  } else {
      dummyH = H = B;
      B = B.next;
  }
  while (A && B) {
      if (A.val <= B.val) {
          H.next = A;
          A = A.next;
          H = H.next;
      } else {
          H.next = B;
          B = B.next;
          H = H.next;
      }
  }
  if (!A) {
      H.next = B;
  } else {
      H.next = A;
  }
  return dummyH;
};