interface ICat { meow() }
interface IDog { woof() }

function say(animal: ICat | IDog) {
    if (animal instanceof ICat) {
        animal.meow(); //ok
    }
}
