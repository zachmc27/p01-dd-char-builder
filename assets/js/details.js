const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const genderInput = document.querySelector('#gender');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const continueButton = document.querySelector('#continue');
const backButton = document.querySelector('#back');

backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });


const speciesBox = document.querySelector('.species')

document.addEventListener('click', (event) => {
    const element = event.target
   
    if (element.matches('.elf') === true) {
        speciesBox.innerHTML = '<h2>Elf</h2> <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty; in ancient forests or in silvery spires, where soft music drifts through the air and gentle fragrances waft on the breeze.They love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>'
    }

    if (element.matches('.gnome') === true) {
        speciesBox.innerHTML = '<h2>Gnome</h2> <p>A gnomes energy and enthusiasm for living shines through every inch of their tiny body. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.</p>'
    }

    if (element.matches('.half-orc') === true) {
        speciesBox.innerHTML = '<h2>Half-Orc</h2> <p>Half-orcs are humanoids born of both human and orc ancestry. Though often shunned in both human and orcish society, though for different reasons, half-orcs have proven themselves from time to time as worthy heroes and dangerous villains.</p>'
    }

    if (element.matches('.halfling') === true) {
        speciesBox.innerHTML = '<h2>Half-Orc</h2> <p>Halflings are affable and cheerful people. They cherish the bonds of family and friendship as well as the comforts of hearth and home, harboring few dreams of gold or glory. They love discovering new things, even simple things, such as an exotic food or an unfamiliar style of clothing.</p>'
    }

    if (element.matches('.human') === true) {
        speciesBox.innerHTML = '<h2>Human</h2> <p>Humans are the youngest of the common races and short-lived in comparison to dwarves, elves, and dragons. They have widely varying tastes, morals, and customs in the different lands where they have settled. They live fully in the present, but also plan for the future, striving to leave a lasting legacy.</p>'
    }
    
    if (element.matches('.dragonborn') === true) {
        speciesBox.innerHTML = '<h2>Dragonborn</h2> <p>Born of dragons, as their name proclaims, they walk proudly through a world that greets them with fearful incomprehension. Dragonborns originally hatched from dragon eggs as a unique race. Some are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.</p>'
    }

    if (element.matches('.tiefling') === true) {
        speciesBox.innerHTML = '<h2>Tiefling</h2> <p>Tieflings are humanoid creatures born from a mix of humanoid and infernal lineage. They’re devilish ancestry is visible in their features, most prominently known to be horns and tails. Often viewed with disgust by others, some tieflings live their lives in the shadows as criminals while others attempt to defy fate and become heroes.</p>'
    }

    if (element.matches('.fey') === true) {
        speciesBox.innerHTML = '<h2>Fey</h2> <p>Usually humanoid in form, the Fey have supernatural abilities and a strong connection to nature. In addition to their magical lineage they are also known for their trickery and riddles. One must always be careful when making deals or pacts with them – you might find yourself on the upsetting (or dangerous) end of a practical joke.</p>'
    }

    if (element.matches('.genasi') === true) {
        speciesBox.innerHTML = '<h2>Genasi</h2> <p>With elemental blood flowing through their veins, Genasi are powerful beings with a divine connection to fire, water, earth or air. Some genasi live as outcasts, driven into exile for their unsettling appearance and strange magic while others gain positions of great influence, especially where elemental beings are revered.</p>'
    }
})



continueButton.addEventListener('click', function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    const height = heightInput.value;
    const weight = weightInput.value;
    const species = speciesBox.value;

    if (name === '') {
        displayMessage('error', 'Name cannot be blank');
      } else if (age === '') {
        displayMessage('error', 'Age cannot be blank');
    } else if (gender === '') {
        displayMessage('error', 'Gender cannot be blank');
    } else if (height === '') {
        displayMessage('error', 'Height cannot be blank');
    } else if (weight === '') {
        displayMessage('error', 'Weight cannot be blank');
      } else if (species === '') {
        displayMessage('error', 'Must make species selection')
      } else {
     //   displayMessage('success', 'Registered successfully');

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('species', species);

    window.location.href = 'stats.html';
      }
});

