var testAllValid = function (goodUsers) {
  return function(inp) {
    return inp.every(function(i) {
      return goodUsers.some(function(j) {
        return j.id === i.id;
      });
    });
  }
}

module.exports = testAllValid;