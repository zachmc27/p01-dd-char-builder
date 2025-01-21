
const returnButton = document.querySelector('#return-button');
const backButton = document.querySelector('#back');


const characterName = localStorage.getItem('name');
document.querySelector ('#name').textContent = characterName

const characterAge = localStorage.getItem('age');
document.querySelector ('#age').textContent = characterAge

const characterGender = localStorage.getItem('gender');
document.querySelector ('#gender').textContent = characterGender

const characterHeight = localStorage.getItem('height');
document.querySelector ('#height').textContent = characterHeight

const characterWeight = localStorage.getItem('weight');
document.querySelector ('#weight').textContent = characterWeight

const characterAppearance = localStorage.getItem('appearance');
document.querySelector ('#appearance').textContent = characterAppearance

const characterBackstory = localStorage.getItem('backstory');
document.querySelector ('#backstory').textContent = characterBackstory





backButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });

returnButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  
