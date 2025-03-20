let xp = 0;
let coins = 30;
let plantHealth = 100;
let collection = [];

// Player controls
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

// Plant controls
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');

// Text
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const coinText = document.querySelector('#coinText');

// Plant collection
const plantTiles = document.querySelector('#plantTiles');
const plantName = document.querySelector('#plantName');
const healthText = document.querySelector('#healthText');

const plants = [
    {
        id: 0,
        name: "Snake Plant (easy care)",
        light: {
            "button text": ["Place plant in low light", "Place plant in medium light", "Place plant in bright light"],
            "button functions": [askWater, askWater, askWater],
            text: "You have received a Snake Plant (easy care)! Where on your plant shelf will you place your plant?"
        },
        water: {
            "button text": ["Don't water at all", "Water a little", "Water a lot"],
            "button functions": [addPlant, addPlant, addPlant],
            text: "Good job! Snake plants are happy in any light. How much water do you want to give your plant?"
        },
        clippingCost: 5
    },
    {
        id: 1,
        name: "Hoya (medium care)",
        light: {
            "button text": ["Place plant in low light", "Place plant in medium light", "Place plant in bright light"],
            "button functions": [loseGame, askWater, askWater],
            text: "You have received a Hoya (medium care)! Where on your plant shelf will you place your plant?"
        },
        water: {
            "button text": ["Don't water at all", "Water a little", "Water a lot"],
            "button functions": [loseGame, addPlant, loseGame],
            text: "Good job! Hoyas are happy in medium to bright light. How much water do you want to give your plant?"
        },
        clippingCost: 10
    },
    {
        id: 2,
        name: "Calathea (difficult care)",
        light: {
            "button text": ["Place plant in low light", "Place plant in medium light", "Place plant in bright light"],
            "button functions": [loseGame, askWater, loseGame],
            text: "You have received a Clathea (difficult care)! Where on your plant shelf will you place your plant?"
        },
        water: {
            "button text": ["Don't water at all", "Water a little", "Water a lot"],
            "button functions": [loseGame, addPlant, loseGame],
            text: "Good job! Calatheas are happy in medium light only. How much water do you want to give your plant?"
        },
        clippingCost: 15
    }
];

const locations = [
    {
        name: "welcome",
        "button text": ["Begin!", "Begin!", "Begin!"],
        "button functions": [newPlant, newPlant, newPlant],
        text: "Welcome to Botany Bliss. Take care of each new plant based on your plant knowledge and watch your plant collection grow!"
    },
    {
        name: "lose plant",
        "button text": ["Try again", "Try again", "Try again"],
        "button functions": [newPlant, newPlant, newPlant],
        text: "Oh no, your new plant didn't like that! You've lost this plant. Try again?"
    },
    {
        name: "lose game",
        "button text": ["Start over?", "Start over?", "Start over?"],
        "button functions": [welcome, welcome, welcome],
        text: "Oh no, your new plant didn't like that and you have no remaining plants in your collection! Game over. Would you like to play again?"
    },
    {
        name: "win game",
        "button text": ["Start over?", "Start over?", "Start over?"],
        "button functions": [welcome, welcome, welcome],
        text: "Congratulations, you have every available plant in your home collection! Look at those green thumbs. Would you like to play again?"
    }
];

let plantShop = [...plants];

// Initialize buttons
button1.onclick = newPlant;
button2.onclick = newPlant;
button3.onclick = newPlant;


function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function welcome() {
    xp = 0;
    coins = 50;
    xpText.innerText = xp;
    coinText.innerText = coins;
    collection = [""];
    plantShop = [...plants];
    update(locations[0]);
    newPlant();
}

// console.log(plants[0].light.text);
// console.log(plants[1]["light"]["button text"][0]);

// Receive random plant and ask about light
function newPlant() {
    let plantIndex = Math.floor(Math.random() * 3);
    let currentPlant = plants[plantIndex];

    button1.innerText = currentPlant[light]["button text"][0];
    button2.innerText = currentPlant[light]["button text"][1];
    button3.innerText = currentPlant[light]["button text"][2];
    button1.onclick = currentPlant[light]["button functions"][0];
    button2.onclick = currentPlant[light]["button functions"][1];
    button3.onclick = currentPlant[light]["button functions"][2];

    console.log(plantId);
    console.log(currentPlant.light.text);
    text.innerHTML = currentPlant.light.text;


}

// function askLight() {
//     update(locations[2]);
// }

function askWater() {
    update(locations[3]);
};

function addPlant() {
    alert("Congratulations! Your plant is happy and thriving. It has been added to your collection.")
    update(locations[2]);
    xp += 5;
    xpText.innerText = xp;
};

function loseGame() {
    update(locations[6]);
    xp -= 5;
    xpText.innerText = xp;
};

welcome();

// Game planning

// Welcome (restart takes you here, or losing all plants)
    // Explain game and reveal begin button - takes you to new plant
// newPlant
    // currentPlant = random plant from plantShop array
    // text: you have recieved a ${new plant name}
        // ask light
            // if win { move on to askWater }
            // if lose { plant stays in shop and you can restart }
        // ask water
            // if win { 
                // remove from shop and add to collection
                // xp ++
                // reveal text that says congrats! added to collection. Are you ready for a new plant? Begin button > newPlant 
            // }
            // if lose { plant stays in shop and you can restart }

// Display plant shop with price, when plant dies but you still have coins and a plant in your collection
// Display option to buy plant

// Reveal plant tiles
// plantTiles.style.display = "block";

// ** every time you receive a plant, water is subtracted by 1 from all plants in collection (time passing)
// ** at any point you can visit plant shelf and: water plants (too much will kill plant, back to start receiving plants) or sell clippings (subtract from plant health, add to coins) then button for back to home
// ** if any plant water level lowers to lowest level in range, alert player that the plant is wilting, direct to visit plant shelf button