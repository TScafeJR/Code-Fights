function isCryptSolution(crypt, solution) {
    var hold = {}
    for (var i = 0; i < solution.length; i++){
        hold[solution[i][0]] = [solution[i][1]]
    }
    
    for (var j = 0; j < crypt.length; j++){
        crypt[j] = crypt[j].split('');
        
        for (var k = 0; k < crypt[j].length; k++){
            crypt[j][k] = hold[crypt[j][k]]
            
        }
        crypt[j] = crypt[j].join('')
        if(crypt[j].length > 1 && crypt[j][0] === '0'){
            return false
        }
        console.log(crypt[j][0] === '0')
    }
    
    
    
    console.log(crypt)
    if (parseInt(crypt[0]) + parseInt(crypt[1]) === parseInt(crypt[2])){
        return true
    } else {
        return false
    }
}
