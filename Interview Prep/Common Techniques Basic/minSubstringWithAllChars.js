function minSubstringWithAllChars(s, t) {
    if ( t === '' ) {
      return '';
    }
    if ( t.length === 1 ) {
      return (t.indexOf(t) === -1) ? '' : t;
    }
    let tCharCount = {};
    let sCharCount = {};  
    let count = 0;
    let start = 0;
    let results = [0, +Infinity];
    t.split('').forEach(char => {
      tCharCount[char] = tCharCount[char]++ || 1;
    }); 
    for ( var i = 0; i < s.length; i++ ) {
      let char = s.charAt(i);
      sCharCount[char] = sCharCount[char] + 1 || 1; 
      if ( tCharCount[char] && sCharCount[char] <= tCharCount[char] ) {
        count++;
      }
      if ( count === t.length ) {
        let firstChar = s.charAt(start);
        while ( !tCharCount[firstChar] || sCharCount[firstChar] > tCharCount[firstChar] ) {
          if ( sCharCount[firstChar] > tCharCount[firstChar] ) {
            sCharCount[firstChar]--; 
          }
          start++; 
          firstChar = s.charAt(start); 
        }
        if ( results[1] - results[0] > i - start ) {
          results = [start, i]; 
        }
      }
    }
    return (results[1] === +Infinity) ? '' : s.slice(results[0], results[1] + 1); 
  }
  