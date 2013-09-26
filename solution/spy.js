function Spy(target, method) {
  Spy.count = 0;
  var meth = target[method];
  target[method] = function() {
    ++Spy.count;
    return meth.apply(target, arguments);
  }
  return Spy;
}

module.exports = Spy;