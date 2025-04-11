
  const nav = document.getElementById('navbar');
  const navButtons = document.getElementById('navButtons');

  let atTop = true;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop === 0) {
      navButtons.classList.remove('hidden');
      atTop = true;
    } else if (atTop) {
      navButtons.classList.add('hidden');
      atTop = false;
    }
  });

  nav.addEventListener('mouseenter', () => {
    if (!atTop) {
      navButtons.classList.remove('hidden');
    }
  });

  nav.addEventListener('mouseleave', () => {
    if (!atTop) {
      navButtons.classList.add('hidden');
    }
  });
  // Add functionality to hide and show navbar
const navbar = document.getElementById('mainNavbar');

// Event listener for scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

