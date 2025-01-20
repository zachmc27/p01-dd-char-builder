
const continueButton = document.querySelector('#continue');
const backButton = document.querySelector('#back');






backButton.addEventListener('click', function() {
    window.location.href = 'details.html';
  });

continueButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });