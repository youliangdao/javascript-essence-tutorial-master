const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function* () {
	// const keys = Object.keys(this);
	// let i = 0;
	// let _this = this;
	// while (i < keys.length) {
	// 	yield [keys[i], _this[keys[i]]];
	// 	i++;
	// }
	// return
	for(let key in this) {
		yield [key, this[key]];
	}
}

for (const [k, v] of items) {
	console.log(k, v);
}
