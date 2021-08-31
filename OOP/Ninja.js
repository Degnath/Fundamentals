
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
const name = new Ninja("John", 20);
name.sayName();
name.showStats();
name.drinkSake();
