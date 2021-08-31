
class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Ninja name is ${this.name}`);
    }

    showStats(){
        console.log(`Ninja name is ${this.name} has strength of ${this.strength} travellign at speed of ${this.speed} and with health of ${this.health}`);
    }

    drinkSake(){
        this.health+=10;
        console.log(`Health is now ${ this.health }.`);
    }


}

class Sensei extends Ninja {
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength=10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const drink = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")

    };

}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.sayName();
superSensei.showStats();