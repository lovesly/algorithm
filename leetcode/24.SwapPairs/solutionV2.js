var swapPairs = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var p = head;
    var pre = dummy;
    while(p!=null && p.next !=null){
        var q = p.next,r=p.next.next;
        pre.next = q;
        q.next = p;
        p.next = r;
        pre = p;
        p = r;
        
    }
    
    return dummy.next;
};