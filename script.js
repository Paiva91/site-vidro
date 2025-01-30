document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    // Verifica se o link é interno (com href começando com '#')
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Ajuste: subtrai a altura do cabeçalho
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: targetSection.offsetTop - headerHeight, // Subtrai a altura do cabeçalho
          behavior: 'smooth',
        });
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const inicioSection = document.getElementById('inicio');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inicioSection.classList.add('visible');
        observer.unobserve(inicioSection); // Para de observar após a animação ser aplicada
      }
    });
  }, {
    threshold: 0.1 // A animação será disparada quando 10% da seção estiver visível
  });

  observer.observe(inicioSection);
});

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index){
  if(index >= slides.length){
      slideIndex = 0;
  }
  else if(index < 0){
      slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
      slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}