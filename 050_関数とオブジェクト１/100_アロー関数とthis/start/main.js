window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello() {
//         console.log('Hello ' + this.name);
//         let a = () => console.log('Bye ' + this.name);
//         a();
//     }
// }
// person.hello();

function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}

b();
