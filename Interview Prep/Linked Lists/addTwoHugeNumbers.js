// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    var num1 = 0;
    var num2 = 0;
    var endArr = [];
    var num7 = 0;
    
    function addNum(ll, holder){
        while(ll){
            ll.value = ll.value.toString()
            if (ll.value.length < 4){
                while(ll.value.length < 4){
                    ll.value = '0'.concat(ll.value)
                }
            }
            holder = holder.toString();
            holder = holder + ll.value;
            ll = ll.next
        }
        return holder
    }
    var arr1 = addNum(a, num1).split('')
    var arr2 = addNum(b, num2).split('')
    
    function fix(number){
        tempArr = [];
    
        while (number.length > 3){
            var len = number.length - 4
            var temp = number.splice(len, 4)
            temp = temp.join('')
            temp = parseInt(temp)
            tempArr.unshift(temp)
        }

        if(number.length > 0){
            var temp = number
            temp = temp.join('')
            temp = parseInt(temp)
            tempArr.unshift(temp)
        }
        
        if(number[0] === '0'){
            number.splice(0, 1)
        }
        
        return tempArr
    }
    
    console.log(fix(arr1), fix(arr2))
}
