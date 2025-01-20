/*when clicking back button it will go back to stats.html */
const appearanceInput = document.querySelector('#appearance');
const backstoryInput = document.querySelector('#backstory');
const completeButton = document.querySelector('#complete-btn');

const backButtonEl = document.querySelector('btn-danger')
document.addEventListener('click', (event) => {
    const element = event.target
    
    if (element.matches('#back-btn') === true) {
        redirectPage('stats.html')
    }

    if (element.matches('#submit-btn') === true) {
        console.log('modal')
    }

    if (element.matches('#complete-btn') === true) {
        console.log('working')
        redirectPage('sheet.html')
    }
})


completeButton.addEventListener('click', function (event) {
    event.preventDefault();

    const appearance = appearanceInput.value;
    const backstory = backstoryInput.value;

    if (appearance === '') {
        displayMessage('error', 'These details cannot be blank');
      } else if (backstory === '') {
        displayMessage('error', 'These details cannot be blank');
     } else {
     //   displayMessage('success', 'Registered successfully');

    localStorage.setItem('appearance', appearance);
    localStorage.setItem('backstory', backstory);

    window.location.href = 'index.html';
      }
});

