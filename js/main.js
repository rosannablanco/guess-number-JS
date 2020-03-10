'use strict';
//variables globales
const numInsertUser = document.querySelector('.js-num');
const btnTest = document.querySelector('.js-btn');
const textTrack = document.querySelector('.js-track');
const textCount = document.querySelector('.js-count');
let countClicks = 0;

//al arrancar la página genera un número aleatorio
function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
const randomNumber = getRandomNumber();
console.log(`el número generado es ${randomNumber}`);

function testNumber() {
  const numInsertVal = parseInt(numInsertUser.value);
  let trackMessage = '';
  if (numInsertVal <= 100 && numInsertVal >= 1) {
    if (randomNumber === numInsertVal) {
      trackMessage = 'Has ganado campeona!!!';
    } else if (randomNumber > numInsertVal) {
      trackMessage = 'Pista: demasiado bajo';
    } else if (randomNumber < numInsertVal) {
      trackMessage = 'Pista: demasiado alto';
    }
  } else {
    trackMessage = 'Pista: el número debe estar entre 1 y 100';
  }

  countClicks++;
  textTrack.innerHTML = trackMessage;
  textCount.innerHTML = `Número de intentos: ${countClicks}`;
}
//añadimos el evento al button
btnTest.addEventListener('click', testNumber);
