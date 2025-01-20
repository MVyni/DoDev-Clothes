//INTERATIVIDADE MENU BURGER
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menuBurger");
const nomeForm = document.getElementById("nome");
const sobreNomeForm = document.getElementById("sobreNome");
const emailForm = document.getElementById("email");
const telForm = document.getElementById("tel");
const form = document.getElementById("form");


menuBurger.addEventListener("click", () => {

  mobileMenu.classList.toggle("ativo");
  menuBurger.classList.toggle("ativo");
});

//SALVANDO FORM NO LOCAL STORAGE
function saveName(text){
  window.sessionStorage.setItem('nome', text)
}

nomeForm.addEventListener('blur', (e) => {
  saveName(e.target.value);
})


function saveSobreNome(text){
  window.sessionStorage.setItem('sobrenome', text)
}

sobreNomeForm.addEventListener('blur', (e) => {
  saveSobreNome(e.target.value);
})


function saveEmail(email){
  window.sessionStorage.setItem('e-mail', email)
}

emailForm.addEventListener('blur', (e) => {
  saveEmail(e.target.value);
})


function saveTel(tel){
  window.sessionStorage.setItem('telefone', tel)
}

telForm.addEventListener('blur', (e) => {
  saveTel(e.target.value);
})


//ENVIANDO FORM PARA API
async function postForm(url = "https://apigenerator.dronahq.com/api/kfuTuMtf/form", data = "{}"){

  const response = await fetch("https://apigenerator.dronahq.com/api/kfuTuMtf/form", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"},
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
  });
  return response.json()
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const formulario = e.currentTarget
  const data = {
    "Nome": formulario.nome.value,
    "Sobrenome": formulario.sobreNome.value,
    "Email": formulario.email.value,
    "Telefone": formulario.tel.value
  }

  postForm("https://apigenerator.dronahq.com/api/kfuTuMtf/form", data)
  .then((data) =>{
    alert("Formulário enviado com sucesso");
    
    formulario.reset();
  })
  .catch((data) => {
    console.log("Erro ao enviar:", data)  
  })
})