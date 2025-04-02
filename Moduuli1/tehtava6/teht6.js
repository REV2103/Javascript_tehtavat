'use strict'

const pitaisko = confirm('Should I calculate the square root?')
if (pitaisko === true) {
    const numero = prompt('Give the number')
    if (numero<0) {
        document.querySelector('#tahan').innerHTML = 'The square root is not defined'
    }
    else {
        const tulos = Math.sqrt(numero)
        document.querySelector('#tahan').innerHTML = 'The square root of ' + numero + ' is ' + tulos
    }
}
else {
    document.querySelector('#tahan').innerHTML = 'The square root was not calculated'
}