let lastScrollTop = 0;
const navLinks = document.querySelectorAll('.nav-link-toggle');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down → hide nav links
    navLinks.forEach(link => link.style.opacity = '0');
  } else if (scrollTop <= 10) {
    // back to top → show nav links
    navLinks.forEach(link => link.style.opacity = '1');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Optional: show links when mouse hovers over navbar
navbar.addEventListener('mouseenter', () => {
  navLinks.forEach(link => link.style.opacity = '1');
});
navbar.addEventListener('mouseleave', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 10) {
      navLinks.forEach(link => link.style.opacity = '0');
    }
  });
