
async function fetchRandomCharacterImage() {
    try {
        const response = await fetch('https://gi-img-api.ak-team.repl.co/api/genshin/character');
        if (!response.ok) {
            throw new Error('Failed to fetch character image');
        }
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching character image:', error);
        return null;
    }
}

async function displayRandomCharacter() {
    const imageUrl = await fetchRandomCharacterImage();
    if (imageUrl) {
        const characterDisplay = document.getElementById('characterDisplay');
        characterDisplay.innerHTML = `<img src="${imageUrl}" alt="Genshin Character">`;
    } else {
        console.error('Failed to load character image');
    }
}

function handleChoice(choice) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = `You chose to ${choice}!`;
    setTimeout(() => {
        resultMessage.textContent = ""; 
        displayRandomCharacter(); 
    }, 1000);
}

document.getElementById('smashButton').addEventListener('click', () => handleChoice('Smash 💖'));
document.getElementById('passButton').addEventListener('click', () => handleChoice('Pass 🚫'));

displayRandomCharacter();

