function countWords(inp) {
  return inp.reduce(function(prev, cur) {
           prev[cur] = prev[cur] ? ++prev[cur] : 1;
           return prev;
  }, {})
}

module.exports = countWords;