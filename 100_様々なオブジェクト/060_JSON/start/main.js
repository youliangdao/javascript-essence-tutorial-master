const obj = {a: 0, b: 1, c: 2};

function replacer(prop, value) {
  if (value < 1) {
    return;
  }
  return value;
}
const json = JSON.stringify(obj, ["a", "c"]);
const object = JSON.parse(json);
console.log(object)
