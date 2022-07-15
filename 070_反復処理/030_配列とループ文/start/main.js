const arry = [1, 2, 3, 4, 5];
for (let i = 0; i < arry.length; i++) {
  const element = arry[i];
  console.log(element);
}

let v, i = 0;
while (v = arry[i++]) {
  console.log(v);
}
