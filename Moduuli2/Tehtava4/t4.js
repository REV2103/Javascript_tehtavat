'use strict'
let number_list = []
let numberstr = prompt('Give a number. When you have given enough numbers, type "0"')
let number = parseInt(numberstr)
number_list.push(number)
while (number !== 0) {
    numberstr = prompt('Give a number. When you have given enough numbers, type "0"');
    number = parseInt(numberstr);
    number_list.push(number);
}
number_list.sort((a, b) => a - b);
number_list.reverse()
console.log(number_list)