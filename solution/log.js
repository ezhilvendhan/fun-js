function loggerWithoutBind(ns) {
  return function() {
    var inp = Array.prototype.slice.call(arguments);
    console.log.apply(null, [ns].concat(inp.slice()))
  }
}

function logger(ns) {
  return console.log.bind(null, ns);
}

module.exports = logger;