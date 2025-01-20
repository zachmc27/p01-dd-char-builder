
const returnButton = document.querySelector('#return-button');
const backButton = document.querySelector('#back');






backButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });

returnButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });