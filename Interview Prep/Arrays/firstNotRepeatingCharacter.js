function firstNotRepeatingCharacter(s) {
    var list = s.split('')
    var b = {}
    for (var i = 0; i < list.length; i++){
        if (!!b[list[i]]){
            b[list[i]] = i + 2
        } else {
            b[list[i]] = 1
        }
    }
    var keys = Object.keys(b)
    var vals = Object.values(b)
    var ind = vals.indexOf(1)
    if (ind > -1){
        return keys[ind]
    } else {
        return '_'
    }
}
