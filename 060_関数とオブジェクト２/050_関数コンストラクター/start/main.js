// function fn1(a, b) {
//   console.log(a + b);
// }
// let d = 2;
// function fn() {
//     let d = 1;
//     fn1(1, d);
// }
// fn();


let d = 0;
function fn() {
  let d = 1;
  const fn1 = new Function("a", "b", "return a * b * d");
  const result = fn1(1, 2);
  console.log(result);
}

fn();

const obj = new function () {
  this.a = 0;
}

const fn3 = new Function("this.a = 0;");
fn3.prototype.hello = function () {
  console.log("hello");
}

const b = new fn3();
b.hello();
// function fn2(a, b) {
//   return a + b;
// }
