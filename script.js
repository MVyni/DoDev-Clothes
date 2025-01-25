//INTERATIVIDADE MENU BURGER
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger");
const nomeForm = document.getElementById("nome");
const sobreNomeForm = document.getElementById("sobreNome");
const emailForm = document.getElementById("email");
const telForm = document.getElementById("tel");
const form = document.getElementById("form");
const roupas = document.querySelector(".roupaP");
const roupa1 = document.querySelector("#roupa1");
const roupa2 = document.querySelector(".roupa02");
const imgP = document.querySelector(".roupaP");
const imgP01 = document.querySelector("#imgP1");
const imgP02 = document.querySelector("#imgP2");
const imgP03 = document.querySelector("#imgP3");
const nomeRoupa = document.querySelector(".nome");
const valor = document.querySelector(".valor");
const infosRoupa = document.querySelector(".info-roupa .nome");

menuBurger.addEventListener("click", () => {
  mobileMenu.classList.toggle("ativo");
  menuBurger.classList.toggle("ativo");
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

//MUDANDO IMAGEM NA PÁGINA PRODUTOS

function changeImg() {
  roupa2.addEventListener("click", (e) => {
    const roupaAux = roupa1.src;
    const imgClicada = e.target.src.split("/").pop();
    const imgP001 = imgP01.src.split("/").pop();
    const imgP002 = imgP02.src.split("/").pop();
    const imgP003 = imgP03.src.split("/").pop();
    const imgG = roupa1.src.split("/").pop();

    roupa1.src = e.target.src;
    e.target.src = roupaAux;

    switch(imgClicada){
      case imgP001:
        infosRoupa.innerText = "Moletom Cinza"
        break;

        case imgP002:
          infosRoupa.innerText = "T-shirt black"
          break;

        case imgP003:
          infosRoupa.innerText = "T-shirt black e Calça Jeans"
          break;

        case imgG:
          infosRoupa.innerText = "T-shirt black e Jeans"
          break;
        
      default: "";
    }
 });
}
