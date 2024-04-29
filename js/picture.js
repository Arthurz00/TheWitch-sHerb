// Automatically trigger the animation when the page loads
 window.onload = function() {
    var element = document.getElementById('animatedElement');
    element.classList.add('fade-in-out');
};

function delayedNavigation() {
    // Set a timeout to navigate to a new page after 3 seconds
    setTimeout(function() {
        window.location.href = '/Users/nuttawut/Documents/TheWitchHerb/html/chapter2/chapter2-8.html'; // Replace URL with desired destination
    }, 5000); // 3000 milliseconds (3 seconds)
}