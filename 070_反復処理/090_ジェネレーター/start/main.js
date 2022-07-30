

// let a = genIterator(5);
// let obj = a.next();
// while (!obj.done) {
//   console.log(obj.value)
//   obj = a.next();
// }

const obj = {
  *[Symbol.iterator](max = 10) {
      let i = 0;
      while (i < max) {
      yield i++;
    }
    return;
  }
}
for (const i of obj) {
  console.log(i)
}
