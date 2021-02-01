export default () => {
  const container = document.createElement('div');

  const template = `




  <h2 class="title">Oi tudo bem? Como está seu humor hoje?</h2>


  <a href="./#filmes"> <button id="Estressade" class="btn-estressade" >Estressade</button></a>

  <a href="./#filmes"> <button id="Chateade" class="btn-inspirade" >Inspirade</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-feliz" >Feliz</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-entediade" >Entediade</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-cor-partido" >Coração Partido</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-triste" >Triste</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-sensivel" >Sensível</button></a>

  <a href="./#filmes"> <button id="Feliz" class="btn-apaixonade" >Apaixonade</button></a>

  
  `;

  container.innerHTML = template;
  return container
}
