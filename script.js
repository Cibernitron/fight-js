let characters = [
    { name: "Batman", health: 50, xp: 5, weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10) },
    { name: "Pikachu", health: 50, xp: 5, weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10) },
    { name: "Jacques Chirac", health: 50, xp: 5, weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10) },
    { name: "Bob l'éponge", health: 50, xp: 5, weapon: getRandomCharacterPoints(1, 10), shield: getRandomCharacterPoints(1, 10) }
];

function getRandomCharacterPoints(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAttackerFromCharacters(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

function getDefenderFromCharacters(characters, attacker) {
    let defender = attacker;
    while (defender === attacker) {
        defender = characters[Math.floor(Math.random() * characters.length)];
    }
    return defender;
}

function getAttackScore(attacker) {
    return attacker.xp + getRandomCharacterPoints(0, attacker.weapon);
}

function getDefenseScore(defender) {
    return defender.xp + getRandomCharacterPoints(0, defender.shield);
}
function combat(attacker, defender) {
    let attackScore = getAttackScore(attacker);
    let defenseScore = getDefenseScore(defender);

    console.log(`${attacker.name} (${attackScore}) attaque ${defender.name} (${defenseScore}) !`);
    if (attackScore == 20) {
        attacker.health = attacker.health + 10
        if (attacker == "Jacques Chirac") {
            console.warn(`${attacker.name} à fait un jet parfait !! il invoque la république et récupère 10 points de vie`)
        }
        if (attacker == "Batman") {
            console.warn(`${attacker.name} à fait un jet parfait !! il appelle la Batmobile et récupère 10 points de vie`)
        }
        if (attacker == "Pikachu") {
            console.warn(`${attacker.name} à fait un jet parfait !! il invoque lance vive attaque et récupère 10 points de vie`)
        }
        if (attacker == "Bob l'éponge") {
            console.warn(`${attacker.name} à fait un jet parfait !! il mange un Krusty Krab et récupère 10 points de vie`)
        }
    }
    if (defenseScore == 20) {
        defender.health = defender.health + 10
        if (defender == "Jacques Chirac") {
            console.warn(`${defender.name} à fait un jet parfait !! il invoque la république et récupère 10 points de vie`)
        }
        if (defender == "Batman") {
            console.warn(`${defender.name} à fait un jet parfait !! il appelle la Batmobile et récupère 10 points de vie`)
        }
        if (defender == "Pikachu") {
            console.warn(`${defender.name} à fait un jet parfait !! il invoque lance vive attaque et récupère 10 points de vie`)
        }
        if (defender == "Bob l'éponge") {
            console.warn(`${defender.name} à fait un jet parfait !! il mange un Krusty Krab et récupère 10 points de vie`)
        }
    }
    if (attackScore > defenseScore) {
        defender.health -= attackScore;
        console.log(`${attacker.name} attaque ${defender.name} ! Il lui inflige ${attackScore} point de dégâts ! (${defender.health} points de vie restants)`);
        if (defender.health <= 0) {
            console.warn(`${defender.name} n'a pas survécu !`);
            return true;
        }
    } else {
        console.log(`${defender.name} arrive à se défendre ! +1xp (${defender.xp}xp)`)
        defender.xp++;
    }
    return false;
}


function battle(characters) {
    // while () { 
    const timer = setInterval(
        function () {
            let attacker = getAttackerFromCharacters(characters);
            let defender = getDefenderFromCharacters(characters, attacker);
            let defenderKilled = combat(attacker, defender);
            if (defenderKilled) {
                let newCharacters = [];
                for (let i = 0; i < characters.length; i++) {
                    if (characters[i].health > 0) {
                        newCharacters.push(characters[i]);
                    }
                }
                characters = newCharacters;
                if (characters.length <= 1) {
                    clearInterval(timer);
                    alert(`La bataille est terminée ! Le vainqueur est ${characters[0].name} ! Il lui reste  ${characters[0].health} points de vie`);
                }
            }
        }, 1000)
    // } 
}
battle(characters);
