function clickMenu() {
    const itens = document.getElementById('itens');

    if (itens.style.display === 'none'){
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

function menuClick() {
    const menuBurger = document.getElementById('menuBurger');

    menuBurger.addEventListener('click', (event) => {event.style.display = 'block'})
}