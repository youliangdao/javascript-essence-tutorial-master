import './moduleA.js'
console.log(this)

function fn() {
  console.log(this)
}
fn();

const obj = {
  fn
}
obj.fn();

console.log(window.d)
