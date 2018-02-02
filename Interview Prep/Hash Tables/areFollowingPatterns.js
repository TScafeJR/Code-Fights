function areFollowingPatterns(strings, patterns) {
    //needs to be a bijective function
   let hash = {};
  for ( var i = 0; i < patterns.length; i++ ) {
    let currentPattern = patterns[i];
    if ( !hash[currentPattern] ) {
      if ( Object.values(hash).indexOf(strings[i]) === -1 ) {
        hash[currentPattern] = strings[i];
      } else {
        return false;
      }  
      
    } else {
      if ( hash[currentPattern] !== strings[i] ) {
        return false;
      }
    }
  }
  return true;
}
