function Person1(name, age) {
	this._name = name;
	this._age = age;
	this.hello = function () {
		console.log("hello");
	}
}

Person1.hello = function () {
	console.log("hello");
}

Person1.prototype.hello = function () {
	console.log("hello");
}

Object.defineProperty(Person1.prototype, "name", {
	get: function () {
		console.log("hello")
		console.log("hello")
		return this._name;
	},
	set: function (val) {
		this._name = val;
	}
});

const p1 = new Person1("Bob", 18);
p1.name = "John"
// console.log(p1.name);

class Person2 {
	constructor (name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		console.log("hello");
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	static hello(){
		console.log("hello");
	}
}

const p2 = new Person2("Bob", 20);
p2.name = "John";
console.log(p2.name)

Person2.hello();
