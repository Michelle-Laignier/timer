export function toggleDarkLight() {
    let buttonSun = document.querySelector(".sun")
    let buttonMoon = document.querySelector(".moon")
    let page = document.querySelector("body")
    let timerDisplayMinutes = document.querySelector(".minutes")
    let timerDisplayDots = document.querySelector(".dots")
    let timerDisplaySeconds = document.querySelector(".seconds")

    buttonSun.addEventListener("click", alternateDarkAndLightMode)
    buttonMoon.addEventListener("click", alternateDarkAndLightMode)

    function alternateDarkAndLightMode() {
        page.classList.toggle("light-bg")
        timerDisplayMinutes.classList.toggle("light-span")
        timerDisplayDots.classList.toggle("light-span")
        timerDisplaySeconds.classList.toggle("light-span")
        buttonSun.classList.toggle("hide")
        buttonMoon.classList.toggle("hide")
    }
}