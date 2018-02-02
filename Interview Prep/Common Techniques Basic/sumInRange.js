function sumInRange(nums, queries) {
    let m = 1000000007;
     let prefixSum = [];
     let sum;
     prefixSum[0] = nums[0];
     for ( var i = 1; i < nums.length; i++ ) {
       prefixSum[i] = prefixSum[i - 1] + nums[i];  
     }
     return queries.reduce(( accu, curr ) => {
       if ( curr[0] === 0 ) {
         sum = prefixSum[curr[1]];
       } else {
         sum = prefixSum[curr[1]] - prefixSum[curr[0] - 1];
       }
       if ( sum >= 0 ) {
         accu += sum % m;  
       } else {
         accu += m + sum;  
       }
       
       return accu;
     }, 0) % m;
   }
   