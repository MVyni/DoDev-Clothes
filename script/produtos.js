//INTERATIVIDADE MENU BURGER
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger");
const nomeForm = document.getElementById("nome");
const sobreNomeForm = document.getElementById("sobreNome");
const emailForm = document.getElementById("email");
const telForm = document.getElementById("tel");
const form = document.getElementById("form");
const roupa1 = document.querySelector("#roupa1");
const roupa2 = document.querySelector(".roupa02");
const infoRoupaValor = document.querySelector(".info-roupa .valor");
const infoRoupaNome = document.querySelector(".info-roupa .nome");
const btnMais = document.querySelector(".mais");
const btnMenos = document.querySelector(".menos");
const contador = document.querySelector("#contador");
const tam = document.querySelector(".tamanhos");
const btnEnviar = document.querySelector(".adicionar");
const updateCarrinho = window.localStorage.getItem("função");
const mobileCart = document.querySelector(".mobileCarrinho");
const menuCart = document.querySelector(".menuCarrinho");
const btnTam = document.querySelectorAll(".tam");

menuBurger.addEventListener("click", () => {
  mobileMenu.classList.toggle("ativo");
  menuBurger.classList.toggle("ativo");
});

btnTam.forEach((btn) => {
  btn.addEventListener("click", (e) => {
  let atualBtn = e.target;

  atualBtn.classList.toggle("ativo");
})
})

menuCart.addEventListener("click", () => {
  menuCart.classList.toggle("ativo");
  mobileCart.classList.toggle("ativo");

  const arrayRoupas = JSON.parse(window.localStorage.getItem("Roupas"))
  const divMobCart = document.querySelector(".mobileCart-Itens");
  const totalRoupa = document.querySelector(".totalMobile-cart");

  let total = 0;
  divMobCart.innerHTML = "";

  arrayRoupas.forEach((item) => {
    const mobileCart = document.createElement("div");
    mobileCart.innerHTML = `
  <div class="item">
     <ul>
       <li class="itensMobile"> ${item.roupa} </li>
       <li class="itensMobile"> ${item.cont}x </li>
       <li class="itensMobile"> ${item.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })} </li>
      </ul>
  </div>
  
    `
    total += item.valor * item.cont;
  divMobCart.appendChild(mobileCart)
  });
  totalRoupa.textContent = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
})

//TROCANDO IMAGEM E TEXTO DA IMAGEM
roupa2.addEventListener("click", (e) => {
  const roupaAux = roupa1.src;
  const imgClicada = e.target.src.split("/").pop();

  roupa1.src = e.target.src;
  e.target.src = roupaAux;

  switch (imgClicada) {
    case "moletom.jpg":
      infoRoupaNome.textContent = "Moletom Preto";
      infoRoupaValor.textContent = "119.00";
      break;

    case "t-shirt-black.jpg":
      infoRoupaNome.textContent = "T-shirt Black";
      infoRoupaValor.textContent = "80.00";
      break;

    case "look-completo.jpg":
      infoRoupaNome.textContent = "Conjunto Alfaiataria Black";
      infoRoupaValor.textContent = "345.00";
      break;

    case "t-shirt&jeans.jpg":
      infoRoupaNome.textContent = "T-shirt Black e Jeans";
      infoRoupaValor.textContent = "294.90";
      break;

    default:
      "";
  }
});

//SALVANDO QUANTIDADE DAS ROUPAS
btnMais.addEventListener("click", () => {
  contador.value++;
});

btnMenos.addEventListener("click", () => {
  if (contador.value > 1) {
    contador.value--;
  }
});

let saveTam = "";

//SALVANDO TAMANHO DA ROUPA
tam.addEventListener("click", (e) => {
  saveTam = e.target.value;
});

//ENVIADO PRODUTOS PRO CARRINHO E MSG DE ÊXITO
let arrayRoupas =  JSON.parse(window.localStorage.getItem("Roupas")) || [];

btnEnviar.addEventListener("click", () => {
  if (!saveTam) {
    alert("Por favor, selecione um tamanho.");
    return;
  } else {
    alert("Produto adicionado ao carrinho.");
  }

  const img = roupa1.src.split("/").pop();
  let roupa = infoRoupaNome.textContent;
  let valor = parseFloat(infoRoupaValor.textContent);
  let cont = parseInt(contador.value);

  let existRoupa = arrayRoupas.find((item) => item.roupa === roupa && item.saveTam === saveTam);
  if (existRoupa) {
    existRoupa.cont += 1;
  } else {
    arrayRoupas.push({
      img,
      roupa,
      cont,
      saveTam,
      valor,
    });
  }
  window.localStorage.setItem("Roupas", JSON.stringify(arrayRoupas));
  
});

//SALVANDO FORM NO LOCAL STORAGE
function saveName(text) {
  window.sessionStorage.setItem("nome", text);
}

nomeForm.addEventListener("blur", (e) => {
  saveName(e.target.value);
});

function saveSobreNome(text) {
  window.sessionStorage.setItem("sobrenome", text);
}

sobreNomeForm.addEventListener("blur", (e) => {
  saveSobreNome(e.target.value);
});

function saveEmail(email) {
  window.sessionStorage.setItem("e-mail", email);
}

emailForm.addEventListener("blur", (e) => {
  saveEmail(e.target.value);
});

function saveTel(tel) {
  window.sessionStorage.setItem("telefone", tel);
}

telForm.addEventListener("blur", (e) => {
  saveTel(e.target.value);
});

//ENVIANDO FORM PARA API
async function postForm(
  url = "https://apigenerator.dronahq.com/api/kfuTuMtf/form",
  data = "{}"
) {
  const response = await fetch(
    "https://apigenerator.dronahq.com/api/kfuTuMtf/form",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );
  return response.json();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formulario = e.currentTarget;
  const data = {
    Nome: formulario.nome.value,
    Sobrenome: formulario.sobreNome.value,
    Email: formulario.email.value,
    Telefone: formulario.tel.value,
  };

  postForm("https://apigenerator.dronahq.com/api/kfuTuMtf/form", data)
    .then((data) => {
      alert("Formulário enviado com sucesso");

      formulario.reset();
    })
    .catch((data) => {
      console.log("Erro ao enviar:", data);
    });
});
