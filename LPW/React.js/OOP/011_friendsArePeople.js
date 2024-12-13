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
    if (person instanceof Person) {
      this.friends.push(person);
      console.log(`${this.name} and ${person.name} are now friends!`);
    } else {
      console.log("Can only add a Person object as a friend.");
    }
  }

}

let john = new Person("John", 30);
let jane = new Person("Jane", 25);
let jim = {name:"Jim", age: 20};
john.addFriend(jane); // John and Jane are now friends!
john.addFriend(jim); // Can only add a Person object as a friend.
