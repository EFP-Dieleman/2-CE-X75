class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old and my major is ${this.major}.`);
  }
}

let john = new Person("John", 30);
john.speak(); // "My name is John and I am 30 years old."

let jane = new Student("Jane", 20, "Computer Science");
jane.speak(); // "My name is Jane, I am 20 years old and my major is Computer Science."
