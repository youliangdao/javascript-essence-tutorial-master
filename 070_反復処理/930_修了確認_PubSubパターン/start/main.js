/**
 * 問題：
 * my-library.jsに記載。
 */

function customFn1() {
	console.log('customFn1');
}
function customFn2() {
	console.log('customFn2');
}
function customFn3() {
	console.log('customFn3');
}

// const map = new Map();
// const beforeInit = new Set();
// const afterInit = new Set();
// const events = {
// 	on(name, func) {
// 		if (name === "beforeInit") {
// 			map.set(name, beforeInit.add(func));
// 		} else {
// 			map.set(name, afterInit.add(func));
// 		}
// 	},
// 	off(name, func) {
// 		if (name === "beforeInit") {
// 			beforeInit.delete(func);
// 		} else {
// 			afterInit.delete(func);
// 		}
// 	},
// 	emit(name) {
// 		for (const i of map.get(name)){
// 			i();
// 		}
// 	}
// }

const events = (function () {
	const eventStack = new Map();

	return {
		on(type, fn) {
			const fnStack = eventStack.get(type) || new Set();
			fnStack.add(fn);
			eventStack.set(type, fnStack);
		},
		off(type, fn) {
			const fnStack = eventStack.get(type);
			if (fnStack && fnStack.has(fn)) {
				fnStack.delete(fn);
			}
		},
		emit(type) {
			const fnStack = eventStack.get(type);
			if (fnStack) {
				for (const i of fnStack) {
					i();
				}
			}
		}
	}
})();

events.on('beforeInit', customFn1);
events.on('beforeInit', customFn2);
events.on('afterInit', customFn3);

new MyLibrary();
