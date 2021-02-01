import home from "./pages/home/index.js"
import sentimentos from "./pages/sentimentos/index.js"
import filmes from "./pages/filmes/index.js"


const main = document.querySelector("#root");


const init = () => {
window.addEventListener("hashchange", () => {
    main.innerHTML = ""
    switch (window.location.hash){
        case "":
            main.appendChild(home());
            break;
            case "#sentimentos":
                main.appendChild(sentimentos());
            break;
            case "#filmes":
                main.appendChild(filmes());
            break;
            default:
                    main.appendChild(home());
    }



})

}

window.addEventListener("load", () => {

    main.appendChild(home());
    init()

 })