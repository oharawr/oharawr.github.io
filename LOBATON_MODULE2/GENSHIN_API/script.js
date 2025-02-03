document.getElementById('searchButton').addEventListener('click', function() {
    const characterName = document.getElementById('searchInput').value.trim().toLowerCase();
    if (characterName) {
        fetchCharacterData(characterName);
    } else {
        alert('Please enter a character name.');
    }
});

function fetchCharacterData(characterName) {
    const apiUrl = `https://gshimpact.vercel.app/api/characters/${characterName}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Character not found');
            }
            return response.json();
        })
        .then(data => {
            displayCharacterInfo(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('characterInfo').innerHTML = `<p>${error.message}</p>`;
        });
}

function displayCharacterInfo(character) {
    const characterInfoDiv = document.getElementById('characterInfo');
    characterInfoDiv.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.icon}" alt="${character.name}">
        <p><strong>Vision:</strong> ${character.vision}</p>
        <p><strong>Weapon:</strong> ${character.weapon}</p>
        <p><strong>Nation:</strong> ${character.nation}</p>
        <p><strong>Description:</strong> ${character.description}</p>
    `;
}
