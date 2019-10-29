interface ICat { kind: "cat"; meow() }
interface IDog { kind: "dog"; woof() }

function say(animal: ICat | IDog) {
    if (animal.kind == "cat") {
        animal.meow(); //ok
    }
}
