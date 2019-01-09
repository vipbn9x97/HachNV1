class Animal {
    constructor();

    sua() {
        console.log('Sua sua')
    }
}

class Cat extends Animal {
    constructor();

    sua() {
        console.log('meo meo')
    }
}



let mia = new Cat();
mia.sua();

