const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// const items = Object.entries(obj);
// console.log(items)

Object.prototype[Symbol.iterator] = function () {
	let i = 0;
	let keys = Object.keys(this);
	let _this = this;
	return {
		next: function () {
			let key = keys[i++];
			return {
				value: [key, _this[key]],
				done: i > keys.length
			}
		}
	}
}
for (const [k, v] of obj) {
	console.log(k, v)
}
