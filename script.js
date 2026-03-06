const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
}
