'use strict'
let yearstr = prompt('Input the year: ')
let year = parseInt(yearstr)
if (year%100 === 0 && year%400 === 0) {
    document.querySelector('#year').innerHTML = 'The year is a leap year'
}

else if (year%4 === 0 && year%100 != 0) {
    document.querySelector('#year').innerHTML = 'The year is a leap year'
}

else {
 document.querySelector('#year').innerHTML = 'The year is not a leap year'
}

