'use strict'
let number_list = []
let numberstr = prompt('Give a number. You cannot give the same number twice')
let number = parseInt(numberstr)
number_list.push(number)
while(true) {
    numberstr = prompt('Give a number. You cannot give the same number twice')
    number = parseInt(numberstr);
    if (number_list.includes(number)) {
        break;
    }
    number_list.push(number);
}
number_list.sort((a, b) => b - a);
number_list.reverse()
console.log(number_list)