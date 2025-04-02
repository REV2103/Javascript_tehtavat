"use strict"
let number1str = prompt('Give the first number: ')
let number2str = prompt('Give the second number: ')
let number3str = prompt('Give the third number: ')
let number1 = parseInt(number1str)
let number2 = parseInt(number2str)
let number3 = parseInt(number3str)

let sum = number1+number2+number3
let avg = sum/3
let prod = number1*number2*number3
document.querySelector('#sum').innerHTML = sum;
document.querySelector('#product').innerHTML = prod;
document.querySelector('#average').innerHTML = avg;
