export default () => {
  const container = document.createElement('div');

  const template = `

  <header>
  <nav class="navbar">
      <ul class="navbar-list">
        <li class="list">
          <a class="title" href="./#home"><img class="logo-github" src="img/next.png" alt="logo github" /></a>
        </li>
  </header>
  <h2 class="title-movies">Achamos que vai gostar dessa seleção que fizemos para você <img class="logo-github" src="img/favourite.png" alt="logo github" /> </h2>
  <div >
  <img class="img"  src="./img/capa-soul.jpg" alt="capa de filme" width="150px" height="180px">
  </div>  
  `;

  container.innerHTML = template;

  return container
}