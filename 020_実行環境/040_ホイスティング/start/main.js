a();

const a = function () {
  console.log(c);
  var c = 1;

  d();
  function d() {
    console.log("d is called");
  }
  console.log("a is called");
}

console.log(b);

let b = 0;
