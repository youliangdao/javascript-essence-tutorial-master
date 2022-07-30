function genIterator(max = 10) {
  let i = 0;
  return {
    next: function () {
      if (i >= max) {
        return {
          done: true
        }
      }
      return {
        done: false,
        value: i++
      }
    }
  }
}

// const it = genIterator(5);
// let a = it.next();
// console.log(a);
// while (!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

const obj1 = {
  [Symbol.iterator] : genIterator
}
const obj2 = Object.create(obj1)
obj2.prop1 = 1;
obj2.prop2 = 2;
for (const i of obj2) {
  console.log(i)
}
const set = new Set(obj2);
