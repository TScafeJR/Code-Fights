function decodeString(s) {
    var match=s.match(/(\d+)\[([^\[\]]{1,})]/)
    
    if(!match) {
        return s
    }
    
    var pre=s.substr(0, match.index)
    var post=s.substr(match.index+match[0].length)
    var mid=''
    for(i=0; i<+match[1]; i++){
        mid+=match[2]
    }
    
    
    return decodeString(pre+mid+post)
}
