// import { publicFn, publicVal } from "./moduleA.js";

// console.log(publicVal)
// publicFn();

// import("./moduleA.js").then(function (modules) {
//   console.log(modules)
//   modules.publicFn()
// })

(async function () {
  const modules = await import("./moduleA.js");
  modules.publicFn();
})();
