const nomeRoupa = document.querySelector(".nomeCarrinho");
const valorRoupa = document.querySelector(".valorCarrinho");
const qntRoupa = document.querySelector(".quantCarrinho");
const tamRoupa = document.querySelector(".tamCarrinho");
const totalRoupa = document.querySelector(".totalCarrinho");
const divCarrinho = document.querySelector("#infoCarrinho");
let arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"));

function updateCarrinho() {
  divCarrinho.innerHTML = "";
  
  arrayRoupas.forEach((item) => {
      const createElemnt = document.createElement("div");
    createElemnt.innerHTML = `
    <div id="infoImg">
                    <img id="imgProduto" src="img/${item.img.split("/").pop()}" alt="imagem" height="150px" width="100px" >
                </div>

                <div id="info">
                    <ul>
                        <li class="nomeCarrinho">${item.roupa}</li>
                        <li class="valorCarrinho">Valor: R$ ${item.valor}</li>
                        <li class="quantCarrinho">Quantidade: ${item.cont}x</li>
                        <li class="tamCarrinho">Tamanho: ${item.saveTam}</li>
                    </ul>
                </div>
                <div>
                    <button>x</button>
            `
            divCarrinho.appendChild(createElemnt);
        });
}


window.localStorage.setItem("função", updateCarrinho());

let valor = Number(valorRoupa.textContent);
let quantidade = Number(qntRoupa.textContent);

if (quantidade > 1) {
  valor *= quantidade;
  totalRoupa.textContent = `Total: R$ ${valor}`;
} else {
  totalRoupa.textContent = `Total: R$ ${valor}`;
}
