const nav = document.getElementById('nav');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('mobile-open', !open);
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('mobile-open');
  });
});

const quoteForm = document.getElementById('quoteForm');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Replace this with your real company email address.
  const COMPANY_EMAIL = 'INDSAET_JERES_EMAIL_HER@EKSEMPEL.DK';

  if (COMPANY_EMAIL.includes('INDSAET')) {
    alert('Siden er klar. Indsæt jeres rigtige e-mail i src/app.js, så tilbudsformularen kan sende forespørgsler.');
    return;
  }

  const data = new FormData(quoteForm);
  const subject = encodeURIComponent(`Tilbudsforespørgsel fra ${data.get('name')}`);
  const body = encodeURIComponent(
    `Navn: ${data.get('name')}\nVirksomhed: ${data.get('company')}\nE-mail: ${data.get('email')}\n\nOpgave:\n${data.get('message')}`
  );

  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
});
