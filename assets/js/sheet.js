
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
    html: true
}))
 const characterArray = JSON.parse(localStorage.getItem('characterList')) || []

const characterData = {
    name: JSON.parse(localStorage.getItem('name')) || "",
    ac: JSON.parse(localStorage.getItem('ac')) || "",
    species: JSON.parse(localStorage.getItem('species')) || "",
    class: JSON.parse(localStorage.getItem('class')) || "",
    con: JSON.parse(localStorage.getItem('con')) || "",
    str: JSON.parse(localStorage.getItem('str')) || "",
    int: JSON.parse(localStorage.getItem('int')) || "",
    wis: JSON.parse(localStorage.getItem('wis')) || "",
    dex: JSON.parse(localStorage.getItem('dex')) || "",
    cha: JSON.parse(localStorage.getItem('cha')) || "",
    abilities: JSON.parse(localStorage.getItem('spell')) || "",
    items: JSON.parse(localStorage.getItem('weapon')) || "",
   
    age: JSON.parse(localStorage.getItem('age')) || "",
    height: JSON.parse(localStorage.getItem('height')) || "",
    weight: JSON.parse(localStorage.getItem('weight')) || "",
    gender: JSON.parse(localStorage.getItem('gender')) || "",
    backstory: JSON.parse(localStorage.getItem('backstory')) || "",

}

document.addEventListener("DOMContentLoaded", () => {

    if (characterData) {
        populateCharacterSheet(characterData);
    } else {
        console.warn("No character data found in local storage.");
    }
});


function readLocalStorage() {
    const storedData = localStorage.getItem("characterSheet");
    return storedData ? JSON.parse(storedData) : null;
}

function populateCharacterSheet(data) {

    document.querySelector("h2").textContent = data.name || "Unnamed Character";
    document.querySelector(".col-sm-1 p:nth-child(2)").textContent = data.ac || "#";

    document.querySelector("#species-text").textContent = data.species || "Unknown Species";
    document.querySelector("#class-text").textContent = data.class || "Unknown Class";

    document.querySelector(".con .p-3 p:nth-child(2)").textContent = data.con || "#";
    document.querySelector(".str .p-3 p:nth-child(2)").textContent = data.str || "#";
    document.querySelector(".int .p-3 p:nth-child(2)").textContent = data.int || "#";
    document.querySelector(".wis .p-3 p:nth-child(2)").textContent = data.wis || "#";
    document.querySelector(".dex .p-3 p:nth-child(2)").textContent = data.dex || "#";
    document.querySelector(".cha .p-3 p:nth-child(2)").textContent = data.cha || "#";

    

    document.querySelector("#abilities-text").textContent = data.abilities || "None";
    document.querySelector("#items-text").textContent = data.items || "None";
    document.querySelector("#age-text").textContent = data.age || "None";
    document.querySelector("#gender-text").textContent = data.height || "None";
    document.querySelector("#height-text").textContent = data.weight || "None";
    document.querySelector("#weight-text").textContent = data.gender || "None";
    document.querySelector("#backstory-text").textContent = data.backstory || "None";

    
   
}

const returnButton = document.querySelector('#return-button');
const backButton = document.querySelector('#back');

backButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });


console.log(characterArray)

returnButton.addEventListener('click', function() {
    if (!characterArray.includes(characterData.name)) {
        characterArray.push(characterData)
        localStorage.setItem('characterList', JSON.stringify(characterArray))
    }
    
    localStorage.setItem('characterList', JSON.stringify(characterArray))
    window.location.href = 'index.html';
  });

