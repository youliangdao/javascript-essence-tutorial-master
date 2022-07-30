// const arry = [1, 2, 3, 4, 5]
// const arry2 = [...arry]
// console.log(arry2 === arry)

// function sum(...arg) {
//   let result = 0;
//   for (const i of arg) {
//     result += i;
//   }
//   console.log(result);
// }
// sum(1, 2, 3, 4, 5)

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  *[Symbol.iterator]() {
    for (const key in this) {
        yield this[key];
      }
    }
}

const arry = {...obj};
console.log(arry)
