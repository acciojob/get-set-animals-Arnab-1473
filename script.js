//complete this code
class Animal {
    constructor(species) {
        this.species = species;
    }
    get species() {
        return this.species;
    }
     makeSound() {
        console.log("The animal makes a sound");
     }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
    makeSound() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
    makeSound() {
        console.log("Meow");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
