function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: "Tom"};

const b = a.bind(tim);

b();
a.apply(tim, ["Tim", "Tom"]);
a.call(tim, "Tim", "Tom");

const array = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, array);
const result = Math.max(...array);

console.log(result);
