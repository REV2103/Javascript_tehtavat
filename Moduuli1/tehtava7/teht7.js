let sum = prompt('Give desired the number of dice rolls')
let i = 0
let sum = 0
while (i<sum) {
    result = Math.floor(Math.random()*6)+1;
    sum += result
    console.log(sum)
    i += 1
}

