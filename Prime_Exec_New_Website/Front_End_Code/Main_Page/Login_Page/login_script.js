window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
  });
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
  
      // Apply fade only to valid internal links
      if (
        href &&
        href !== "#" &&
        !href.startsWith("http") &&
        !this.hasAttribute("target")
      ) {
        e.preventDefault();
        document.body.classList.add("fade-out");
  
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Match the CSS transition duration
      }
    });
  });