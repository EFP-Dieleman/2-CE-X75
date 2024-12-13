class Animal{
  constructor(name, onomatoepa, dangerous=true){
    this.name = name;
    this.onomatoepa = onomatoepa;
    this.dangerous = true;
  }
}
class Pet{
  constructor(name, onomatoepa){
    super(name, onomatoepa, false);

  }
  speak(){
    console.log(this.onomatoepa):
  }
}

class Dog{
  constructor(name)
  {
    super(name, 'Woof');
  }
}

class Cat{
  constructor(name)
  {
    super(name, 'Meow');
  }
}


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
    this.pets = [];

    this.alive = true;
  }

  speak() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }

  meet(someone) {
    if (someone instanceof Person) {
      this.friends.push(someone);
      console.log(`${this.name} and ${person.name} are now friends!`);
    }
    else if (someone instance Pet){
      this.pets.push(someone);
      console.log(`${this.name} and ${person.name} are now friends!`);
    }
    else if (someone instance Animal){
      this.alive = false;
      console.log(this.name, ' is DEAD');
    }
    else{
      console.log("Can only meet people and animals");

    }
  }

}
