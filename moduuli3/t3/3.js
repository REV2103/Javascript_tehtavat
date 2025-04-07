'use strict';
const names = ['John', 'Paul', 'Jones'];
const div = document.querySelector('#target')
for (const name of names) {
    let html = `<li>${name}</li>`;
    div.innerHTML += html;
}
