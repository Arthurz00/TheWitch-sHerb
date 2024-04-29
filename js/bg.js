document.addEventListener('DOMContentLoaded', () => {
  // Code executes when the DOM content is fully loaded
  const bgSound = document.getElementById('bgSound');
  
  // Check if the audio element is supported and autoplay audio
  if (bgSound) {
    // Attempt to play the audio, handling any errors that may occur
    bgSound.play().catch(error => {
      console.error('Autoplay was prevented:', error);
    });
  }

  // Save audio playback state to sessionStorage when the user leaves the page
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('bgSoundTime', bgSound.currentTime);
  });

  // When the page finishes loading, attempt to resume playback from the last saved time
  window.addEventListener('load', () => {
    const savedTime = sessionStorage.getItem('bgSoundTime');
    if (savedTime) {
      bgSound.currentTime = parseFloat(savedTime);
    }
  });
});
