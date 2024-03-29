function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

const dark = document.querySelector('button');
let status = 'ativo';

dark.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (status === 'ativo') {
    dark.innerHTML = 'dark_mode';
    status = 'desativado';
  } else {
    dark.innerHTML = 'light_mode';
    status = 'ativo';
  }
});
