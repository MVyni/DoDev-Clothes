const nomeRoupa = document.querySelector(".nomeCarrinho");
const valorRoupa = document.querySelector(".valorCarrinho");
const qntRoupa = document.querySelector(".quantCarrinho");
const tamRoupa = document.querySelector(".tamCarrinho");
const totalRoupa = document.querySelector(".totalCarrinho");
const divCarrinho = document.querySelector("#infoCarrinho");
const infosRoupa = document.querySelector("#info");
let arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"));

let total = 0;

function updateCarrinho() {
  divCarrinho.innerHTML = "";

  arrayRoupas.forEach((item) => {
    const createElemnt = document.createElement("div");
    createElemnt.innerHTML = `
    <div id="infoImg">
                    <img id="imgProduto" src="img/${item.img
                      .split("/")
                      .pop()}" alt="imagem" height="150px" width="100px" >
                    </div>
                    
                    <div id="info">
                    <ul>
                    <li class="nomeCarrinho">${item.roupa}</li>
                <li class="valorCarrinho" data-valor="${
                  item.valor
                }">Valor: R$ ${item.valor}</li>
                        <li class="quantCarrinho">Quantidade: ${item.cont}x</li>
                        <li class="tamCarrinho">Tamanho: ${item.saveTam}</li>
                    </ul>
                </div>
                <div>
                <button class="btnExcluir" data-nome = "${
                  item.roupa
                }">X</button>
                `;
    total += item.valor * item.cont;
    divCarrinho.appendChild(createElemnt);
  });
}

window.localStorage.setItem("função", updateCarrinho());

totalRoupa.textContent = `Total: ${total.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
})}`;

divCarrinho.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnExcluir")) {
    const roupa = e.target.getAttribute("data-nome");

    let index = arrayRoupas.findIndex((item) => item.roupa === roupa);

    if (index !== -1) {
      let item = arrayRoupas[index];
      arrayRoupas.splice(index, 1);
    }
  }
  updateCarrinho();
});
