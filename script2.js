const characters = [
    // Player 1
    {
        Name: 'Guillaume',
        Life: 50,
        Level: 10,
        StrengthWeapon: 7,
        ShieldPower: 4
    },
    {
        Name: 'Miyuki',
        Life: 50,
        Level: 10,
        StrengthWeapon: 7,
        ShieldPower: 4
    },
    {
        Name: 'Rose',
        Life: 50,
        Level: 10,
        StrengthWeapon: 7,
        ShieldPower: 4
    },
    {
        Name: 'Nina',
        Life: 50,
        Level: 10,
        StrengthWeapon: 7,
        ShieldPower: 4
    }
];

let attacker = getRandomValueInMyArray(characters);
let defender;

let atkTotal;
let defTotal;

let results;

// obtenir un index random pour déterminer les combattants
function getRandomValueInMyArray(array) {
    let index = Math.floor(Math.random() * array.length)
    return array[index];
}
// // determiner l'attaquant et le défenseur
function getAttackerAndDefender(array) {
    attacker = array[Math.floor(Math.random() * array.length)]
    defender = array[Math.floor(Math.random() * array.length)]
    if (attacker === defender) {
    //    defender = array[Math.floor(Math.random() * array.length)]
       getAttackerAndDefender(array) 
    }
}
// obtenir les points d'attaque de l'attaquant
function getAtkAttacker(attacker) {
    return atkTotal = attacker.Level + Math.random() * attacker.StrengthWeapon;
}
// obtenir les points de défence du défenseur
function getDefDefender(defender) {
    return defTotal = defender.Level + Math.random() * defender.ShieldPower;
}
// // si le defender perd de la vie
function getResultIfDefenderLose(defender) {
    defender.life = defender.life - atkTotal
    console.log(`${defender} perd ${atkTotal} points de vie, il lui reste ${defender.life}`)
}
// // condition de victoire de combat
function getResultFight(atkTotal, defTotal) {
    results = atkTotal > defTotal ? getResultIfDefenderLose(defender) : null;
}

// // Isoler les joueurs encore en vie
function getMeDeath(array){
    const survivor = array.filter(function(character) {
        return character.life > 0;
        });
}
 
    

console.log(attacker);
