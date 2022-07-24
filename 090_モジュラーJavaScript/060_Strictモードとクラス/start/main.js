        function fn() {
            console.log(this)
        }
        fn();

class C {

    constructor() {

    }

    method() {
        function fn() {
            console.log(this)
        }
        fn();
    }
}

const c = new C();
c.method();
