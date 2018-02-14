function groupingDishes(dishes) {
    var obj = {}
    var finalArr = []
    var ascNumSort = function compareStr(str1, str2) {
        for (let i = 0; i < str1.length; i++) {
        if (!str2[i]) break;
        if (str1[i].charCodeAt() !== str2[i].charCodeAt()) {
        return str1[i].charCodeAt() > str2[i].charCodeAt() ? 1 : -1;
        }
        }
        if (str1.length !== str2.length) {
        return str1.length > str2.length ? 1 : -1;
        }
        return 0;
    }
    
    for (var i = 0; i < dishes.length; i++){
        for (var j = 0; j < dishes[i].length; j++){
            var dish = dishes[i][j]
            var arr = obj[dish]
            if (j !== 0 && !obj[dish]){
                obj[dish] = []
                arr = []
                arr.push(dishes[i][0])
                obj[dish] = arr
            } else if (j !== 0) {
                 arr.push(dishes[i][0])
                 obj[dish] = arr.sort()
            }
        }
    }

    for (var i = 0; i < Object.keys(obj).length; i++){
        if (Object.values(obj)[i].length > 1){
            var temp = Object.values(obj)[i]
            temp.unshift(Object.keys(obj)[i])
            finalArr.push(temp)
        }
    }
    
    return finalArr.sort()
}
