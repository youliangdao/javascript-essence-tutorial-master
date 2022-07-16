const map = new Map();
const key1 = {};

map.set(key1, "value1");
// console.log(map.get(key1));

const key2 = function () {

}
map.set(key2, "value2");
// console.log(map.get(key2))

const key3 = 0;
map.set(key3, "value3");
// console.log(map.get(0));

map.delete(key1);

// for (const [k, v] of map) {
//   console.log(k, v);
// }

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

for (let k of s) {
  console.log(k);
}

console.log(s.has(key2))
console.log(s.has(key3))

// const array = Array.from(s);
const array = [...s]
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element)
}
