import { movieAnimation, movieComedy, movieDrama, movieFiction, movieRomance, movieThriller } from '../../services/index.js';
import movie from '../movie/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <header>
        <nav class="navbar">
            <ul class="navbar-list">
                <li class="list">
                    <a class="title" href="./#home"><img class="logo-github" src="img/next.png" alt="logo github" /></a>
                </li>
        </nav>
    </header>
        <h2 class="title">Oi tudo bem? Como está seu humor hoje?</h2>
        <a href="./#movie"> <button id="btn-stressed" class="btn-stressed">Estressade</button></a>
        <a href="./#movie"> <button id="btn-inspired" class="btn-inspired" >Inspirade</button></a>
        <a href="./#movie"> <button id="btn-happy" class="btn-happy" >Feliz</button></a>
        <a href="./#movie"> <button id="btn-bored" class="btn-bored" >Entediade</button></a>
        <a href="./#movie"> <button id="btn-heart-broken" class="btn-heartbroken" >Coração Partido</button></a>
        <a href="./#movie"> <button id="btn-sad" class="btn-sad" >Triste</button></a>
        <a href="./#movie"> <button id="btn-sensitive" class="btn-sensitive" >Sensível</button></a>
        <a href="./#movie"> <button id="btn-in-love<" class="btn-in-love" >Apaixonade</button></a>
  `;
  container.innerHTML = template;

  const stressedButton = container.querySelector('#btn-stressed');
  const inspiredButton = container.querySelector('#btn-inspired');
  const happyButton = container.querySelector('#btn-happy');
  const boredButton = container.querySelector('#btn-bored');
  const heartBrokenButton = container.querySelector('#btn-heart-broken');
  const sadButton = container.querySelector('#btn-sad');
  const sensitiveButton = container.querySelector('#btn-sensitive');
  const inLoveButton = container.querySelector('#btn-sensitive');

  stressedButton.addEventListener('click',() => {
    movieAnimation();
    movieComedy();
  });

  inspiredButton.addEventListener('click',() => {
    movieFiction();
    movieThriller();
  });

  happyButton.addEventListener('click',() => {
    movieComedy();
    movieDrama();
  });

  boredButton.addEventListener('click',() => {
    movieFiction();
    movieComedy();
  });

  heartBrokenButton.addEventListener('click',() => {
    movieDrama();
    movieComedy();
  });
  
  sadButton.addEventListener('click',() => {
    movieAnimation();
    movieComedy();
  });

  sensitiveButton.addEventListener('click',() => {
    movieDrama();
    movieRomance();
  });

  inLoveButton.addEventListener('click',() => {
    movieDrama();
    movieRomance();
  });

  return container
}
