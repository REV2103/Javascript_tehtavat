
'use strict'
let name = prompt('write your name: ');
let number
number = Math.floor((Math.random() * 4) + 1);
console.log(number)
let house
if (number === 1) {
     house = 'Hufflepuff';
}
else if (number === 2) {
      house = 'Gryffindor';
}
else if (number === 3) {
      house = 'Slytherin';
}
else {
      house = 'Ravenclaw';
}
document.querySelector('#House').innerHTML = name + ', your house is ' + house;
