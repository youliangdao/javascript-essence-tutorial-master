/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
	constructor () {
		this.num = 0
		this.arithmetic = ""
	}

	set(num) {
		if (this.arithmetic === "") {
			this.num = num;
		}
		else {
			if (this.arithmetic === "minus") {
				this.num = this.num - num;
				console.log(this.num);
			}
			else if (this.arithmetic === "mutiply") {
				this.num = this.num * num;
				console.log(this.num);
			}
			else if (this.arithmetic === "divide") {
				this.num = this.num / num;
				console.log(this.num);
			}
			else if (this.arithmetic === "plus") {
				this.num = this.num + num;
				console.log(this.num);
			}
		}
		return this;
	}

	minus() {
		this.arithmetic = "minus";
		return this;
	}

	mutiply() {
		this.arithmetic = "mutiply";
		return this;
	}

	divide() {
		this.arithmetic = "divide";
		return this;
	}

	plus() {
		this.arithmetic = "plus";
		return this;
	}
}

const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.mutiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
