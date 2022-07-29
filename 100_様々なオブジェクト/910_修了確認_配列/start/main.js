/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
	constructor(...args) {
		super(...args)
	}

	print(label = '') {
		console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
		return this;
	}

	push(value) {
		super.push(value)
		return this;
	}

	forEach(callback) {
		for (let i = 0; i < this.length; i++) {
			callback(this[i], i, this)
		}
	}

	map(callback) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			const value = callback(this[i], i, this);
			result.push(value);
		}
		return result;
	}

	filter(callback) {
		const result = new MyArray();
		for (let i = 0; i < this.length; i++) {
			if (callback(this[i], i, this)) {
				result.push(this[i]);
			}
		}
		return result;
	}

	reduce(callback, val) {
		const tmpArry = [...this];
		if (val === undefined) {
				val = tmpArry.shift()
		}
		for (let i = 0; i < tmpArry.length; i++) {
			val = callback(val, tmpArry[i]);
		}
		return val;
	}
}

function double(v, i, obj) {
	return v * 2;
}

const original = new MyArray(1, 2, 3, 4);
// const result = original.reduce(function (accu, curr) {
// 	console.log(accu, curr)
// 	return accu + curr * 2;
// })
const result = original
	.map(double)
	.push(5)
	.filter(function (v, i) {
		return v > 2;
	})
	.reduce(function(accu, curr) {
		return accu + curr;
	})

console.log('%coriginal', 'color: blue; font-weight: bold;', original);
console.log('%cresult', 'color: red; font-weight: bold;', result);
