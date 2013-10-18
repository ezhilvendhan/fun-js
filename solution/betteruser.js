module.exports = withoutObjCreate;

function withoutObjCreate(User) {
  function BetterUser() {
    User.apply(this, arguments);
  }
  function Dummy() {}
  Dummy.prototype = User.prototype;
  BetterUser.prototype = new Dummy();
  BetterUser.constructor = BetterUser;
  BetterUser.prototype.toString = function() {
    return "[BetterUser: " + this.name + " (" + this.age+")]";
  }
  return BetterUser;
}

function withObjCreate(User) {
  function BetterUser() {
    User.apply(this, arguments);
  }
  BetterUser.prototype = Object.create(User.prototype);
  BetterUser.constructor = BetterUser;
  BetterUser.prototype.toString = function() {
    return "[BetterUser: " + this.name + " (" + this.age+")]";
  }
  return BetterUser;
}