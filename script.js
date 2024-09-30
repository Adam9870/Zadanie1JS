const choices = ['papier', 'kamień', 'nożyce'];

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById('result-text');

    if (userChoice === computerChoice) {
        resultText.textContent = `Remis! Obaj wybraliście ${userChoice}.`;
    } else if (
        (userChoice === 'papier' && computerChoice === 'kamień') ||
        (userChoice === 'kamień' && computerChoice === 'nożyce') ||
        (userChoice === 'nożyce' && computerChoice === 'papier')
    ) {
        resultText.textContent = `Wygrałeś! ${userChoice} pokonuje ${computerChoice}.`;
    } else {
        resultText.textContent = `Przegrałeś! ${computerChoice} pokonuje ${userChoice}.`;
    }
}
