//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    if(t === null && s === 0){
        return true
    } else if( t === null && s !== 0){
        return false 
    }
    
    return helper(t, s, t.value)
}
function helper(node, sum, cs) {
    if(node.left === null && node.right === null && sum !== cs){
        return false
    } else if (node.left === null && node.right === null && sum === cs) {
        return true
    }
    
   let left = false
   let right = false
    
    if(node.left){
        left = helper(node.left, sum, cs + node.left.value)
        
    }
    
    if(node.right){
        right = helper(node.right, sum, cs + node.right.value)
    }
    
    return left || right 
    
}
