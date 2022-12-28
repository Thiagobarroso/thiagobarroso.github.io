const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault(); 
    const href = event current.getAtribute('href');
    const section = document.querySelector(href);

  }

linksInternos forEach((link) => {
  link.addEventListener('click', scrollToSection);
});