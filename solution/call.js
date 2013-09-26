function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(prev, cur) {
    return Object.prototype.hasOwnProperty.call(cur, 'quack') ? ++prev : prev;
  }, 0);
}

module.exports = duckCount;