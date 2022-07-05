function hello(name = "Tom") {
  //name = name || 'Tom'
  console.log("hello " + name);
}

hello();

let name = "";
name && hello(name);
