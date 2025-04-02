'use strict'
const amount = prompt('Give the desired number of paricipants')
let count = 0
let participants = []
while (count < amount) {
    let participant = prompt("Give the participant's name")
    participants.push(participant)
    count += 1
}
participants.sort()
for (let part of participants) {
    let node = document.createElement('li');
    node.appendChild(document.createTextNode(part))
    document.querySelector('ol').appendChild(node);
}
