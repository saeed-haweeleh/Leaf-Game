/*
    File: script.js
    Purpose: Handles interactivity for the Leaf Shape Explorer, including audio and navigation.
    Author: Saeed Haweeleh
*/

// Global setup function called on page load
function setup() {
    document.addEventListener('DOMContentLoaded', () => {
        const clickSound = document.getElementById('clickSound');
        const backgroundMusic = document.getElementById('backgroundMusic');
        const muteButton = document.getElementById('muteButton');
        const leafImages = document.querySelectorAll('img');
        const playAgainButton = document.getElementById('playAgain');

        // Play background music on load
        if (backgroundMusic) {
            backgroundMusic.play();
        }

        // Toggle mute/unmute for background music
        if (muteButton) {
            muteButton.addEventListener('click', () => {
                if (backgroundMusic.muted) {
                    backgroundMusic.muted = false;
                    muteButton.textContent = 'Mute';
                } else {
                    backgroundMusic.muted = true;
                    muteButton.textContent = 'Unmute';
                }
            });
        }

        // Play sound on image click
        if (leafImages.length > 0) {
            leafImages.forEach(img => {
                img.addEventListener('click', () => {
                    clickSound.play();
                });
            });
        }

        // Play sound and navigate back on "Play Again" click
        if (playAgainButton) {
            playAgainButton.addEventListener('click', () => {
                clickSound.play();
                window.location.href = 'index.html';
            });
        }
    });
}
