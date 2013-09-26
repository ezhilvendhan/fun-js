function arrayMap(inp, fn) {
  return inp.reduce(function(prev, cur) {
    prev.push(fn(cur));
    return prev;
  }, []);
}

module.exports = arrayMap;