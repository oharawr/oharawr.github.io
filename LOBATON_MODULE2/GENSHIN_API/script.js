const characterContainer = document.getElementById("character-container");

async function fetchCharacter() {
    try {
        const response = await fetch("https://api.genshin.dev/characters");
        const characters = await response.json();
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];

        const characterData = await fetch(`https://api.genshin.dev/characters/${randomCharacter}`);
        const characterInfo = await characterData.json();

        displayCharacter(characterInfo);
    } catch (error) {
        console.error("Error fetching character:", error);
        characterContainer.innerHTML = "<p>Failed to load character. Try again!</p>";
    }
}

function displayCharacter(character) {
    characterContainer.innerHTML = `
        <img src="https://api.genshin.dev/characters/${character.id}/icon" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>Element: ${character.vision}</p>
        <p>Weapon: ${character.weapon}</p>
    `;
}

function smash() {
    alert("You chose Smash! 💖");
    fetchCharacter();
}

function pass() {
    alert("You chose Pass ❌");
    fetchCharacter();
}

fetchCharacter();

