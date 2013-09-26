function repeat(fn, num) {
  if(num > 1) {
    repeat(fn, --num);
  }
  return fn();
}

module.exports = repeat;