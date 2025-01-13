const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger")

menuBurger.addEventListener("click", () => {
    mobileMenu.classList.add("ativo");
})







function menuClick() {
    const itens = document.querySelector('.mobile-menu');

    if(itens.style.display === "none"){
        itens.style.display = "block";
    } else {
        itens.style.display = "none";
        }
}