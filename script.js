document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('clickSound');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Play background music on load 
    if (backgroundMusic) {
        backgroundMusic.volume = 0.3; // Lower volume to avoid overpowering click sound
        backgroundMusic.play().catch(error => {
            console.log("Autoplay was prevented:", error);
        });
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
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 200); // Delay to allow click sound to play before navigation
        });
    }
});