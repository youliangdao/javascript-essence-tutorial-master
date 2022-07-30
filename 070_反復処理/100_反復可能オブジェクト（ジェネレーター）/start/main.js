const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	*[Symbol.iterator]() {
		// let i = 0;
		// let keys = Object.keys(this);
		// while (i < keys.length) {
		// 	let key = keys[i++];
		// 	yield [key, this[key]]
		// }
		for (const key in this) {
			yield [key, this[key]]
		}
	}
}

// Object.prototype[Symbol.iterator] = function () {
// 	let i = 0;
// 	let _this = this;
// 	let keys = Object.keys(this);
// 	return {
// 		next: function () {
// 			let key = keys[i++];
// 			return {
// 				done: i > keys.length,
// 				value: [key, _this[key]]
// 			}
// 		}
// 	}
// }



for (const item of items) {
	console.log(item);
}
