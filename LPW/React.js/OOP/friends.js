class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  speak() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }

  addFriend(person) {
    this.friends.push(person);
  }

}

let john = new Person("John", 30);
let jane = new Person("Jane", 25);
john.addFriend(jane); // John and Jane are now friends!
