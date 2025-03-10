// Each plant is an object, it will have name, water(health), light (first get right or wrong, then move on), clipping cost, do not combine water and light to make health, just keep separate

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

// Player stats
const xpText = document.querySelector('#xpText');
const coinText = document.querySelector('#coinText');

// Plant stats
const plantName = document.querySelector('#plantName');
const healthText = document.querySelector('#healthText');

