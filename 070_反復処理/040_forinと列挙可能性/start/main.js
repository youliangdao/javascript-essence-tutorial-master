const s = Symbol("hello")
const s1 = Symbol("hello")

const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

obj[s] = function () {
	console.log("hello")
}

obj[s1] = function () {
	console.log("hello " + this.prop1)
}

Object.prototype.method = function () {

}
// Object.defineProperty(Object.prototype, "method", {
// 	enumerable: false
// })
// Object.defineProperty(obj, "prop1", {
// 	enumerable: false
// })

const descriptor = Object.getOwnPropertyDescriptor(obj, s);

for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);

	}
}
