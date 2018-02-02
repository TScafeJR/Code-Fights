function climbingStairs(n) {
    var num0 = 0
    var numNew = 1
    for (var i = 0; i < n; i++){
        var temp = numNew
        numNew = numNew + num0
        num0 = temp
    }
    
    return numNew
}
