const targetObj = { a: 0 };

const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`)
    // target[prop] = value;
    throw new Error('cannot add prop.');
  },
  get: function (target, prop, receiver) {
    console.log(receiver)
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return '-1';
    }
  },
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`)
    delete target[prop]
  }
}
const proxy = new Proxy(targetObj, handler);
console.log(proxy.b);
// delete proxy.a;
// console.log(proxy.a)
