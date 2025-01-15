// Global variable to hold the currently playing audio
let currentAudio = null;

let playBtns = document.querySelectorAll('.btn'); // Fixed typo: querySelectorAll

playBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Stop the previous sound if it's playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset to start
        }
        
        // Play the new sound based on button clicked
        switch (e.target.innerText) {
            case 'applause':
                currentAudio = new Audio('sounds/applause.mp3');
                currentAudio.play();
                break;
            case 'boo':
                currentAudio = new Audio('sounds/boo.mp3');
                currentAudio.play();
                break;
            case 'gasp':
                currentAudio = new Audio('sounds/gasp.mp3');
                currentAudio.play();
                break;
            case 'tada':
                currentAudio = new Audio('sounds/tada.mp3');
                currentAudio.play();
                break;
            case 'victory':
                currentAudio = new Audio('sounds/victory.mp3');
                currentAudio.play();
                break;
            case 'wrong':
                currentAudio = new Audio('sounds/wrong.mp3');
                currentAudio.play();
                break;
            default:
                console.log("Unknown action");
                break;
        }
    });
});

// Stop button to pause the audio
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();  // Pause the currently playing audio
        currentAudio.currentTime = 0; // Reset to the start of the audio
    }
});
