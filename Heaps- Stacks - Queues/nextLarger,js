function nextLarger(a) {
    var r = [];
    
    var y = 1;
    for (var i = 0; i < a.length; i++){
        y = i + 1;
        while (a[i] >= a[y] && y < a.length){
            y++;
        }
        
        if (y == a.length){
            r.push(-1);
        } else {
            r.push(a[y]);
        }
    }
    
    return r;
}
