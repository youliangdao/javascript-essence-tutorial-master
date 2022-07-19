new Promise(function(resolve, reject) {
  console.log("promise");
  // reject("hello");
  setTimeout(function () {
    resolve("hello");
  }, 3000)
}).then(function (name) {
  console.log("then:" + name);
  // throw new Error();
  return name;
}).then(function (name) {
  console.log("then:" + name);
}).catch(function (name) {
  console.log("catch:" + name);
}).finally(function (name) {
  console.log("finally:" + name);
})

console.log("global end");
