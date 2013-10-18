function curryN(fn, n) {
  var arr = Array.prototype.slice.call(arguments),
      args = arr[2] || [];
  args = args.slice();
  n = n || fn.length;
  if(arr[3] && (args.length < n)) args.push(arr[3]);
  if((n <= args.length) || (n <= 0)) {return fn.apply(fn, args)}
  else return curryN.bind(curryN, fn, n, args);
}

module.exports = curryN