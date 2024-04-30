document.addEventListener('DOMContentLoaded', () => {
  const bgSound = document.getElementById('bgSound');
  
  // Check if the audio element is supported and autoplay audio
  if (bgSound) {
    // Attempt to play the audio, handling any errors that may occur
    bgSound.play().catch(error => {
      console.error('Autoplay was prevented:', error);
    });
  }

  // Load saved audio playback state from sessionStorage
  const savedTime = sessionStorage.getItem('bgSoundTime');
  if (savedTime) {
    bgSound.currentTime = parseFloat(savedTime);
  }

  // Load saved mute state from sessionStorage
  const isMuted = sessionStorage.getItem('bgSoundMuted') === 'true';
  if (isMuted) {
    bgSound.muted = true;
    toggleMuteButton(true); // Update mute button appearance
  }

  // Save audio playback state to sessionStorage when the page is unloaded
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('bgSoundTime', bgSound.currentTime);
  });
});

const muteButton = document.getElementById('muteButton');
const muteImage = document.getElementById('muteImage');

// Function to toggle mute state and update button image
const toggleMute = () => {
  const bgSound = document.getElementById('bgSound'); // Retrieve the audio element
  if (bgSound) {
    bgSound.muted = !bgSound.muted; // Toggle audio mute state
    toggleMuteButton(bgSound.muted); // Update mute button appearance
    sessionStorage.setItem('bgSoundMuted', bgSound.muted); // Save mute state to sessionStorage
  }
};

// Function to update mute button appearance based on mute state
const toggleMuteButton = (isMuted) => {
  muteButton.classList.toggle('muted', isMuted); // Toggle muted class on the button
  muteImage.src = isMuted ? 'img/icon/mute.png' : 'img/icon/sound.png'; // Update image source
  muteImage.alt = isMuted ? 'Unmute' : 'Mute'; // Update alt text for accessibility
};

// Event listener for mute button click
muteButton.addEventListener('click', toggleMute);
