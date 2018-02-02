function composeRanges(nums) {
    var pairs = {};
var final = [];
var start = nums[0];
var end = nums[0]
for (var i = 0; i < nums.length; i++){
    if(nums[i+1] !== nums[i] + 1){
        var end = nums[i];
        if (end === start){
            pairs[start] = null;
            start = nums[i+1];
        } else {
        pairs[start] = end;
        start = nums[i+1];
        }
    }
}

if (Object.keys(pairs).length < 1){
    return final;
}
var sortable = [];
for (var number in pairs) {
    sortable.push([number, pairs[number]]);
}

sortable.sort(function(a, b) {
    return a[0] - b[0];
});

var clone = Object.keys(sortable).map(function(key) {
    return pairs[key];
});
// console.log(`clone: ${clone}`)
for (var j = 0; j < Object.keys(pairs).length; j++){
    var first = sortable[j][0]
    var second = sortable[j][1]
    if (!!second){
        final.push(`${first}->${second}`)
    } else {
        final.push(`${first}`)
    }
}
console.log(sortable)
console.log(final)
return final
}