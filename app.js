const menuBtn = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".vertical-menu")

menuBtn.addEventListener("click", () => {
    console.log("hola")
    menu.classList.toggle("vertical-menu-big")
    menu.classList.toggle("vertical-menu-small")
})