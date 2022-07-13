function F(a, b) {
    this.a = a;
    this.b = b;
    const result = new Object();
    result.a = 1;
    // return {a: 1};
}

F.prototype.c = function() {}

const instance = new F(1, 2);
console.log(instance instanceof Object);
console.log(instance.__proto__ === Object.prototype)


function fn(arg) {
    if (arg.__proto__ === Array.prototype) {
        arg.push("vallue")
    }
    else {
        arg["key"] = "value";
    }
    console.log(arg);
}
fn({});
