function loadUsers(userIds, load, done) {
  var i=0;
  var users = userIds.reduce(function(prev, cur, idx) {
    load(cur, function(uObj) {
      prev[idx] = uObj;
      if(++i === userIds.length) {
        done(users);
      }
    });
    return prev;
  }, []);
  return users;
}

module.exports = loadUsers