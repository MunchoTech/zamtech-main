/*document.addEventListener('DOMContentLoaded', () => {
  console.log("ZamTech Creo 2025 — Live & Lethal 🔥");

  const mobileMenu = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');

  mobileMenu?.addEventListener('click', () => {
    nav.classList.toggle('open');
    mobileMenu.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
});*/


document.addEventListener('DOMContentLoaded', function() {
  console.log("Script loaded — ZamTech mobile menu active");

  const hamburger = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');

  if (!hamburger || !nav) {
    console.error("Mobile menu elements not found!");
    return;
  }

  hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
    hamburger.textContent = nav.classList.contains('open') ? '✕' : '☰';
    console.log("Menu toggled — open:", nav.classList.contains('open'));
  });

  // Close when clicking links (optional but recommended)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });
});
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', reveal);