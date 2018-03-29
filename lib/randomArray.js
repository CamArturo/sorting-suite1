import { bubbleSort } from './bubbleSort';
// const bubbleSort = require ('./bubbleSort');

function getRandomInt (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomArray (number, negative) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (negative === false) {
      let ranNum = getRandomInt(1, 100);
      arr.push(ranNum);
    } else {
      let ranNum = getRandomInt(-100, 100);
      arr.push(ranNum);
    }
  }
  return arr;
}

// export default randomArray;
module.exports = randomArray;