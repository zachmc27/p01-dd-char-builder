const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
    html: true
}))

document.addEventListener("DOMContentLoaded", () => {
    const characterData = readLocalStorage();

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

    document.querySelector(".row .col-6:nth-child(1) .p-3").textContent = data.species || "Unknown Species";
    document.querySelector(".row .col-6:nth-child(2) .p-3").textContent = data.class || "Unknown Class";

    document.querySelector(".con .p-3 p:nth-child(2)").textContent = data.con || "#";
    document.querySelector(".str .p-3 p:nth-child(2)").textContent = data.str || "#";
    document.querySelector(".int .p-3 p:nth-child(2)").textContent = data.int || "#";
    document.querySelector(".wis .p-3 p:nth-child(2)").textContent = data.wis || "#";
    document.querySelector(".dex .p-3 p:nth-child(2)").textContent = data.dex || "#";
    document.querySelector(".cha .p-3 p:nth-child(2)").textContent = data.cha || "#";

    document.querySelector(".row .col-6:nth-child(5) .p-3").textContent = data.abilities || "None";
    document.querySelector(".row .col-6:nth-child(6) .p-3").textContent = data.items || "None";
    document.querySelector(".row .col-6:nth-child(3) .p-3").textContent = data.details || "None";
    document.querySelector(".row .col-6:nth-child(4) .p-3").textContent = data.backstory || "None";
}




function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
}
const backstoryBox = Array.from(document.querySelectorAll('.row.gy-5 .col-6:nth-of-type(4) .container')).find(
    box => box.textContent.trim().includes('Backstory')
);
if (backstoryBox) {
    backstoryBox.style.cursor = "pointer";

    backstoryBox.addEventListener('click', () => {
        const backstoryText = backstoryBox.querySelector("p")?.innerText;
        localStorage.setItem("backstory", backstoryText);
        redirectToPage('backstory.html');
    })
}



const returnButton = document.querySelector('#return-button');
const backButton = document.querySelector('#back');






backButton.addEventListener('click', function() {
    window.location.href = 'backstory.html';
  });

returnButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

