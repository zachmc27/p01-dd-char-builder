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
})


completeButton.addEventListener('click', function (event) {
    event.preventDefault();

    const appearance = appearanceInput.value;
    const backstory = backstoryInput.value;

    storeLocalStorage('appearance', appearance);
    storeLocalStorage('backstory', backstory);
    
    window.location.href = 'sheet.html';
});

