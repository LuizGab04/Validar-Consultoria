const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// posições relativas ao centro: -2, -1, 0, 1, 2  => ângulos -60, -30, 0, 30, 60
const positions = [-2, -1, 0, 1, 2];
const stepAngle = 30; // 30 graus entre cada posição

let currentIndex = 2; // quem começa no centro (aqui o slide 3: índice 2)
let intervalId = null;

// Atualiza ângulos e classe .active para TODOS os slides
function updatePositions() {
  slides.forEach((slide, i) => {
    // slot 0..4 ao redor do arco, mudando conforme o currentIndex
    const slot = (i - currentIndex + totalSlides) % totalSlides;

    // posição relativa (-2..2)
    const pos = positions[slot];

    const angle = pos * stepAngle;

    // se estiver no centro (pos === 0) é o slide ativo
    const isActive = pos === 0;
    slide.classList.toggle("active", isActive);

    // aplica rotação e zoom no ativo
    const scale = isActive ? 1.3 : 1;
    slide.style.transform = `translateY(-50%) rotate(${angle}deg) scale(${scale})`;
  });
}

// avança para o próximo slide (sentido horário)
function nextSlide() {
  currentIndex = (currentIndex - 1) % totalSlides;
  updatePositions();
}

// inicia
updatePositions();
intervalId = setInterval(nextSlide, 4000);