// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    // l.forEach(function(element){
    //     if (element.next === k){
    //         element.next = element.next.next
    //     }
    // })
    // return l
    // 
    
    // 1. do this.value = k?
    // 2. while l.next !== null
    // 3. go to this.next
    // 4. this.value = k?
    //   - true: this.value = null
    //   - false: do nothing
    function check(ll) {
        if (ll !== null && ll.value !== null && ll.value === k){
            ll = ll.next
        }
        
        if (ll !== null && ll.value !== null && ll.value === k){
            return check(ll)
        }
        
        return ll
    }
    
    l = check(l)
    
    var pointer = l;
    
    while (pointer !== null && pointer.next !== null) {
        
        if (pointer.next.value === k){
            pointer.next = pointer.next.next
        } else {
        pointer = pointer.next
        }
        
        
    }
    
            
    return l
}
