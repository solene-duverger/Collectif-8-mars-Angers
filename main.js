// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuBtn.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });
}

// Contact form (basic - replace with Netlify Forms or Formspree)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    // Netlify handles forms natively if the form has netlify attribute
    // This is just for the success message
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = '✓ ENVOYÉ !';
    btn.style.background = '#2A9D8F';
    setTimeout(() => {
      btn.textContent = 'ENVOYER';
      btn.style.background = '';
    }, 3000);
  });
}
