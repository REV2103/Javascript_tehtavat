'use strict'
const movieform = document.querySelector('#movie-form')
movieform.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const name = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
        const jsondata = await response.json();
        console.log('Response: ', jsondata)
        if (jsondata.length > 0) {
            const showarray = []
            for (const data of jsondata) {
                showarray.push(data.show)
            }
            const container = document.querySelector('#target')
            container.innerHTML = ''
            for (const show of showarray) {
                const art = document.createElement('article')
                const hea2 = document.createElement('h2')
                hea2.textContent = show.name
                art.appendChild(hea2)
                const a = document.createElement('a')
                a.textContent = show.url
                art.appendChild(a)
                if (show.image && show.image.medium) {
                    const img = document.createElement('img')
                    img.src = show.image.medium
                    img.alt = show.name
                    art.appendChild(img)
                }
                const sum = document.createElement('div')
                sum.innerHTML = show.summary
                art.appendChild(sum)
                container.appendChild(art)
            }
        } else {
            const container = document.querySelector('#target')
            const art = document.createElement('article')
                const hea2 = document.createElement('h2')
                hea2.textContent = 'No shows found'
            art.appendChild(hea2)
            container.appendChild(art)

        }
    } catch (error) {
        console.log(error.message)
    }
});