function sortByString(s, t) {
    // var hold = 'abcdefghijklmnopqrstuvwxyz'.split("")
    s = s.split("");
    t = t.split("");
    var final = '';
    
    for (var i = 0; i < t.length; i++){
        while (check(s, t[i]) > -1){
            var num = check(s, t[i]);
            final += s[num];
            s.splice(num, 1);
        }
    }
    
    function check(first, second){
        return first.indexOf(second);
    }
    
    return final;
}
