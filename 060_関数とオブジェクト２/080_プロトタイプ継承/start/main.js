function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
  console.log('ByeBye ' + this.name);
}

Japanese.prototype.bye = function() {
  console.log('ByeByeBye ' + this.name);
}

function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender;
}

const Taro = new Japanese("太朗", 20, "男性");

Taro.bye();
console.log(Taro.gender);
