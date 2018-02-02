function sudoku2(grid) {
    var row = {}
    var column = {}
    var box = {}
    for (var i = 0; i < grid.length; i++){
       for (var j = 0; j < grid[i].length; j++){
          if (grid[i][j] !== '.'){
             
             var sqNum = (parseInt(j/3) + parseInt(i/3)*3)
             console.log(sqNum, grid[i][j])
             if (!box[sqNum]){
                box[sqNum] = {}
             }
             
             if (!box[sqNum][grid[i][j]]){
             box[sqNum][grid[i][j]] = true
             } else {
                return false
             }
             
             if (!row[i]){
             row[i] = {}
             }
             if (!row[i][grid[i][j]]){
             row[i][grid[i][j]] = true
             } else {
                return false
             }
             
             if (!column[j]){
                column[j] = {}
             }
             if(!column[j][grid[i][j]]){
             column[j][grid[i][j]] = true
             } else {
                return false
             }
          }
       }
    }
    console.log(box)
    return true
 }
 