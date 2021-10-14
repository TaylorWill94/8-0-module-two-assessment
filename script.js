fetch('https://ghibliapi.herokuapp.com/films')
.then((response) => response.json)
.then((films) => {

    let dropDown = document.querySelector('#dropdown');
    for (let film of films) {
        const option = document.createElement('option')
        option.setAttribute('value', film.title)
        option.textContent = film.title
        dropDown.append(option);
    }
    
    




})


