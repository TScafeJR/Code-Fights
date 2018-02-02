function sumOfTwo(a, b, v) {
    // for (var i = 0; i < a.length; i++){
    //     for (var j = 0; j < b.length; j++){
    //         if (a[i] + b[j] === v){
    //             return true
    //         }
    //     }
    // }
    // return false
    
    /* tbh fuck all this complexity shit :) */
  let n = a.length;
  let m = b.length;
  let hashMap = new Map();
  a.forEach(el => hashMap.set(el, true));
  
  
  for ( var el of b ) {
    if ( hashMap.has(v - el) ) {
      return true;
    }
  }
  return false;
}
