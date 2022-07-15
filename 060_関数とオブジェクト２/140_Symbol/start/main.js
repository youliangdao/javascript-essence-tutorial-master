const a = Symbol("hello");
const a1 = Symbol("hello");
console.log(a === a1);
console.log(typeof a);

const str = new String("Tom");
console.log(str)

String.prototype[a] = function () {
  return "hello " + this;
}

const tom = "Tom";
console.log(tom[a]());
