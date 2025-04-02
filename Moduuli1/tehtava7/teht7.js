'use strict'
let sum = prompt('Give desired the number of dice rolls')
let i = 0
while (i<sum) {
    let result = Math.floor(Math.random()*6)+1;
    console.log(result)
    i += 1
}
