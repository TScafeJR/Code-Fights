function swapAdjacentWords(s) {
  return s.replace(/([a-z]+) ([a-z]+)/gi, '$2 $1')
}
