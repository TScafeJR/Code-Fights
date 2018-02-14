//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function digitTreeSum(t) {
    var sums = [];
    dfs(t, sums, "");
    var total = 0;
    for(var i = 0; i < sums.length; i++)
        total += parseInt(sums[i]);
    
    return total;
}

    function dfs(t, sums, sum){
        if(t == null) return;
        if(t.visited == true) return;

        if(t.left == null && t.right == null){
            sums.push( sum + t.value);
            return;
        }

        dfs(t.left, sums, sum + t.value);
        dfs(t.right, sums, sum + t.value);
}
