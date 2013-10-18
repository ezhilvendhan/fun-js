module.exports = {
  Lookup: Lookup,
  Create: Create,
  New: New
};

function Lookup(context, property) {
  if (! context) return undefined;
  if(Object.prototype.hasOwnProperty.call(context, property)) return context[property];
  else return Lookup(context.__PROTO__, property);
}

function Create(proto) {
  var obj = {};
  obj.__PROTO__ = proto;
  return obj;
}

function New(Constructor) {
  var o = Create(Constructor.PROTOTYPE);
  var ret = Constructor.apply(o, Array.prototype.slice.call(arguments, 1));
  if(ret != undefined) return ret;
  else return o;
}