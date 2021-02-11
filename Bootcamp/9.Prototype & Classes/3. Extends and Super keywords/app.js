// Classes //

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating rubbish food when he's ${this.age} years old`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft =9){
        super(name,age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWWWW!';
    }
}
class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }
    eat() {
        return `${this.name} scarfs his food!`
    }
}
const monty = new Cat('money', 9)
// monty.eat(); this is how you would call the eat method within the class if iwanted to access it individually
// If i didn't create class PEt, i would of writen the same methods in pet to dog and cat
// so instead, i listed it all in pet as the parent class, now to connect the other classes to the child, 
// we use extends so like here PEt is the parent class and the other class extends from it
// because we used extends, it going to use all the code from the parent class to create the functions.
// so here if i call monty.eat() it will return the eat from dog first and check, if it doesn't find it then it will check the parent class

// then the super keyword is used to reference to the parent classes you're refferring to if you do not want to rewrite the same code from the parent to the child class, especially if it's identical. prevents you from from rewriting this.name and this.age
// so we reused all the constructors from the Pet class and basically created a child classed, used it by calling super, then added my own.
