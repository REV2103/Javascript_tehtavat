'use strict'
const movieform = document.querySelector('#movie-form')
movieform.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const name = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
        const jsondata = await response.json();
        console.log(jsondata);
    } catch (error) {
        console.log(error.message)
    }
});