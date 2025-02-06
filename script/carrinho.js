const totalRoupa = document.querySelector(".totalCarrinho");
const divCarrinho = document.querySelector("#infoCarrinho");
const infosRoupa = document.querySelector("#info");
let arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"));
const valorCarrinho = document.querySelectorAll(".valorCarrinho");
const divMobCart = document.querySelector("mobileCart-Itens");

function mobileCarrinho(){
  let total = 0;
  divMobCart.innerHTML = "";

  arrayRoupas.forEach((item) => {
    const mobileCart = document.createElement("div");
    mobileCart.innerHTML = `
  <div class="mobileCarrinho">
     <ul>
       <li class="itensMobile"> ${item.roupa} </li>
       <li class="itensMobile"> ${item.cont}x </li>
       <li class="itensMobile">R$ ${item.valor} </li>
      </ul>
  </div>
    `
    total += item.valor * item.cont;
  divMobCart.appendChild(mobileCart)
  })
  totalRoupa.textContent = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;

}

function updateCarrinho() {
  let total = 0;
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
                        <button class="btnExcluir" 
                        data-nome = "${item.roupa}"
                        onclick="removeItem()" >X</button>
                        `;

    total += item.valor * item.cont;
    divCarrinho.appendChild(createElemnt);
  });
  totalRoupa.textContent = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
}
window.localStorage.setItem("função", updateCarrinho());

function removeItem() {
  divCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnExcluir")) {
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
