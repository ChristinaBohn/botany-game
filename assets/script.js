// Each plant is an object, it will have name, water(health), light (first get right or wrong, then move on), clipping cost, do not combine water and light to make health, just keep separate

let xp = 0;
let coins = 30;
let plantHealth = 100;
let currentLight;
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
        water: 3 - 9,
        clippingCost: 10
    },
    {
        name: "Alocasia",
        level: 3,
        light: ["medium"],
        water: 4 - 8,
        clippingCost: 15
    }
];

const locations = ["low light", "medium light", "bright light"];