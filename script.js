const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger");

menuBurger.addEventListener("click", () => {

  mobileMenu.classList.toggle("ativo");
  menuBurger.classList.toggle("ativo");
});
