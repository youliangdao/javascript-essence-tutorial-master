// const arry1 = [1, 2, 3, 4, 5];
// const arry2 = [...arry1, 6];
// arry2.push(6);
// console.log(arry1 === arry2)

// function sum(...args) {
//   let sum = 0;
//   for (const i of args) {
//     sum = sum + i;
//   }
//   console.log(sum)
// }

// sum(1, 2, 3, 4, 5, 5, 9);

const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
}

Object.prototype[Symbol.iterator] = function* () {
  for (const key in this) {
    yield this[key]
  }
}

const arry3 = { ...obj1 };
console.log(arry3)
