'use strict'
let count = 0
let list_of_dawgs = []
while (count < 6) {
    let dawg = prompt('Give the name of the dog')
    list_of_dawgs.push(dawg)
    count += 1
}
list_of_dawgs.sort()
list_of_dawgs.reverse()
for (let dog of list_of_dawgs) {
    let node = document.createElement('li');
    node.appendChild(document.createTextNode(dog))
    document.querySelector('ul').appendChild(node);
}