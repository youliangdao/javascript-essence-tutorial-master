let a = 0
let b = ++a;

function fn() {
  let a = 0;
  return a++;
}

console.log(!(fn() * 5));
