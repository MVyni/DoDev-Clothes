
function menuClick() {
    const menuBurger = document.getElementById('menuBurger');
    const itens = document.getElementById('itens');

    menuBurger.addEventListener('click', () => {
    if(itens.style.display === "none"){
        itens.style.display = "block";
    } else {
        itens.style.display = "none";
        }
    })
}