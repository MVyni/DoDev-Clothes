
const nomeRoupa = document.querySelector(".nomeCarrinho");
const valorRoupa = document.querySelector(".valorCarrinho");
const qntRoupa = document.querySelector(".quantCarrinho");
const tamRoupa = document.querySelector(".tamCarrinho");
const totalRoupa = document.querySelector(".totalCarrinho");
const divCarrinho = document.querySelector("#infoCarrinho")
let arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"));


function updateCarrinho(){
divCarrinho.innerHTML = "";
const createElemnt = document.createElement("div")

arrayRoupas.forEach(item => {
    createElemnt.innerHTML = `
    <div id="infoImg">
                    <img id="imgProduto" src="${item.img.split("/").pop()}" alt="imagem" height="200px" width="150px" >
                </div>

                <div id="info">
                    <ul>
                        <li class="nomeCarrinho">${item.roupa}</li>
                        <li class="valorCarrinho">${item.valor}</li>
                        <li class="quantCarrinho">${item.cont}</li>
                        <li class="tamCarrinho">${item.saveTam}</li>
                    </ul>
                </div>
                <p class="totalCarrinho">0</p>
            `
        })
        divCarrinho.appendChild(createElemnt)
}

window.localStorage.setItem("função", updateCarrinho());

let valor = Number(valorRoupa.textContent);
let quantidade = Number(qntRoupa.textContent);


if(quantidade > 1){
    valor *= quantidade
    totalRoupa.textContent = `Total: R$ ${(valor)}`;
} else {
    totalRoupa.textContent = `Total: R$ ${valor}`;
}