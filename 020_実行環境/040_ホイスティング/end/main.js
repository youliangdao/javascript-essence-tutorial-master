a();

function a () {
    console.log(c);
    var c = 1;


    d();
    function d() {
        console.log('d is called');
    }
    console.log('a is called');
}


const b = 0;

console.log(b);
