declare class Cat { meow() }
declare class Dog { woof() }

function say(animal: Cat | Dog) {
    if (animal instanceof Cat) {
        animal.meow(); //ok
        animal.woof(); //error
    }
}
