//Working with objects

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
}

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

//change the value of a property

pen.color = "red"; // Modify
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

//dynamically add new properties to an already created object
pen.price = "2.5";
console.log(`My pen costs $${pen.price}`);

// example of an object:  Rpg game character Aurora
// have class create the aurora object with a name, health and strength

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health}
health points and ${aurora.strength} as strength`);
// Aurora is harmed by an arrow - reduce health by 20
aurora.health -= 20;
// Aurora equips a strength necklace - increase strength by 10
aurora.strength += 10;
//console.log(`${aurora.name} has ${aurora.health}
//health points and ${aurora.strength} as strength`);

function describe(character)
{
console.log(`${character.name} has ${character.health}
health bars and ${character.strength} as strength`);
}

describe(aurora);


const ryu = {
    name: "Ryu",
    health: 200,
    strength: 99,
    describe (){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`;

    }
}
console.log(ryu.describe());