'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let student of students) {
  let node = document.createElement('option')
  node.appendChild(document.createTextNode(`${student.name} (ID: ${student.id}`))
  document.querySelector('#target').appendChild(node)
}