function productExceptSelf(nums, m) {
    let temp = 1;
   let results = [];
   const n = nums.length;
   for ( var i = 0; i < n; i++ ) {
     results.push(temp % m);
     temp = ( temp * nums[i] % m) % m;
   }
   temp = 1;
   for ( var i = n - 1; i >= 0; i-- ) {
     results[i] = (results[i] * temp) % m;
     temp = ( temp * nums[i] % m) % m;
   }
   console.log(results);
   return results.reduce((accu, curr) => {
     accu += curr;
     return accu;
   }, 0) % m;
 }
 