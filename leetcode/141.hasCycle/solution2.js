var hasCycle = function (head) {
    if (!head || !head.next) return false;
    let slow = head.next;
    let fast = slow.next;
    while (slow != fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// 两种方法基本一样，只不过循环的首尾稍有区别