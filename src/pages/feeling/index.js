import { movieComedy } from '../../services/index.js';

export default () => {
  const container = document.createElement('div');

  const template = `


    <p class="title-feeling">Oi tudo bem? <br> Como está seu humor hoje?</p>
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
  const boredButton = container.querySelector('#btn-bored')
  const heartBrokenButton = container.querySelector('#btn-heart-broken')

  stressedButton.addEventListener('click',() => {
    movieComedy()
  });
  

  return container
}
