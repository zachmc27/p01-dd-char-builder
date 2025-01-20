/*when clicking back button it will go back to stats.html */
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

