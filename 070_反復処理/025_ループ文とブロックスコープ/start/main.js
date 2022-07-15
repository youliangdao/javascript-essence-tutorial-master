for (let i = 0; i < 5; i++) {
  var j = i * 2;
  console.log(j)
  setTimeout(function () {
    console.log(j);
  }, 1000);
}
