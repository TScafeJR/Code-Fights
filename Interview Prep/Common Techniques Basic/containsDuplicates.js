function containsDuplicates(a) {
    var seen = {};
    for (var i = 0; i < a.length; i++){
        if (!seen[a[i]]){
            seen[a[i]] = "seen"
        } else {
        return true
        }
    }
    
    return false
}
