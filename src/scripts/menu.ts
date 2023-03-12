export const setHumbugger = () => {
  const hamburger = document.querySelector('.hamburger');
  if (!hamburger) return;

  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('expanded');
  });
}

setHumbugger();