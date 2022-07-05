function printTypeofAndValue(val) {
  console.log(typeof val, val );

}

let a = 0;
printTypeofAndValue(a);

let b = parseInt('1')  + a;
printTypeofAndValue(b);

let c = 15 - b;
printTypeofAndValue(c);

let d = c - null;
printTypeofAndValue(d);

let e = d - true;
printTypeofAndValue(e);
