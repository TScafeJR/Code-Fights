function firstDuplicate(a) {
    var b = {};
    for (var i = 0; i < a.length; i++){
        if (!!b[a[i]]){
            return a[i]
        } else {
            b[a[i]] = true
        }
    }
    return -1
}
