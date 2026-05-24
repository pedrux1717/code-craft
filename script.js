// Menu mobile
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) menu.classList.toggle('open');
}

// Chiudi menu cliccando link
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#nav-menu a').forEach(a => {
    a.addEventListener('click', () => {
      const menu = document.getElementById('nav-menu');
      if (menu) menu.classList.remove('open');
    });
  });
});

// Active nav link per pagina corrente
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
