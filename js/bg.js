document.addEventListener('DOMContentLoaded', () => {
    const bgSound = document.getElementById('bgSound');
  
    // Check if the audio element is supported and autoplay audio
    if (bgSound) {
      bgSound.play().catch(error => {
        console.error('Autoplay was prevented:', error);
      });
    }
  
    // Save audio playback state to sessionStorage to resume on page load
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('bgSoundTime', bgSound.currentTime);
    });
  
    window.addEventListener('load', () => {
      const savedTime = sessionStorage.getItem('bgSoundTime');
      if (savedTime) {
        bgSound.currentTime = parseFloat(savedTime);
      }
    });
  });
  
