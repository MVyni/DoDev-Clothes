const totalRoupa = document.querySelector(".totalCarrinho");
const divCarrinho = document.querySelector("#infoCarrinho");
const infosRoupa = document.querySelector("#info");
let arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"));
const valorCarrinho = document.querySelectorAll(".valorCarrinho");
const divMobCart = document.querySelector("mobileCart-Itens");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger");


menuBurger.addEventListener("click", () => {
  mobileMenu.classList.toggle("ativo");
  menuBurger.classList.toggle("ativo");
});


function updateCarrinho() {
  let total = 0;
  divCarrinho.innerHTML = "";

  arrayRoupas.forEach((item) => {
    const createElemnt = document.createElement("div");
    createElemnt.innerHTML = `
    <div id="allInfos">
    <div id="infoImg">
                    <img id="imgProduto" src="img/${item.img
                      .split("/")
                      .pop()}" alt="imagem" height="150px" width="100px" >
                    </div>
                    
                    <div id="infoCart">
                    <ul>
                    <li class="nomeCarrinho">${item.roupa}</li>
                    <li class="valorCarrinho" data-valor="${
                      item.valor}">
                      Valor: ${item.valor.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}</li>
                        <li class="quantCarrinho">Quantidade: ${item.cont}x</li>
                        <li class="tamCarrinho">Tamanho: ${item.saveTam}</li>
                        </ul>
                        </div>
                        <div>
                        <button class="btnExcluirItem" 
                        data-nome = "${item.roupa}"
                        onclick="removeItem()" >X</button>
                        </div>
                        </div>
                        `;

    total += item.valor * item.cont;
    divCarrinho.appendChild(createElemnt);
  });
  totalRoupa.textContent = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
}

function removeItem() {
  divCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnExcluirItem")) {
      const roupa = e.target.getAttribute("data-nome");

      let index = arrayRoupas.findIndex((item) => item.roupa === roupa);

      if (index !== -1) {
        arrayRoupas.splice(index, 1);
        (window.localStorage.setItem("Roupas", JSON.stringify(arrayRoupas)));
      }
    }
    updateCarrinho();
  });
}
