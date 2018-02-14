function amendTheSentence(s) {
    s = s.split('')
    var temp = [];
    var temp2 = [];
    for (i = 0; i < s.length; i++){
        if (s[i] !== s[i].toLowerCase()){
            temp.push(i)
        }
    }
    
    if (temp.includes(0) === false){
        temp.unshift(0)
    }
    
    for (j = 0; j < temp.length - 1; j++){
        temp2.push(s.slice(temp[j], temp[j + 1]))
    }
    
    temp2.push(s.slice(temp[temp.length - 1]))
    temp2 = Array.from(temp2, x => x.join(''))
    temp2 = temp2.join(' ')
    temp2 = temp2.toLowerCase()
    return temp2
}
