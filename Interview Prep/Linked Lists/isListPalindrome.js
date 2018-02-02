// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    var copy = l
    
    if (!copy || !copy.next){
        return true
    }
    
    var dev = null;
    var slow = copy;
    var fast = copy;
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow=slow.next;
    }
    slow.next = reverseList(slow.next);
    slow = slow.next;
    while (slow) {
        if (slow.value !== copy.value) {
            return false;
        }
        slow = slow.next;
        copy = copy.next;
    }
    return true;
};

var reverseList = function(copy) {
    var prev = null;
    var next = null;
    while(copy !== null) {
        next = copy.next;
        copy.next = prev;
        prev = copy;
        copy = next;
    }
    return prev;
    
}
