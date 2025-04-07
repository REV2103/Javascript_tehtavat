'use strict'
const div = document.querySelector('#target')
const lista = ['First item', 'Second Item', 'Third Item']
for (let item of lista) {
    let node = document.createElement('li')
    node.appendChild(document.createTextNode(item))
    if (item === 'Second Item') {
        node.classList.add('my-item');
    }

    document.querySelector('ul').appendChild(node);
}

