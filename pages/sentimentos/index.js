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


    <h2 class="title">Oi tudo bem? Como está seu humor hoje?</h2>


    <a href="./#movies"> <button id="stressed" class="btn-stressed">Estressade</button></a>

    <a href="./#movies"> <button id="inspired" class="btn-inspired" >Inspirade</button></a>

    <a href="./#movies"> <button id="happy" class="btn-happy" >Feliz</button></a>

    <a href="./#movies"> <button id="bored" class="btn-bored" >Entediade</button></a>

    <a href="./#movies"> <button id="heartbroken" class="btn-heartbroken" >Coração Partido</button></a>

    <a href="./#movies"> <button id="sad" class="btn-sad" >Triste</button></a>

    <a href="./#movies"> <button id="sensitive" class="btn-sensitive" >Sensível</button></a>

    <a href="./#movies"> <button id="in-love<" class="btn-in-love" >Apaixonade</button></a>

    
    `;

    container.innerHTML = template;
    return container
}
