const hamburgerMenu = document.getElementById("hamburger-menu")
const hamburgerClose = document.getElementById("hamburger-close")


hamburgerMenu.addEventListener('click', () => {
    document.querySelector(".navbar").classList.add('hidden')
    document.querySelector(".navbar-toggle").classList.remove("hidden")
})

hamburgerClose.addEventListener('click', () => {
    document.querySelector(".navbar").classList.remove('hidden')
    document.querySelector(".navbar-toggle").classList.add("hidden")
})

