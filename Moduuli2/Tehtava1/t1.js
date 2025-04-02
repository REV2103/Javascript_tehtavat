'use strict'
const numbers = []
let numero1 = prompt('Give the first number')
let numero2 = prompt('Give the second number')
let numero3 = prompt('Give the third number')
let numero4 = prompt('Give the fourth number')
let numero5 = prompt('Give the fifth number')
numbers.push(numero5, numero4, numero3, numero2, numero1)

for (let num of numbers) {
    console.log(num)
}