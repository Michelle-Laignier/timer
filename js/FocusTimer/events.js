//import { controls } from "./elements.js";
import state from "./state.js";
import * as actions from "./actions.js"
import * as elements from "./elements.js"
import { updateDisplay } from "./timer.js";

export function registerControls() {
    elements.controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if(typeof actions[action] != "function"){
            return
        }
        actions[action]()
    })
}

export function setMinutes() {
    elements.minutes.addEventListener("focus", () => {
        elements.minutes.textContent = ""
    })

    //teste pra saber se oque tá sendo passado é letra ou número
    elements.minutes.onkeypress = (event) => /\d/.test(event.key)
    // /\d/ é uma expressão regular

    //blur é desfocado
    elements.minutes.addEventListener("blur", (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        //verificar se o time é maior que 60 (time = time > 60)
        //se for, abaixa pra 60 (? 60)
        //se não, deixa o time que foi passado (: time)

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        elements.minutes.removeAttribute("contenteditable")
    })
}