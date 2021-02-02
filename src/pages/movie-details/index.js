export default () => {
    const container = document.createElement('div');
    const template = `
        <section>
            <header>
                <img src = ${poster} class = "movie-poster" alt = ${title}/>
                <p>${imdb_rating}</p>
                <h1>${title}</h1>
            </header>
            <article>
                <h2 class="strong-text">Sinopse:</h2>
                <p>${overview}</p>
                <h2><span class="strong-text">Gênero:</span>${genres}</h2>
                <h2><span class="strong-text">Lançamento</span>${released_on}</h2>
                <h2><span class="strong-text" class="align-text">${genres}</h2>
            </article>
        </section>
    `;
  container.innerHTML = template;

return container

}