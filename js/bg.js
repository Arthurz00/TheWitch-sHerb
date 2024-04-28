document.addEventListener('DOMContentLoaded', () => {
    const bgSound = document.getElementById('bgSound');

    // Check if the audio element is supported and exists
    if (bgSound) {
        // Check if the background music is already playing (from sessionStorage or localStorage)
        const isMusicPlaying = sessionStorage.getItem('isMusicPlaying') === 'true';

        // If music is not playing, start playback
        if (!isMusicPlaying) {
            bgSound.play().catch(error => {
                console.error('Failed to play background music:', error);
            });
            // Store music playback state in sessionStorage
            sessionStorage.setItem('isMusicPlaying', 'true');
        }
    }
});
