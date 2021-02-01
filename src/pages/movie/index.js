export default () => {
  const container = document.createElement('div');

  const template = `

  
  <p class="title-movies">Achamos que vai gostar dessa seleção que fizemos para você <img class="logo-github" src="img/favourite.png" alt="logo github" /> </p>
  <div >
  <img class="img"  src="./img/capa-soul.jpg" alt="capa de filme" width="150px" height="180px">
  </div>  
  `;

  container.innerHTML = template;

  return container
}