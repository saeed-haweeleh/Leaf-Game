document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('clickSound');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music on load
    if (backgroundMusic) {
        backgroundMusic.play();
    }

    // Play sound on image click
    const leafImages = document.querySelectorAll('img');
    leafImages.forEach(img => {
        img.addEventListener('click', () => {
            clickSound.play();
        });
    });

    // Play sound and navigate back on "Play Again" click
    const playAgainButton = document.getElementById('playAgain');
    if (playAgainButton) {
        playAgainButton.addEventListener('click', () => {
            clickSound.play();
            window.location.href = 'index.html';
        });
    }
});
