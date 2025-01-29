const img = document.querySelector("#imgProduto");
const nomeRoupa = document.querySelector(".nomeCarrinho");
const valorRoupa = document.querySelector(".valorCarrinho");
const qntRoupa = document.querySelector(".quantCarrinho");
const tamRoupa = document.querySelector(".tamCarrinho");
const totalRoupa = document.querySelector(".totalCarrinho");

img.src = `img/${window.localStorage.getItem("Imagem")}`;
nomeRoupa.textContent = window.localStorage.getItem("Roupa");
valorRoupa.textContent = window.localStorage.getItem("Valor");
qntRoupa.textContent = window.localStorage.getItem("Quantidade");
tamRoupa.textContent = `Tamanho: ${window.localStorage.getItem("Tamanho")}`;
totalRoupa.textContent = valorRoupa.textContent;

let valor = Number(valorRoupa.textContent);
let quantidade = Number(qntRoupa.textContent);


if(quantidade > 1){
    valor *= quantidade
    totalRoupa.textContent = `Total: R$ ${(valor)}`;
} else {
    totalRoupa.textContent = `Total: R$ ${valor}`;
}