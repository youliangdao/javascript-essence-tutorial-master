function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 6000)
  });
}

sleep(0).then(function (val) {
  return sleep(val)
}).then(function (val) {
  return sleep(val);
}).then(function (val) {
  sleep(val);
  return val;
}).then(function (val) {
  return sleep(val)
})

// sleep(0).then(function (val) {
//   return sleep(val)
// }).then(function (val) {
//   return sleep(val)
// }).then(function (val) {
//   sleep(val);
//   return val
// }).then(function (val) {
//   return sleep(val)
// }).then(function (val) {
//   return sleep(val)
// }).then(function (val) {
//   return sleep(val)
// }).then(function (val) {
//   return sleep(val)
// })

console.log("global end")
