import home from "./pages/home/index.js"
import mood from "./pages/mood/index.js"
import movies from "./pages/movies/index.js"


const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""

        switch(window.location.hash){
            case " ":
                main.appendChild(home());
                break;
            case "#mood":
                main.appendChild(mood());
                break;
                case "#movies":
                    main.appendChild(movies());
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