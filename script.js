document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('nav ul li a');
  
  links.forEach(link => {
    // Verifica se o link é interno (com href começando com '#')
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      });
    }
  });
});
