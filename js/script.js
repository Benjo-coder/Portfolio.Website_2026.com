/* =========================
   NAVBAR TOGGLE (MOBILE)
========================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};
/* =========================
   ACTIVE NAV ON SCROLL
========================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let top = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(
        `header nav a[href*="${id}"]`
      );
      if (activeLink) activeLink.classList.add('active');
    }
  });

  /* Sticky Header */
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', top > 100);

  /* Auto close navbar on scroll */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});


/* =========================
   CLOSE NAV ON LINK CLICK
========================= */

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});


/* =========================
   SCROLL REVEAL
========================= */

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



});

