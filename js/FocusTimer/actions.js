import state from "./state.js";
import { countdown, updateDisplay } from "./timer.js";
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")
    countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove("running")
    updateDisplay()
    sounds.buttonPressAudio.play()
}

export function set() {
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
    //elements.minutes.textContent = ""

    //teste pra saber se oque tá sendo passado é letra ou número
    //elements.minutes.onkeypress = (event) => /\d/.test(event.key)
    // /\d/ é uma expressão regular
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle("music-on")
    state.isMute ? sounds.bgAudio.play() : sounds.bgAudio.pause()
}