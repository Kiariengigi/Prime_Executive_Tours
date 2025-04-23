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
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only apply to internal links
      if (href && href !== "#" && !href.startsWith("http")) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Match transition duration
      }
    });
  });


