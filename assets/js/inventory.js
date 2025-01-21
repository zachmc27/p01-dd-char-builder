
const indexCharacterArray = JSON.parse(localStorage.getItem('characterList')) || []
const characterCards = document.querySelector('.character-cards')
console.log(indexCharacterArray)



function populateCharacterCards () {
  for (let i = 0; i < indexCharacterArray.length; i++) {
    characterCards.innerHTML += `
    
    <div class="col-lg-4 col-md-6 col-sm-12">
          <section class="card border bg-light">
            <div class="char-banner">
              <p>${indexCharacterArray[i].name}</p>
            </div>
            <div class="delete-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></div>
            <span class="char-card"></span>
          </section>
        </div>
    `
  }
}

populateCharacterCards()
const startButton = document.querySelector('#create-card');

startButton.addEventListener('click', function() {
    window.location.href = 'details.html';
  });