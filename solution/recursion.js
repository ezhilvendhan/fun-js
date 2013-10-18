function getDependencies(tree) {
  var arr = [];
  Object.keys(tree).forEach(function(key) {
    var temp = [];
    if(tree[key] instanceof Object) {
      if(key !== 'dependencies' && 'version' in tree[key]) {
        arr.push(key + '@' + tree[key].version);
      }
      temp = getDependencies(tree[key]);
      temp.forEach(function(item) {
        if(arr.indexOf(item) < 0) arr.push(item);
      });
    }
  });
  return arr.sort();
}

module.exports = getDependencies