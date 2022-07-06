const a = {
  prop: 0
}

let {prop: b} = a;
b = 1;
console.log(a, b)

function fn2({prop}) {
  prop = 1;
  console.log(a, prop);
}

fn2(a);

const c = {
  prop1: {
    prop2: 0
  }
}
let {prop1} = c;
console.log(prop1);
prop1.prop2 = 1;

console.log(c, prop1);
