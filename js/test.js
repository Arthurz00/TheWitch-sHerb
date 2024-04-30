// const fire = document.getElementById('fire')
// const body = document.getElementById('body')

// setInterval(() => {
//     console.log(((fire.getBoundingClientRect().left * 100)/ body.clientWidth) + '%')
// },1000)
  
document.addEventListener('DOMContentLoaded', function() {
    const clickableImage = document.getElementById('clickableImage');

    clickableImage.addEventListener('click', function(event) {
        const clientX = event.clientX;

        // Check if the click position is within the specified range
        if (clientX >= 814 && clientX <= 879) {
            // Redirect to the next page (replace 'next-page.html' with your desired URL)
            window.location.href = 'chapter2-7.html';
        }
    });
});