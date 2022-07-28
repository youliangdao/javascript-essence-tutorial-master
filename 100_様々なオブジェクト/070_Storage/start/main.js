const obj = {a: 0};
const json = JSON.stringify(obj);
localStorage.setItem("key", json);
const value = localStorage.getItem("key");
const object = JSON.parse(value);
console.log(object)
