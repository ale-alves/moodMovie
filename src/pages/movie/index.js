export default () => {
  const container = document.createElement('div');
  const movieHeader = document.createElement('header')
  
  movieHeader.innerHTML= `
    <nav class="navbar">
        <ul class="navbar-list">
          <li class="list">
            <a class="title" href="./#home"><img class="logo-github" src="img/next.png" alt="logo github"></a>
          </li>
        <div>
        <h2 class="title-movies">Achamos que vai gostar dessa seleção que fizemos para você <img class="logo-github" src="img/favourite.png" alt="logo github"></h2>
        </div>
  `;

  container.appendChild(movieHeader);


  return container
}