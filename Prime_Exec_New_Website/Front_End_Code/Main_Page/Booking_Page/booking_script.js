const steps = document.querySelectorAll('.step'); // Step indicators (e.g., circles or progress dots)
const stepContents = document.querySelectorAll('.step-content'); // Step content containers
const nextBtn = document.getElementById('nextBtn');
const expiryInput = document.getElementById('expiry');

let currentStep = 0;

// Format expiry input (MM/YY)
expiryInput.addEventListener('input', function () {
  let value = expiryInput.value.replace(/\D/g, ''); // Remove non-digits
  if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4);
  }
  expiryInput.value = value;
});

// Show the active step content and update step indicators
function showStep(step) {
  // Toggle visibility for each step content
  stepContents.forEach((el, index) => {
    el.classList.toggle('d-none', index !== step);
  });

  // Update step indicators
  steps.forEach((indicator, index) => {
    indicator.classList.toggle('active', index <= step);
  });

}

// Update progress lines visually
function updateLine() {
  steps.forEach((step, index) => {
    const lineElement = step.querySelector('.line');
    if (lineElement) {
      if (index < currentStep) {
        lineElement.style.width = '100%';
      } else {
        lineElement.style.width = '0%';
      }
    }
  });
}

// Button click: move to next step
nextBtn.addEventListener('click', () => {
  if (currentStep < stepContents.length - 1) {
    currentStep++;
    showStep(currentStep);
    updateLine();
  } else {
    // Optional: submit form or redirect here
    window.open('payment_success.html', '_self')
  }
});

// Initialize first step
showStep(currentStep);
updateLine();
