import { getMovies } from "../../services/index.js"

export default async () => {
    const container = document.createElement('div');

    let genres = window.location.hash.substring(window.location.hash.indexOf('?genre=') + '?genre='.length).split(',')
    
    container.innerHTML = `
    <header>
    <nav class="navbar">
    <ul class="navbar-list">
    <li class="list">
    <a class="title" href="./#home"><img class="logo-github" src="img/next.png" alt="logo github"></a>
    </li>
    <div>
    <h2 class="title-movies">Achamos que vai gostar dessa seleção que fizemos para você <img class="logo-github" src="img/favourite.png" alt="logo github"></h2>
    </div>
    </header>
    `;

    const data = await Promise.all(genres.map(genre => getMovies(genre)))
    let child = showingMoviesList(data.flat())
    container.innerHTML += child;
    let allMoviesDiv = container.querySelectorAll('.movie-details')
    for(let movieDiv of allMoviesDiv) {
        movieDiv.addEventListener('click', redirectToMovie)
    }
    return container
}

const showingMoviesList = (movies) => {
    let moviesList = "<div>"
    for (let movie of movies) {
        
        moviesList += `
        <div class="movie-details" id="${movie.id}">
        <img src = ${movie.poster} class = "movie-poster" alt = ${movie.title}/>
        <p>${movie.imdb_rating}</p>
        <p>${movie.title}</p>
        </div>
        `
    }
    moviesList += "</div>"
    return moviesList
}
const redirectToMovie = (event) => {
    console.log(event.target.parentElement.id)

    window.localStorage.setItem("currentMovie", {
     "id": event.target.parentElement.id
    })

    window.location.hash = '#movie-details'
} 
