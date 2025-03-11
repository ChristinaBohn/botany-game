// Each plant is an object, it will have name, water(health), light (first get right or wrong, then move on), clipping cost, do not combine water and light to make health, just keep separate

// Maybe start basic with just one medium plant to kill or not

let xp = 0;
let coins = 30;
let plantHealth = 100;
let currentLight;
let currentPlant;
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

// Player stats
const xpText = document.querySelector('#xpText');
const coinText = document.querySelector('#coinText');

// Plant stats
const plantTiles = document.querySelector('#plantTiles');
const plantName = document.querySelector('#plantName');
const healthText = document.querySelector('#healthText');

const plants = [
    {
        name: "Snake Plant",
        level: 1,
        light: ["low", "medium", "bright"],
        water: 1 - 10,
        clippingCost: 5
    },
    {
        name: "Hoya",
        level: 2,
        light: ["medium", "bright"],
        water: 3 - 8,
        clippingCost: 10
    },
    {
        name: "Alocasia",
        level: 3,
        light: ["medium"],
        water: 4 - 6,
        clippingCost: 15
    }
];

const locations = [
    {
        name: "home"
    },
    {
        name: "shelf"
    },
    {
        name: "light",
        "button text": ["Place plant in low light", "Place plant in medium light", "Place plant in bright light"],
        "button functions": [loseGame, askWater, askWater],
        text: "Where on your shelf will you put your new plant?"
    },
    {
        name: "water",
        "button text": ["Don't water at all", "Water a little", "Water a lot"],
        "button functions": [addPlant, addPlant, loseGame],
        text: "How much water do you want to give your plant?"
    },
    {
        name: "add plant"
    },
    {
        name: "kill plant"
    },
    {
        name: "lose game",
        "button text": ["Start over?", "Start over?", "Start over?"],
        "button functions": [restart, restart, restart],
        text: "Oh no, your new plant didn't like that! Game over. Would you like to play again?"
    }
    // later on could add "plant shop"
];


// Initialize buttons
button1.onclick = loseGame;
button2.onclick = askWater;
button3.onclick = askWater;

function update(location) {

    // hides the plant tiles
    plantTiles.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function askLight() {
    update(locations[3]);
}

function askWater() {

};

function addPlant() {};

function loseGame() {
    // Lose game message and restart
    update(locations[7]);
};

function restart() {
    xp = 0;
    coins = 50;
    xpText.innerText = xp;
    coinsText.innerText = coins;
    askLight();
}