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
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const errorDiv = document.getElementById("error");
  
    if (password !== confirmpassword) {
      e.preventDefault(); // Stop form from submitting
      errorDiv.textContent = "Passwords do not match!";
    } else {
      errorDiv.textContent = ""; // Clear error if match
    }
  });
  