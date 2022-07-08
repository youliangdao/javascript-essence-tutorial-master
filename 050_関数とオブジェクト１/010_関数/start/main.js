function fn(...args) {
  console.log(args);
  const a = arguments[0];
  const b = arguments[1];
  console.log(a, b);
  return a;
}

c = fn(1, 0, null);
console.log(c);
