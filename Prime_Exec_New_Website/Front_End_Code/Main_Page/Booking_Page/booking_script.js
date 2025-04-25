const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');

let currentStep = 0;

// Update the lines based on the active step
function updateLine() {
  // Loop through each step and activate lines for each active step
  steps.forEach((step, index) => {
    const lineElement = step.querySelector('.line'); // Target the line after the step

    if (index < currentStep) {
      // If this step is before the current active step, set line width to 100%
      lineElement.style.width = '100%';
    } else if (index === currentStep) {
      // The line of the current step is set to 100% width as well
      lineElement.style.width = '0%';
    } else {
      // For steps that are not active, keep the line at 0% width
      lineElement.style.width = '0%';
    }
  });

}

// Forward navigation when the "Continue" button is clicked
nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
    updateLine(); // Update the line visibility on step change
  }
});

// Initial line update on page load
updateLine();
