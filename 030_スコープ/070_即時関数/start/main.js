function a() {
  console.log('called');
}

a();

let c = (function () {

  console.log("called");
  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFunc is called")
  }
  function publicFn() {
    console.log("publicFunc is called" + privateVal++)
  }

  return {
    publicVal,
    publicFn
  }
})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();


let b = function () {
  console.log("called")
}();
