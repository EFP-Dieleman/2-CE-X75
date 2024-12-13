class Pet{
  constructor(name, onomatoepa){
    this.name = name;
    this.onomatoepa = onomatoepa;
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
  }

  speak() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }

  meet(someone) {
    if (someone instanceof Person) {
      this.friends.push(someone);
      console.log(`${this.name} and ${person.name} are now friends!`);
    } else if (someone instance Pet){
      this.pets.push(someone);
      console.log(`${this.name} and ${person.name} are now friends!`);
    }
    else{
      console.log("Can only meet people or pets");

    }
  }

}
