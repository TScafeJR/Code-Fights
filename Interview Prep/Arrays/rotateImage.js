function rotateImage(a) {
    let n = a.length;
  
    for ( var h = 0; h < Math.floor(n / 2); h++ ) {
      for ( var i = h; i < n - 1 - h; i++ ) {
        let temp = a[h][i];
        a[h][i] = a[n - 1 - i][h];
        a[n - 1 - i][h] = a[n - 1 - h][n - 1 - i];
        a[n - 1 - h][n - 1 - i] = a[i][n - 1 - h];
        a[i][n - 1 - h] = temp;
  
      }
    }
    return a;
   
  }
  