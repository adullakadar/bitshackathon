// Switch between frames
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.content');
  const links = document.querySelectorAll('.side-nav-bar-menu a');

  function showSection(id) {
    sections.forEach(frame => frame.classList.toggle('active', frame.id === id));
    links.forEach(nav => nav.classList.toggle('active', nav.getAttribute('href') === `#${id}`));
  }

  document.querySelector('.side-nav-bar-menu').addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    showSection(id);
  });
  showSection('concept');
});
