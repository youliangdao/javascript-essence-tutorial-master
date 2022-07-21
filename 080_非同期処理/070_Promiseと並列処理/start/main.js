function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
      }
      , val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)])
.then(function (val) {
  console.log(val);
}).catch(function (e) {
  console.log(e);
})

// sleep(0).then(function (val) {
//   return Promise.race([sleep(2), sleep(3), sleep(4)]);
// }).then(function (val) {
//   return  sleep(val);
// }).then(function (val) {
//   return  sleep(val);
// }).then(function (val) {
//   return  sleep(val);
// })

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
