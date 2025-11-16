
//QUESTÇAO DE SEGURANÇA -- ADICIONAR O CÓDIGO JS DO index.html no validarConsult.js

function limpar() {
    // Limpar os campos de texto
    document.getElementById("nome").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ddd").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("faturamento").value = "";
    document.getElementById("cnpj").value = "";
    document.getElementById("msg-txt").value = "";
}

const slides = document.querySelectorAll(".slide");
const controls = document.querySelectorAll(".controls a");

let currentIndex = 2; // slide central inicial (3)
let intervalId;

// Função para ativar slide e controle correspondente
function setActive(index) {
  // Remove ativo anterior
  document.querySelector(".slide.active").classList.remove("active");

  // Ativa slide
  slides[index].classList.add("active");

  currentIndex = index; // atualiza índice atual
}

// Função para avançar o slide automaticamente
function nextSlide() {
  let nextIndex = (currentIndex + 1) % slides.length; // volta ao primeiro slide após o último
  setActive(nextIndex);
}

// Ativa o slide inicial
setActive(currentIndex);

// Intervalo automático (troca de slide a cada 4 segundos)
intervalId = setInterval(nextSlide, 4000);

// Clique manual
controls.forEach((ctrl, i) => {
  ctrl.addEventListener("click", e => {
    e.preventDefault();
    clearInterval(intervalId); // para a rotação automática ao clicar
    setActive(i);
    intervalId = setInterval(nextSlide, 4000); // reinicia a rotação automática
  });
});
