function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

// DARK MODE

const btnMode = document.getElementById('btnMode');
const body = document.body;
const icon = document.getElementById('icon');

btnMode.addEventListener('click', function () {
  body.classList.toggle('light-mode');
  body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

  if (body.classList.toggle('ligth-mode')) {
    btnMode.innerText = 'dark_mode';
    icon.setAttribute(
      'href',
      'assets/0701-primeiros-passos/img/detalhe-clara.svg',
    );
  } else {
    btnMode.innerText = 'light_mode';
    icon.setAttribute(
      'href',
      'assets/0701-primeiros-passos/img/detalhe-escura.svg',
    );
  }
});
