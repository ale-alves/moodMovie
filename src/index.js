import home from "./pages/home/index.js"
import feeling from "./pages/feeling/index.js"
import movie from "./pages/movie/index.js"

const main = document.querySelector("#root");


const init = () => {

window.addEventListener("hashchange", () => {
    main.innerHTML = ""
    switch (window.location.hash){
        case "":
            main.appendChild(home());
            break;
            case "#feeling":
                main.appendChild(feeling());
            break;
            case "#movie":
                main.appendChild(movie());
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

 