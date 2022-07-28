const wm = new WeakMap();

let a = {};
wm.set(a, "value1");
// a = null;
console.log(wm.delete(a))
console.log(wm.get(a))

// const key1 = "key1";
// const key2 = "key2";
// const key3 = "key3";
// const map = new Map();
// map.set(key1, "value1");
// map.set(key2, "value2");
// map.set(key3, "value3");
// console.log(map)
// const set = new Set();
// set.add(key1);
// set.add(key2);
// set.add(key3);
// set.add(key3);

// console.log(set)
